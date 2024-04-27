import {
    PageContainer,
    FooterToolbar,
    ProCard,
    ProForm,
    ProFormSelect,
    ProFormText,
} from '@ant-design/pro-components';
import {Row, Col, message, Button, Form, Image, Upload} from 'antd';
import {PlusOutlined, UploadOutlined, UserOutlined} from '@ant-design/icons';
import {request} from '@umijs/max';
import {history, useModel, useParams} from "@@/exports";
import React, {useEffect, useState} from "react";
import {getBase64, getFile} from "@/components/Helpers/ImageConversion";


const waitTime = (time = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};

/**
 * The Form Initial values
 */
const initialValues = {
    image_url: '',
    first_name: '',
    last_name: '',
    name: '',
    email: '',
    role: '',
    password: '',
};

/**
 * Form Submission handler and API Request Performer
 */
const onFinishHandlerForm = async (userId, values) => {
    console.log('onFinishHandlerForm');
    console.log('Received values of form: ', values);

    /**
     * API Request
     */
    try {

        const request_data = {
            image: values?.image_url,
            first_name: values?.first_name,
            last_name: values?.last_name,
            name: values?.first_name + ' ' + values?.last_name,
            email: values?.email,
            role: values?.role,
            password: values?.password,
        };

        return await request('/api/users/' + userId, {
            method: 'PUT',
            data: request_data,
        }).then(async (api_response) => {
            console.log('api_response');
            console.log(api_response);

            /**
             * User Updated then show message
             */
            if (api_response?.data?.id > 0) {
                message.success('Updated successfully');
            }

        }).catch(function (error) {
            console.log(error);
        });

    } catch (api_response) {
        console.log('api_response - error');
        console.log(api_response);
        // history.push(loginPath);
    }

    return true;
};

const UpdateProfile = () => {

    /**
     * States of Component
     */
    const {initialState, loading, refresh, setInitialState} = useModel('@@initialState');
    const params = useParams();
    const [userId, setUserId] = useState(0);
    const [form] = Form.useForm();

    const [userProfileImageUrl, setUserProfileImageUrl] = useState('');
    const [imageUrl, setImageUrl] = useState(userProfileImageUrl);

    /**
     * Update the userId State individually whenever the related State/Params is updated/effected
     */
    useEffect(() => {
        setUserId(initialState?.currentUser?.id);
    }, []); //empty dependency array so it only runs once at render


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


    /**
     * The Component Output
     */

        return (
            <PageContainer>

                <ProForm
                    layout='vertical'
                    grid={true}
                    form={form}
                    initialValues={initialValues}
                    params={ { 'user_id': userId } }
                    request={

                        async (params= {} ) => {

                            console.log('proform-params');
                            console.log(params);

                            if( params?.user_id == 0 ) {
                                return;
                            }

                            await waitTime(2000);

                            return await request('/api/users/' + params?.user_id, {
                                method: 'GET',
                            }).then(async (api_response) => {
                                console.log('api_response');
                                console.log(api_response);

                                setUserProfileImageUrl(api_response?.data?.image_url);

                                return {
                                    ...initialValues,
                                    image_url: api_response?.data?.image_url,
                                    first_name: api_response?.data?.first_name,
                                    last_name: api_response?.data?.last_name,
                                    name: api_response?.data?.name,
                                    email: api_response?.data?.email,
                                    role: api_response?.data?.role,
                                    password: api_response?.data?.password,
                                };

                            }).catch(function (error) {
                                console.log(error);
                            });

                        }
                    }
                    onFinish={async (values) => {
                        console.log(values);

                        await waitTime(1000);
                        values.user_id = userId;
                        values.image_url = imageUrl;
                        await onFinishHandlerForm(values);
                    }}
                    formProps={{
                        validateMessages: {
                            required: 'This is required',
                        },
                    }}
                    submitter={{
                        render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>,
                    }}
                >

                    <ProCard
                        title="Account Details"
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
                            <Col span={6}>

                                <ProForm.Group size={24}>
                                    <Col span={24}>
                                        <Image
                                            width='100%'
                                            height={200}
                                            src={imageUrl}
                                            fallback={('' !== userProfileImageUrl ? userProfileImageUrl : DEFAULT_USER_PROFILE_IMAGE_URL)}
                                        />
                                    </Col>

                                    <Col span={24} style={{ textAlign: 'center'}}>
                                        <ProForm.Item name='image_url' getValueFromEvent={getFile}>
                                            <Upload
                                                name={'image_url'}
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
                            <Col span={18}>
                                <ProForm.Group size={24}>
                                    <ProFormText
                                        name={'first_name'}
                                        label="First Name"
                                        placeholder="Type First Name"
                                        fieldProps={{
                                            prefix: <UserOutlined/>,
                                            onChange: (e) => {
                                                console.log('e.target.value');
                                                console.log(e.target.value);
                                            }
                                        }}
                                        colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                                    />
                                    <ProFormText
                                        name={'last_name'}
                                        label="Last Name"
                                        placeholder="Type Last Name"
                                        fieldProps={{
                                            prefix: <UserOutlined/>,
                                            onChange: (e) => {
                                                console.log('e.target.value');
                                                console.log(e.target.value);
                                            }
                                        }}
                                        colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                                    />
                                </ProForm.Group>
                                <ProForm.Group size={24}>
                                    <ProFormText
                                        label="Email"
                                        name={'email'}
                                        placeholder="info@example.com etc."
                                        rules={[{ required: true }]}
                                        disabled={true}
                                        colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                                    />
                                    <ProFormSelect
                                        name={'role'}
                                        label="Role"
                                        showSearch
                                        debounceTime={300}
                                        options={[
                                            {
                                                label: 'Admin',
                                                value: 'admin',
                                            },
                                            {
                                                label: 'User',
                                                value: 'user',
                                            },
                                        ]}
                                        placeholder="Please Select User Role"
                                        disabled={true}
                                        colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                                        rules={[{ required: true, message: 'Please select your role!' }]}
                                    />
                                </ProForm.Group>

                            </Col>
                        </Row>
                    </ProCard>

                </ProForm>
            </PageContainer>
        );

};

export default UpdateProfile;
