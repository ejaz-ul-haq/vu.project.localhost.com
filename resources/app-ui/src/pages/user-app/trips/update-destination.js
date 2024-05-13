import {
    PageContainer,
    FooterToolbar,
    ProCard,
    ProForm,
    ProFormText,
    ProFormTextArea, ProFormList, ProFormSelect
} from '@ant-design/pro-components';
import {Row, Col, message, Button, Form, Image, Upload} from 'antd';
import {UploadOutlined, UserOutlined, PlusOutlined} from '@ant-design/icons';
import React, {useEffect, useState} from "react";
import {request, history} from '@umijs/max';
import DestinationFormSkeleton from "@/components/Skeleton/DestinationFormSkeleton";
import {useParams} from "@@/exports";
import { waitTime } from '@/components/Helpers/RequestHelpers';

import { getFile, getBase64 } from '@/components/Helpers/ImageConversion';


/**
 * The Form Initial values
 */
const initialValues = {
    title: '',
    description: '',
    image_url: '',
    accommodations: '',
    attractions: '',
};

/**
 * Form Submission handler and API Request Performer
 */
const onFinishHandlerForm = async (values) => {
    console.log('onFinishHandlerForm');
    console.log('Received values of form: ', values);

    console.log('values');
    console.log(values);

    const formData = new FormData();
    console.log('formData - before');
    console.log(formData);

    formData.append('title', values?.title);
    formData.append('description', values?.description);
    formData.append('image', values?.image);

    console.log('formData - after');
    console.log(formData);

    /**
     * API Request
     */
    try {

      const request_data = {
        id: values?.destination_id,
        title: values?.title,
        description: values?.description,
        image: values?.image,
        accommodations: values?.accommodations.map((item) => item?.accommodation),
        attractions: values?.attractions.map((item) => item?.attraction),
      };

        return await request('/api/destinations/' + values?.destination_id, {
            method: 'PUT',
            data: request_data,
          // data: formData,
          // requestType: 'form'
        }).then(async (api_response) => {
            console.log('api_response');
            console.log(api_response);

            /**
             * User Created then show message and redirect to listing screen
             */
            if (api_response?.data?.id > 0) {
                message.success('Submitted successfully');
                history.push('/admin-app/destinations/edit/' + api_response?.data?.id);
            }

        }).catch(function (error) {
            console.log(error);
        });

    } catch (api_response) {
        console.log('api_response - error');
        console.log(api_response);
    }

    return true;
};


