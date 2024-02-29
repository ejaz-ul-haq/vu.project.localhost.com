import React, {useEffect, useState} from "react";
import {useModel, useParams} from 'umi';
import {Button, Drawer, Input, message, Card, Row, Col, Typography, Form, FloatButton} from 'antd';
import moment from "moment";
import {
  FooterToolbar,
  ModalForm,
  PageContainer,
  ProDescriptions,
  ProForm, ProFormRadio,
  ProFormText,
  ProFormTextArea,
  ProTable, TableDropdown,
} from '@ant-design/pro-components';
import {getEchPolicy} from "@/services/wp-api/EchPolicy";
import {getEchCustomerPolicy} from "@/services/wp-api/EchCustomerPolicy";
import ViewerIframe from "@/components/Editor/ViewerIframe";
import {
  CustomerServiceOutlined,
  DownloadOutlined,
  QuestionCircleOutlined,
  UserOutlined,
  VideoCameraOutlined, WhatsAppOutlined
} from '@ant-design/icons';

import {createUser, getUser, getUsers, putUser} from "@/services/wp-api/User";
import PoliciesScreenViewVideoIframe from "@/components/VideoTutorialsIframes/StaffMemberIframes/PoliciesScreenViewVideoIframe";
import {request} from "@@/exports";
import VideoTutorialIframe from "@/components/VideoTutorialsIframes/VideoTutorialIframe";

const {Paragraph} = Typography;

const {Text, Title, Link} = Typography;

const downloadPDF = async () => {
  const iframe_element = document.getElementsByTagName('iframe')[0];
  console.log('iframe_element');
  console.log(iframe_element);

  console.log('iframe_element.contentWindow');
  console.log(iframe_element.contentWindow);

  console.log('iframe_element.contentWindow.document');
  console.log(iframe_element.contentWindow.document);

  // document.querySelector('iframe');
  // const capture = iframe_element.contentWindow.document.getElementsByTagName('html');
  // const capture = iframe_element.contentWindow.document.getElementById('#contentToPrint');
  let capture = iframe_element.contentWindow.document.querySelector("#contentToPrint");
  console.log('capture');
  console.log(capture);

  // const doc = new jsPDF('p', 'mm', 'a4');
  // const doc = new jsPDF({ unit: 'pt' }) // create jsPDF object
  // const test_element = document.getElementById('#test-pdf');

  // doc.html(capture, {
  //   callback: function (doc) {
  //     doc.save();
  //   },
  //   x: 10,
  //   y: 10
  // });

  iframe_element.contentWindow.document.querySelector("#convert_pdf_btn").click();

  // const doc = await new jsPDF();
  //
  // await doc.html(iframe_element.contentWindow.document.querySelector("#contentToPrint"), {
  //   callback: async function(doc) {
  //     // Save the PDF
  //     await doc.save('document-html.pdf');
  //   },
  //   margin: [10, 10, 10, 10],
  //   autoPaging: 'text',
  //   x: 0,
  //   y: 0,
  //   width: 190, // Target width in the PDF document
  //   windowWidth: 675 // Window width in CSS pixels
  // });


  // setLoader(true);
  // html2canvas(capture).then((canvas)=>{
  //   const imgData = canvas.toDataURL('img/png');
  //   const doc = new jsPDF('p', 'mm', 'a4');
  //   const componentWidth = doc.internal.pageSize.getWidth();
  //   const componentHeight = doc.internal.pageSize.getHeight();
  //   // doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
  //
  //   console.log('capture');
  //   console.log(capture);
  //
  //
  //
  //   // doc.html(<TestIframeData />, {
  //   //   callback: function (doc) {
  //   //     doc.save();
  //   //   },
  //   //   x: 10,
  //   //   y: 10
  //   // });
  //
  //   // doc.html('<div><h1>Testing Heading</h1><p>Testing details</p></div>', {
  //   //   callback: function (doc) {
  //   //     doc.save();
  //   //   },
  //   //   x: 10,
  //   //   y: 10
  //   // });
  //
  //   // setLoader(false);
  //   // doc.save('receipt.pdf');
  // });

};


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
const onFinishHandlerForm = async (currentUser, values) => {
  console.log('onFinishHandlerForm');
  console.log('Received values of form: ', values);

  console.log('onFinishHandlerForm');
  console.log('Received currentUser of form: ', currentUser);

  const policy_user_status_index = currentUser?.meta?.ech_user_policies.findIndex(object => {
    return object.policy_id === parseInt(values.policy_id)
  });
  console.log('policy_user_status_index');
  console.log(policy_user_status_index);
  const user_policy_selected_acknowledgment = currentUser?.meta?.ech_user_policies[policy_user_status_index]?.policy_status;
  console.log('user_policy_selected_acknowledgment');
  console.log(user_policy_selected_acknowledgment);


  // const user_selected_policies_arr_of_objs = currentUser?.meta?.ech_user_policies.map((policy) => {
  //   return {
  //     policy_id: policy.policy_id,
  //     policy_status: policy.policy_status
  //   };
  // });
  //

  currentUser.meta.ech_user_policies[policy_user_status_index].policy_status = values.policy_user_acknowledgment;

  currentUser.meta.ech_user_policies[policy_user_status_index].policy_status_date = moment().format('DD-MM-YYYY');

  const user_updated_policies = currentUser.meta.ech_user_policies;
  console.log('user_updated_policies');
  console.log(user_updated_policies);

  // return;

  /**
   * API Request
   */
  try {

    // const request_data = {
    //   ...currentUser,
    //   first_name: values?.bio_details?.first_name,
    //   last_name: values?.bio_details?.last_name,
    //   name: values?.bio_details?.first_name + ' ' + values?.bio_details?.last_name,
    //   nickname: values?.bio_details?.nick_name,
    //   description: values?.bio_details?.biographical_info,
    //   email: values?.contact_details?.email,
    //   url: values?.contact_details?.website,
    //   username: values?.account_details?.username,
    //   password: values?.account_details?.password,
    //   roles: 'ech_staff_member',
    //   meta: {
    //     ech_user_profile_image_url: values?.bio_details?.staff_member_profile_image,
    //     ech_gender: values?.bio_details?.gender,
    //     ech_dob: moment(new Date(values?.bio_details?.date_of_birth)).format('YYYY-MM-DD'),
    //     ech_phone_no: values?.contact_details?.phone_number,
    //     ech_street_address_line_1: values?.mailing_details?.Street_address_line_1,
    //     ech_street_address_line_2: values?.mailing_details?.Street_address_line_2,
    //     ech_country_region: values?.mailing_details?.country_region,
    //     ech_state_county: values?.mailing_details?.state_county,
    //     ech_city: values?.mailing_details?.city,
    //     ech_postcode_zip: values?.mailing_details?.postcode_zip,
    //     ech_user_password: values?.account_details?.password,
    //     ech_account_status: values?.bio_details?.account_status,
    //     ech_user_policies: values?.user_selected_policies,
    //     ech_organization_id: values?.organization_id,
    //   },
    // };

    const request_data = {
      meta: {
        ech_user_policies: user_updated_policies,
      }
    };

    putUser(
      {id: currentUser.id},
      {},
      {
        data: request_data,
      }
    ).then((api_response) => {
      console.log('api_response');
      console.log(api_response);
      /**
       * User Created then show message and redirect to listing screen
       */
      if (api_response?.id > 0) {
        message.success('Updated successfully');
        // history.push('/staff-members/list');
      }
    });

  } catch (api_response) {
    console.log('api_response - error');
    console.log(api_response);
    // history.push(loginPath);
  }


  return true;
};


