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
import {PlusOutlined, UploadOutlined, UserOutlined} from '@ant-design/icons';

import {createUser, getUser, getUsers, putUser} from "@/services/wp-api/User";
import {request} from '@umijs/max';
import {date, datetime} from "mockjs/src/mock/random/date";
import moment from 'moment';
import {FormattedMessage, history, useModel, useParams} from "@@/exports";
import React, {useEffect, useState, useMemo} from "react";
import {getEchPolicy} from "@/services/wp-api/EchPolicy";
import UpdateSuperUserSkeleton from "@/components/Skeleton/UpdateSuperUserSkeleton";
import {createCategory} from "@/services/wp-api/Category";
import UpdatePolicyBundleSkeleton from "@/components/Skeleton/UpdatePolicyBundleSkeleton";


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
  policy_bundle: {
    name: '',
    // slug: '',
    description: '',
  }
};

/**
 * Form Submission handler and API Request Performer
 */
const onFinishHandlerForm = async (policyBundleId, values) => {
  console.log('onFinishHandlerForm');
  console.log('Received values of form: ', values);

  /**
   * API Request
   */

  // try {
  //
  //   const request_data = {
  //     organization_id: values?.organization_id,
  //     email_notification_id: values?.email_notification_id,
  //     status: values?.status,
  //     subject: values?.subject,
  //     body: values?.body,
  //   };
  //
  //   request('/wp/v2/email-notification', {
  //     method: 'POST',
  //     data: request_data,
  //   }).then(async (api_response) => {
  //     console.log('post-email-notification = api_response');
  //     console.log(api_response);
  //
  //     if (api_response.success) {
  //       console.log('setup-wizard = api_response - 01');
  //       await message.success('Submitted successfully');
  //     }
  //
  //   }).catch(function (error) {
  //     console.log(error);
  //   });
  //
  //
  // } catch (api_response) {
  //   console.log('api_response - error');
  //   console.log(api_response);
  //   // history.push(loginPath);
  // }


  try {
    const request_data = {
      id: policyBundleId,
      name: values?.policy_bundle?.name,
      // slug: values?.policy_bundle?.slug,
      description: values?.policy_bundle?.description,
    };

    request('/wp/v2/ech_policy_bundles/' + policyBundleId, {
      method: 'PUT',
      // id: policyBundleId,
      data: request_data,
    }).then((api_response) => {
      console.log('api_response');
      console.log(api_response);
      /**
       * Policy Bundle Created then show message and redirect to listing screen
       */
      if (api_response?.id > 0) {
        message.success('Submitted successfully');
        // history.push('/super-users/list');
        history.push('/administrator/policies-bundles/edit/' + api_response?.id);
      }
    });
  } catch (api_response) {
    console.log('api_response - error');
    console.log(api_response);
    // history.push(loginPath);
  }

  return true;
};

