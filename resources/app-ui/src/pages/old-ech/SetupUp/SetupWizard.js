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
  ProFormGroup, PageHeader, ProFormRadio, ModalForm,
} from '@ant-design/pro-components';
import {Steps, Row, Col, Space, message, Button, Form, Image, Tour, FloatButton} from 'antd';
import {
  UserOutlined,
  UploadOutlined,
  CustomerServiceOutlined,
  CommentOutlined,
  QuestionCircleOutlined,
  WhatsAppOutlined,
  SkypeOutlined, VideoCameraOutlined
} from '@ant-design/icons';

import {createEchOrganization, getEchOrganization, getEchOrganizations} from '@/services/wp-api/EchOrganization';
import {getEchPolicies} from "@/services/wp-api/EchPolicy";
import {useModel} from "@@/exports";
import {getEchCustomerPolicies, getEchCustomerPolicy} from "@/services/wp-api/EchCustomerPolicy";
import {createUser, getUser, getUsers} from "@/services/wp-api/User";
import React, {useState, useEffect, useRef} from "react";
// import moment from "moment/moment";
import {request, Link} from '@umijs/max';

// // create a BrowserHistory
// import {createBrowserHistory} from '@umijs/max';
// const history = createBrowserHistory({forceRefresh: true});

import { history } from '@umijs/max';

// // create a HashHistory
// import {createHashHistory} from '@umijs/max';
//
// const history = createHashHistory();

import {errorConfig} from '../../requestErrorConfig';
import VideoTutorialIframe from "@/components/VideoTutorialsIframes/VideoTutorialIframe";

const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};


const onFinishHandlerStepsForm = async (values) => {
  console.log('onFinishHandlerStepsForm');
  console.log('Received values of form: ', values);

  const request_data = {
    title: values?.organization?.step_01?.organization_details?.name,
    status: 'publish',
    meta: {
      ech_organization_trading_name: values?.organization?.step_01?.organization_details?.trading_name,
      ech_organization_type: values?.organization?.step_01?.organization_details?.type,
      ech_organization_registration_no: values?.organization?.step_01?.organization_details?.registration_number,
      ech_organization_phone: values?.organization?.step_01?.contact_details?.phone_number,
      ech_organization_email: values?.organization?.step_01?.contact_details?.email,
      ech_organization_website: values?.organization?.step_01?.contact_details?.website,
      ech_organization_contact_person: values?.organization?.step_01?.contact_details?.person,
      // ech_organization_customer_policies: values?.organization?.step_02?.policies,
      ech_organization_super_users: values?.organization?.step_03?.super_users,
      ech_organization_staff_members: values?.organization?.step_04?.staff_members,
      ech_organization_logo_url: values?.organization?.step_01?.organization_details?.organization_logo,

      ech_organization_door_no: values?.organization?.step_01?.address_details?.door_no,
      ech_organization_building_name: values?.organization?.step_01?.address_details?.building_name,
      ech_organization_street_line_01: values?.organization?.step_01?.address_details?.street_line_01,
      ech_organization_street_line_02: values?.organization?.step_01?.address_details?.street_line_02,
      ech_organization_city_town: values?.organization?.step_01?.address_details?.city_town,
      ech_organization_county: values?.organization?.step_01?.address_details?.county,
      ech_organization_post_code: values?.organization?.step_01?.address_details?.post_code,

      ech_organization_nominated_individual_first_name: values?.organization?.step_02?.nominated_individual_details?.first_name,
      ech_organization_nominated_individual_middle_name: values?.organization?.step_02?.nominated_individual_details?.middle_name,
      ech_organization_nominated_individual_last_name: values?.organization?.step_02?.nominated_individual_details?.last_name,
      ech_organization_nominated_individual_email: values?.organization?.step_02?.nominated_individual_details?.email,
      ech_organization_nominated_individual_phone: values?.organization?.step_02?.nominated_individual_details?.phone,

      ech_organization_registered_manager_first_name: values?.organization?.step_02?.registered_manager_details?.first_name,
      ech_organization_registered_manager_middle_name: values?.organization?.step_02?.registered_manager_details?.middle_name,
      ech_organization_registered_manager_last_name: values?.organization?.step_02?.registered_manager_details?.last_name,
      ech_organization_registered_manager_email: values?.organization?.step_02?.registered_manager_details?.email,
      ech_organization_registered_manager_phone: values?.organization?.step_02?.registered_manager_details?.phone,

      ech_organization_data_protection_officer_first_name: values?.organization?.step_02?.data_protection_officer_details?.first_name,
      ech_organization_data_protection_officer_middle_name: values?.organization?.step_02?.data_protection_officer_details?.middle_name,
      ech_organization_data_protection_officer_last_name: values?.organization?.step_02?.data_protection_officer_details?.last_name,
      ech_organization_data_protection_officer_email: values?.organization?.step_02?.data_protection_officer_details?.email,
      ech_organization_data_protection_officer_phone: values?.organization?.step_02?.data_protection_officer_details?.phone,
      ech_organization_data_protection_officer_regulated_activity: values?.organization?.step_02?.data_protection_officer_details?.regulated_activity,

      ech_organization_local_authority_authority_name: values?.organization?.step_02?.local_authority_details?.authority_name,
      ech_organization_local_authority_safeguarding_officer_name: values?.organization?.step_02?.local_authority_details?.safeguarding_officer_name,
      ech_organization_local_authority_role_department: values?.organization?.step_02?.local_authority_details?.role_department,
      ech_organization_local_authority_information_link: values?.organization?.step_02?.local_authority_details?.information_link,
      ech_organization_local_authority_phone_number: values?.organization?.step_02?.local_authority_details?.phone_number,

    },
  };

  request('/wp/v2/setup-wizard', {
    method: 'POST',
    data: request_data,
  }).then(async (api_response) => {
    console.log('setup-wizard = api_response');
    console.log(api_response);

    if (api_response.success) {
      console.log('setup-wizard = api_response - 01');
      // async () => {
      console.log('setup-wizard = api_response - 02');
      await waitTime(3000);
      console.log('setup-wizard = api_response - 03');
      await message.success('Submitted successfully');
      console.log('setup-wizard = api_response - 04');
      history.go(0);
      // history.push('/organization');
      // history.replace('/organization');
      // window.location.replace(window.location.protocol + '//' + window.location.host + window.location.pathname + '#/organization');
      console.log('setup-wizard = api_response - 05');
      // window.location.href = '/app/#/organization';
      // }
    }

  }).catch(function (error) {
    console.log(error);
  });


};


