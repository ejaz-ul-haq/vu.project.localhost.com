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

import {
  createEchOrganization,
  getEchOrganization,
  getEchOrganizations,
  putEchOrganization
} from '@/services/wp-api/EchOrganization';
import {getEchPolicies} from "@/services/wp-api/EchPolicy";
import {useModel, useParams} from "@@/exports";
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

  const updateOrganization = async () => {
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

      const msg =  putEchOrganization(
        {id: values?.organization_id},
        {},
        {
          data: request_data
        }
      );
      // return msg.data;
      return msg;
    } catch (error) {
      console.log('updateEchOrganization - error');
      console.log(error);
      // history.push(loginPath);
    }
    return undefined;
  };

  const organizationUpdated = updateOrganization();
  console.log('organizationUpdated');
  console.log(organizationUpdated);

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

const Update = () => {


  const params = useParams();
  console.log('params');
  console.log(params);

  const [organizationId, setOrganizationId] = useState(0);
  console.log('organizationId');
  console.log(organizationId);

  useEffect(() => {
    setOrganizationId(params.id);
  }, []); //empty dependency array so it only runs once at render



  const {initialState, loading, refresh, setInitialState} = useModel('@@initialState');

  console.log('initialState');
  console.log(initialState);

  const [availablePolicies, setAvailablePolicies] = useState([]);
  const [availableSuperUsers, setAvailableSuperUsers] = useState([]);
  const [availableStaffMembers, setAvailableStaffMembers] = useState([]);
  const [organizationData, setOrganizationData] = useState({});

  useEffect(() => {

    if (initialState?.currentUser == 0 || organizationId == 0 ) {
      return;
    }

    /**
     * Start - Organization Data Request
     */
     getEchOrganization(
          {
            context: 'edit',
            id: organizationId,
          },
          {getResponse: true}
        ).then((api_response) => {

       console.log('api_response');
       console.log(api_response);

       const organization_data = {
         ...initialValues,
         organization: {
           ...initialValues.organization,
           step_01: {
             ...initialValues.organization.step_01,
             organization_details: {
               ...initialValues.organization.step_01.organization_details,
               organization_logo: api_response?.data?.meta.ech_organization_logo_url,
               name: api_response?.data?.title.rendered,
               type: api_response?.data?.meta.ech_organization_type,
               registration_number: api_response?.data?.meta.ech_organization_registration_no,
             },
             contact_details: {
               ...initialValues.organization.step_01.contact_details,
               phone_number: api_response?.data?.meta.ech_organization_phone,
               email: api_response?.data?.meta.ech_organization_email,
               website: api_response?.data?.meta.ech_organization_website,
               person: api_response?.data?.meta.ech_organization_contact_person,
             },
           },
           step_02: {
             ...initialValues.organization.step_02,
             policies: api_response?.data?.meta.ech_organization_customer_policies.map( item => ( {
               policy_id: item.policy_id,
             }))
           },
           step_03: {
             ...initialValues.organization.step_03,
             super_users: api_response?.data?.meta.ech_organization_super_users.map( item => ( {
               super_user_id: item.super_user_id,
             }))
           },
           step_04: {
             ...initialValues.organization.step_04,
             staff_members: api_response?.data?.meta.ech_organization_staff_members.map( item => ( {
               staff_member_id: item.staff_member_id,
             }))
           },
         },
       };
       console.log('organization_data');
       console.log(organization_data);
       setOrganizationData(organization_data);
     });
    /**
     * End - Organization Data Request
     */


    /**
     * Start - Policies DropDown Options API Request
     */
    getEchCustomerPolicies(
      {
        context: 'edit',
        author: initialState?.currentUser?.id,
        per_page: 100,
      },
      {getResponse: true}
    ).then((api_response) => {

      // console.log('api_response');
      // console.log(api_response);

      const policies_list = api_response?.data.map( policy => ( {
        id: policy?.id,
        title: policy?.title?.rendered
        // console.log('element.id');
        //   console.log(element.id);
      }));

      // console.log('policies_list');
      // console.log(policies_list);

      /**
       * Set State
       */
      setAvailablePolicies(policies_list);
    });
    /**
     * End - Policies DropDown Options API Request
     */


    getUsers(
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
    ).then((api_response) => {

      console.log('api_response - data');
      console.log(api_response.data);

      const super_users_list = api_response?.data.map( superuser => ( {
        id: superuser?.id,
        name: superuser?.name
        // console.log('element.id');
        //   console.log(element.id);
      }));

      console.log('super_users_list - case 01');
      console.log(super_users_list);

      setAvailableSuperUsers(super_users_list);
    });



    getUsers(
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
    ).then((api_response) => {

      console.log('api_response - data');
      console.log(api_response.data);

      const staff_members_list = api_response?.data.map( staffmember => ( {
        id: staffmember?.id,
        name: staffmember?.name
        // console.log('element.id');
        //   console.log(element.id);
      }));

      console.log('staff_members_list - case 01');
      console.log(staff_members_list);

      setAvailableStaffMembers(staff_members_list);
    });

  }, [organizationId]);


  const initialValues = {
    organization:{
      step_01: {
        organization_details: {
          organization_logo: '',
          name: '',
          type: '',
          registration_number: '',
        },
        contact_details: {
          phone_number: '',
          email: '',
          website: '',
          person: '',
        },
      },
      step_02: {
        policies: [
          // { policy_id: '', policy_seats: ''},
          // { policy_id: 71},
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


  /**
   * Dynamically set the form field value
   *
   * https://github.com/ant-design/ant-design/issues/22372#issuecomment-1666849022
   * https://github.com/ant-design/ant-design/issues/28405#issuecomment-1303011396
   * https://ant.design/components/form#components-form-demo-usewatch:~:text=You%20cannot%20set%20value%20for%20each%20form%20control%20via%20value%20or%20defaultValue%20prop%2C
   *
   * https://stackoverflow.com/questions/63711080/how-to-set-value-dynamically-inside-form-list-using-setfieldsvalue-in-antd-4
   *
   * /
   /**
   * https://ant.design/components/form#formuseform
   */
  const [form] = Form.useForm();

  useEffect(() => {

    if( organizationData?.organization?.step_01?.organization_details?.organization_logo_updated ){
      form.setFieldValue( ['organization', 'step_01', 'organization_details', 'organization_logo'] , organizationData?.organization?.step_01?.organization_details?.organization_logo );
      return;
    }

    form.setFieldValue( ['organization', 'step_01', 'organization_details', 'organization_logo'] , organizationData?.organization?.step_01?.organization_details?.organization_logo );
    form.setFieldValue( ['organization', 'step_01', 'organization_details', 'name'] , organizationData?.organization?.step_01?.organization_details?.name );
    form.setFieldValue( ['organization', 'step_01', 'organization_details', 'type'] , organizationData?.organization?.step_01?.organization_details?.type );
    form.setFieldValue( ['organization', 'step_01', 'organization_details', 'registration_number'] , organizationData?.organization?.step_01?.organization_details?.registration_number );
    form.setFieldValue( ['organization', 'step_01', 'contact_details', 'phone_number'] , organizationData?.organization?.step_01?.contact_details?.phone_number );
    form.setFieldValue( ['organization', 'step_01', 'contact_details', 'email'] , organizationData?.organization?.step_01?.contact_details?.email );
    form.setFieldValue( ['organization', 'step_01', 'contact_details', 'website'] , organizationData?.organization?.step_01?.contact_details?.website );
    form.setFieldValue( ['organization', 'step_01', 'contact_details', 'person'] , organizationData?.organization?.step_01?.contact_details?.person );
    /**
     * The value must be in the following format.
     * [ {'policy_id': 71}, {'policy_id': 70} ]
     */
    form.setFieldValue(['organization', 'step_02', 'policies'],  organizationData?.organization?.step_02?.policies);
    form.setFieldValue(['organization', 'step_03', 'super_users'],  organizationData?.organization?.step_03?.super_users);
    form.setFieldValue(['organization', 'step_04', 'staff_members'],  organizationData?.organization?.step_04?.staff_members);

  }, [form, organizationData]);


  return (
    <PageContainer>
      <StepsForm
        loading={true}
        onFinish={async (values) => {
          console.log(values);
          await waitTime(1000);
          /**
           * Set Organization ID in object to be used for API request
           */
          values.organization_id = organizationId;
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
        // onValuesChange={( changedValues, allValues ) => {
        //
        //   console.log('changedValues');
        //   console.log(changedValues);
        //
        //   console.log('allValues');
        //   console.log(allValues);
        //
        // }}
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
          form={form}
          onValuesChange={( changedValues, allValues ) => {

            console.log('changedValues');
            console.log(changedValues);

            console.log('allValues');
            console.log(allValues);

          }}
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
                src={organizationData?.organization?.step_01?.organization_details?.organization_logo}
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

                      const organization_data_updated = {
                        ...organizationData,
                        organization: {
                          ...organizationData.organization,
                          step_01: {
                            ...organizationData.organization.step_01,
                            organization_details: {
                              ...organizationData.organization.step_01.organization_details,
                              organization_logo: attachment?.url,
                              organization_logo_updated: true,
                            }
                          }
                        }
                      };
                      console.log('organization_data_updated');
                      console.log(organization_data_updated);
                      setOrganizationData( organization_data_updated );

                      // setOrganizationData( { ...organizationData.organization.step_01.organization_details, organization_logo: attachment?.url } );

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
                // hidden={true}
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
          form={form}
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
                /**
                *
                https://codesandbox.io/s/modern-forest-bpolt?file=/index.js

*/
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
          form={form}
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
          form={form}
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

export default Update;
