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
  ProFormSwitch,
} from '@ant-design/pro-components';
import {Row, Col, Space, message, Button, Form, DatePicker, Image, Skeleton, Switch} from 'antd';
import {request} from '@umijs/max';
import {history, useModel, useParams} from "@@/exports";
import React, {useEffect, useState, useMemo} from "react";
import CreateSuperAdminTutorialsSkeleton from "@/components/Skeleton/CreateSuperAdminTutorialsSkeleton";


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
    const request_data = [

      {
        screen_id: 'setup_wizard_screen_setup_wizard_video_url',
        video_url: values?.setup_wizard_screen?.setup_wizard_video_url,
      },
      {
        screen_id: 'organization_screen_organization_video_url',
        video_url: values?.organization_screen?.organization_video_url,
      },
      {
        screen_id: 'policies_screen_listing_video_url',
        video_url: values?.policies_screen?.listing_video_url,
      },
      {
        screen_id: 'policies_screen_view_video_url',
        video_url: values?.policies_screen?.view_video_url,
      },
      {
        screen_id: 'policies_screen_edit_video_url',
        video_url: values?.policies_screen?.edit_video_url,
      },
      {
        screen_id: 'policies_screen_versions_video_url',
        video_url: values?.policies_screen?.versions_video_url,
      },
      {
        screen_id: 'super_users_screen_listing_video_url',
        video_url: values?.super_users_screen?.listing_video_url,
      },
      {
        screen_id: 'super_users_screen_create_video_url',
        video_url: values?.super_users_screen?.create_video_url,
      },
      {
        screen_id: 'super_users_screen_edit_video_url',
        video_url: values?.super_users_screen?.edit_video_url,
      },
      {
        screen_id: 'active_staff_members_screen_listing_video_url',
        video_url: values?.active_staff_members_screen?.listing_video_url,
      },
      {
        screen_id: 'active_staff_members_screen_create_video_url',
        video_url: values?.active_staff_members_screen?.create_video_url,
      },
      {
        screen_id: 'active_staff_members_screen_edit_video_url',
        video_url: values?.active_staff_members_screen?.edit_video_url,
      },
      {
        screen_id: 'inactive_staff_members_screen_inactive_staff_members_video_url',
        video_url: values?.inactive_staff_members_screen?.inactive_staff_members_video_url,
      },
      {
        screen_id: 'email_notifications_screen_super_user_created_video_url',
        video_url: values?.email_notifications_screen?.super_user_created_video_url,
      },
      {
        screen_id: 'email_notifications_screen_super_user_updated_video_url',
        video_url: values?.email_notifications_screen?.super_user_updated_video_url,
      },
      {
        screen_id: 'email_notifications_screen_super_user_deleted_video_url',
        video_url: values?.email_notifications_screen?.super_user_deleted_video_url,
      },
      {
        screen_id: 'email_notifications_screen_staff_member_created_video_url',
        video_url: values?.email_notifications_screen?.staff_member_created_video_url,
      },
      {
        screen_id: 'email_notifications_screen_staff_member_updated_video_url',
        video_url: values?.email_notifications_screen?.staff_member_updated_video_url,
      },
      {
        screen_id: 'email_notifications_screen_staff_member_deleted_video_url',
        video_url: values?.email_notifications_screen?.staff_member_deleted_video_url,
      },
      {
        screen_id: 'orders_screen_listing_video_url',
        video_url: values?.orders_screen?.listing_video_url,
      },
      {
        screen_id: 'orders_screen_view_video_url',
        video_url: values?.orders_screen?.view_video_url,
      },

    ];

    request('/wp/v2/super-admin-video-tutorials', {
      method: 'POST',
      data: request_data,
    }).then((api_response) => {
      console.log('api_response');
      console.log(api_response);
      /**
       * Policy Bundle Created then show message and redirect to listing screen
       */
      if (api_response?.length > 0) {
        message.success('Submitted successfully');
      //   history.push('/administrator/policies-bundles/edit/' + api_response?.id);
      }
    });
  } catch (api_response) {
    console.log('api_response - error');
    console.log(api_response);
  }

  return true;
};

