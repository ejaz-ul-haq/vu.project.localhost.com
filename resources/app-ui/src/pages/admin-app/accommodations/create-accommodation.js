import {
    PageContainer,
    FooterToolbar,
    ProCard,
    ProForm,
    ProFormText,
    ProFormTextArea
} from '@ant-design/pro-components';
import {Row, Col, message, Button, Form, Image, Upload} from 'antd';
import {UploadOutlined, UserOutlined, PlusOutlined} from '@ant-design/icons';
import React, {useEffect, useState} from "react";
import {request, history} from '@umijs/max';
import DestinationFormSkeleton from "@/components/Skeleton/DestinationFormSkeleton";
import { waitTime } from '@/components/Helpers/RequestHelpers';


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

        /**
         * Start Code By M
         */

        const request_data = {
            title: values?.title,
            description: values?.description,
            image: values?.image
        };

        /**
         * End Code By M
         */

        return await request('/api/accommodations', {
            method: 'POST',
            /**
             * Start Comment By M
             */

            // data: formData,

            /**
             * End Comment By M
             */
            data: request_data,
        }).then(async (api_response) => {
            console.log('api_response');
            console.log(api_response);

            /**
             * User Created then show message and redirect to listing screen
             */
            if (api_response?.data?.id > 0) {
                message.success('Submitted successfully');
                history.push('/admin-app/accommodations/edit/' + api_response?.data?.id);
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

const CreateAccommodation = () => {

    /**
     * States of Component
     */

    const [form] = Form.useForm();
    const [staffMemberProfileImageUrl, setStaffMemberProfileImageUrl] = useState('');
    const [skeletonStatus, setSkeletonStatus] = useState(true);

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [imageUrl, setImageUrl] = useState(DEFAULT_PLACEHOLDER_IMAGE_URL);
    const [file, setFile] = useState();

    /**
     * Update the Profile Image input field individually whenever the related State is updated/effected
     */
    useEffect(() => {
        form.setFieldValue(['bio_details', 'staff_member_profile_image'], staffMemberProfileImageUrl);
        setSkeletonStatus(false);
    }, [staffMemberProfileImageUrl, form]);


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
                        title="Accommodation Details"
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
                                        placeholder="Type accommodation title"
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
                                        placeholder="Share a little details regarding the accommodation. "
                                        colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
                                        fieldProps={{
                                            size: 'middle'
                                        }}
                                    />
                                </ProForm.Group>
                            </Col>
                        </Row>
                    </ProCard>

                </ProForm>
            </PageContainer>
        );
    }
};

export default CreateAccommodation;
