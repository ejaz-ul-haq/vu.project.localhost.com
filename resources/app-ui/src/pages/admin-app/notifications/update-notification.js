import {
    PageContainer,
    FooterToolbar,
    ProCard,
    ProForm,
    ProFormText, ProFormTextArea
} from '@ant-design/pro-components';
import {Row, message, Form, Col, Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import React, {useEffect, useState} from "react";
import {request, history} from '@umijs/max';
import DestinationFormSkeleton from "@/components/Skeleton/DestinationFormSkeleton";
import { waitTime } from '@/components/Helpers/RequestHelpers';
import {useParams} from "@@/exports";

/**
 * The Form Initial values
 */
const initialValues = {
    subject: '',
    body: '',
};



/**
 * Form Submission handler and API Request Performer
 */
const onFinishHandlerForm = async (values) => {
    console.log('onFinishHandlerForm');
    console.log('Received values of form: ', values);

    console.log('values');
    console.log(values);

    const request_data = {
        subject: values?.subject,
        body: values?.body,
    };

    console.log('request_data - after');
    console.log(request_data);

    /**
     * API Request
     */
    try {

        return await request('/api/notifications/' + values?.notification_id, {
            method: 'PUT',
            data: request_data,
        }).then(async (api_response) => {
            console.log('api_response');
            console.log(api_response);

            /**
             * User Created then show message and redirect to listing screen
             */
            if (api_response?.data?.id > 0) {
                message.success('Submitted successfully');
                history.push('/admin-app/notifications/edit/' + api_response?.data?.id);
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

const UpdateNotification = () => {

    const params = useParams();

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
    const [notificationId, setNotificationId] = useState(0);


    useEffect(() => {
        setNotificationId(params.id);
    }, []); //empty dependency array so it only runs once at render


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

                <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                  <Col flex="auto">

                  </Col>

                  <Col flex="100px">
                    <Button
                      type="primary"
                      key="primary"
                      onClick={() => {
                        // handleModalOpen(true);
                        history.push('/admin-app/notifications/new');
                      }}
                      style={{marginBlockEnd: 15}}
                    >
                      <PlusOutlined/> New
                    </Button>
                  </Col>
                </Row>

                <ProForm
                    layout='horizontal'
                    grid={true}
                    form={form}
                    initialValues={initialValues}
                    params={ { 'notification_id': notificationId } }
                    request={

                        async (params= {} ) => {

                            console.log('proform-params');
                            console.log(params);

                            if( params?.notification_id == 0 ) {
                                return;
                            }

                            await waitTime(2000);

                            return await request('/api/notifications/' + params?.notification_id, {
                                method: 'GET',
                            }).then(async (api_response) => {
                                console.log('api_response');
                                console.log(api_response);

                                return {
                                    ...initialValues,
                                    subject: api_response?.data?.subject,
                                    body: api_response?.data?.body,
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
                        values.image = file;
                        values.notification_id = notificationId;
                        await onFinishHandlerForm(values);
                    }}
                    submitter={{
                        render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>,
                    }}
                >

                    <ProCard
                        title="Notification Details"
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

                            <ProForm.Group size={24}>
                                <ProFormText
                                    name='subject'
                                    label="Subject"
                                    placeholder="Please type notification subject"
                                    rules={[{required: true}]}
                                    colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                                />
                                <ProFormTextArea
                                    name='body'
                                    label="Body"
                                    placeholder="Please type notification content"
                                    rules={[{required: true}]}
                                    colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
                                />
                            </ProForm.Group>
                        </Row>
                    </ProCard>

                </ProForm>
            </PageContainer>
        );
    }
};

export default UpdateNotification;
