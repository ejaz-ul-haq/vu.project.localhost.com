import { getDestinations } from '@/services/api/destination';
import {
  FooterToolbar, ProCard,
  ProForm, ProFormDatePicker,
  ProFormRadio, ProFormSegmented,
  ProFormSwitch, ProFormText, ProFormTextArea,
  ProList,
} from '@ant-design/pro-components';
import {Avatar, Button, Card, Col, Drawer, List, message, Progress, Row, Skeleton, Tag, Image, Tooltip} from 'antd';
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
  EyeOutlined,
  ShoppingCartOutlined, UserOutlined, EnvironmentOutlined, PhoneOutlined, MailOutlined, LockOutlined
} from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { waitTime } from '../../components/Helpers/TableHelpers';
import {request, useModel } from '@umijs/max';
import {history} from "@@/core/history";
import {render} from "@testing-library/react";

import { createStyles } from 'antd-style';
import {OrganizationShortCodes} from "@/pages/old-ech/AdministratorPortal/policies/components/OrganizationShortCodes";

const { Meta } = Card;

const useStyles = createStyles(({ token }) => {
  return {
    // ejaz_01_content: {
    //   // display: 'none'
    //   background: '#432876'
    // }
  };
});

const data = [
  'The Sky of Yuque',
  'Ant Design',
  'Ant Financial Experience Technology',
  'TechUI',
  'TechUI 2.0',
  'Bigfish',
  'Umi',
  'Ant Design Pro',
].map((item) => ({
  title: item,
  subTitle: <Tag color="#5BD8A6">Yuque Column</Tag>,
  actions: [<a key="run">invite</a>, <a key="delete">delete</a>],
  avatar:
    'https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg',
  content: (
    <Card
      style={{
        width: '100%',
      }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
        title="Card title"
        description="This is the description"
      />
    </Card>
  ),
}));

/**
 * Form Submission handler and API Request Performer
 */
const onFinishHandlerForm = async (values) => {
    console.log('onFinishHandlerForm');
    console.log('Received values of form: ', values);

    console.log('values');
    console.log(values);

    // const formData = new FormData();
    // console.log('formData - before');
    // console.log(formData);
    //
    // formData.append('title', values?.title);
    // formData.append('description', values?.description);
    // formData.append('image', values?.image);
    //
    // console.log('formData - after');
    // console.log(formData);

    /**
     * API Request
     */
    try {

        /**
         * Start Code By M
         */

        const request_data = {
            first_name: values?.first_name,
            last_name: values?.last_name,
            email: values?.email,
            password: values?.password,
            user_id: values?.user_id,
            trip_id: values?.trip_id,
            payment_id: 0,
            price: values?.price,
            trip_title: values?.trip_title
        };

        /**
         * End Code By M
         */

        return await request('/api/bookings', {
            method: 'POST',
            /**
             * Start Comment By M
             */

            // data: formData,

            /**
             * End Comment By M
             */
            data: request_data,
        }).then(async (api_response) => {
            console.log('api_response');
            console.log(api_response);

            /**
             * User Created then show message and redirect to listing screen
             */
            if (api_response?.data?.stripe_checkout_session?.url ) {
                message.success('Submitted successfully');
                // history.push('/admin-app/accommodations/edit/' + api_response?.data?.id);
                window.location.href=api_response?.data?.stripe_checkout_session?.url;
            }

        }).catch(function (error) {
            console.log(error);
        });

    } catch (api_response) {
        console.log('api_response - error');
        console.log(api_response);
    }

    return true;
};

const TestHomePage = () => {

    const {initialState, loading, refresh, setInitialState} = useModel('@@initialState');

    console.log('initialState');
    console.log(initialState);

  const [destinationsData, setDestinationsData] = useState([]);
  const { styles } = useStyles();

  const [cardActionProps, setCardActionProps] = useState(
    'extra',
  );

  const [selectedTripData, setSelectedTripData] = useState({});
  const [bookingDetailsDrawer, setBookingDetailsDrawer] = useState(false);


  const onCloseBookingDetailsDrawer = () => {
    setBookingDetailsDrawer(false);
  };

  const showBookingDetailsDrawer = async () => {
    setBookingDetailsDrawer(true);
  };


  useEffect(() => {

  }, []);

  const [ghost, setGhost] = useState(false);
  return (
    <div
      style={{
        backgroundColor: '#fff',
        margin: -24,
        padding: 24,
      }}
    >
      <h1>Trending Destinations</h1>
      <p>Most popular choices for travellers from Pakistan</p>
      {/*<ProFormRadio.Group*/}
      {/*  label="Where actions are placed"*/}
      {/*  options={[*/}
      {/*    {*/}
      {/*      label: '设置为 action',*/}
      {/*      value: 'actions',*/}
      {/*    },*/}
      {/*    {*/}
      {/*      label: '设置为 extra',*/}
      {/*      value: 'extra',*/}
      {/*    },*/}
      {/*  ]}*/}
      {/*  fieldProps={{*/}
      {/*    value: cardActionProps,*/}
      {/*    onChange: (e) => setCardActionProps(e.target.value),*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<ProFormSwitch*/}
      {/*  label="ghost mode"*/}
      {/*  fieldProps={{*/}
      {/*    checked: ghost,*/}
      {/*    onChange: (e) => setGhost(e),*/}
      {/*  }}*/}
      {/*/>*/}
      <ProList
        // itemHeaderRender={false}
        // ghost={ghost}
      //   itemCardProps={{
      //   ghost,
      // }}
      //   pagination={{
      //     pageSize: 6,
      //   // defaultPageSize: 6,
      //   // showSizeChanger: false,
      // }}
          pagination={{
            defaultPageSize: 6,
            showSizeChanger: true,
            pageSizeOptions: [6, 9, 10, 20, 50, 100],
            onChange: (page) => console.log(page),
          }}
        showActions="hover"
        // rowSelection={{}}
        grid={{ gutter: 16, column: 3 }}
        onItem={(record) => {
        return {
          // onMouseEnter: () => {
          //   console.log(record);
          // },
          // onClick: () => {
          //   console.log(record);
          // },
        };
      }}
      //   metas={{
      //   title: {},
      //   // subTitle: {},
      //   type: {},
      //   // avatar: {},
      //   content: {},
      //   // actions: {
      //   //   cardActionProps,
      //   // },
      // }}
        // headerTitle="Card list display"
        // dataSource={data}
        // dataSource={destinationsData}
        // dataSource={ async () => {
        // }}
        itemCardProps={{
        //   cover: (
        //       <img
        //         alt="example"
        //         src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        //         // src={image_url}
        //         style={{ height: '300px' }}
        //       />
        //     )
        //   checked: false,
          // title: 'test by ejaz',
          // style:{
          // //   padding: '0px',
          // //   background: '#432156'
          // }
          prefixCls: 'hp_destination_grid_parent_card'

        }}
        // request={ async(params, sorter, filter) => {
        request={ async(params) => {

          console.log('params');
          console.log(params);

          /**
           * Delay the API request
           */
          await waitTime(2000);

          //   const api_response = getDestinations();
          //   console.log('api_response');
          //   console.log(api_response);
          //
          // console.log('api_response.data');
          // console.log(api_response.data);

          return await request('/api/trips/view/all', {
            // headers: {
            //   'Content-Type': 'application/json',
            // },
            params: {
              page: params?.current,
              per_page: params?.pageSize,
              order_by: 'id',
              order: 'asc',
            },
            // pagination: {...params},
          }).then(async (api_response) => {
            console.log('api_response');
            console.log(api_response);

            console.log('api_response.data');
            console.log(api_response.data);

            console.log('api_response.data.data');
            console.log(api_response.data.data);

            return { data: api_response.data.data, total: api_response.data.total, current_page: api_response.data.current_page};

          }).catch(function (error) {
            console.log(error);
          });


        }}

        metas={{
          content: {
            render: (text, item) => {
              console.log('ejaz-test - text');
              console.log(text);
              console.log('ejaz-test - item');
              console.log(item);
              return (
                <Card
                  // style={{
                  //   width: '100%',
                  //   // height: '50%',
                  // }}

                  style={{
                    width: '100%',
                    height: '550px', // Set a fixed height for all cards
                  }}
                  actions={[
                    <Tooltip title="Thanks for using antd. Have a nice day!">
                    <Button
                      type="primary"
                      icon={<ShoppingCartOutlined />}
                      key="preview"
                      size={"large"}
                      // loading={loadings[1]}
                      // style={{'margin': '10px 0px 0px 0px'}}
                      onClick={ () => {
                        showBookingDetailsDrawer(true);
                        // console.log('record');
                        // console.log(record.id);
                        // setSelectedVersionId(record.id);

                        setSelectedTripData(item);

                        // setPolicyVersionPreviewModelOpen(true);
                      }}

                    >
                      Book Now
                    </Button>
                    </Tooltip>
                  ]}
                  cover={
                    <img
                      alt="example"
                      // src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      src={item?.image_url}
                      style={{ height: '300px' }}
                    />
                  }
                  onClick={() => {
                    // history.push('/admin-app/destinations/new');
                  }}
                  // actions={[
                  //   <SettingOutlined key="setting"/>,
                  //   <EditOutlined key="edit"/>,
                  //   <EllipsisOutlined key="ellipsis"/>,
                  // ]}
                >
                  <h1>{item?.title}</h1>
                  <Meta
                    // avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"/>}
                    // title="Card title"
                    description={item?.description}
                  />
                </Card>
              )
            }
          }

        }}

        />

      <Drawer
        width={600}
        open={bookingDetailsDrawer}
        onClose={() => {
          onCloseBookingDetailsDrawer(false);
        }}
        closable={true}
        title={"Checkout Details"}
      >


        {/*<List*/}
        {/*  itemLayout="horizontal"*/}
        {/*  size="large"*/}
        {/*  pagination={{*/}
        {/*    onChange: (page) => {*/}
        {/*      console.log(page);*/}
        {/*    },*/}
        {/*    pageSize: 10,*/}
        {/*  }}*/}
        {/*  // dataSource={OrganizationShortCodes}*/}
        {/*  renderItem={(item, index) => {*/}

        {/*    // const organization_logo_url = (item?.meta?.ech_organization_logo_url) ? item?.meta?.ech_organization_logo_url : 'data:image/png;base64,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';*/}

        {/*    // console.log('item');*/}
        {/*    // console.log(item);*/}

        {/*  }}*/}
        {/*/>*/}



        <ProForm
            layout='vertical'
            grid={true}
            // initialValues={initialValues}
            // form={form}
            onFinish={async (values) => {

                console.log('initialState - before submit');
                console.log(initialState);

              /**
               * Add Trip ID into the form Values
               */
              values.user_id = initialState?.currentUser?.id;
              values.trip_id = selectedTripData?.id;
                values.price = selectedTripData?.price;
                values.trip_title = selectedTripData?.title;

                console.log('values - before submit');
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
              // render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>,

              // Configure the properties of the button
              resetButtonProps: {
                style: {
                  // Hide the reset button
                  display: 'none',
                },
              },
              // submitButtonProps: {
              //   style: {
              //     // Hide the submit button
              //     display: 'none',
              //   },
              // },
            }}
        >

            <ProCard
                title="Travel Mate - Details"
                bordered
                headerBordered
                collapsible={false}
                size="default"
                type="inner"
                style={{
                    marginBlockEnd: 15,
                    // minWidth: 800,
                    maxWidth: '100%',
                }}
                onCollapse={(collapse) => console.log(collapse)}
                actions={[
                    <a
                        key="cart-login-link"
                        href='/authentication'
                        target={"_blank"}
                    >
                        Login to an exising account
                    </a>
                    // <Button
                    //     type="primary"
                    //     icon={<ShoppingCartOutlined />}
                    //     key="preview"
                    //     size={"large"}
                    //     // loading={loadings[1]}
                    //     // style={{'margin': '10px 0px 0px 0px'}}
                    //     onClick={ () => {
                    //         // showBookingDetailsDrawer(true);
                    //         // console.log('record');
                    //         // console.log(record.id);
                    //         // setSelectedVersionId(record.id);
                    //         // setSelectedVersionPreview(record);
                    //         // setPolicyVersionPreviewModelOpen(true);
                    //     }}
                    //
                    // >
                    //     Book Now
                    // </Button>
                ]}
            >

                <ProForm.Group size={24}>
                    <ProFormText
                        name={'first_name'}
                        label="First Name"
                        // tooltip="The legal name"
                        placeholder="Type First Name"
                        // rules={[{ required: true }]}
                        fieldProps={{
                            prefix: <UserOutlined/>,
                            // size: 'large',

                            onChange: (e) => {
                                console.log('e.target.value');
                                console.log(e.target.value);
                            }
                        }}
                        colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                    />
                    <ProFormText
                        name={'last_name'}
                        label="Last Name"
                        // tooltip="The legal name"
                        placeholder="Type Last Name"
                        // rules={[{ required: true }]}
                        fieldProps={{
                            prefix: <UserOutlined/>,
                            // size: 'large',

                            onChange: (e) => {
                                console.log('e.target.value');
                                console.log(e.target.value);
                            }
                        }}
                        colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                    />
                </ProForm.Group>
                <ProForm.Group size={24}>
                    <ProFormText
                        label="Email"
                        name={'email'}
                        // tooltip="The legal name of the organization"
                        placeholder="info@example.com etc."
                        // rules={[{ required: true }]}
                        fieldProps={{
                            prefix: <MailOutlined />,
                        }}
                        colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                    />
                    <ProFormText.Password
                        name={'password'}
                        label="Password"
                        // tooltip="The legal name"
                        placeholder="Please type a password"
                        // rules={[{required: true}]}
                        fieldProps={{
                            prefix: <LockOutlined />,
                        }}
                        colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                    />
                </ProForm.Group>
            </ProCard>

          <ProCard
              title={'Trip : '+selectedTripData?.title}
              // title="Booking Details"
              bordered
              headerBordered
              collapsible={false}
              size="default"
              type="inner"
              style={{
                marginBlockEnd: 10,
                // minWidth: 800,
                maxWidth: '100%',
                  marginBlockStart: 10
              }}
              // cardProps={{
              //     cover:  <Image
              //         width={200}
              //         src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              //     />
              // }}
              onCollapse={(collapse) => console.log(collapse)}
              gutter={12}
              extra={
                  <Button
                      size="small"
                      onClick={(e) => {
                          e.stopPropagation();
                      }}
                  >
                      View Details
                  </Button>
              }
              // actions={[
              //   <Button
              //       type="primary"
              //       icon={<ShoppingCartOutlined />}
              //       key="preview"
              //       size={"large"}
              //       // loading={loadings[1]}
              //       // style={{'margin': '10px 0px 0px 0px'}}
              //       onClick={ () => {
              //         // showBookingDetailsDrawer(true);
              //         // console.log('record');
              //         // console.log(record.id);
              //         // setSelectedVersionId(record.id);
              //         // setSelectedVersionPreview(record);
              //         // setPolicyVersionPreviewModelOpen(true);
              //       }}
              //
              //   >
              //     Book Now
              //   </Button>
              // ]}
          >


              <Card cover={<Image
                  // colSpan={12}
                  height={150}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />}>
                  {selectedTripData?.description}
              </Card>
              {/*<ProCard colSpan={6} layout="center" bordered>*/}
              {/*    colSpan-6*/}
              {/*</ProCard>*/}
              {/*<ProCard colSpan={6} layout="center" bordered>*/}
              {/*    colSpan-6*/}
              {/*</ProCard>*/}

          </ProCard>

        </ProForm>


      </Drawer>

    </div>

);

};

export default TestHomePage;