const ReadPolicy = () => {

  const {initialState, loading, refresh, setInitialState} = useModel('@@initialState');

  const {id, organizationId} = useParams();
  console.log('id');
  console.log(id);

  console.log('organizationId');
  console.log(organizationId);



  /**
   * Start By Mairaj
   */

  const [policiesViewVideoTutorials, setPoliciesViewVideoTutorials] = useState({});
  const [policiesViewVideoTutorialModelOpen, setPoliciesViewVideoTutorialModelOpen] = useState(false);
  /**
   * End By Mairaj
   */




  const [form] = Form.useForm();


  const [formSubmissionIsInProcess, setFormSubmissionIsInProcess] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  // }, []); //empty dependency array so it only runs once at render


  // const params = useParams();
  // console.log('params');
  // console.log(params);

  // const [policyId, setPolicyId] = useState(0);
  // console.log('policyId');
  // console.log(policyId);
  //
  // useEffect(() => {
  //   setPolicyId(params.id);
  // });
  //


  const [policy, setPolicy] = useState(0);

  const get_policy = async () => {

    /**
     * Site Customer ( Organisation Supper Admin ) will see only their purchased and dynamically created policies rrecords.
     */
    if (!initialState?.currentUser?.roles.includes('administrator')) {
      const api_response = await getEchCustomerPolicy(
        {
          context: 'edit',
          id: id,
        },
        {getResponse: true}
      );
      setPolicy(api_response?.data);
    }
  };

  useEffect(() => {
    get_policy();
  }, []); //empty dependency array so it only runs once at render


  /**
   * Update the Profile Image input field individually whenever the related State is updated/effected
   */
  useEffect(() => {

    const policy_user_status_index = initialState?.currentUser?.meta?.ech_user_policies.findIndex(object => {
      return object.policy_id === parseInt(policy?.id)
    });
    const user_policy_selected_acknowledgment = initialState?.currentUser?.meta?.ech_user_policies[policy_user_status_index]?.policy_status;
    form.setFieldValue(['policy_user_acknowledgment'], user_policy_selected_acknowledgment);
  }, [policy, form]);

  return (
    // <Spin spinning={loading} delay={500}>
    <PageContainer
      // fixedHeader={true}
      title={policy?.title?.rendered}
      // content={(
      //   <>
      //     <div>Testing description</div>
      //   </>
      // )}
      extra={[
        <div key={1}>
          <span>
            Last Modified:&nbsp;
          </span>
          <Button>{moment(new Date(policy?.modified)).format('DD-MM-YYYY hh:mm:ss')}</Button>
        </div>
        ,
        // <Button
        //   key={2}
        //   type="primary"
        //   onClick={downloadPDF}
        // > <DownloadOutlined/> Download PDF</Button>,
      ]}
    >
      <ProForm
        layout='vertical'
        // loading={formSubmissionIsInProcess}
        // grid={true}
        // initialValues={{}}
        form={form}
        submitter={{
          render: (_, dom) => {
            return (<FooterToolbar
              extra={
                <Row>
                  <Col span={14}>
                    <div><span>Last Updated Date:&nbsp;</span><Button>{moment(new Date(policy?.modified)).format('DD-MM-YYYY hh:mm:ss')}</Button></div>
                  </Col>
                  <Col span={10}>
                  <ProForm.Group size={24}>
                    <ProFormRadio.Group
                      name={['policy_user_acknowledgment']}
                      label="Acknowledgment:"
                      radioType="button"
                      options={[
                        {
                          label: 'PENDING',
                          value: 'pending',
                        },
                        {
                          label: 'ACCEPT',
                          value: 'accept',
                        },
                        {
                          label: 'DECLINE',
                          value: 'decline',
                        },
                      ]}
                      colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                      rules={[{
                        required: true,
                        message: 'Please review and respond with "ACCEPT" or "DECLINE" by selecting one of the above message.'
                      }]}
                      fieldProps={{
                        onChange: (e) => {
                          console.log('e.target.value');
                          console.log(e.target.value);
                        }
                      }}
                    />
                  </ProForm.Group>
                  </Col>
                </Row>
              }
            >{dom}</FooterToolbar>);
          },
        }}

        onFinish={async (values) => {
          console.log(values);

          /**
           *
           */
          // setFormSubmissionIsInProcess(true);
          /**
           * Add Policy ID into the form Values
           */
          values.policy_id = id;

          await waitTime(1000);
          await onFinishHandlerForm(initialState?.currentUser, values);

          /**
           *
           */
          // setFormSubmissionIsInProcess(false);

        }}

      >

        <Card>

          {(policy?.link && policy?.link.trim() !== '') &&
            <ViewerIframe
              iframeUrl={policy?.link + '?ech-iframe-type=ech-frontend-viewer&organization-id=' + organizationId}
            />
          }

        </Card>

      </ProForm>
      {/*<FooterToolbar*/}
      {/*  extra={*/}
      {/*    <div>Testing pp</div>*/}
      {/*  }*/}
      {/*></FooterToolbar>*/}




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
            icon={<VideoCameraOutlined />}
            tooltip={<div>Lets See Helpful Tutorial.</div>}
            onClick={ ()=> {
              console.log('api_response_testing_01');

              request('/wp/v2/staff-member-video-tutorials', {
                method: 'GET',
              }).then((api_response) => {
                console.log('api_response');
                console.log(api_response);

                const policies_screen_view_video_tutorials_data = {
                  // ...initialValues,
                  policies_screen: {
                    // ...initialValues.policies_screen,
                    view_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'policies_screen_view_video_url') ].video_url,
                  },
                };

                setPoliciesViewVideoTutorials(policies_screen_view_video_tutorials_data);

                console.log('policies_screen_view_video_tutorials_data');
                console.log(policies_screen_view_video_tutorials_data);

              });
              setPoliciesViewVideoTutorialModelOpen(true);
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
          title={'Policy View Video Tutorial'}
          open={policiesViewVideoTutorialModelOpen}
          onOpenChange={setPoliciesViewVideoTutorialModelOpen}
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
            iframeUrl={policiesViewVideoTutorials?.policies_screen?.view_video_url}
        />

      </ModalForm>

    </PageContainer>
    // </Spin>
  );

};
export default ReadPolicy;
