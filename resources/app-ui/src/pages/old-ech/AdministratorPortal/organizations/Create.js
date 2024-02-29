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
} from '@ant-design/pro-components';
import { Row, Col, Space, message, Button, Form, Image } from 'antd';
import { UserOutlined, UploadOutlined } from '@ant-design/icons';

import {createEchOrganization, getEchOrganization, getEchOrganizations} from '@/services/wp-api/EchOrganization';
import {getEchPolicies} from "@/services/wp-api/EchPolicy";
import {useModel} from "@@/exports";
import {getEchCustomerPolicies, getEchCustomerPolicy} from "@/services/wp-api/EchCustomerPolicy";
import {getUser, getUsers} from "@/services/wp-api/User";
import {useState, useEffect} from "react";


const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};



const onFinishHandlerStepsForm =   (values) => {
  console.log('onFinishHandlerStepsForm');
  console.log('Received values of form: ', values);

  const createOrganization = async () => {
    try {

      const super_users_test_01 = JSON.parse(JSON.stringify(values?.organization?.step_03?.super_users));
      console.log('super_users_test_01');
      console.log(super_users_test_01);

      console.log('super_users_test_01 = type');
      console.log( typeof super_users_test_01);


      const request_data = {
        title: values?.organization?.step_01?.organization_details?.name,
        status: 'publish',
        meta: {
          ech_organization_type: values?.organization?.step_01?.organization_details?.type,
          ech_organization_registration_no: values?.organization?.step_01?.organization_details?.registration_number,
          ech_organization_phone: values?.organization?.step_01?.contact_details?.phone_number,
          ech_organization_email: values?.organization?.step_01?.contact_details?.email,
          ech_organization_website: values?.organization?.step_01?.contact_details?.website,
          ech_organization_contact_person: values?.organization?.step_01?.contact_details?.person,
          ech_organization_customer_policies: values?.organization?.step_02?.policies,
          ech_organization_super_users: values?.organization?.step_03?.super_users,
          ech_organization_staff_members: values?.organization?.step_04?.staff_members,
          ech_organization_logo_url: values?.organization?.step_01?.organization_details?.organization_logo,
        },
      };

      const msg =  createEchOrganization(
        {},
        {
              data: request_data
          }
      );
      // return msg.data;
      return msg;
    } catch (error) {
      console.log('createEchOrganization - error');
      console.log(error);
      // history.push(loginPath);
    }
    return undefined;
  };

  const organizationCreated = createOrganization();
  console.log('organizationCreated');
  console.log(organizationCreated);

};



// const GetPoliciesTest01 = async () => {
//   return await getEchCustomerPolicies(
//     {
//       context: 'edit',
//       // sort: {...sort},
//       // pagination: {...params},
//       // author: initialState?.currentUser?.id,
//       // after: {...params?.startTime },
//       // before: {...params?.endTime },
//     },
//     // { getResponse: true }
//   );
// };

// export const OrganizationLogoUploader = () => {
//
//   return(
//     <>
//
//     </>
//   );
// };