const SetupWizard = () => {

  const {initialState, loading, refresh, setInitialState} = useModel('@@initialState');

  console.log('initialState');
  console.log(initialState);

  // const [availablePolicies, setAvailablePolicies] = useState([]);
  const [availableSuperUsers, setAvailableSuperUsers] = useState([]);
  const [availableStaffMembers, setAvailableStaffMembers] = useState([]);
  const [organizationLogoUrl, setOrganizationLogoUrl] = useState('data:image/png;base64,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');
  const [organizationSelectedType, setOrganizationSelectedType] = useState('');
  const [organizationRegulatedActivity, setOrganizationRegulatedActivity] = useState('');
  const [maxStaffCount, setMaxStaffCount] = useState(0);



  /**
   * Start By Mairaj
   */

  const [setupWizardVideoTutorials, setSetupWizardVideoTutorials] = useState({});
  const [setupWizardVideoTutorialModelOpen, setSetupWizardVideoTutorialModelOpen] = useState(false);
  /**
   * End By Mairaj
   */



  /**
   * Dynamically set the form field value
   *
   * https://github.com/ant-design/ant-design/issues/22372#issuecomment-1666849022
   * https://github.com/ant-design/ant-design/issues/28405#issuecomment-1303011396
   * https://ant.design/components/form#components-form-demo-usewatch:~:text=You%20cannot%20set%20value%20for%20each%20form%20control%20via%20value%20or%20defaultValue%20prop%2C
   */
  /**
   * https://ant.design/components/form#formuseform
   */
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldValue(['organization', 'step_01', 'organization_details', 'organization_logo'], organizationLogoUrl);
  }, [organizationLogoUrl, form]);

  useEffect(() => {
    form.setFieldValue(['organization', 'step_01', 'address_details', 'street_line_01'], initialState?.currentUser?.meta?.ech_street_address_line_1);
    form.setFieldValue(['organization', 'step_01', 'address_details', 'street_line_02'], initialState?.currentUser?.meta?.ech_street_address_line_2);
    form.setFieldValue(['organization', 'step_01', 'address_details', 'city_town'], initialState?.currentUser?.meta?.ech_city);
    form.setFieldValue(['organization', 'step_01', 'address_details', 'county'], initialState?.currentUser?.meta?.ech_state_county);
    form.setFieldValue(['organization', 'step_01', 'address_details', 'post_code'], initialState?.currentUser?.meta?.ech_postcode_zip);


    console.log('ech_setup_wizard - data');
    // meta?.ech_setup_wizard
    console.log(initialState?.currentUser?.meta?.ech_setup_wizard?.[0]?.quantity);
    setMaxStaffCount(initialState?.currentUser?.meta?.ech_setup_wizard?.[0]?.quantity);

  }, [initialState, form]);


  const initialValues = {
    organization: {
      step_01: {
        organization_details: {
          organization_logo: '',
          name: '',
          trading_name: '',
          type: '',
          registration_number: '',
        },
        contact_details: {
          phone_number: '',
          email: '',
          website: '',
          // person: ['Wu Jiahao', 'Zhou Xingxing'],
          person: '',
        },
        address_details: {
          door_no: '',
          building_name: '',
          street_line_01: '',
          street_line_02: '',
          city_town: '',
          county: '',
          post_code: '',
        },
      },
      step_02: {
        nominated_individual_details: {
          first_name: '',
          middle_name: '',
          last_name: '',
          email: '',
          phone: '',
        },
        registered_manager_details: {
          first_name: '',
          middle_name: '',
          last_name: '',
          email: '',
          phone: '',
        },
        data_protection_officer_details: {
          first_name: '',
          middle_name: '',
          last_name: '',
          email: '',
          phone: '',
          regulated_activity: '',
        },
        local_authority_details: {
          authority_name: '',
          safeguarding_officer_name: '',
          role_department: '',
          information_link: '',
          phone_number: '',
        }
      },
      step_03: {
        super_users: [
          // { super_user_id: '', super_user_status: ''},
          {
            super_user_id: 0,
            first_name: '',
            last_name: '',
            username: '',
            email: '',
            password: '',
          },
        ],
      },
      step_04: {
        staff_members: [
          // { staff_member_id: '', staff_member_status: ''},
          {
            staff_member_id: 0,
            first_name: '',
            last_name: '',
            username: '',
            email: '',
            password: '',
          },
        ],
      },
    },
  };


  return (
    <PageContainer
      loading={loading}
      // loading={{
      //     spinning: true,
      //     className: 'customClassName',
      //     tip: 'Testing Loading ...',
      // }}
      header={
        {title: ""}
      }
    >
      <StepsForm
        onFinish={async (values) => {
          console.log(values);
          await waitTime(1000);
          onFinishHandlerStepsForm(values);
        }}
        formProps={{
          validateMessages: {
            required: 'This is required',
          },
        }}
        submitter={{
          render: (_, dom) => {
            return (<FooterToolbar>{dom}</FooterToolbar>)
          },
        }}
        // stepsRender={(steps,dom) => {
        //   console.log('stepsRender');
        //   console.log('steps');
        //   console.log(steps);
        //   console.log('dom');
        //   console.log(dom);
        // }}
        // stepFormRender={(form) => {
        //   console.log('stepFormRender');
        //   console.log('form');
        //   console.log(form);
        // }}
        // You can use the stepsRender attribute to customize the step bar, refer to the following
        stepsRender={(steps, dom) => {
          console.log('steps');
          console.log(steps);
          console.log('dom');
          console.log(dom);
          console.log('current');
          console.log(dom?.props?.children?.props?.current);
          // According to the business logic, keep 3 steps
          if (organizationSelectedType === 'nursing-agency') {
            return (
              // current={0} dom.props.children.current
              <Steps current={dom?.props?.children?.props?.current}>
                {[
                  {key: "business_details", title: "Business Details"},
                  // { key: "cqc_details", title: "CQC Details" },
                  // { key: "policies", title: "Policies" },
                  {key: "super_users", title: "Super Users"},
                  {Key: "staff_members", title: "Staff members"}
                ].map((item) => (
                  <Steps.Step key={item.key} title={item.title}/>
                ))}
              </Steps>
            );

          } else {
            return (
              // current={0} dom.props.children.current
              <Steps current={dom?.props?.children?.props?.current}>
                {[
                  {key: "business_details", title: "Business Details"},
                  {key: "cqc_details", title: "CQC Details"},
                  // { key: "policies", title: "Policies" },
                  {key: "super_users", title: "Super Users"},
                  {Key: "staff_members", title: "Staff members"}
                ].map((item) => (
                  <Steps.Step key={item.key} title={item.title}/>
                ))}
              </Steps>
            );
          }
          // return 4 steps by default
          return dom;
        }}
      >

        <StepsForm.StepForm
          name="business_details"
          title="Business Details"
          onFinish={async () => {
            await waitTime(2000);
            return true;
          }}
          layout='vertical'
          grid={true}
          initialValues={initialValues}
          form={form}
        >
          <ProCard
            title="Organisation Details"
            bordered
            headerBordered
            collapsible
            size="default"
            type="default"
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
              <Col span={8}>

                <ProForm.Group size={24}>
                  <Col span={24}>
                    <Image
                      width='100%'
                      height={150}
                      src={organizationLogoUrl}
                      fallback="data:image/png;base64,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"
                    />
                  </Col>
                  <Col span={24} style={{'textAlign': 'center'}}>
                    <Button
                      type="primary"
                      icon={<UploadOutlined/>}
                      // loading={loadings[1]}
                      style={{'margin': '10px 0px 0px 0px'}}
                      // onClick={
                      //
                      //   (event) => {
                      //     // wp media call
                      //     console.log('ldugl - logo-uploader');
                      //
                      //     let file_frame; // variable for the wp.media file_frame
                      //     // if the file_frame has already been created, just reuse it
                      //     if ( file_frame ) {
                      //       console.log('ldugl - logo-uploader - case 01');
                      //       file_frame.open();
                      //       return;
                      //     }else{
                      //       console.log('ldugl - logo-uploader - case 02');
                      //     }
                      //
                      //     file_frame = wp.media.frames.file_frame = wp.media({
                      //       // title: $( this ).data( 'uploader_title' ),
                      //       title: event?.target?.getAttribute( 'data-uploader_title' ),
                      //       button: {
                      //         // text: $( this ).data( 'uploader_button_text' ),
                      //         text: event?.target?.getAttribute( 'data-uploader_button_text' ),
                      //       },
                      //       multiple: false // set this to true for multiple file selection
                      //     });
                      //
                      //     file_frame.on( 'select', function() {
                      //       console.log('image is selected');
                      //
                      //       let attachment = file_frame.state().get('selection').first().toJSON();
                      //       console.log('attachment');
                      //       console.log(attachment);
                      //       setOrganizationLogoUrl(attachment?.url);
                      //     });
                      //
                      //     file_frame.on('open',function() {
                      //       // Do something
                      //       console.log('file_frame is opened');
                      //       // $('.ldugl-group-logo-uploader-wraper-overlay').removeClass('hidden');
                      //     });
                      //
                      //
                      //     file_frame.on('close',function() {
                      //       // Do something
                      //       console.log('file_frame is closed');
                      //       // $('.ldugl-group-logo-uploader-wraper-overlay').addClass('hidden');
                      //     });
                      //
                      //     file_frame.open();
                      //
                      //   } }

                      onClick={

                        (event) => {
                          // wp media call
                          console.log('ldugl - logo-uploader');

                          let file_frame; // variable for the wp.media file_frame
                          // if the file_frame has already been created, just reuse it
                          if (file_frame) {
                            console.log('ldugl - logo-uploader - case 01');
                            file_frame.open();
                            return;
                          } else {
                            console.log('ldugl - logo-uploader - case 02');
                          }

                          file_frame = wp.media.frames.file_frame = wp.media({
                            // title: $( this ).data( 'uploader_title' ),
                            title: 'The Organisation Logo Uploader',
                            button: {
                              // text: $( this ).data( 'uploader_button_text' ),
                              text: 'Upload Organisation Logo',
                            },
                            multiple: false // set this to true for multiple file selection
                          });

                          file_frame.on('select', function () {
                            console.log('image is selected');

                            let attachment = file_frame.state().get('selection').first().toJSON();
                            console.log('attachment');
                            console.log(attachment);
                            setOrganizationLogoUrl(attachment?.url);
                          });

                          file_frame.on('open', function () {
                            // Do something
                            console.log('file_frame is opened');
                            // $('.ldugl-group-logo-uploader-wraper-overlay').removeClass('hidden');
                          });


                          file_frame.on('close', function () {
                            // Do something
                            console.log('file_frame is closed');
                            // $('.ldugl-group-logo-uploader-wraper-overlay').addClass('hidden');
                          });

                          file_frame.open();

                        }}

                    >
                      Change Logo!
                    </Button>

                    <ProFormText
                      name={['organization', 'step_01', 'organization_details', 'organization_logo']}
                      label="Organization Logo URL"
                      tooltip="The legal name of the organization"
                      placeholder="please enter your organization legal name"
                      hidden={true}
                    />
                  </Col>
                </ProForm.Group>
              </Col>
              <Col span={16}>
                <ProForm.Group size={24}>
                  <ProFormText
                    name={['organization', 'step_01', 'organization_details', 'name']}
                    label="Name"
                    tooltip="Name of the business as per Companies House register"
                    placeholder="Please type company name"
                    rules={[{required: true, message: 'Please provide the company name'}]}
                    // initialValue="Testing Title of organization..."
                    // fieldProps={{
                    //   prefix: <UserOutlined />,
                    //   size: 'large',
                    //   // onChange: (e) => {
                    //   //   console.log('e.target.value');
                    //   //   console.log(e.target.value);
                    //   // }
                    // }}
                    colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                  />
                  <ProFormText
                    name={['organization', 'step_01', 'organization_details', 'trading_name']}
                    label="Trading Name"
                    tooltip="Trading under a different name? Please tell us the trading name. Retype the company name if it is the same as per Companies House."
                    placeholder="Please type company trading name"
                    // rules={[{ required: true }]}
                    // initialValue="Testing Title of organization..."
                    // fieldProps={{
                    //   prefix: <UserOutlined />,
                    //   size: 'large',
                    //   // onChange: (e) => {
                    //   //   console.log('e.target.value');
                    //   //   console.log(e.target.value);
                    //   // }
                    // }}
                    colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                  />
                </ProForm.Group>
                <ProForm.Group size={24}>
                  <ProFormSelect
                    name={['organization', 'step_01', 'organization_details', 'type']}
                    label="Type"
                    showSearch
                    debounceTime={300}
                    colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                    tooltip="Company business type"
                    placeholder='Select business type'
                    options={[
                      {
                        label: 'Nursing Agency',
                        value: 'nursing-agency',
                      },
                      {
                        label: 'Domiciliary Care',
                        value: 'domiciliary-care',
                      },
                      {
                        label: 'Nursing Agency and Domiciliary Care (Combined)',
                        value: 'nursing-agency-and-domiciliary-care-combined',
                      },
                      {
                        label: 'Supported Living',
                        value: 'supported-living',
                      },
                    ]}
                    // rules={[{ required: true, message: 'Please select your organization type!' }]}
                    fieldProps={{
                      onChange: (value) => {
                        console.log('Business Type Changed');
                        console.log('value');
                        console.log(value);

                        setOrganizationSelectedType(value);
                      }
                    }}
                  />
                  <ProFormText
                    label="Registration No"
                    name={['organization', 'step_01', 'organization_details', 'registration_number']}
                    tooltip="Company registeraion number"
                    placeholder="5453-763876-7686"
                    // maxLength={20}
                    // min={1}
                    // max={10}
                    // fieldProps={{ precision: 0 }}
                    colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                  />
                </ProForm.Group>
              </Col>
            </Row>
          </ProCard>

          <ProCard
            title="Contact Details"
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
              <ProFormText
                label="Phone No."
                name={['organization', 'step_01', 'contact_details', 'phone_number']}
                tooltip="Company phone number"
                placeholder="+2974837487 etc."
                // min={1}
                // max={10}
                fieldProps={{precision: 0}}
                colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
              />
              <ProFormText
                label="Email"
                name={['organization', 'step_01', 'contact_details', 'email']}
                tooltip="Company email address"
                placeholder="info@example.com etc."
                // rules={[{ required: true }]}
                colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
              />
            </ProForm.Group>
            <ProForm.Group size={24}>
              <ProFormText
                label="Website"
                name={['organization', 'step_01', 'contact_details', 'website']}
                tooltip="Company website url"
                placeholder="http://example.com"
                // rules={[{ required: true }]}
                colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
              />
              <ProFormText
                name={['organization', 'step_01', 'contact_details', 'person']}
                label="Contact Person"
                tooltip="Company contact person name"
                placeholder="Jhon Smith etc"
                colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                // fieldProps={{
                //   mode: 'tags',
                // }}
                // initialValue={['Wu Jiahao', 'Zhou Xingxing']}
                // options={['Wu Jiahao', 'Zhou Xingxing', 'Chen Lafeng'].map((item) => ({
                //   label: item,
                //   value: item,
                // }))}
              />
            </ProForm.Group>
          </ProCard>
          <ProCard
            title="Address Details"
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
              <ProFormText
                label="Door No"
                name={['organization', 'step_01', 'address_details', 'door_no']}
                tooltip="Company building door number"
                placeholder="123 etc."
                // min={1}
                // max={10}
                // fieldProps={{ precision: 0 }}
                colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
              />
              <ProFormText
                label="Building Name"
                name={['organization', 'step_01', 'address_details', 'building_name']}
                tooltip="Company building name"
                placeholder="E-Care-Hub tower etc."
                // min={1}
                // max={10}
                // fieldProps={{ precision: 0 }}
                colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
              />
            </ProForm.Group>
            <ProForm.Group size={24}>
              <ProFormText
                label="Street Line 1"
                name={['organization', 'step_01', 'address_details', 'street_line_01']}
                tooltip="Company street address"
                placeholder="52 Greyfriars Road"
                // rules={[{ required: true }]}
                colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
              />
              <ProFormText
                label="Street Line 2"
                name={['organization', 'step_01', 'address_details', 'street_line_02']}
                tooltip="Company street address"
                placeholder="52 Greyfriars Road"
                // rules={[{ required: true }]}
                colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
              />
            </ProForm.Group>
            <ProForm.Group size={24}>
              <ProFormText
                label="City/Town"
                name={['organization', 'step_01', 'address_details', 'city_town']}
                tooltip="Company located city or town"
                placeholder="Capel Dewi etc"
                // min={1}
                // max={10}
                // fieldProps={{ precision: 0 }}
                colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
              />
              <ProFormText
                label="County"
                name={['organization', 'step_01', 'address_details', 'county']}
                tooltip="Company located county"
                placeholder="Cornwall etc."
                // min={1}
                // max={10}
                // fieldProps={{ precision: 0 }}
                colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
              />
              <ProFormText
                label="Post Code"
                name={['organization', 'step_01', 'address_details', 'post_code']}
                tooltip="Company location Zip/Post Code"
                placeholder="IP14 6NJ etc."
                // min={1}
                // max={10}
                // fieldProps={{ precision: 0 }}
                colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
              />
            </ProForm.Group>
          </ProCard>
        </StepsForm.StepForm>

        {/* Start - if not nursing agency then show this step form*/}
        {(organizationSelectedType !== 'nursing-agency') &&

          <StepsForm.StepForm
            name="cqc_details"
            title="CQC Details"
            onFinish={async () => {
              await waitTime(2000);
              return true;
            }}
            layout='vertical'
            grid={true}
            // rowProps={{
            //   gutter: [16],
            // }}
            initialValues={initialValues}
          >
            <ProCard
              title="Nominated Individual Details"
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
                <ProFormText
                  label="First Name"
                  name={['organization', 'step_02', 'nominated_individual_details', 'first_name']}
                  tooltip="The nominated individual first name"
                  placeholder="Please type the nominated individual first name"
                  // min={1}
                  // max={10}
                  // fieldProps={{ precision: 0 }}
                  colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                />
                <ProFormText
                  label="Middle Name"
                  name={['organization', 'step_02', 'nominated_individual_details', 'middle_name']}
                  tooltip="The nominated individual middle name"
                  placeholder="Please type the nominated individual middle name"
                  // min={1}
                  // max={10}
                  // fieldProps={{ precision: 0 }}
                  colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                />
                <ProFormText
                  label="Last Name"
                  name={['organization', 'step_02', 'nominated_individual_details', 'last_name']}
                  tooltip="The nominated individual last name"
                  placeholder="Please type the nominated individual last name"
                  // min={1}
                  // max={10}
                  // fieldProps={{ precision: 0 }}
                  colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                />
              </ProForm.Group>
              <ProForm.Group size={24}>
                <ProFormText
                  label="Email"
                  name={['organization', 'step_02', 'nominated_individual_details', 'email']}
                  tooltip="The nominated individual email"
                  placeholder="Please type the nominated individual email"
                  // rules={[{ required: true }]}
                  colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                />
                <ProFormText
                  label="Phone No."
                  name={['organization', 'step_02', 'nominated_individual_details', 'phone']}
                  tooltip="The nominated individual phone"
                  placeholder="Please type the nominated individual phone"
                  // rules={[{ required: true }]}
                  colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                />
              </ProForm.Group>
            </ProCard>
            <ProCard
              title="Registered Manager Details"
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
                <ProFormText
                  label="First Name"
                  name={['organization', 'step_02', 'registered_manager_details', 'first_name']}
                  tooltip="The registered manager first name"
                  placeholder="Please type the registered manager first name"
                  // min={1}
                  // max={10}
                  // fieldProps={{ precision: 0 }}
                  colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                />
                <ProFormText
                  label="Middle Name"
                  name={['organization', 'step_02', 'registered_manager_details', 'middle_name']}
                  tooltip="The registered manager middle name"
                  placeholder="Please type the registered manager middle name"
                  // min={1}
                  // max={10}
                  // fieldProps={{ precision: 0 }}
                  colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                />
                <ProFormText
                  label="Last Name"
                  name={['organization', 'step_02', 'registered_manager_details', 'last_name']}
                  tooltip="The registered manager last name"
                  placeholder="Please type the registered manager last name"
                  // min={1}
                  // max={10}
                  // fieldProps={{ precision: 0 }}
                  colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                />
              </ProForm.Group>
              <ProForm.Group size={24}>
                <ProFormText
                  label="Email"
                  name={['organization', 'step_02', 'registered_manager_details', 'email']}
                  tooltip="The registered manager email"
                  placeholder="Please type the registered manager email"
                  // rules={[{ required: true }]}
                  colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                />
                <ProFormText
                  label="Phone No."
                  name={['organization', 'step_02', 'registered_manager_details', 'phone']}
                  tooltip="The registered manager phone"
                  placeholder="Please type the registered manager phone"
                  // rules={[{ required: true }]}
                  colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                />
              </ProForm.Group>
            </ProCard>
            <ProCard
              title="Data Protection Officer Details"
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
                <ProFormText
                  label="First Name"
                  name={['organization', 'step_02', 'data_protection_officer_details', 'first_name']}
                  tooltip="The data protection officer first name"
                  placeholder="Please type the data protection officer first name"
                  // min={1}
                  // max={10}
                  // fieldProps={{ precision: 0 }}
                  colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                />
                <ProFormText
                  label="Middle Name"
                  name={['organization', 'step_02', 'data_protection_officer_details', 'middle_name']}
                  tooltip="The data protection officer middle name"
                  placeholder="Please type the data protection officer middle name"
                  // min={1}
                  // max={10}
                  // fieldProps={{ precision: 0 }}
                  colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                />
                <ProFormText
                  label="Last Name"
                  name={['organization', 'step_02', 'data_protection_officer_details', 'last_name']}
                  tooltip="The rdata protection officer last name"
                  placeholder="Please type the data protection officer last name"
                  // min={1}
                  // max={10}
                  // fieldProps={{ precision: 0 }}
                  colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                />
              </ProForm.Group>
              <ProForm.Group size={24}>
                <ProFormText
                  label="Email"
                  name={['organization', 'step_02', 'data_protection_officer_details', 'email']}
                  tooltip="The data protection officer email"
                  placeholder="Please type the data protection officer email"
                  // rules={[{ required: true }]}
                  colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                />
                <ProFormText
                  label="Phone No."
                  name={['organization', 'step_02', 'data_protection_officer_details', 'phone']}
                  tooltip="The data protection officer phone"
                  placeholder="Please type the data protection officer phone"
                  // rules={[{ required: true }]}
                  colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                />
              </ProForm.Group>
              <ProForm.Group size={24}>
                <ProFormSelect
                  name={['organization', 'step_02', 'data_protection_officer_details', 'regulated_activity']}
                  label="Regulated Activity"
                  showSearch
                  debounceTime={300}
                  colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                  tooltip="Data Protection Officer Activity"
                  placeholder='Select regulated activity'
                  options={[
                    {
                      label: 'Personal care',
                      value: 'personal-care',
                    },
                    {
                      label: 'Accommodation for persons who require nursing or personal care',
                      value: 'accommodation-for-persons-who-require-nursing-or-personal-care',
                    },
                    {
                      label: 'Accommodation for persons who require treatment for substance abuse',
                      value: 'accommodation-for-persons-who-require-treatment-for-substance-abuse',
                    },
                    {
                      label: 'Accommodation and nursing or personal care in the further education sector',
                      value: 'accommodation-and-nursing-or-personal-care-in-the-further-education-sector',
                    },
                    {
                      label: 'Treatment of disease, disorder, or injury',
                      value: 'treatment-of-disease-disorder-or-injury',
                    },
                    {
                      label: 'Assessment or medical treatment for persons detained under the Mental Health Act',
                      value: 'assessment-or-medical-treatment-for-persons-detained-under-the-mental-health-act',
                    },
                    {
                      label: 'Surgical procedures',
                      value: 'surgical-procedures',
                    },
                    {
                      label: 'Diagnostic and screening procedures',
                      value: 'diagnostic-and-screening-procedures',
                    },
                    {
                      label: 'Management of supply of blood and blood derived products etc',
                      value: 'management-of-supply-of-blood-and-blood-derived-products-etc',
                    },
                    {
                      label: 'Transport services, triage and medical advice provided remotely',
                      value: 'transport-services-triage-and-medical-advice-provided-remotely',
                    },
                    {
                      label: 'Maternity and midwifery services',
                      value: 'maternity-and-midwifery-services',
                    },
                    {
                      label: 'Termination of pregnancies',
                      value: 'termination-of-pregnancies',
                    },
                    {
                      label: 'Services in slimming clinics',
                      value: 'services-in-slimming-clinics',
                    },
                    {
                      label: 'Nursing care',
                      value: 'nursing-care',
                    },
                    {
                      label: 'Family planning service',
                      value: 'family-planning-service',
                    },
                  ]}
                  // rules={[{ required: true, message: 'Please select your organization type!' }]}
                  fieldProps={{
                    onChange: (value) => {
                      console.log('Regulated Activity Changed');
                      console.log('value');
                      console.log(value);

                      setOrganizationRegulatedActivity(value);
                    }
                  }}
                />
              </ProForm.Group>
            </ProCard>
            <ProCard
              title="Local Authority Details"
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
                <ProFormText
                  label="Authority Name"
                  name={['organization', 'step_02', 'local_authority_details', 'authority_name']}
                  tooltip="The local authority name"
                  placeholder="Please type the local authority name"
                  // min={1}
                  // max={10}
                  // fieldProps={{ precision: 0 }}
                  colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                />
                <ProFormText
                  label="Safeguarding Officer Name"
                  name={['organization', 'step_02', 'local_authority_details', 'safeguarding_officer_name']}
                  tooltip="The safeguarding officer name"
                  placeholder="Please type the safeguarding officer name"
                  // min={1}
                  // max={10}
                  // fieldProps={{ precision: 0 }}
                  colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                />
                <ProFormText
                  label="Role/Department"
                  name={['organization', 'step_02', 'local_authority_details', 'role_department']}
                  tooltip="The Authority Role/Department"
                  placeholder="Please type the Authority Role/Department"
                  // min={1}
                  // max={10}
                  // fieldProps={{ precision: 0 }}
                  colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                />
              </ProForm.Group>
              <ProForm.Group size={24}>
                <ProFormText
                  label="Information link"
                  name={['organization', 'step_02', 'local_authority_details', 'information_link']}
                  tooltip="The Authority Information link"
                  placeholder="Please type the Authority Information link"
                  // rules={[{ required: true }]}
                  colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                />
                <ProFormText
                  label="Phone No."
                  name={['organization', 'step_02', 'local_authority_details', 'phone_number']}
                  tooltip="The Authority Phone number"
                  placeholder="Please type the Authority Phone number"
                  // rules={[{ required: true }]}
                  colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                />
              </ProForm.Group>
            </ProCard>
          </StepsForm.StepForm>

        }
        {/* End - if not nursing agency then show this step form*/}

        {/*<StepsForm.StepForm*/}
        {/*  name="policies"*/}
        {/*  title="Policies"*/}
        {/*  onFinish={async () => {*/}
        {/*    await waitTime(2000);*/}
        {/*    return true;*/}
        {/*  }}*/}
        {/*  layout='vertical'*/}
        {/*  grid={true}*/}
        {/*  // rowProps={{*/}
        {/*  //   gutter: [16],*/}
        {/*  // }}*/}
        {/*  initialValues={initialValues}*/}
        {/*  request={*/}

        {/*    // console.log('testing-request...')*/}

        {/*    // const params = {};*/}
        {/*    // async (params= {} ) => {*/}
        {/*    async (params= {} ) => {*/}

        {/*      console.log('proform-params');*/}
        {/*      console.log(params);*/}

        {/*      if (initialState?.currentUser === 0) {*/}
        {/*        return;*/}
        {/*      }*/}

        {/*      await waitTime(2000);*/}

        {/*      const api_response = await getEchCustomerPolicies(*/}
        {/*        {*/}
        {/*          context: 'edit',*/}
        {/*          author: initialState?.currentUser?.id,*/}
        {/*          per_page: 100,*/}
        {/*          // author: initialState?.data.meta,*/}
        {/*        },*/}
        {/*        {getResponse: true}*/}
        {/*      );*/}

        {/*      console.log('api_response');*/}
        {/*      console.log(api_response);*/}


        {/*      const test_map = api_response.data.map( policies => ( {*/}

        {/*        id: policies.id,*/}
        {/*        title: policies.title.rendered*/}
        {/*        // console.log('element.id');*/}
        {/*        //   console.log(element.id);*/}
        {/*      }));*/}

        {/*      console.log('api_response_01');*/}
        {/*      console.log(api_response.data);*/}

        {/*      console.log('test_map');*/}
        {/*      console.log(test_map);*/}

        {/*      setAvailablePolicies(test_map);*/}

        {/*      return initialValues;*/}
        {/*    }*/}


        {/*  }*/}
        {/*>*/}
        {/*  <ProCard*/}
        {/*    title="Polices Association"*/}
        {/*    bordered*/}
        {/*    headerBordered*/}
        {/*    collapsible*/}
        {/*    size="default"*/}
        {/*    type="default"*/}
        {/*    style={{*/}
        {/*      marginBlockEnd: 15,*/}
        {/*      minWidth: 800,*/}
        {/*      maxWidth: '100%',*/}
        {/*    }}*/}
        {/*    onCollapse={(collapse) => console.log(collapse)}*/}
        {/*  >*/}

        {/*    /!*Start ProForm Dependency Example*!/*/}
        {/*    <ProForm.Group title="Policies" size={24}>*/}
        {/*      <ProFormList*/}
        {/*        name={['organization', 'step_02', 'policies']}*/}
        {/*      >*/}
        {/*        <ProForm.Group key="group" size={24}>*/}
        {/*          <ProFormSelect*/}
        {/*            name='policy_id'*/}
        {/*            label="Policy"*/}
        {/*            colProps={{ xs: 24, sm:24, md: 18, lg: 18, xl: 18 }}*/}
        {/*            options={*/}
        {/*              availablePolicies.map(({id, title}) => (*/}
        {/*                {*/}
        {/*                  value: id,*/}
        {/*                  label: title,*/}
        {/*                }))*/}

        {/*            }*/}
        {/*          />*/}
        {/*        </ProForm.Group>*/}
        {/*      </ProFormList>*/}
        {/*    </ProForm.Group>*/}
        {/*    /!*End ProForm Dependency Example*!/*/}

        {/*  </ProCard>*/}
        {/*</StepsForm.StepForm>*/}

        <StepsForm.StepForm
          name="super_users"
          title="Super Users"
          onFinish={async () => {
            await waitTime(2000);
            return true;
          }}
          layout='vertical'
          grid={true}
          // rowProps={{
          //   gutter: [16],
          // }}
          initialValues={initialValues}
          // request={
          //
          //   // console.log('testing-request...')
          //
          //   // const params = {};
          //   // async (params= {} ) => {
          //   async (params= {} ) => {
          //
          //     console.log('proform_params_super_users');
          //     console.log(params);
          //
          //     if (initialState?.currentUser == 0) {
          //       return;
          //     }
          //
          //     await waitTime(2000);
          //
          //     const api_response = await getUsers(
          //       {
          //         context: 'edit',
          //         // id: params?.user_id,
          //         // capabilities: 'ech_super_admin',
          //         roles: 'ech_super_user',
          //         per_page: 100,
          //         // author: initialState?.currentUser?.id,
          //         // author: initialState?.data.meta,
          //       },
          //       {getResponse: true}
          //     );
          //
          //     console.log('api_response_super_users');
          //     console.log(api_response);
          //
          //
          //     const test_map = api_response.data.map( super_users => ( {
          //
          //       id: super_users.id,
          //       name: super_users.name
          //       // console.log('element.id');
          //       //   console.log(element.id);
          //     }));
          //
          //     console.log('api_response_super_users_01');
          //     console.log(api_response.data);
          //
          //     console.log('test_map_super_users');
          //     console.log(test_map);
          //
          //     setAvailableSuperUsers(test_map);
          //
          //     return initialValues;
          //   }
          //
          //
          // }
        >
          <ProCard
            title="Super Users Association:"
            bordered
            headerBordered
            collapsible
            size="default"
            type="default"
            style={{
              marginBlockEnd: 15,
              // minWidth: '80vw',
              maxWidth: '100%',
            }}
            onCollapse={(collapse) => console.log(collapse)}
          >
            {/*Start ProForm Dependency Example*/}
            <ProForm.Group title="Super Users/ Directors" size={24}>
              <ProFormList
                name={['organization', 'step_03', 'super_users']}
                min={1}
                max={6}
                copyIconProps={{ tooltipText: 'Copy this super user' }}
                deleteIconProps={{ tooltipText: 'Delete this super user' }}
                creatorButtonProps={{
                  creatorButtonText: 'Add New Super User / Director',
                }}
              >
                <ProForm.Group size={24}>
                  <ProFormText
                    name="first_name"
                    label="First Name"
                    tooltip="Type First Name"
                    placeholder="Type First Name"
                    rules={[{ required: true }]}
                    fieldProps={{
                      onChange: (e) => {
                        console.log('e.target.value');
                        console.log(e.target.value);
                      }
                    }}
                    colProps={{xs: 24, sm: 24, md: 4, lg: 4, xl: 4}}
                  />
                  <ProFormText
                    name="last_name"
                    label="Last Name"
                    tooltip="Type Last Name"
                    placeholder="Type Last Name"
                    rules={[{ required: true }]}
                    fieldProps={{
                      onChange: (e) => {
                        console.log('e.target.value');
                        console.log(e.target.value);
                      }
                    }}
                    colProps={{xs: 24, sm: 24, md: 4, lg: 4, xl: 4}}
                  />
                  <ProFormText
                    name="username"
                    label="User Name"
                    tooltip="Type User Name"
                    placeholder="Type User Name"
                    rules={[
                      {required: true},
                      {
                        validator(_, value) {
                          console.log('test-rule');
                          console.log(_);

                          console.log('test-value');
                          console.log(value);

                          return request('/wp/v2/user-validation/username', {
                            method: 'POST',
                            data: {
                              user_name: value,
                            }
                          }).then((api_response) => {
                            console.log('api_response');
                            console.log(api_response);

                            if (api_response === true) {
                              return Promise.resolve();
                            } else {
                              return Promise.reject(new Error('The username is already exist'));
                            }
                          });
                        },
                      },
                    ]}
                    fieldProps={{
                      // prefix: <UserOutlined />,
                      // size: 'large',

                      onChange: (e) => {
                        console.log('e.target.value');
                        console.log(e.target.value);
                      }
                    }}
                    colProps={{xs: 24, sm: 24, md: 4, lg: 4, xl: 4}}
                  />
                  <ProFormText
                    name="email"
                    label="Email"
                    tooltip="Type Email"
                    placeholder="Type Email"
                    rules={[
                      {required: true},
                      {
                        validator(_, value) {
                          console.log('test-rule');
                          console.log(_);

                          console.log('test-value');
                          console.log(value);

                          return request('/wp/v2/user-validation/email', {
                            method: 'POST',
                            data: {
                              user_email: value,
                            }
                          }).then((api_response) => {
                            console.log('api_response');
                            console.log(api_response);

                            if (api_response === true) {
                              return Promise.resolve();
                            } else {
                              return Promise.reject(new Error('The email is already exist'));
                            }
                          });
                        },
                      },
                    ]}
                    fieldProps={{
                      // prefix: <UserOutlined />,
                      // size: 'large',

                      onChange: (e) => {
                        console.log('e.target.value');
                        console.log(e.target.value);
                      }
                    }}
                    colProps={{xs: 24, sm: 24, md: 6, lg: 6, xl: 6}}
                  />
                  <ProFormText
                    name="password"
                    label="Password"
                    tooltip="Type Password"
                    placeholder="Type Password"
                    rules={[{ required: true }]}
                    fieldProps={{
                      // prefix: <UserOutlined />,
                      // size: 'large',

                      onChange: (e) => {
                        console.log('e.target.value');
                        console.log(e.target.value);
                      }
                    }}
                    colProps={{xs: 24, sm: 24, md: 6, lg: 6, xl: 6}}
                  />
                </ProForm.Group>
              </ProFormList>
            </ProForm.Group>
            {/*End ProForm Dependency Example*/}
          </ProCard>
        </StepsForm.StepForm>

        <StepsForm.StepForm
          name="staff_members"
          title="Staff members"
          onFinish={async () => {
            await waitTime(2000);
            return true;
          }}
          layout='vertical'
          grid={true}
          // rowProps={{
          //   gutter: [16],
          // }}
          initialValues={initialValues}
          request={

            // console.log('testing-request...')

            // const params = {};
            // async (params= {} ) => {
            async (params = {}) => {

              console.log('proform_params_staff_members');
              console.log(params);

              if (initialState?.currentUser === 0) {
                return;
              }

              await waitTime(2000);

              const api_response = await getUsers(
                {
                  context: 'edit',
                  // id: params?.user_id,
                  // capabilities: 'ech_super_admin',
                  roles: 'ech_staff_member',
                  per_page: 100,
                  // author: initialState?.currentUser?.id,
                  // author: initialState?.data.meta,
                },
                {getResponse: true}
              );

              console.log('api_response_staff_members');
              console.log(api_response);


              const test_map = api_response.data.map(staff_members => ({

                id: staff_members.id,
                name: staff_members.name
                // console.log('element.id');
                //   console.log(element.id);
              }));

              console.log('api_response_staff_members_01');
              console.log(api_response.data);

              console.log('test_map_staff_members');
              console.log(test_map);

              setAvailableStaffMembers(test_map);

              return initialValues;
            }


          }

        >
          <ProCard
            title="Staff Members Association:"
            bordered
            headerBordered
            collapsible
            size="default"
            type="default"
            style={{
              marginBlockEnd: 15,
              minWidth: 800,
              maxWidth: '100%',
            }}
            onCollapse={(collapse) => console.log(collapse)}
          >
            {/*Start ProForm Dependency Example*/}
            <ProForm.Group title="Staff Members/ Employees" size={24}>
              <ProFormList
                name={['organization', 'step_04', 'staff_members']}
                min={1}
                // max={maxStaffCount}
                copyIconProps={{ tooltipText: 'Copy this staff member' }}
                deleteIconProps={{ tooltipText: 'Delete this staff member' }}
                creatorButtonProps={{
                  creatorButtonText: 'Add New Staff Member / Employee',
                }}
              >
                <ProForm.Group size={24}>
                  <ProFormText
                    name="first_name"
                    label="First Name"
                    tooltip="Type First Name"
                    placeholder="Type First Name"
                    rules={[{ required: true }]}
                    fieldProps={{
                      onChange: (e) => {
                        console.log('e.target.value');
                        console.log(e.target.value);
                      }
                    }}
                    colProps={{xs: 24, sm: 24, md: 4, lg: 4, xl: 4}}
                  />
                  <ProFormText
                    name="last_name"
                    label="Last Name"
                    tooltip="Type Last Name"
                    placeholder="Type Last Name"
                    rules={[{ required: true }]}
                    fieldProps={{
                      onChange: (e) => {
                        console.log('e.target.value');
                        console.log(e.target.value);
                      }
                    }}
                    colProps={{xs: 24, sm: 24, md: 4, lg: 4, xl: 4}}
                  />
                  <ProFormText
                    name="username"
                    label="User Name"
                    tooltip="Type User Name"
                    placeholder="Type User Name"
                    rules={[
                      {required: true},
                      {
                        validator(_, value) {
                          console.log('test-rule');
                          console.log(_);

                          console.log('test-value');
                          console.log(value);

                          return request('/wp/v2/user-validation/username', {
                            method: 'POST',
                            data: {
                              user_name: value,
                            }
                          }).then((api_response) => {
                            console.log('api_response');
                            console.log(api_response);

                            if (api_response === true) {
                              return Promise.resolve();
                            } else {
                              return Promise.reject(new Error('The username is already exist'));
                            }
                          });
                        },
                      },
                    ]}
                    fieldProps={{
                      // prefix: <UserOutlined />,
                      // size: 'large',

                      onChange: (e) => {
                        console.log('e.target.value');
                        console.log(e.target.value);
                      }
                    }}
                    colProps={{xs: 24, sm: 24, md: 4, lg: 4, xl: 4}}
                  />
                  <ProFormText
                    name="email"
                    label="Email"
                    tooltip="Type Email"
                    placeholder="Type Email"
                    rules={[
                      {required: true},
                      {
                        validator(_, value) {
                          console.log('test-rule');
                          console.log(_);

                          console.log('test-value');
                          console.log(value);

                          return request('/wp/v2/user-validation/email', {
                            method: 'POST',
                            data: {
                              user_email: value,
                            }
                          }).then((api_response) => {
                            console.log('api_response');
                            console.log(api_response);

                            if (api_response === true) {
                              return Promise.resolve();
                            } else {
                              return Promise.reject(new Error('The email is already exist'));
                            }
                          });
                        },
                      },
                    ]}
                    fieldProps={{
                      // prefix: <UserOutlined />,
                      // size: 'large',

                      onChange: (e) => {
                        console.log('e.target.value');
                        console.log(e.target.value);
                      }
                    }}
                    colProps={{xs: 24, sm: 24, md: 6, lg: 6, xl: 6}}
                  />
                  <ProFormText
                    name="password"
                    label="Password"
                    tooltip="Type Password"
                    placeholder="Type Password"
                    rules={[{ required: true }]}
                    fieldProps={{
                      // prefix: <UserOutlined />,
                      // size: 'large',

                      onChange: (e) => {
                        console.log('e.target.value');
                        console.log(e.target.value);
                      }
                    }}
                    colProps={{xs: 24, sm: 24, md: 6, lg: 6, xl: 6}}
                  />
                </ProForm.Group>
              </ProFormList>
            </ProForm.Group>
            {/*End ProForm Dependency Example*/}
          </ProCard>
        </StepsForm.StepForm>
      </StepsForm>

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
            tooltip={<div>Click to submit an inquiry form</div>}
            onClick={ ()=> {
              window.open(initialState?.ech_settings[initialState?.ech_settings.findIndex(ech_setting_row => ech_setting_row.key === 'floating_icon_help_url') ]?.value);
            }}
        />
        <FloatButton
            icon={<VideoCameraOutlined/>}
            tooltip={<div>Let's See Helpful Tutorial</div>}
            onClick={() => {
              console.log('api_response_testing_01');

              request('/wp/v2/super-admin-video-tutorials', {
                method: 'GET',
              }).then((api_response) => {
                console.log('api_response');
                console.log(api_response);


                const setup_wizard_screen_setup_wizard_video_tutorials_data = {
                  ...initialValues,
                    setup_wizard_screen: {
                    ...initialValues.setup_wizard_screen,
                      setup_wizard_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'setup_wizard_screen_setup_wizard_video_url')].video_url,
                  },
                };

                setSetupWizardVideoTutorials(setup_wizard_screen_setup_wizard_video_tutorials_data);

                console.log('setup_wizard_screen_setup_wizard_video_tutorials_data');
                console.log(setup_wizard_screen_setup_wizard_video_tutorials_data);

              });
              setSetupWizardVideoTutorialModelOpen(true);
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
            tooltip={<div>Let's discuss on WhatsApp</div>}
            onClick={ ()=> {
              window.open(initialState?.ech_settings[initialState?.ech_settings.findIndex(ech_setting_row => ech_setting_row.key === 'floating_icon_whatsapp_url') ]?.value);
            }}
        />
      </FloatButton.Group>

      <ModalForm
          title={'Setup Wizard Video Tutorial'}
          open={setupWizardVideoTutorialModelOpen}
          onOpenChange={setSetupWizardVideoTutorialModelOpen}
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
            iframeUrl={setupWizardVideoTutorials?.setup_wizard_screen?.setup_wizard_video_url}
        />

      </ModalForm>

    </PageContainer>
  );
};

export default SetupWizard;
