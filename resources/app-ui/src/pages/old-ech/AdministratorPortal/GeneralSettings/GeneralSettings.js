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
import GeneralSettingsSkeleton from "@/components/Skeleton/GeneralSettingsSkeleton";


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
        key: 'social_icon_facebook_url',
        value: values?.settings?.social_icon_facebook_url,
      },
      {
        key: 'social_icon_twitter_url',
        value: values?.settings?.social_icon_twitter_url,
      },
      {
        key: 'social_icon_linkedin_url',
        value: values?.settings?.social_icon_linkedin_url,
      },
      {
        key: 'social_icon_youtube_url',
        value: values?.settings?.social_icon_youtube_url,
      },
      {
        key: 'floating_icon_help_url',
        value: values?.settings?.floating_icon_help_url,
      },
      {
        key: 'floating_icon_documentation_url',
        value: values?.settings?.floating_icon_documentation_url,
      },
      {
        key: 'floating_icon_whatsapp_url',
        value: values?.settings?.floating_icon_whatsapp_url,
      },

    ];

    request('/wp/v2/general-settings', {
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

const GeneralSettings = () => {

  /**
   * States of Component
   */
  const {initialState, loading, refresh, setInitialState} = useModel('@@initialState');
  const [form] = Form.useForm();
  const [generalSettings, setGeneralSettings] = useState({});
  const [generalSettingsSkeleton, setGeneralSettingsSkeleton] = useState(true);


  /**
   * The Form Initial values
   */
  const initialValues = {
    settings: {
      social_icon_facebook_url: '',
      social_icon_twitter_url: '',
      social_icon_linkedin_url: '',
      social_icon_youtube_url: '',
      floating_icon_help_url: '',
      floating_icon_documentation_url: '',
      floating_icon_whatsapp_url: '',
    },

  };


  /**
   * Update/prefill the form fields whenever the related Props/State is updated/effected
   */

useEffect( () => {

    request('/wp/v2/general-settings', {
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

        const general_settings_data = {
              ...initialValues,
              settings: {
                ...initialValues.settings,
                social_icon_facebook_url: api_response[api_response.findIndex(settings => settings.key === 'social_icon_facebook_url') ]?.value,
                social_icon_twitter_url: api_response[api_response.findIndex(settings => settings.key === 'social_icon_twitter_url') ]?.value,
                social_icon_linkedin_url: api_response[api_response.findIndex(settings => settings.key === 'social_icon_linkedin_url') ]?.value,
                social_icon_youtube_url: api_response[api_response.findIndex(settings => settings.key === 'social_icon_youtube_url') ]?.value,
                floating_icon_help_url: api_response[api_response.findIndex(settings => settings.key === 'floating_icon_help_url') ]?.value,
                floating_icon_documentation_url: api_response[api_response.findIndex(settings => settings.key === 'floating_icon_documentation_url') ]?.value,
                floating_icon_whatsapp_url: api_response[api_response.findIndex(settings => settings.key === 'floating_icon_whatsapp_url') ]?.value,
              },
            };


      setGeneralSettings(general_settings_data);

      setGeneralSettingsSkeleton(false);

    });

}, []);


  /**
   * Update/prefill the form fields whenever the related policyBundleData State is updated/effected
   */
  useEffect(() => {

    if( generalSettings.length === 0 ){
      return;
    }

    console.log('generalSettings');
    console.log(generalSettings);



    form.setFieldValue(['settings', 'social_icon_facebook_url'], generalSettings?.settings?.social_icon_facebook_url);
    form.setFieldValue(['settings', 'social_icon_twitter_url'], generalSettings?.settings?.social_icon_twitter_url);
    form.setFieldValue(['settings', 'social_icon_linkedin_url'], generalSettings?.settings?.social_icon_linkedin_url);
    form.setFieldValue(['settings', 'social_icon_youtube_url'], generalSettings?.settings?.social_icon_youtube_url);
    form.setFieldValue(['settings', 'floating_icon_help_url'], generalSettings?.settings?.floating_icon_help_url);
    form.setFieldValue(['settings', 'floating_icon_documentation_url'], generalSettings?.settings?.floating_icon_documentation_url);
    form.setFieldValue(['settings', 'floating_icon_whatsapp_url'], generalSettings?.settings?.floating_icon_whatsapp_url);

  }, [generalSettings, form]);


  /**
   * The Component Output
   * https://www.developerway.com/posts/react-re-renders-guide
   */




  if (generalSettingsSkeleton) {

    return (
        <PageContainer
            header={
              {title: ""}
            }
        >
          <GeneralSettingsSkeleton
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
              title="General Settings"
              bordered
              headerBordered
              // collapsible
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
                title={'Social Icons:'}
            >
              <ProFormText
                  name={['settings', 'social_icon_facebook_url']}
                  // value={subject}
                  label="Facebook URL"
                  // tooltip="The legal name"
                  placeholder=""
                  // rules={[{required: true}]}
                  colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
              />
              <ProFormText
                  name={['settings', 'social_icon_twitter_url']}
                  // value={subject}
                  label="Twitter URL"
                  // tooltip="The legal name"
                  placeholder=""
                  // rules={[{required: true}]}
                  colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
              />
              <ProFormText
                  name={['settings', 'social_icon_linkedin_url']}
                  // value={subject}
                  label="Linkedin URL"
                  // tooltip="The legal name"
                  placeholder=""
                  // rules={[{required: true}]}
                  colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
              />
              <ProFormText
                  name={['settings', 'social_icon_youtube_url']}
                  // value={subject}
                  label="Youtube URL"
                  // tooltip="The legal name"
                  placeholder=""
                  // rules={[{required: true}]}
                  colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
              />
            </ProForm.Group>

            <ProForm.Group
                size={24}
                title={'Floating Icons:'}
            >
              <ProFormText
                  name={['settings', 'floating_icon_help_url']}
                  // value={subject}
                  label="Help URL"
                  // tooltip="The legal name"
                  placeholder=""
                  // rules={[{required: true}]}
                  colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
              />
              <ProFormText
                  name={['settings', 'floating_icon_documentation_url']}
                  // value={subject}
                  label="Documentation URL"
                  // tooltip="The legal name"
                  placeholder=""
                  // rules={[{required: true}]}
                  colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
              />
              <ProFormText
                  name={['settings', 'floating_icon_whatsapp_url']}
                  // value={subject}
                  label="WhatsApp URL"
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

export default GeneralSettings;

