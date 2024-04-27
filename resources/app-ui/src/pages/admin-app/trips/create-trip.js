import {
  PageContainer,
  FooterToolbar,
  ProCard,
  ProForm,
  ProFormSelect,
  ProFormList,
  ProFormDateTimePicker, ProFormText, ProFormTextArea
} from '@ant-design/pro-components';
import {Row, message, Form, Col, Image, Upload, Button} from 'antd';
import {PlusOutlined, UploadOutlined} from '@ant-design/icons';
import React, {useEffect, useState} from "react";
import {request, history} from '@umijs/max';
import DestinationFormSkeleton from "@/components/Skeleton/DestinationFormSkeleton";
import { waitTime } from '@/components/Helpers/RequestHelpers';
import moment from 'moment';

import { getFile, getBase64 } from '@/components/Helpers/ImageConversion';


/**
 * Form Submission handler and API Request Performer
 */
const onFinishHandlerForm = async (values) => {
    console.log('onFinishHandlerForm');
    console.log('Received values of form: ', values);

    console.log('values');
    console.log(values);

    const request_data = {
        title: values?.title,
        description: values?.description,
        image: values?.image,
        price: values?.price,
        destination_id: values?.list_destinations,
        accommodation_id: values?.list_accommodations,
        start_date_time: moment(new Date(values?.trip_start_date_time)).format('YYYY-MM-DD HH:mm:ss'),
        end_date_time: moment(new Date(values?.trip_end_date_time)).format('YYYY-MM-DD HH:mm:ss'),
        users: values?.users.map((item) => item?.user),
    };

    console.log('request_data - after');
    console.log(request_data);

    /**
     * API Request
     */
    try {

        return await request('/api/trips', {
            method: 'POST',
            data: request_data,
        }).then(async (api_response) => {
            console.log('api_response');
            console.log(api_response);

            /**
             * User Created then show message and redirect to listing screen
             */
            if (api_response?.data?.id > 0) {
                message.success('Submitted successfully');
                history.push('/admin-app/trips/edit/' + api_response?.data?.id);
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


const CreateTrip = () => {

    /**
     * States of Component
     */

    const [form] = Form.useForm();
    const [staffMemberProfileImageUrl, setStaffMemberProfileImageUrl] = useState('');
    const [skeletonStatus, setSkeletonStatus] = useState(true);

    const [imageUrl, setImageUrl] = useState(DEFAULT_PLACEHOLDER_IMAGE_URL);

    const [allDestinations, setAllDestinations] = useState([]);
    const [allAccommodations, setAllAccommodations] = useState([]);
    const [allUsers, setAllUsers] = useState([]);


    /**
     * Start - Destinations Data
     */
    useEffect(() => {

        return request('/api/destinations', {

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
                value: item.id,
                label: item.title,
            }));

            console.log('table_data');
            console.log(table_data);

            setAllDestinations(table_data);

        }).catch(function (error) {
            console.log(error);
        });

    }, []);



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
     * Start - Users Data
     */
    useEffect(() => {

        return request('/api/users', {

            params: {
                page: 1,
                per_page: 1000,
                order_by: 'id',
                order: 'desc',
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
                label: item.name,
            }));

            console.log('table_data');
            console.log(table_data);

            setAllUsers(table_data);

        }).catch(function (error) {
            console.log(error);
        });

    }, []);


    /**
     * Update the Profile Image input field individually whenever the related State is updated/effected
     */
    useEffect(() => {
        form.setFieldValue(['bio_details', 'staff_member_profile_image'], staffMemberProfileImageUrl);
        setSkeletonStatus(false);
    }, [staffMemberProfileImageUrl, form]);



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

    if ( skeletonStatus ) {

        return (
            <PageContainer
                header={
                    {title: ""}
                }
            >
                <DestinationFormSkeleton
                    active={true}
                />
            </PageContainer>
        );

    } else {


        return (
            <PageContainer>
                <ProForm
                    layout='vertical'
                    grid={true}
                    form={form}
                    onFinish={async (values) => {
                        console.log(values);
                        /**
                         * Add Organization ID into the form Values
                         */
                        await waitTime(1000);
                        // values.image = file;
                        values.image = imageUrl;
                        await onFinishHandlerForm(values);
                    }}
                    submitter={{
                        render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>,
                    }}
                >

                    <ProCard
                        title="Trip Details"
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
                                  placeholder="Type trip title"
                                  fieldProps={{
                                    onChange: (e) => {
                                      console.log('e.target.value');
                                      console.log(e.target.value);
                                    }
                                  }}
                                  colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
                                />
                                <ProFormText
                                  name={'price'}
                                  label="Price"
                                  placeholder="Type trip price Example (15000)"
                                  fieldProps={{
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
                                  placeholder="Share a little details regarding the trip. "
                                  colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
                                  fieldProps={{
                                    size: 'middle'
                                  }}
                                />
                              </ProForm.Group>
                            </Col>

                            <ProForm.Group size={24}>
                                <ProFormSelect
                                    name={"list_destinations"}
                                    label="Destinations"
                                    showSearch
                                    options={allDestinations}
                                    debounceTime={300}
                                    placeholder="Please Select Your Destination"
                                    rules={[{required: true}]}
                                    colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                                />
                                <ProFormSelect
                                    name={"list_accommodations"}
                                    label="Accommodations"
                                    showSearch
                                    options={allAccommodations}
                                    debounceTime={300}
                                    placeholder="Please Select Your Accommodations"
                                    rules={[{required: true}]}
                                    colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                                />
                            </ProForm.Group>
                            <ProForm.Group size={24}>
                                <ProFormDateTimePicker
                                    label="Select Your Trip Start Date"
                                    name={"trip_start_date_time"}
                                    placeholder="Start date"
                                    rules={[{required: true}]}
                                    colProps={{xs: 24, sm: 24, md: 6, lg: 6, xl: 6}}
                                />
                                <ProFormDateTimePicker
                                    label="Select Your Trip End Date"
                                    name={"trip_end_date_time"}
                                    placeholder="End date"
                                    rules={[{required: true}]}
                                    colProps={{xs: 24, sm: 24, md: 6, lg: 6, xl: 6}}
                                />
                            </ProForm.Group>
                        </Row>
                    </ProCard>

                  <ProCard
                    title="Travel Mates Details"
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

                    <ProForm.Group title="Travel Mates" size={24}>
                      <ProFormList
                        name={"users"}
                        min={1}
                        copyIconProps={{ tooltipText: 'Copy this travel mate' }}
                        deleteIconProps={{ tooltipText: 'Delete this travel mate' }}
                        creatorButtonProps={{
                          creatorButtonText: 'Add New Travel Mate',
                        }}
                      >
                        <ProForm.Group size={24}>
                            <ProFormSelect
                                name={"user"}
                                label="Name"
                                showSearch
                                options={allUsers}
                                debounceTime={300}
                                placeholder="Please Select Travel Mate"
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
    }
};

export default CreateTrip;
