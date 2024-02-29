import {
    PageContainer,
    FooterToolbar,
    ProCard,
    ProForm,
    ProFormCheckbox,
    ProFormDatePicker,
    ProFormDateRangePicker,
    ProFormDigit,
    ProFormSelect,
    ProFormText,
    StepsForm,
    ProFormDependency,
    ProFormList,
    ProFormGroup,
    ProFormRadio,
    ProFormSegmented,
    ProFormTextArea,
    ProFormSwitch, ModalForm,
} from '@ant-design/pro-components';
import {Row, Col, Space, message, Button, Form, DatePicker, Image, Skeleton, Switch, FloatButton} from 'antd';
import {
    CustomerServiceOutlined,
    QuestionCircleOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined, WhatsAppOutlined
} from '@ant-design/icons';

import {createUser, getUser, getUsers, putUser} from "@/services/wp-api/User";
import {request} from '@umijs/max';
import {date, datetime} from "mockjs/src/mock/random/date";
import moment from 'moment';
import {useModel, useParams} from "@@/exports";
import React, {useEffect, useState, useMemo} from "react";
import {getEchPolicy} from "@/services/wp-api/EchPolicy";
import UpdateSuperUserSkeleton from "@/components/Skeleton/UpdateSuperUserSkeleton";
import EmailNotificationsScreenSuperUserUpdatedVideoIframe from "@/components/VideoTutorialsIframes/SuperAdminIframes/EmailNotificationsScreenSuperUserUpdatedVideoIframe";
import SuperUserUpdatedSkeleton from "@/components/Skeleton/EmailNotifications/SuperUserUpdatedSkeleton";
import VideoTutorialIframe from "@/components/VideoTutorialsIframes/VideoTutorialIframe";
import {emailNotificationBodyEditor} from "@/components/Editor/EmailNotificationBodyEditor";


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

    /**
     * API Request
     */
    try {

        const request_data = {
            organization_id: values?.organization_id,
            email_notification_id: values?.email_notification_id,
            status: values?.status,
            subject: values?.subject,
            body: values?.body,
        };

        request('/wp/v2/email-notification', {
            method: 'POST',
            data: request_data,
        }).then(async (api_response) => {
            console.log('post-email-notification = api_response');
            console.log(api_response);

            if (api_response.success) {
                console.log('setup-wizard = api_response - 01');
                await message.success('Submitted successfully');
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

const SuperUserUpdated = ( { status, subject, body } ) => {

    /**
     * States of Component
     */
    const {initialState, loading, refresh, setInitialState} = useModel('@@initialState');
    // const params = useParams();
    // const [userId, setUserId] = useState(0);
    const [form] = Form.useForm();
    // const [superUserProfileImageUrl, setSuperUserProfileImageUrl] = useState('');
    // const [superUserData, setSuperUserData] = useState({});
    // const [updateSuperUserSkeleton, setUpdateSuperUserSkeleton] = useState(true);
    const [updateSuperUserRequestEditButton, setUpdateSuperUserRequestEditButton] = useState(true);
    const [tabContentLoading, setTabContentLoading] = useState(true);
    const [organizationId, setOrganizationId] = useState(0);
    const [emailNotificationId, setEmailNotificationId] = useState('super_user_updated');
    const [superUserUpdatedData, setSuperUserUpdatedData] = useState({});
    const [superUserUpdatedSkeleton, setSuperUserUpdatedSkeleton] = useState(true);



    /**
     * Start By Mairaj
     */

    const [emailNotificationsSuperUserUpdatedVideoTutorials, setEmailNotificationsSuperUserUpdatedVideoTutorials] = useState({});
    const [emailNotificationsSuperUserUpdatedVideoTutorialModelOpen, setEmailNotificationsSuperUserUpdatedVideoTutorialModelOpen] = useState(false);
    /**
     * End By Mairaj
     */



    /**
     * The Form Initial values
     */
    const initialValues = {
        status: status,
        subject: subject,
        body: body,
    };


    useEffect(() => {
        /**
         * Set Organization ID
         */
        setOrganizationId(initialState?.currentUser?.meta?.ech_organization_id);
    }, [initialState]);


    useEffect(() => {
        if (organizationId === 0) {
            return;
        }


        request('/wp/v2/email-notification/?organization_id='+organizationId+'&email_notification_id='+emailNotificationId, {
            // request('/wp/v2/email-notification/'+organizationId+'/'+activeKey, {
            method: 'GET',
            // data: organizationId,
        }).then(async (api_response) => {
            console.log('get-email-notification = api_response');
            console.log(api_response);

            // return api_response;

            setSuperUserUpdatedData(api_response);

            setSuperUserUpdatedSkeleton(false);

            emailNotificationBodyEditor('body');

        }).catch(function (error) {
            console.log(error);
        });

    }, [organizationId]);


    /**
     * Update/prefill the form fields whenever the related Props/State is updated/effected
     */
    useEffect(() => {
        form.setFieldValue('status', superUserUpdatedData?.status);
        form.setFieldValue('subject', superUserUpdatedData?.subject);
        form.setFieldValue('body', superUserUpdatedData?.body);

        if (superUserUpdatedData?.status === true) {
            setUpdateSuperUserRequestEditButton(false);
            console.log('superUserUpdatedData?.status');
        } else {
            setUpdateSuperUserRequestEditButton(true);
            console.log('superUserUpdatedData?.status - else');
        }

        // setTabContentLoading(false);

    }, [superUserUpdatedData, form]);



    /**
     * Update/prefill the form fields whenever the related Props/State is updated/effected
     */
    // useEffect(() => {
    //     form.setFieldValue('status', status);
    //     form.setFieldValue('subject', subject);
    //     form.setFieldValue('body', body);
    //
    //     if (status === true) {
    //         setUpdateSuperUserRequestEditButton(false);
    //     } else {
    //         setUpdateSuperUserRequestEditButton(true);
    //     }
    //
    //     setTabContentLoading(false);
    //
    // }, [form, status, subject, body]);


  // console.log('super-user-updated - subject');
  // console.log(subject);


    /**
     * The Component Output
     * https://www.developerway.com/posts/react-re-renders-guide
     */




    if (superUserUpdatedSkeleton) {

        return (
            <PageContainer
                header={
                    {title: ""}
                }
            >
                <SuperUserUpdatedSkeleton
                    active={true}
                />
            </PageContainer>
        );

    } else {


        return (
            <PageContainer>
                <ProForm

                    layout='horizontal'
                    grid={true}
                    initialValues={initialValues}
                    form={form}
                    onFinish={async (values) => {
                        console.log(values);
                        /**
                         * Add Organization ID and Email ID nto the form Values
                         */
                        values.organization_id = initialState?.currentUser?.meta?.ech_organization_id;
                        values.email_notification_id = 'super_user_updated';
                        values.body = wp.editor.getContent('body');
                        await waitTime(1000);
                        await onFinishHandlerForm(values);
                    }}
                    formProps={{
                        validateMessages: {
                            required: 'This is required',
                        },
                    }}
                    submitter={{
                        searchConfig: {
                            resetText: 'Reset',
                            submitText: 'Save',
                        },
                        // render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>,
                        // render: (_, dom) => {dom},
                    }}
                >

                    <ProCard
                        // loading={tabContentLoading}
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
                    >
                        <ProForm.Group size={24}>
                            <ProFormSwitch
                                name='status'
                                label="Status"
                                // tooltip="The legal name"
                                // noStyle
                                checkedChildren={'On'}
                                unCheckedChildren={'Off'}
                                fieldProps={{
                                    // prefix: <UserOutlined/>,
                                    // size: 'large',

                                    onChange: (checked, event) => {
                                        console.log(' Request Edit - checked');
                                        console.log(checked);

                                        if (checked === true) {
                                            setUpdateSuperUserRequestEditButton(false);
                                        } else {
                                            setUpdateSuperUserRequestEditButton(true);
                                        }

                                    }
                                }}
                                // size={'large'}
                            />
                            <ProFormText
                                // name={['account_details', 'username']}
                                name='subject'
                                // value={subject}
                                label="Subject"
                                // tooltip="The legal name"
                                placeholder=""
                                rules={[{required: true}]}
                                disabled={updateSuperUserRequestEditButton}
                                colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                            />
                            <ProFormTextArea
                                // name={['bio_details', 'biographical_info']}
                                name='body'
                                label="Body"
                                // tooltip="The legal name"
                                placeholder=""
                                disabled={updateSuperUserRequestEditButton}
                                colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
                            />
                        </ProForm.Group>
                    </ProCard>

                </ProForm>


                <FloatButton.Group
                    type="primary"
                    shape="square"
                    style={{
                        right: 10,
                        bottom: '50vh'
                    }}
                    icon={<CustomerServiceOutlined/>}
                >
                    <FloatButton
                        icon={<QuestionCircleOutlined/>}
                        tooltip={<div>click to see the helfull tour.</div>}
                        onClick={ ()=> {
                            window.open(initialState?.ech_settings[initialState?.ech_settings.findIndex(ech_setting_row => ech_setting_row.key === 'floating_icon_help_url') ]?.value);
                        }}
                    />
                    <FloatButton
                        icon={<VideoCameraOutlined/>}
                        tooltip={<div>Lets See Helpful Tutorial.</div>}
                        onClick={() => {
                            console.log('api_response_testing_01');

                            request('/wp/v2/super-admin-video-tutorials', {
                                method: 'GET',
                            }).then((api_response) => {
                                console.log('api_response');
                                console.log(api_response);


                                const email_notifications_screen_super_user_updated_video_tutorials_data = {
                                    ...initialValues,
                                    email_notifications_screen: {
                                        ...initialValues.email_notifications_screen,
                                        super_user_updated_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'email_notifications_screen_super_user_updated_video_url')].video_url,
                                    },
                                };

                                setEmailNotificationsSuperUserUpdatedVideoTutorials(email_notifications_screen_super_user_updated_video_tutorials_data);

                                console.log('email_notifications_screen_super_user_updated_video_tutorials_data');
                                console.log(email_notifications_screen_super_user_updated_video_tutorials_data);

                            });
                            setEmailNotificationsSuperUserUpdatedVideoTutorialModelOpen(true);
                        }}
                    />
                    <FloatButton
                        tooltip={<div>Visit Official documentation</div>}
                        onClick={ ()=> {
                            window.open(initialState?.ech_settings[initialState?.ech_settings.findIndex(ech_setting_row => ech_setting_row.key === 'floating_icon_documentation_url') ]?.value);
                        }}
                    />
                    <FloatButton
                        icon={<WhatsAppOutlined/>}
                        tooltip={<div>Lets discuss on Whatsapp.</div>}
                        onClick={ ()=> {
                            window.open(initialState?.ech_settings[initialState?.ech_settings.findIndex(ech_setting_row => ech_setting_row.key === 'floating_icon_whatsapp_url') ]?.value);
                        }}
                    />
                </FloatButton.Group>


                <ModalForm
                    title={'Email Notifications Super User Updated Video Tutorial'}
                    open={emailNotificationsSuperUserUpdatedVideoTutorialModelOpen}
                    onOpenChange={setEmailNotificationsSuperUserUpdatedVideoTutorialModelOpen}
                    modalProps={{
                        destroyOnClose: true,
                        onCancel: () => console.log('run'),
                        afterClose: () => {
                            /**
                             * Reset the Policy Selected Users when the modal is close to make sure the modal new open will be fresh
                             */
                            // setTargetKeys([]);
                        },
                        getContainer: () => {
                            document.body
                        },
                        // width: 1500,
                        // okText: 'Save',
                    }}
                    submitter={{
                        // Configure the properties of the button
                        resetButtonProps: {
                            style: {
                                // Hide the reset button
                                display: 'none',
                            },
                        },
                        submitButtonProps: {
                            style: {
                                // Hide the submit button
                                display: 'none',
                            },
                        },
                    }}
                    preserve={false}
                    submitTimeout={2000}
                    onFinish={async (values) => {
                        await waitTime(2000);


                        /**
                         * Call the APIs to update the selected policy's users association
                         */


                        /**
                         * The following return is necessary to auto close the modal
                         */
                        // return true;
                    }}
                >
                    <VideoTutorialIframe
                        iframeUrl={emailNotificationsSuperUserUpdatedVideoTutorials?.email_notifications_screen?.super_user_updated_video_url}
                    />

                </ModalForm>


            </PageContainer>


        );
    }
};

export default SuperUserUpdated;


// const areEqual = (prevProps, nextProps) => {
//     if (prevProps.subject === nextProps.subject) {
//         return true                                    // donot re-render
//     }
//     return false                                     // will re-render
// }
//
//
// export default React.memo(SuperUserUpdated, areEqual)
