import React, {useEffect, useState} from "react";
import {useModel, useParams} from 'umi';
import {Button, Drawer, Input, message, Card, Row, Col, Typography, Form} from 'antd';
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
import {DownloadOutlined} from '@ant-design/icons';

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
    </PageContainer>
    // </Spin>
  );

};
export default ReadPolicy;
