import {
    PageContainer,
    FooterToolbar,
    ProCard,
    ProForm,
    ProFormSelect,
    ProFormText
} from '@ant-design/pro-components';
import {Row, Col, message, Button, Form, Image} from 'antd';
import {UploadOutlined, UserOutlined} from '@ant-design/icons';
import React, {useState} from "react";
import {request, history} from '@umijs/max';


const waitTime = (time = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
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

        return await request('/api/users', {
            method: 'POST',
            data: formData,
        }).then(async (api_response) => {
            console.log('api_response');
            console.log(api_response);

            /**
             * User Created then show message and redirect to listing screen
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

const CreateUser = () => {

    /**
     * States of Component
     */

    const [form] = Form.useForm();
    const [staffMemberProfileImageUrl, setStaffMemberProfileImageUrl] = useState('');

    /**
     * The Component Output
     */

        return (
            <PageContainer>
                <ProForm
                    layout='vertical'
                    grid={true}
                    form={form}
                    onFinish={async (values) => {
                        console.log(values);

                        await waitTime(1000);
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
                                            src={staffMemberProfileImageUrl}
                                            fallback={DEFAULT_USER_PROFILE_IMAGE_URL}
                                        />
                                    </Col>
                                    <Col span={24} style={{'text-align': 'center'}}>
                                        <Button
                                            type="primary"
                                            icon={<UploadOutlined/>}
                                            // loading={loadings[1]}
                                            style={{'margin': '10px 0px 0px 0px'}}
                                            // onClick={(event) => {
                                            //     // wp media call
                                            //     console.log('ldugl - profile-image-uploader');
                                            //     let file_frame; // variable for the wp.media file_frame
                                            //     // if the file_frame has already been created, just reuse it
                                            //     if (file_frame) {
                                            //         console.log('ldugl - profile-image-logo-uploader - case 01');
                                            //         file_frame.open();
                                            //         return;
                                            //     } else {
                                            //         console.log('ldugl - profile-image-logo-uploader - case 02');
                                            //     }
                                            //     file_frame = wp.media.frames.file_frame = wp.media({
                                            //         // title: $( this ).data( 'uploader_title' ),
                                            //         title: 'The Staff Member Profile Image Uploader',
                                            //         button: {
                                            //             // text: $( this ).data( 'uploader_button_text' ),
                                            //             text: 'Upload Staff Member Profile Image',
                                            //         },
                                            //         multiple: false // set this to true for multiple file selection
                                            //     });
                                            //     file_frame.on('select', function () {
                                            //         console.log('image is selected');
                                            //         let attachment = file_frame.state().get('selection').first().toJSON();
                                            //         console.log('attachment');
                                            //         console.log(attachment);
                                            //         setStaffMemberProfileImageUrl(attachment?.url);
                                            //         console.log('setStaffMemberProfileImageUrl - case 02');
                                            //         console.log(setStaffMemberProfileImageUrl);
                                            //     });
                                            //     file_frame.on('open', function () {
                                            //         // Do something
                                            //         console.log('file_frame is opened');
                                            //         // $('.ldugl-group-logo-uploader-wraper-overlay').removeClass('hidden');
                                            //     });
                                            //     file_frame.on('close', function () {
                                            //         // Do something
                                            //         console.log('file_frame is closed');
                                            //         // $('.ldugl-group-logo-uploader-wraper-overlay').addClass('hidden');
                                            //     });
                                            //     file_frame.open();
                                            // }}
                                        >
                                            Change Picture!
                                        </Button>
                                        <ProFormText
                                            name={['bio_details', 'staff_member_profile_image']}
                                            label="Staff Member Profile Image URL"
                                            // tooltip="The legal name of the staff member"
                                            placeholder="please enter your staff member legal name"
                                            hidden={true}
                                        />
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
                                <ProForm.Group size={24}>
                                    <ProFormText.Password
                                        name={'password'}
                                        label="Password"
                                        placeholder="Please type a password"
                                        rules={[{required: true}]}
                                        colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                                    />
                                    <ProFormText.Password
                                        name={'password_confirmation'}
                                        label="Confirm Password"
                                        dependencies={['password']}
                                        placeholder="Please type a confirm password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please confirm your password!',
                                            },
                                            ({ getFieldValue }) => ({
                                                validator(_, value) {
                                                    if (!value || getFieldValue('password') === value) {
                                                        return Promise.resolve();
                                                    }
                                                    return Promise.reject(new Error('The new password that you entered do not match!'));
                                                },
                                            }),
                                        ]}
                                        colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                                    />
                                </ProForm.Group>
                            </Col>
                        </Row>
                    </ProCard>

                </ProForm>
            </PageContainer>
        );

};

export default CreateUser;
