import {
    PageContainer,
    FooterToolbar,
    ProCard,
    ProForm,
    ProFormText,
    ProFormTextArea, ProFormSelect
} from '@ant-design/pro-components';
import {Row, Col, message, Button, Form, Image, Upload} from 'antd';
import {UploadOutlined, UserOutlined, PlusOutlined} from '@ant-design/icons';
import React, {useEffect, useState} from "react";
import {request, history} from '@umijs/max';
import DestinationFormSkeleton from "@/components/Skeleton/DestinationFormSkeleton";
import {useParams} from "@@/exports";
import { waitTime } from '@/components/Helpers/RequestHelpers';

import { getFile, getBase64 } from '@/components/Helpers/ImageConversion';

import DraggableMarkerMap from '@/components/GoogleMaps/DraggableMarkerMap';
import WeatherDetails from '@/components/Weather/WeatherDetails';


/**
 * The Form Initial values
 */
const initialValues = {
    title: '',
    description: '',
    image_url: '',
    destination_id: '',
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
            id: values?.attraction_id,
            title: values?.title,
            description: values?.description,
            destination_id: values?.destination_id,
            /**
             * Start Code By M
             */

            image: values?.image,

            /**
             * End Code By M
             */
        };

        return await request('/api/attractions/' + values?.attraction_id, {
            method: 'PUT',
            data: request_data,
        }).then(async (api_response) => {
            console.log('api_response - PUT attraction');
            console.log(api_response);

            /**
             * User Created then show message and redirect to listing screen
             */
            if (api_response?.data?.id > 0) {
                message.success('Submitted successfully');
                history.push('/admin-app/attractions/edit/' + api_response?.data?.id);
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


const UpdateAttraction = () => {

    const params = useParams();

    /**
     * States of Component
     */

    const [form] = Form.useForm();
    // const [skeletonStatus, setSkeletonStatus] = useState(true);
    const [imageUrl, setImageUrl] = useState(DEFAULT_PLACEHOLDER_IMAGE_URL);

    const [attractionId, setAttractionId] = useState(0);
    const [allDestinations, setAllDestinations] = useState([]);

    const [googleMapPosition, setGoogleMapPosition ] = useState('');

    useEffect(() => {
        setAttractionId(params.id);
    }, []); //empty dependency array so it only runs once at render


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
                    history.push('/admin-app/attractions/new');
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
                params={ { 'attraction_id': attractionId } }
                request={

                    async (params= {} ) => {

                        console.log('proform-params');
                        console.log(params);

                        if( params?.attraction_id == 0 ) {
                            return;
                        }

                        await waitTime(2000);

                        return await request('/api/attractions/' + params?.attraction_id, {
                            method: 'GET',
                        }).then(async (api_response) => {
                            console.log('api_response');
                            console.log(api_response);

                            /**
                             * Set Image State on Page Load
                             */
                            setImageUrl(api_response?.data?.image_url);

                            /**
                               * Set Google Map Position
                               */
                            setGoogleMapPosition({ lat: api_response?.data?.latitude, lng: api_response?.data?.longitude });

                            return {
                                ...initialValues,
                                title: api_response?.data?.title,
                                description: api_response?.data?.description,
                                image_url: api_response?.data?.image_url,
                                destination_id: api_response?.data?.destination_id,
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
                    values.attraction_id = attractionId;
                    values.latitude = googleMapPosition?.lat;
                    values.longitude = googleMapPosition?.lng;
                    await onFinishHandlerForm(values);
                }}
                submitter={{
                    render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>,
                }}
            >

                <ProCard
                    title="Attraction Details"
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
                                    placeholder="Type attraction title"
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
                                    placeholder="Share a little details regarding the attraction. "
                                    colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
                                    fieldProps={{
                                        size: 'middle'
                                    }}
                                />
                                <ProFormSelect
                                    name={"destination_id"}
                                    label="Destinations"
                                    showSearch
                                    options={allDestinations}
                                    debounceTime={300}
                                    placeholder="Please Select Your Destination"
                                    rules={[{required: true}]}
                                    colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
                                />
                            </ProForm.Group>
                        </Col>
                    </Row>
                    <Row
                        gutter={{
                           xs: 8,
                           sm: 16,
                           md: 24,
                           lg: 32,
                        }}
                    >
                        <Col span={24}>
                        {/* <MyMapComponentfrom /> */}
                        {/* {(googleMapPosition) &  */}
                        <WeatherDetails latitude={googleMapPosition.lat} longitude={googleMapPosition.lng} />

                        <DraggableMarkerMap 
                            initialCoords={{
                            lat: parseFloat(googleMapPosition.lat),
                            lng: parseFloat(googleMapPosition.lng)
                            }} 
                            onPositionChange={ (newPosition) => {
                            console.log('New marker position:', newPosition);
                            setGoogleMapPosition(newPosition);
                            // Handle the new position as needed in your parent component
                            }} 
                        />
                        {/* } */}
                            
                        </Col>
                    </Row>
                </ProCard>

            </ProForm>
        </PageContainer>
    );

};

export default UpdateAttraction;
