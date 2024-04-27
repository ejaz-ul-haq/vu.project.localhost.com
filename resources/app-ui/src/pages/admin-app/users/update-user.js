import {
    PageContainer,
    FooterToolbar,
    ProCard,
    ProForm,
    ProFormSelect,
    ProFormText
} from '@ant-design/pro-components';
import {Row, Col, message, Button, Form, Image, Upload} from 'antd';
import {PlusOutlined, UploadOutlined, UserOutlined} from '@ant-design/icons';
import React, {useEffect, useState} from "react";
import {request, history} from '@umijs/max';
import {useParams} from "@@/exports";

import { getFile, getBase64 } from '@/components/Helpers/ImageConversion';


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
const onFinishHandlerForm = async (values) => {
    console.log('onFinishHandlerForm');
    console.log('Received values of form: ', values);


    const formData = new FormData();
    console.log('formData - before');
    console.log(formData);

    // formData.append('image_url', values?.image_url);
    formData.append('first_name', values?.first_name);
    formData.append('last_name', values?.last_name);
    formData.append('name', values?.first_name + ' ' + values?.last_name);
    formData.append('email', values?.email);
    formData.append('role', values?.role);
    formData.append('password', values?.password);
    formData.append('password_confirmation', values?.password_confirmation);

    console.log('formData - after');
    console.log(formData);

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

        return await request('/api/users/' + values?.user_id, {
            method: 'PUT',
            data: request_data,
        }).then(async (api_response) => {
            console.log('api_response');
            console.log(api_response);

            /**
             * User Updated then show message and redirect to listing screen
             */
            if (api_response?.data?.id > 0) {
                message.success('Submitted successfully');
                history.push('/admin-app/users/edit/' + api_response?.data?.id);
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


const UpdateUser = () => {

    const params = useParams();

    /**
     * States of Component
     */

    const [form] = Form.useForm();
    const [staffMemberProfileImageUrl, setStaffMemberProfileImageUrl] = useState('');
    const [userId, setUserId] = useState(0);

    const [userProfileImageUrl, setUserProfileImageUrl] = useState('');
    const [imageUrl, setImageUrl] = useState(userProfileImageUrl);


    useEffect(() => {
        setUserId(params.id);
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

            <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
              <Col flex="auto">

              </Col>

              <Col flex="100px">
                <Button
                  type="primary"
                  key="primary"
                  onClick={() => {
                    // handleModalOpen(true);
                    history.push('/admin-app/users/new');
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
                                        // src={('' !== userProfileImageUrl ? userProfileImageUrl : DEFAULT_USER_PROFILE_IMAGE_URL)}
                                        // fallback={DEFAULT_USER_PROFILE_IMAGE_URL}
                                        fallback={('' !== userProfileImageUrl ? userProfileImageUrl : DEFAULT_USER_PROFILE_IMAGE_URL)}
                                    />
                                </Col>
                                {/*<Col span={24} style={{'text-align': 'center'}}>*/}
                                {/*    <Button*/}
                                {/*        type="primary"*/}
                                {/*        icon={<UploadOutlined/>}*/}
                                {/*        // loading={loadings[1]}*/}
                                {/*        style={{'margin': '10px 0px 0px 0px'}}*/}
                                {/*        // onClick={(event) => {*/}
                                {/*        //     // wp media call*/}
                                {/*        //     console.log('ldugl - profile-image-uploader');*/}
                                {/*        //     let file_frame; // variable for the wp.media file_frame*/}
                                {/*        //     // if the file_frame has already been created, just reuse it*/}
                                {/*        //     if (file_frame) {*/}
                                {/*        //         console.log('ldugl - profile-image-logo-uploader - case 01');*/}
                                {/*        //         file_frame.open();*/}
                                {/*        //         return;*/}
                                {/*        //     } else {*/}
                                {/*        //         console.log('ldugl - profile-image-logo-uploader - case 02');*/}
                                {/*        //     }*/}
                                {/*        //     file_frame = wp.media.frames.file_frame = wp.media({*/}
                                {/*        //         // title: $( this ).data( 'uploader_title' ),*/}
                                {/*        //         title: 'The Staff Member Profile Image Uploader',*/}
                                {/*        //         button: {*/}
                                {/*        //             // text: $( this ).data( 'uploader_button_text' ),*/}
                                {/*        //             text: 'Upload Staff Member Profile Image',*/}
                                {/*        //         },*/}
                                {/*        //         multiple: false // set this to true for multiple file selection*/}
                                {/*        //     });*/}
                                {/*        //     file_frame.on('select', function () {*/}
                                {/*        //         console.log('image is selected');*/}
                                {/*        //         let attachment = file_frame.state().get('selection').first().toJSON();*/}
                                {/*        //         console.log('attachment');*/}
                                {/*        //         console.log(attachment);*/}
                                {/*        //         setStaffMemberProfileImageUrl(attachment?.url);*/}
                                {/*        //         console.log('setStaffMemberProfileImageUrl - case 02');*/}
                                {/*        //         console.log(setStaffMemberProfileImageUrl);*/}
                                {/*        //     });*/}
                                {/*        //     file_frame.on('open', function () {*/}
                                {/*        //         // Do something*/}
                                {/*        //         console.log('file_frame is opened');*/}
                                {/*        //         // $('.ldugl-group-logo-uploader-wraper-overlay').removeClass('hidden');*/}
                                {/*        //     });*/}
                                {/*        //     file_frame.on('close', function () {*/}
                                {/*        //         // Do something*/}
                                {/*        //         console.log('file_frame is closed');*/}
                                {/*        //         // $('.ldugl-group-logo-uploader-wraper-overlay').addClass('hidden');*/}
                                {/*        //     });*/}
                                {/*        //     file_frame.open();*/}
                                {/*        // }}*/}
                                {/*    >*/}
                                {/*        Change Picture!*/}
                                {/*    </Button>*/}
                                {/*    <ProFormText*/}
                                {/*        name={['bio_details', 'staff_member_profile_image']}*/}
                                {/*        label="Staff Member Profile Image URL"*/}
                                {/*        // tooltip="The legal name of the staff member"*/}
                                {/*        placeholder="please enter your staff member legal name"*/}
                                {/*        hidden={true}*/}
                                {/*    />*/}
                                {/*</Col>*/}

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
                                    colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                                    rules={[{ required: true, message: 'Please select your role!' }]}
                                />
                            </ProForm.Group>
                            {/*<ProForm.Group size={24}>*/}
                            {/*    <ProFormText.Password*/}
                            {/*        name={'password'}*/}
                            {/*        label="Password"*/}
                            {/*        placeholder="Please type a password"*/}
                            {/*        rules={[{required: true}]}*/}
                            {/*        colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}*/}
                            {/*    />*/}
                            {/*    <ProFormText.Password*/}
                            {/*        name={'password_confirmation'}*/}
                            {/*        label="Confirm Password"*/}
                            {/*        dependencies={['password']}*/}
                            {/*        placeholder="Please type a confirm password"*/}
                            {/*        rules={[*/}
                            {/*            {*/}
                            {/*                required: true,*/}
                            {/*                message: 'Please confirm your password!',*/}
                            {/*            },*/}
                            {/*            ({ getFieldValue }) => ({*/}
                            {/*                validator(_, value) {*/}
                            {/*                    if (!value || getFieldValue('password') === value) {*/}
                            {/*                        return Promise.resolve();*/}
                            {/*                    }*/}
                            {/*                    return Promise.reject(new Error('The new password that you entered do not match!'));*/}
                            {/*                },*/}
                            {/*            }),*/}
                            {/*        ]}*/}
                            {/*        colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}*/}
                            {/*    />*/}
                            {/*</ProForm.Group>*/}
                        </Col>
                    </Row>
                </ProCard>

            </ProForm>
        </PageContainer>
    );

};

export default UpdateUser;