const UpdateDestination = () => {

    const params = useParams();

    /**
     * States of Component
     */

    const [form] = Form.useForm();
    // const [skeletonStatus, setSkeletonStatus] = useState(true);
    const [imageUrl, setImageUrl] = useState(DEFAULT_PLACEHOLDER_IMAGE_URL);
    const [destinationId, setDestinationId] = useState(0);

    const [allAccommodations, setAllAccommodations] = useState([]);

    const [allAttractions, setAllAttractions] = useState([]);

    useEffect(() => {
        setDestinationId(params.id);
    }, []); //empty dependency array so it only runs once at render


    /**
     * Start - Accommodations Data
     */
    useEffect(() => {

        return request('/api/accommodations', {

            params: {
                page: 1,
                per_page: 1000,
                order_by: 'id',
                order: 'asc',
            },

        }).then(async (api_response) => {
            console.log('api_response');
            console.log(api_response);

            console.log('api_response.data');
            console.log(api_response.data);

            console.log('api_response.data.data');
            console.log(api_response.data.data);

            const table_data = api_response.data.data.map((item, i) => ({
                // value: item.id.toString(),
                value: item.id,
                label: item.title,
            }));

            console.log('table_data');
            console.log(table_data);

            setAllAccommodations(table_data);

        }).catch(function (error) {
            console.log(error);
        });

    }, []);



    /**
     * Start - Attractions Data
     */
    useEffect(() => {

        return request('/api/attractions', {

            params: {
                page: 1,
                per_page: 1000,
                order_by: 'id',
                order: 'asc',
            },

        }).then(async (api_response) => {
            console.log('api_response');
            console.log(api_response);

            console.log('api_response.data');
            console.log(api_response.data);

            console.log('api_response.data.data');
            console.log(api_response.data.data);

            const table_data = api_response.data.data.map((item, i) => ({
                // value: item.id.toString(),
                value: item.id,
                label: item.title,
            }));

            console.log('table_data');
            console.log(table_data);

            setAllAttractions(table_data);

        }).catch(function (error) {
            console.log(error);
        });

    }, []);



    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            return;
        }
        if( info.file.status == "removed" ){
            setImageUrl('');
        }

        if (info.file.status === 'done') {
            getBase64(info).then((base64String) => {
                console.log('base64String');
                console.log(base64String);
                setImageUrl(base64String);
            });

        }

        if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }

    };

    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );

    /**
     * The Component Output
     */

        return (
            <PageContainer>

                <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                  <Col flex="auto">

                  </Col>

                  <Col flex="100px">
                    <Button
                      type="primary"
                      key="primary"
                      onClick={() => {
                        // handleModalOpen(true);
                        history.push('/admin-app/destinations/new');
                      }}
                      style={{marginBlockEnd: 15}}
                    >
                      <PlusOutlined/> New
                    </Button>
                  </Col>
                </Row>

                <ProForm
                    layout='vertical'
                    grid={true}
                    form={form}
                    initialValues={initialValues}
                    params={ { 'destination_id': destinationId } }
                    request={

                        async (params= {} ) => {

                            console.log('proform-params');
                            console.log(params);

                            if( params?.destination_id == 0 ) {
                                return;
                            }

                            await waitTime(2000);

                            return await request('/api/destinations/' + params?.destination_id, {
                                method: 'GET',
                            }).then(async (api_response) => {
                                console.log('api_response');
                                console.log(api_response);

                              /**
                               * Set Image State on Page Load
                               */
                              setImageUrl(api_response?.data?.image_url);

                                return {
                                    ...initialValues,
                                    title: api_response?.data?.title,
                                    description: api_response?.data?.description,
                                    image_url: api_response?.data?.image_url,
                                    accommodations: api_response?.data?.accommodations.map( item => ( {
                                        accommodation: item.id,
                                    })),
                                    attractions: api_response?.data?.attractions.map( item => ( {
                                        attraction: item.id,
                                    })),
                                };

                            }).catch(function (error) {
                                console.log(error);
                            });

                        }
                    }
                    onFinish={async (values) => {
                        console.log(values);
                        /**
                         * Add Organization ID into the form Values
                         */

                        await waitTime(1000);
                        // values.image = file;
                        values.image = imageUrl;
                        values.destination_id = destinationId;
                        await onFinishHandlerForm(values);
                    }}
                    submitter={{
                        render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>,
                    }}
                >

                    <ProCard
                        title="Destination Details"
                        bordered
                        headerBordered
                        collapsible
                        size="default"
                        type="inner"
                        style={{
                            marginBlockEnd: 15,
                            minWidth: 800,
                            maxWidth: '100%',
                        }}
                        onCollapse={(collapse) => console.log(collapse)}
                    >
                        <Row
                            gutter={{
                                xs: 8,
                                sm: 16,
                                md: 24,
                                lg: 32,
                            }}
                        >
                            <Col span={10}>

                                <ProForm.Group size={24}>
                                    <Col span={24}>
                                        <Image
                                            width='100%'
                                            height={200}
                                            src={imageUrl}
                                        />
                                    </Col>
                                    <Col span={24} style={{ textAlign: 'center'}}>
                                        <ProForm.Item name='image' getValueFromEvent={getFile}>
                                            <Upload
                                                name={'image'}
                                                onChange={handleChange}
                                                maxCount={1}
                                            >
                                                <Button
                                                    type="primary"
                                                    icon={<UploadOutlined/>}
                                                    style={{'margin': '10px 0px 0px 0px'}}
                                                    onClick={(event) => {}}
                                                >
                                                    Change Image
                                                </Button>
                                            </Upload>
                                        </ProForm.Item>
                                    </Col>
                                </ProForm.Group>
                            </Col>
                            <Col span={14}>
                                <ProForm.Group size={24}>
                                    <ProFormText
                                        name={'title'}
                                        label="Title"
                                        placeholder="Type destination title"
                                        fieldProps={{
                                            prefix: <UserOutlined/>,
                                            onChange: (e) => {
                                                console.log('e.target.value');
                                                console.log(e.target.value);
                                            }
                                        }}
                                        colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
                                    />
                                    <ProFormTextArea
                                        name={'description'}
                                        label="Description"
                                        placeholder="Share a little details regarding the destination. "
                                        colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
                                        fieldProps={{
                                            size: 'middle'
                                        }}
                                    />
                                </ProForm.Group>
                            </Col>
                        </Row>
                    </ProCard>

                    <ProCard
                        title="Accommodations Details"
                        bordered
                        headerBordered
                        collapsible
                        size="default"
                        type="default"
                        style={{
                            marginBlockEnd: 15,
                            minWidth: 800,
                            maxWidth: '100%',
                        }}
                        onCollapse={(collapse) => console.log(collapse)}
                    >

                        <ProForm.Group title="Accommodations" size={24}>
                            <ProFormList
                                name={"accommodations"}
                                min={1}
                                copyIconProps={{ tooltipText: 'Copy this accommodation' }}
                                deleteIconProps={{ tooltipText: 'Delete this accommodation' }}
                                creatorButtonProps={{
                                    creatorButtonText: 'Add New Accommodation',
                                }}
                            >
                                <ProForm.Group size={24}>
                                    <ProFormSelect
                                        name={"accommodation"}
                                        label="Name"
                                        showSearch
                                        options={allAccommodations}
                                        debounceTime={300}
                                        placeholder="Please Select Accommodation"
                                        rules={[{required: true}]}
                                        colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
                                    />
                                </ProForm.Group>
                            </ProFormList>
                        </ProForm.Group>

                    </ProCard>

                    <ProCard
                        title="Attractions Details"
                        bordered
                        headerBordered
                        collapsible
                        size="default"
                        type="default"
                        style={{
                            marginBlockEnd: 15,
                            minWidth: 800,
                            maxWidth: '100%',
                        }}
                        onCollapse={(collapse) => console.log(collapse)}
                    >

                        <ProForm.Group title="Attractions" size={24}>
                            <ProFormList
                                name={"attractions"}
                                min={1}
                                copyIconProps={{ tooltipText: 'Copy this attraction' }}
                                deleteIconProps={{ tooltipText: 'Delete this attraction' }}
                                creatorButtonProps={{
                                    creatorButtonText: 'Add New Attraction',
                                }}
                            >
                                <ProForm.Group size={24}>
                                    <ProFormSelect
                                        name={"attraction"}
                                        label="Name"
                                        showSearch
                                        options={allAttractions}
                                        debounceTime={300}
                                        placeholder="Please Select Attraction"
                                        rules={[{required: true}]}
                                        colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
                                    />
                                </ProForm.Group>
                            </ProFormList>
                        </ProForm.Group>

                    </ProCard>

                </ProForm>
            </PageContainer>
        );

};

export default UpdateDestination;
