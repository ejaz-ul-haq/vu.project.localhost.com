import {
    PageContainer,
    FooterToolbar,
    ProCard,
    ProForm,
    ProFormSelect,
    ProFormText
} from '@ant-design/pro-components';
import {Row, Col, message, Button, Form, Image, Upload} from 'antd';
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

    /**
     * Start Code By M
     */

    formData.append('image', values?.image);

    /**
     * End Code By M
     */
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

        /**
         * Start Code By M
         */

        const request_data = {
            image: values?.image,
            first_name: values?.first_name,
            last_name: values?.last_name,
            name: values?.first_name + ' ' + values?.last_name,
            email: values?.email,
            role: values?.role,
            password: values?.password,
            password_confirmation: values?.password_confirmation
        };

        /**
         * End Code By M
         */

        return await request('/api/users', {
            method: 'POST',

            /**
             * Start Comment By M
             */

            // data: formData,

            /**
             * End Comment By M
             */

            /**
             * Start Code By M
             */

            data: request_data,

            /**
             * End Code By M
             */

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

/**
 * Start Code By M
 */

const getFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
};


const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        let url = '';
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onload =  function(e){
            console.log('DataURL:', e.target.result);
            url = e.target.result;
        };
        reader.onerror = (error) => reject(error);

        return url;

    });
};


const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

/**
 * End Code By M
 */

const CreateUser = () => {

    /**
     * States of Component
     */

    const [form] = Form.useForm();
    const [staffMemberProfileImageUrl, setStaffMemberProfileImageUrl] = useState('');

    /**
     * Start Code By M
     */

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [imageUrl, setImageUrl] = useState(DEFAULT_USER_PROFILE_IMAGE_URL);
    const [file, setFile] = useState();


    const handleCancel = () => setPreviewOpen(false);
    const handlePreview = async (file) => {
        console.log('handlePreview');
        console.log('file');
        console.log(file);
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };


    const handleChange = (info) => {
        console.log('handleChange..');
        console.log('info');
        console.log(info);


        if( info.file.status == "removed" ){
            setImageUrl('');
        }

        if (info.file.status === 'uploading') {

            console.log('handleChange - status - uploading');

            return;
        }
        if (info.file.status === 'done') {

            console.log('handleChange - status - done');
            console.log('info.file');
            console.log(info.file);

            setFile(info.file);

            return new Promise((resolve, reject) => {
                let url = '';
                const reader = new FileReader();
                reader.readAsDataURL(info.file.originFileObj);
                reader.onload = () => resolve(reader.result);
                reader.onload =  function(e){
                    console.log('DataURL:', e.target.result);

                    setImageUrl(e.target.result);
                };
                reader.onerror = (error) => reject(error);

            });

        }

        if (info.file.status === 'error') {
            // message.error(`${info.file.name} file upload failed.`);
        }

    };

    /**
     * End Code By M
     */


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

                        /**
                         * Start Code By M
                         */

                        values.image = imageUrl;

                        /**
                         * End Code By M
                         */

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

                                            // Start Code By M
                                            src={imageUrl}
                                            // End Code By M

                                            // Start Comment By M
                                            // src={staffMemberProfileImageUrl}
                                            // fallback={DEFAULT_USER_PROFILE_IMAGE_URL}
                                            // End Code By M
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