const UpdatePolicyBundle = () => {

  /**
   * States of Component
   */
  const {initialState, loading, refresh, setInitialState} = useModel('@@initialState');
  const params = useParams();
  // const [userId, setUserId] = useState(0);
  const [policyBundleId, setPolicyBundleId] = useState(0);
  const [form] = Form.useForm();
  const [policyBundleData, setPolicyBundleData] = useState({});
  // const [superUserProfileImageUrl, setSuperUserProfileImageUrl] = useState('');
  // const [superUserData, setSuperUserData] = useState({});
  // const [updateSuperUserSkeleton, setUpdateSuperUserSkeleton] = useState(true);
  const [updateSuperUserRequestEditButton, setUpdateSuperUserRequestEditButton] = useState(true);
  const [tabContentLoading, setTabContentLoading] = useState(true);
  const [updatePolicyBundleSkeleton, setUpdatePolicyBundleSkeleton] = useState(true);


  /**
   * Update the policyBundleId State individually whenever the related State/Params is updated/effected
   */
  useEffect(() => {
    setPolicyBundleId(params.id);
  }, [params]); //empty dependency array so it only runs once at render


  /**
   * Update the PolicyBundleData state whenever the related userId State is updated/effected
   */
  useEffect(() => {
    if (policyBundleId === 0) {
      return;
    }

    /**
     * Start - Policy Bundle Data Request
     */

     request('/wp/v2/ech_policy_bundles/' + policyBundleId, {
      method: 'GET',
      // context: 'edit',
      // data: {},
      params: {
        // id: policyBundleId,
        context: 'edit',
        // sort: {...sort},
        // pagination: {...params},
      },
    }).then((api_response) => {

      console.log('api_response');
      console.log(api_response);

      const policy_bundle_data = {
        ...initialValues,
        policy_bundle: {
          ...initialValues.policy_bundle,
          name: api_response?.name,
          // slug: api_response?.slug,
          description: api_response?.description,
        },
      };

      console.log('policy_bundle_data');
      console.log(policy_bundle_data);
      setPolicyBundleData(policy_bundle_data);

      setUpdatePolicyBundleSkeleton(false);

    });

    /**
     * End - Super User Data Request
     */


  }, [policyBundleId]);


  /**
   * Update/prefill the form fields whenever the related policyBundleData State is updated/effected
   */
  useEffect(() => {
    form.setFieldValue(['policy_bundle', 'name'], policyBundleData?.policy_bundle?.name);
    // form.setFieldValue(['policy_bundle', 'slug'], policyBundleData?.policy_bundle?.slug);
    form.setFieldValue(['policy_bundle', 'description'], policyBundleData?.policy_bundle?.description);
  }, [policyBundleData, form]);


  /**
   * Update/prefill the form fields whenever the related Props/State is updated/effected
   */



  /**
   * The Component Output
   * https://www.developerway.com/posts/react-re-renders-guide
   */


  if (updatePolicyBundleSkeleton) {

    return (
        <PageContainer
            header={
              {title: ""}
            }
        >
          <UpdatePolicyBundleSkeleton
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
              /**
               * Add Organization ID and Email ID nto the form Values
               */
              values.organization_id = initialState?.currentUser?.meta?.ech_organization_id;
              await waitTime(1000);
              await onFinishHandlerForm(policyBundleId, values);
            }}
            formProps={{
              validateMessages: {
                required: 'This is required',
              },
            }}
            submitter={{
              resetButtonProps: {
                style: {
                  // Hide the reset button
                  display: 'none',
                },
              },
              searchConfig: {
                // resetText: 'Reset',
                submitText: 'Update Policy Bundle',
              },
              // render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>,
              // render: (_, dom) => {dom},
            }}
        >

          <ProCard
              // loading={tabContentLoading}
              title="Policies Bundles"
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
              extra={
                <Button
                    type="primary"
                    key="primary"
                    onClick={() => {
                      // handleModalOpen(true);
                      history.push('/administrator/policies-bundles/new');
                    }}
                >
                  <PlusOutlined/> <FormattedMessage id="pages.organizationTable.new" defaultMessage="New"/>
                </Button>
              }
          >
            <ProForm.Group size={24}>
              {/*<ProFormSwitch*/}
              {/*  name='status'*/}
              {/*  label="Status"*/}
              {/*  tooltip="The legal name"*/}
              {/*  // noStyle*/}
              {/*  checkedChildren={'On'}*/}
              {/*  unCheckedChildren={'Off'}*/}
              {/*  fieldProps={{*/}
              {/*    // prefix: <UserOutlined/>,*/}
              {/*    // size: 'large',*/}

              {/*    onChange: (checked, event) => {*/}
              {/*      console.log(' Request Edit - checked');*/}
              {/*      console.log(checked);*/}

              {/*      if (checked === true) {*/}
              {/*        setUpdateSuperUserRequestEditButton(false);*/}
              {/*      } else {*/}
              {/*        setUpdateSuperUserRequestEditButton(true);*/}
              {/*      }*/}

              {/*    }*/}
              {/*  }}*/}
              {/*  // size={'large'}*/}
              {/*/>*/}
              <ProFormText
                  name={['policy_bundle', 'name']}
                  // value={subject}
                  label="Name"
                  tooltip="The legal name"
                  placeholder="please enter your legal name"
                  rules={[{required: true}]}
                  // disabled={updateSuperUserRequestEditButton}
                  colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
              />
              {/*<ProFormText*/}
              {/*  name={['policy_bundle', 'slug']}*/}
              {/*  // value={subject}*/}
              {/*  label="Slug"*/}
              {/*  tooltip="The legal name"*/}
              {/*  placeholder="please enter your legal name"*/}
              {/*  rules={[{required: true}]}*/}
              {/*  // disabled={updateSuperUserRequestEditButton}*/}
              {/*  colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}*/}
              {/*/>*/}
              <ProFormTextArea
                  name={['policy_bundle', 'description']}
                  label="Description"
                  tooltip="The legal name"
                  placeholder="Share a little biographical information to fill out your profile. This may be shown publicly. "
                  // disabled={updateSuperUserRequestEditButton}
                  colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
              />
            </ProForm.Group>
          </ProCard>

        </ProForm>
    );
  }
};

export default UpdatePolicyBundle;

