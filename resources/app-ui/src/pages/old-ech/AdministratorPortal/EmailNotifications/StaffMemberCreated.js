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
import EmailNotificationsScreenStaffMemberCreatedVideoIframe from "@/components/VideoTutorialsIframes/SuperAdminIframes/EmailNotificationsScreenStaffMemberCreatedVideoIframe";
import StaffMemberCreatedSkeleton from "@/components/Skeleton/EmailNotifications/StaffMemberCreatedSkeleton";
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
      // organization_id: values?.organization_id,
      email_notification_id: values?.email_notification_id,
      status: values?.status,
      subject: values?.subject,
      body: values?.body,
    };

    request('/wp/v2/email-notification-default', {
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

const StaffMemberCreated = ( { status, subject, body } ) => {

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
  const [updateStaffMemberRequestEditButton, setUpdateStaffMemberRequestEditButton] = useState(true);
  const [tabContentLoading, setTabContentLoading] = useState(true);
  // const [organizationId, setOrganizationId] = useState(0);
  const [emailNotificationId, setEmailNotificationId] = useState('staff_member_created');
  const [staffMemberCreatedData, setStaffMemberCreatedData] = useState({});
  const [staffMemberCreatedSkeleton, setStaffMemberCreatedSkeleton] = useState(true);


    /**
     * Start By Mairaj
     */

    const [emailNotificationsStaffMemberCreatedVideoTutorials, setEmailNotificationsStaffMemberCreatedVideoTutorials] = useState({});
    const [emailNotificationsStaffMemberCreatedVideoTutorialModelOpen, setEmailNotificationsStaffMemberCreatedVideoTutorialModelOpen] = useState(false);
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


    // useEffect(() => {
    //     /**
    //      * Set Organization ID
    //      */
    //     setOrganizationId(initialState?.currentUser?.meta?.ech_organization_id);
    // }, [initialState]);


    useEffect(() => {

    request('/wp/v2/email-notification-default/?email_notification_id='+emailNotificationId, {
        // request('/wp/v2/email-notification/'+organizationId+'/'+activeKey, {
        method: 'GET',
        // data: organizationId,
    }).then(async (api_response) => {
        console.log('get-email-notification = api_response');
        console.log(api_response);

        // return api_response;

        setStaffMemberCreatedData(api_response);

        setStaffMemberCreatedSkeleton(false);

        emailNotificationBodyEditor('body');

    }).catch(function (error) {
        console.log(error);
    });

    }, []);


    /**
     * Update/prefill the form fields whenever the related Props/State is updated/effected
     */
    useEffect(() => {
        form.setFieldValue('status', staffMemberCreatedData?.status);
        form.setFieldValue('subject', staffMemberCreatedData?.subject);
        form.setFieldValue('body', staffMemberCreatedData?.body);

        if (staffMemberCreatedData?.status === true) {
            setUpdateStaffMemberRequestEditButton(false);
        } else {
            setUpdateStaffMemberRequestEditButton(true);
        }

        // setTabContentLoading(false);

    }, [staffMemberCreatedData, form]);



  /**
   * Update/prefill the form fields whenever the related Props/State is updated/effected
   */
  // useEffect(() => {
  //   form.setFieldValue('status', status);
  //   form.setFieldValue('subject', subject);
  //   form.setFieldValue('body', body);
  //
  //   if (status === true) {
  //     setUpdateStaffMemberRequestEditButton(false);
  //   } else {
  //     setUpdateStaffMemberRequestEditButton(true);
  //   }
  //
  //   setTabContentLoading(false);
  //
  // }, [form, status, subject, body]);
  //
  //
  // console.log('super-user-created - subject');
  // console.log(subject);


  /**
   * The Component Output
   * https://www.developerway.com/posts/react-re-renders-guide
   */



    if (staffMemberCreatedSkeleton) {

        return (
            <PageContainer
                header={
                    {title: ""}
                }
            >
                <StaffMemberCreatedSkeleton
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
                        // values.organization_id = initialState?.currentUser?.meta?.ech_organization_id;
                        values.email_notification_id = 'staff_member_created';
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
                                            setUpdateStaffMemberRequestEditButton(false);
                                        } else {
                                            setUpdateStaffMemberRequestEditButton(true);
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
                                disabled={updateStaffMemberRequestEditButton}
                                colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                            />
                            <ProFormTextArea
                                // name={['bio_details', 'biographical_info']}
                                name='body'
                                label="Body"
                                // tooltip="The legal name"
                                placeholder=""
                                disabled={updateStaffMemberRequestEditButton}
                                colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
                            />
                        </ProForm.Group>
                    </ProCard>

                </ProForm>


            </PageContainer>

        );
    }
};

export default StaffMemberCreated;



// const areEqual = (prevProps, nextProps) => {
//     if (prevProps.subject === nextProps.subject) {
//         return true                                    // donot re-render
//     }
//     return false                                     // will re-render
// }
//
//
// export default React.memo(StaffMemberCreated, areEqual)



// const StaffMemberCreated = () => {
//     return(
//         <>
//             Staff Member Created
//         </>
//     );
// };
// export default StaffMemberCreated;
