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
import CreateSuperUserTutorialsSkeleton from "@/components/Skeleton/CreateSuperUserTutorialsSkeleton";


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
        screen_id: 'policies_screen_listing_video_url',
        video_url: values?.policies_screen?.listing_video_url,
      },
      {
        screen_id: 'policies_screen_view_video_url',
        video_url: values?.policies_screen?.view_video_url,
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

    ];

    request('/wp/v2/super-user-video-tutorials', {
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

const CreateSuperUserTutorials = () => {

  /**
   * States of Component
   */
  const {initialState, loading, refresh, setInitialState} = useModel('@@initialState');
  const [form] = Form.useForm();
  const [superUserVideoTutorials, setSuperUserVideoTutorials] = useState({});
  const [createSuperUserTutorialsSkeleton, setCreateSuperUserTutorialsSkeleton] = useState(true);


  /**
   * The Form Initial values
   */
  const initialValues = {
    policies_screen: {
      listing_video_url: '',
      view_video_url: '',
    },
    active_staff_members_screen: {
      listing_video_url: '',
      create_video_url: '',
      edit_video_url: '',
    },
    inactive_staff_members_screen: {
      inactive_staff_members_video_url: '',
    },

  };


  /**
   * Update/prefill the form fields whenever the related Props/State is updated/effected
   */

useEffect( () => {

    request('/wp/v2/super-user-video-tutorials', {
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

        const super_user_video_tutorials_data = {
              ...initialValues,
              policies_screen: {
                ...initialValues.policies_screen,
                listing_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'policies_screen_listing_video_url') ]?.video_url,
                view_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'policies_screen_view_video_url') ]?.video_url,
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
            };


      setSuperUserVideoTutorials(super_user_video_tutorials_data);

      setCreateSuperUserTutorialsSkeleton(false);

    });

}, []);


  /**
   * Update/prefill the form fields whenever the related policyBundleData State is updated/effected
   */
  useEffect(() => {

    if( superUserVideoTutorials.length === 0 ){
      return;
    }

    console.log('superUserVideoTutorials');
    console.log(superUserVideoTutorials);



    form.setFieldValue(['policies_screen', 'listing_video_url'], superUserVideoTutorials?.policies_screen?.listing_video_url);
    form.setFieldValue(['policies_screen', 'view_video_url'], superUserVideoTutorials?.policies_screen?.view_video_url);
    form.setFieldValue(['active_staff_members_screen', 'listing_video_url'], superUserVideoTutorials?.active_staff_members_screen?.listing_video_url);
    form.setFieldValue(['active_staff_members_screen', 'create_video_url'], superUserVideoTutorials?.active_staff_members_screen?.create_video_url);
    form.setFieldValue(['active_staff_members_screen', 'edit_video_url'], superUserVideoTutorials?.active_staff_members_screen?.edit_video_url);
    form.setFieldValue(['inactive_staff_members_screen', 'inactive_staff_members_video_url'], superUserVideoTutorials?.inactive_staff_members_screen?.inactive_staff_members_video_url);

  }, [superUserVideoTutorials, form]);


  /**
   * The Component Output
   * https://www.developerway.com/posts/react-re-renders-guide
   */



  if (createSuperUserTutorialsSkeleton) {

    return (
        <PageContainer
            header={
              {title: ""}
            }
        >
          <CreateSuperUserTutorialsSkeleton
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
              title="Super User Tutorials"
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

          </ProCard>

        </ProForm>
    );
  }
};

export default CreateSuperUserTutorials;