const Create = () => {

  const {initialState, loading, refresh, setInitialState} = useModel('@@initialState');

  console.log('initialState');
  console.log(initialState);

  const [availablePolicies, setAvailablePolicies] = useState([]);
  const [availableSuperUsers, setAvailableSuperUsers] = useState([]);
  const [availableStaffMembers, setAvailableStaffMembers] = useState([]);

  const [organizationLogoUrl, setOrganizationLogoUrl] = useState('data:image/png;base64,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');

  // const ech_customer_policies = getEchCustomerPolicies(
  //     {
  //       context: 'edit',
  //       // sort: {...sort},
  //       // pagination: {...params},
  //       author: initialState?.currentUser?.id,
  //       // after: {...params?.startTime },
  //       // before: {...params?.endTime },
  //     },
  //     // { getResponse: true }
  // );

  // const ech_customer_policies = GetPoliciesTest01();
  // console.log('ech_customer_policies');
  // console.log(ech_customer_policies);
  // console.log(ech_customer_policies.data);

  // ech_customer_policies?.data.map( ech_customer_policy => ( {
  //   // console.log(ech_customer_policy.title);
  //   ech_customer_policy.title
  // }));


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
    form.setFieldValue( ['organization', 'step_01', 'organization_details', 'organization_logo'] , organizationLogoUrl );
  }, [organizationLogoUrl, form]);


  const initialValues = {
    organization:{
      step_01: {
        organization_details: {
          organization_logo: 'testing-by-init-values',
          name: '',
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
      },
      step_02: {
        policies: [
          // { policy_id: '', policy_seats: ''},
          { policy_id: ''},
        ],
      },
      step_03: {
        super_users: [
          // { super_user_id: '', super_user_status: ''},
          { super_user_id: ''},
        ],
      },
      step_04: {
        staff_members: [
          // { staff_member_id: '', staff_member_status: ''},
          { staff_member_id: ''},
        ],
      },
    },
  };


  return (
    <PageContainer>
      <StepsForm
        onFinish={async (values) => {
          console.log(values);
          await waitTime(1000);
          onFinishHandlerStepsForm(values);
          message.success('Submitted successfully');
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
        <StepsForm.StepForm
          name="business_details"
          title="Business Details"
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
          // formRef = { (form) => {
          //   // const organization_logo_value = form.getFieldValue(['organization', 'step_01', 'organization_details', 'organization_logo']);
          //   // console.log('organization_logo_value');
          //   // console.log(organization_logo_value);
          //   // form.setFieldValue( ['organization', 'step_01', 'organization_details', 'organization_logo'] , 'Testing value 0001-f' );
          //   // form.setFieldValue( ['organization', 'step_01', 'organization_details', 'organization_logo'] , organizationLogoUrl );
          //
          //   // form.setFieldValue( ['organization', 'step_01', 'organization_details', 'organization_logo'] , () => {
          //   //
          //   // });
          //
          // }}
          form={form}
            >
          <ProCard
            title="Organization Details"
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
            <ProForm.Group size={24}>
              <Image
                width={200}
                height={200}
                src={organizationLogoUrl}
                fallback="data:image/png;base64,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"
              />
              <Button
                type="primary"
                icon={<UploadOutlined />}
                // loading={loadings[1]}
                onClick={

                  (event) => {
                    // wp media call
                    console.log('ldugl - logo-uploader');

                    let file_frame; // variable for the wp.media file_frame
                    // if the file_frame has already been created, just reuse it
                    if ( file_frame ) {
                      console.log('ldugl - logo-uploader - case 01');
                      file_frame.open();
                      return;
                    }else{
                      console.log('ldugl - logo-uploader - case 02');
                    }

                    file_frame = wp.media.frames.file_frame = wp.media({
                      // title: $( this ).data( 'uploader_title' ),
                      title: event?.target?.getAttribute( 'data-uploader_title' ),
                      button: {
                        // text: $( this ).data( 'uploader_button_text' ),
                        text: event?.target?.getAttribute( 'data-uploader_button_text' ),
                      },
                      multiple: false // set this to true for multiple file selection
                    });

                    file_frame.on( 'select', function() {
                      console.log('image is selected');

                      let attachment = file_frame.state().get('selection').first().toJSON();
                      console.log('attachment');
                      console.log(attachment);
                      setOrganizationLogoUrl(attachment?.url);
                    });

                    file_frame.on('open',function() {
                      // Do something
                      console.log('file_frame is opened');
                      // $('.ldugl-group-logo-uploader-wraper-overlay').removeClass('hidden');
                    });


                    file_frame.on('close',function() {
                      // Do something
                      console.log('file_frame is closed');
                      // $('.ldugl-group-logo-uploader-wraper-overlay').addClass('hidden');
                    });

                    file_frame.open();

                  } }
              >
                Click me!
              </Button>

              <ProFormText
                name={['organization', 'step_01', 'organization_details', 'organization_logo']}
                label="Organization Logo URL"
                tooltip="The legal name of the organization"
                placeholder="please enter your organization legal name"
                hidden={true}
                // value="Testing-value"
                // initialValue={"Helllllloooo?"}
                // rules={[{ required: true }]}
                // initialValue="Testing Title of organization..."
                // fieldProps={{
                //   prefix: <UserOutlined />,
                //   size: 'large',
                //
                //   onChange: (e) => {
                //     console.log('e.target.value');
                //     console.log(e.target.value);
                //   }
                // }}
                // colProps={{ span: 24 }}

                // request={async () => {
                //   return "Testing Initial Value";
                // }}
              />

              <ProFormText
                name={['organization', 'step_01', 'organization_details', 'name']}
                label="Name"
                tooltip="The legal name of the organization"
                placeholder="please enter your organization legal name"
                rules={[{ required: true }]}
                // initialValue="Testing Title of organization..."
                fieldProps={{
                  prefix: <UserOutlined />,
                  size: 'large',

                  onChange: (e) => {
                    console.log('e.target.value');
                    console.log(e.target.value);
                  }
                }}
                colProps={{ span: 24 }}
              />
            </ProForm.Group>
            <ProForm.Group size={24}>
              <ProFormSelect
                name={['organization', 'step_01', 'organization_details', 'type']}
                label="Type"
                showSearch
                debounceTime={300}
                colProps={{ xs: 24, sm:24, md: 12, lg: 12, xl: 12 }}
                // options={['Nursing Agency', 'Domiciliary Care', 'Nursing Agency and Domiciliary Care (Combined)', 'Supported Living']}
                options={[
                  {
                    label: 'Nursing Agency',
                    value: 'nursing_agency',
                  },
                  {
                    label: 'Domiciliary Care',
                    value: 'domiciliary_care',
                  },
                  {
                    label: 'Nursing Agency and Domiciliary Care (Combined)',
                    value: 'nursing_agency-and-domiciliary-care-combined',
                  },
                  {
                    label: 'Supported Living',
                    value: 'supported-living',
                  },
                ]}
                // rules={[{ required: true, message: 'Please select your organization type!' }]}
              />
              <ProFormText
                label="Registration No"
                name={['organization', 'step_01', 'organization_details', 'registration_number']}
                placeholder="5453-763876-7686"
                // maxLength={20}
                // min={1}
                // max={10}
                // fieldProps={{ precision: 0 }}
                colProps={{ xs: 24, sm:24, md: 12, lg: 12, xl: 12 }}
              />
            </ProForm.Group>
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
                placeholder="+2974837487 etc."
                // min={1}
                // max={10}
                fieldProps={{ precision: 0 }}
                colProps={{ xs: 24, sm:24, md: 12, lg: 12, xl: 12 }}
              />
              <ProFormText
                label="Email"
                name={['organization', 'step_01', 'contact_details', 'email']}
                tooltip="The legal name of the organization"
                placeholder="info@example.com etc."
                // rules={[{ required: true }]}
                colProps={{ xs: 24, sm:24, md: 12, lg: 12, xl: 12 }}
              />
            </ProForm.Group>
            <ProForm.Group size={24}>
              <ProFormText
                label="Website"
                name={['organization', 'step_01', 'contact_details', 'website']}
                tooltip="The legal name of the organization"
                placeholder="http://example.com"
                // rules={[{ required: true }]}
                colProps={{ xs: 24, sm:24, md: 12, lg: 12, xl: 12 }}
              />
              <ProFormText
                name={['organization', 'step_01', 'contact_details', 'person']}
                label="Contact person:"
                colProps={{ xs: 24, sm:24, md: 12, lg: 12, xl: 12 }}
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
        </StepsForm.StepForm>

        <StepsForm.StepForm
          name="policies"
          title="Policies"
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
            async (params= {} ) => {

              console.log('proform-params');
              console.log(params);

              if (initialState?.currentUser == 0) {
                return;
              }

              await waitTime(2000);

              const api_response = await getEchCustomerPolicies(
                {
                  context: 'edit',
                  author: initialState?.currentUser?.id,
                  per_page: 100,
                  // author: initialState?.data.meta,
                },
                {getResponse: true}
              );

              console.log('api_response');
              console.log(api_response);


              const test_map = api_response.data.map( policies => ( {

                id: policies.id,
                title: policies.title.rendered
                // console.log('element.id');
                //   console.log(element.id);
              }));

              console.log('api_response_01');
              console.log(api_response.data);

              console.log('test_map');
              console.log(test_map);

              setAvailablePolicies(test_map);

              return initialValues;
            }


          }
        >
            <ProCard
              title="Polices Association:"
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
            <ProForm.Group title="Policies" size={24}>
              <ProFormList
                name={['organization', 'step_02', 'policies']}
              >
                <ProForm.Group key="group" size={24}>
                  <ProFormSelect
                    name='policy_id'
                    label="Policy"
                    colProps={{ xs: 24, sm:24, md: 18, lg: 18, xl: 18 }}
                    // fieldProps={{
                    //   mode: 'tags',
                    // }}
                    options={
                    //   [
                    //   {value:1, label:'policy 01' },
                    //   {value:2, label:'policy 02' },
                    //   {value:3, label:'policy 03' },
                    //   {value:4, label:'policy 04' },
                    // ]
                    //   availablePolicies.map(({k, v}) => (
                    //     {
                    //     value: v?.value,
                    //     label: v,
                    //   }))

                      availablePolicies.map(({id, title}) => (
                        {
                          value: id,
                          label: title,
                        }))

                    }
                  />
                  {/*<ProFormDigit*/}
                  {/*  name='policy_seats'*/}
                  {/*  label="Seats"*/}
                  {/*  placeholder="5453-763876-7686"*/}
                  {/*  maxLength={20}*/}
                  {/*  min={1}*/}
                  {/*  max={10}*/}
                  {/*  fieldProps={{ precision: 0 }}*/}
                  {/*  colProps={{ xs: 24, sm:24, md: 6, lg: 6, xl: 6 }}*/}
                  {/*/>*/}
                </ProForm.Group>
              </ProFormList>
            </ProForm.Group>
          {/*End ProForm Dependency Example*/}

          </ProCard>
        </StepsForm.StepForm>

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
          request={

            // console.log('testing-request...')

            // const params = {};
            // async (params= {} ) => {
            async (params= {} ) => {

              console.log('proform_params_super_users');
              console.log(params);

              if (initialState?.currentUser == 0) {
                return;
              }

              await waitTime(2000);

              const api_response = await getUsers(
                {
                  context: 'edit',
                  // id: params?.user_id,
                  // capabilities: 'ech_super_admin',
                  roles: 'ech_super_user',
                  per_page: 100,
                  // author: initialState?.currentUser?.id,
                  // author: initialState?.data.meta,
                },
                {getResponse: true}
              );

              console.log('api_response_super_users');
              console.log(api_response);


              const test_map = api_response.data.map( super_users => ( {

                id: super_users.id,
                name: super_users.name
                // console.log('element.id');
                //   console.log(element.id);
              }));

              console.log('api_response_super_users_01');
              console.log(api_response.data);

              console.log('test_map_super_users');
              console.log(test_map);

              setAvailableSuperUsers(test_map);

              return initialValues;
            }


          }
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
              minWidth: 800,
              maxWidth: '100%',
            }}
            onCollapse={(collapse) => console.log(collapse)}
          >
            {/*Start ProForm Dependency Example*/}
            <ProForm.Group title="Super Users/ Directors" size={24}>
              <ProFormList
                name={['organization', 'step_03', 'super_users']}
              >
                <ProForm.Group key="super_users_group" size={24}>
                  <ProFormSelect
                    name='super_user_id'
                    label="Super User"
                    colProps={{ xs: 24, sm:24, md: 18, lg: 18, xl: 18 }}
                    // fieldProps={{
                    //   mode: 'tags',
                    // }}
                    options={
                      // {value:1, label:'Super User 01' },
                      // {value:2, label:'Super User 02' },
                      // {value:3, label:'Super User 03' },
                      // {value:4, label:'Super User 04' },

                      availableSuperUsers.map(({id, name}) => (
                        {
                          value: id,
                          label: name,
                        }))

                      // .map(({k, v}) => ({
                      //   value: k,
                      //   label: v,
                      // }))
                    }
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
            async (params= {} ) => {

              console.log('proform_params_staff_members');
              console.log(params);

              if (initialState?.currentUser == 0) {
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


              const test_map = api_response.data.map( staff_members => ( {

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
                colProps={{ xs: 24, sm:24, md: 24, lg: 24, xl: 24 }}
              >
                <ProForm.Group key="staff_members_group" size={24}>
                  <ProFormSelect
                    name='staff_member_id'
                    label="Staff Member"
                    colProps={{ xs: 24, sm:24, md: 18, lg: 18, xl: 18 }}
                    // fieldProps={{
                    //   mode: 'tags',
                    // }}
                    options={
                      // .map(({k, v}) => ({
                      //   value: k,
                      //   label: v,
                      // }))
                      availableStaffMembers.map(({id, name}) => (
                        {
                          value: id,
                          label: name,
                        }))
                    }
                  />
                </ProForm.Group>
              </ProFormList>
            </ProForm.Group>
            {/*End ProForm Dependency Example*/}
          </ProCard>
        </StepsForm.StepForm>
      </StepsForm>
    </PageContainer>
  );
};

export default Create;