const CreateSuperAdminTutorials = () => {

  /**
   * States of Component
   */
  const {initialState, loading, refresh, setInitialState} = useModel('@@initialState');
  const [form] = Form.useForm();
  const [superAdminVideoTutorials, setSuperAdminVideoTutorials] = useState({});
  const [createSuperAdminTutorialsSkeleton, setCreateSuperAdminTutorialsSkeleton] = useState(true);


  /**
   * The Form Initial values
   */
  const initialValues = {
    setup_wizard_screen: {
      setup_wizard_video_url: '',
    },
    organization_screen: {
      organization_video_url: '',
    },
    policies_screen: {
      listing_video_url: '',
      view_video_url: '',
      edit_video_url: '',
      versions_video_url: '',
    },
    super_users_screen: {
      listing_video_url: '',
      create_video_url: '',
      edit_video_url: '',
    },
    active_staff_members_screen: {
      listing_video_url: '',
      create_video_url: '',
      edit_video_url: '',
    },
    inactive_staff_members_screen: {
      inactive_staff_members_video_url: '',
    },
    email_notifications_screen: {
      super_user_created_video_url: '',
      super_user_updated_video_url: '',
      super_user_deleted_video_url: '',
      staff_member_created_video_url: '',
      staff_member_updated_video_url: '',
      staff_member_deleted_video_url: '',
    },
    orders_screen: {
      listing_video_url: '',
      view_video_url: '',
    },

  };


  /**
   * Update/prefill the form fields whenever the related Props/State is updated/effected
   */

useEffect( () => {

    request('/wp/v2/super-admin-video-tutorials', {
        method: 'GET',
    }).then((api_response) => {
        console.log('api_response');
        console.log(api_response);
        /**
         * Policy Bundle Created then show message and redirect to listing screen
         */
        // if (api_response?.id > 0) {
        //   message.success('Submitted successfully');
        //   history.push('/administrator/policies-bundles/edit/' + api_response?.id);
        // }

        const super_admin_video_tutorials_data = {
              ...initialValues,
              setup_wizard_screen: {
                ...initialValues.setup_wizard_screen,
                setup_wizard_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'setup_wizard_screen_setup_wizard_video_url') ]?.video_url,
              },
              organization_screen: {
                ...initialValues.organization_screen,
                organization_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'organization_screen_organization_video_url') ]?.video_url,
              },
              policies_screen: {
                ...initialValues.policies_screen,
                listing_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'policies_screen_listing_video_url') ]?.video_url,
                view_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'policies_screen_view_video_url') ]?.video_url,
                edit_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'policies_screen_edit_video_url') ]?.video_url,
                versions_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'policies_screen_versions_video_url') ]?.video_url,
              },
              super_users_screen: {
                ...initialValues.super_users_screen,
                listing_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'super_users_screen_listing_video_url') ]?.video_url,
                create_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'super_users_screen_create_video_url') ]?.video_url,
                edit_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'super_users_screen_edit_video_url') ]?.video_url,
              },
              active_staff_members_screen: {
                ...initialValues.active_staff_members_screen,
                listing_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'active_staff_members_screen_listing_video_url') ]?.video_url,
                create_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'active_staff_members_screen_create_video_url') ]?.video_url,
                edit_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'active_staff_members_screen_edit_video_url') ]?.video_url,
              },
              inactive_staff_members_screen: {
                ...initialValues.inactive_staff_members_screen,
                inactive_staff_members_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'inactive_staff_members_screen_inactive_staff_members_video_url') ]?.video_url,
              },
              email_notifications_screen: {
                ...initialValues.email_notifications_screen,
                super_user_created_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'email_notifications_screen_super_user_created_video_url') ]?.video_url,
                super_user_updated_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'email_notifications_screen_super_user_updated_video_url') ]?.video_url,
                super_user_deleted_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'email_notifications_screen_super_user_deleted_video_url') ]?.video_url,
                staff_member_created_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'email_notifications_screen_staff_member_created_video_url') ]?.video_url,
                staff_member_updated_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'email_notifications_screen_staff_member_updated_video_url') ]?.video_url,
                staff_member_deleted_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'email_notifications_screen_staff_member_deleted_video_url') ]?.video_url,
              },
              orders_screen: {
                ...initialValues.orders_screen,
                listing_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'orders_screen_listing_video_url') ]?.video_url,
                view_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'orders_screen_view_video_url') ]?.video_url,
              },
            };


      setSuperAdminVideoTutorials(super_admin_video_tutorials_data);

      setCreateSuperAdminTutorialsSkeleton(false);

    });

}, []);


  /**
   * Update/prefill the form fields whenever the related policyBundleData State is updated/effected
   */
  useEffect(() => {

    if( superAdminVideoTutorials.length === 0 ){
      return;
    }

    console.log('superAdminVideoTutorials');
    console.log(superAdminVideoTutorials);


    form.setFieldValue(['setup_wizard_screen', 'setup_wizard_video_url'], superAdminVideoTutorials?.setup_wizard_screen?.setup_wizard_video_url);
    form.setFieldValue(['organization_screen', 'organization_video_url'], superAdminVideoTutorials?.organization_screen?.organization_video_url);
    form.setFieldValue(['policies_screen', 'listing_video_url'], superAdminVideoTutorials?.policies_screen?.listing_video_url);
    form.setFieldValue(['policies_screen', 'view_video_url'], superAdminVideoTutorials?.policies_screen?.view_video_url);
    form.setFieldValue(['policies_screen', 'edit_video_url'], superAdminVideoTutorials?.policies_screen?.edit_video_url);
    form.setFieldValue(['policies_screen', 'versions_video_url'], superAdminVideoTutorials?.policies_screen?.versions_video_url);
    form.setFieldValue(['super_users_screen', 'listing_video_url'], superAdminVideoTutorials?.super_users_screen?.listing_video_url);
    form.setFieldValue(['super_users_screen', 'create_video_url'], superAdminVideoTutorials?.super_users_screen?.create_video_url);
    form.setFieldValue(['super_users_screen', 'edit_video_url'], superAdminVideoTutorials?.super_users_screen?.edit_video_url);
    form.setFieldValue(['active_staff_members_screen', 'listing_video_url'], superAdminVideoTutorials?.active_staff_members_screen?.listing_video_url);
    form.setFieldValue(['active_staff_members_screen', 'create_video_url'], superAdminVideoTutorials?.active_staff_members_screen?.create_video_url);
    form.setFieldValue(['active_staff_members_screen', 'edit_video_url'], superAdminVideoTutorials?.active_staff_members_screen?.edit_video_url);
    form.setFieldValue(['inactive_staff_members_screen', 'inactive_staff_members_video_url'], superAdminVideoTutorials?.inactive_staff_members_screen?.inactive_staff_members_video_url);
    form.setFieldValue(['email_notifications_screen', 'super_user_created_video_url'], superAdminVideoTutorials?.email_notifications_screen?.super_user_created_video_url);
    form.setFieldValue(['email_notifications_screen', 'super_user_updated_video_url'], superAdminVideoTutorials?.email_notifications_screen?.super_user_updated_video_url);
    form.setFieldValue(['email_notifications_screen', 'super_user_deleted_video_url'], superAdminVideoTutorials?.email_notifications_screen?.super_user_deleted_video_url);
    form.setFieldValue(['email_notifications_screen', 'staff_member_created_video_url'], superAdminVideoTutorials?.email_notifications_screen?.staff_member_created_video_url);
    form.setFieldValue(['email_notifications_screen', 'staff_member_updated_video_url'], superAdminVideoTutorials?.email_notifications_screen?.staff_member_updated_video_url);
    form.setFieldValue(['email_notifications_screen', 'staff_member_deleted_video_url'], superAdminVideoTutorials?.email_notifications_screen?.staff_member_deleted_video_url);
    form.setFieldValue(['orders_screen', 'listing_video_url'], superAdminVideoTutorials?.orders_screen?.listing_video_url);
    form.setFieldValue(['orders_screen', 'view_video_url'], superAdminVideoTutorials?.orders_screen?.view_video_url);

  }, [superAdminVideoTutorials, form]);


  /**
   * The Component Output
   * https://www.developerway.com/posts/react-re-renders-guide
   */



  if (createSuperAdminTutorialsSkeleton) {

    return (
        <PageContainer
            header={
              {title: ""}
            }
        >
          <CreateSuperAdminTutorialsSkeleton
              active={true}
          />
        </PageContainer>
    );

  } else {


    return (
        <ProForm

            layout='horizontal'
            grid={true}
            initialValues={initialValues}
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
              // resetButtonProps: {
              //   style: {
              //     // Hide the reset button
              //     // display: 'none',
              //   },
              // },
              searchConfig: {
                // resetText: 'Reset',
                submitText: 'Save',
              },
              // render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>,
              // render: (_, dom) => {dom},
            }}
        >

          <ProCard
              // loading={tabContentLoading}
              title="Super Admin Tutorials"
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
            <ProForm.Group
                size={24}
                title={'Setup Wizard Screen:'}
            >
              <ProFormText
                  name={['setup_wizard_screen', 'setup_wizard_video_url']}
                  // value={subject}
                  label="Video URL"
                  // tooltip="The legal name"
                  placeholder=""
                  // rules={[{required: true}]}
                  colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
              />
            </ProForm.Group>

            <ProForm.Group
                size={24}
                title={'Organisation Screen:'}
            >
              <ProFormText
                  name={['organization_screen', 'organization_video_url']}
                  // value={subject}
                  label="Video URL"
                  // tooltip="The legal name"
                  placeholder=""
                  // rules={[{required: true}]}
                  colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
              />
            </ProForm.Group>

            <ProForm.Group
                size={24}
                title={'Policies Screen:'}
            >
              <ProFormText
                  name={['policies_screen', 'listing_video_url']}
                  // value={subject}
                  label="Policies Listing Video URL"
                  // tooltip="The legal name"
                  placeholder=""
                  // rules={[{required: true}]}
                  colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
              />
              <ProFormText
                  name={['policies_screen', 'view_video_url']}
                  // value={subject}
                  label="View Policy Video URL"
                  // tooltip="The legal name"
                  placeholder=""
                  // rules={[{required: true}]}
                  colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
              />
              <ProFormText
                  name={['policies_screen', 'edit_video_url']}
                  // value={subject}
                  label="Edit Policy Video URL"
                  // tooltip="The legal name"
                  placeholder=""
                  // rules={[{required: true}]}
                  colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
              />
              <ProFormText
                  name={['policies_screen', 'versions_video_url']}
                  // value={subject}
                  label="Policy Versions Video URL"
                  // tooltip="The legal name"
                  placeholder=""
                  // rules={[{required: true}]}
                  colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
              />
            </ProForm.Group>

            <ProForm.Group
                size={24}
                title={'Super Users Screen:'}
            >
              <ProFormText
                  name={['super_users_screen', 'listing_video_url']}
                  // value={subject}
                  label="Super Users Listing Video URL"
                  // tooltip="The legal name"
                  placeholder=""
                  // rules={[{required: true}]}
                  colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
              />
              <ProFormText
                  name={['super_users_screen', 'create_video_url']}
                  // value={subject}
                  label="Create Super User Video URL"
                  // tooltip="The legal name"
                  placeholder=""
                  // rules={[{required: true}]}
                  colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
              />
              <ProFormText
                  name={['super_users_screen', 'edit_video_url']}
                  // value={subject}
                  label="Edit Super User Video URL"
                  // tooltip="The legal name"
                  placeholder=""
                  // rules={[{required: true}]}
                  colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
              />
            </ProForm.Group>

            <ProForm.Group
                size={24}
                title={'Active Staff Members Screen:'}
            >
              <ProFormText
                  name={['active_staff_members_screen', 'listing_video_url']}
                  // value={subject}
                  label="Staff Members Listing Video URL"
                  // tooltip="The legal name"
                  placeholder=""
                  // rules={[{required: true}]}
                  colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
              />
              <ProFormText
                  name={['active_staff_members_screen', 'create_video_url']}
                  // value={subject}
                  label="Create Staff Member Video URL"
                  // tooltip="The legal name"
                  placeholder=""
                  // rules={[{required: true}]}
                  colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
              />
              <ProFormText
                  name={['active_staff_members_screen', 'edit_video_url']}
                  // value={subject}
                  label="Edit Staff Member Video URL"
                  // tooltip="The legal name"
                  placeholder=""
                  // rules={[{required: true}]}
                  colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
              />
            </ProForm.Group>

            <ProForm.Group
                size={24}
                title={'Inactive Staff Members Screen:'}
            >
              <ProFormText
                  name={['inactive_staff_members_screen', 'inactive_staff_members_video_url']}
                  // value={subject}
                  label="Video URL"
                  // tooltip="The legal name"
                  placeholder=""
                  // rules={[{required: true}]}
                  colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
              />
            </ProForm.Group>

            <ProForm.Group
                size={24}
                title={'Email Notifications Screen:'}
            >
              <ProFormText
                  name={['email_notifications_screen', 'super_user_created_video_url']}
                  // value={subject}
                  label="Super User Created Video URL"
                  // tooltip="The legal name"
                  placeholder=""
                  // rules={[{required: true}]}
                  colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
              />
              <ProFormText
                  name={['email_notifications_screen', 'super_user_updated_video_url']}
                  // value={subject}
                  label="Super User Updated Video URL"
                  // tooltip="The legal name"
                  placeholder=""
                  // rules={[{required: true}]}
                  colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
              />
              <ProFormText
                  name={['email_notifications_screen', 'super_user_deleted_video_url']}
                  // value={subject}
                  label="Super User Deleted Video URL"
                  // tooltip="The legal name"
                  placeholder=""
                  // rules={[{required: true}]}
                  colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
              />
              <ProFormText
                  name={['email_notifications_screen', 'staff_member_created_video_url']}
                  // value={subject}
                  label="Staff Member Created Video URL"
                  // tooltip="The legal name"
                  placeholder=""
                  // rules={[{required: true}]}
                  colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
              />
              <ProFormText
                  name={['email_notifications_screen', 'staff_member_updated_video_url']}
                  // value={subject}
                  label="Staff Member Updated Video URL"
                  // tooltip="The legal name"
                  placeholder=""
                  // rules={[{required: true}]}
                  colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
              />
              <ProFormText
                  name={['email_notifications_screen', 'staff_member_deleted_video_url']}
                  // value={subject}
                  label="Staff Member Deleted Video URL"
                  // tooltip="The legal name"
                  placeholder=""
                  // rules={[{required: true}]}
                  colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
              />
            </ProForm.Group>

            <ProForm.Group
                size={24}
                title={'Orders Screen:'}
            >
              <ProFormText
                  name={['orders_screen', 'listing_video_url']}
                  // value={subject}
                  label="Orders Listing Video URL"
                  // tooltip="The legal name"
                  placeholder=""
                  // rules={[{required: true}]}
                  colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
              />
              <ProFormText
                  name={['orders_screen', 'view_video_url']}
                  // value={subject}
                  label="View Order Video URL"
                  // tooltip="The legal name"
                  placeholder=""
                  // rules={[{required: true}]}
                  colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
              />
            </ProForm.Group>

          </ProCard>

        </ProForm>
    );
  }
};

export default CreateSuperAdminTutorials;

