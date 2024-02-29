import React, {useEffect, useState} from "react";
import {useModel, useParams} from 'umi';
import {Button, Drawer, Input, message, Card, Row, Col, Typography, Form, FloatButton} from 'antd';
import moment from "moment";
import {
  FooterToolbar,
  ModalForm,
  PageContainer,
  ProDescriptions,
  ProForm,
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
  VideoCameraOutlined, WhatsAppOutlined
} from '@ant-design/icons';
import PoliciesScreenViewVideoIframe from "@/components/VideoTutorialsIframes/SuperAdminIframes/PoliciesScreenViewVideoIframe";
import {request} from '@umijs/max';
import {waitTime} from "@/pages/policies/TableList";
import VideoTutorialIframe from "@/components/VideoTutorialsIframes/VideoTutorialIframe";

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

}

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


  // const [loading, setLoading] = useState(true);
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
     * Site admins will only see their created parent ( ECH Policy ) CPT records
     */
    if (initialState?.currentUser?.roles.includes('administrator')) {
      const api_response = await getEchPolicy(
        {
          context: 'edit',
          id: id,
        },
        {getResponse: true}
      );
      setPolicy(api_response?.data);
    }

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


  return (
    // <Spin spinning={loading} delay={500}>
    <PageContainer

      title={policy?.title?.rendered}
      extra={[
        <div key={1}>
          <span>
            Last Modified:&nbsp;
          </span>
          <Button>{moment(new Date(policy?.modified)).format('DD-MM-YYYY hh:mm:ss')}</Button>
        </div>
        ,
        <Button
          key={2}
          type="primary"
          onClick={downloadPDF}
        > <DownloadOutlined/> Download PDF</Button>,
      ]}
    >
      <ProForm
        layout='vertical'
        form={form}
        // submitter={{
        //   render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>,
        // }}

        submitter={{
          // Configure the button text
          // searchConfig: {
          //   resetText: 'reset',
          //   submitText: 'make',
          // },
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
      >
        <Card>
          {(policy?.link && policy?.link.trim() !== '') &&
            <ViewerIframe
              iframeUrl={policy?.link + '?ech-iframe-type=ech-frontend-viewer&organization-id=' + organizationId}
            />
          }
        </Card>
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
            icon={<VideoCameraOutlined />}
            tooltip={<div>Lets See Helpful Tutorial.</div>}
            onClick={ ()=> {
              console.log('api_response_testing_01');

              request('/wp/v2/super-admin-video-tutorials', {
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
