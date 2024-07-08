import { getDestinations } from '@/services/api/destination';
import { SearchOutlined } from '@ant-design/icons';
import {
  FooterToolbar, ProCard,
  ProForm, ProFormDatePicker,
  ProFormRadio, ProFormSegmented,
  ProFormSwitch, ProFormText, ProFormTextArea,
  ProList,
} from '@ant-design/pro-components';
import {Avatar, Button, Card, Col, Drawer, List, message, Progress, Row, Skeleton, Tag, Image, Tooltip, Input } from 'antd';
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

const { Meta } = Card;

const useStyles = createStyles(({ token }) => {
  return {
    // ejaz_01_content: {
    //   // display: 'none'
    //   background: '#432876'
    // }
  };
});


const HomePageNew = () => {

    const {initialState, loading, refresh, setInitialState} = useModel('@@initialState');
    const [ghost, setGhost] = useState(false);

  return (
    <div
      style={{
        backgroundColor: '#fff',
        margin: -24,
        padding: 24,
      }}
    >

    <Row  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
    <Col xs={24} sm={24} md={12} lg={12} xl={12} >
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={12} >
        <Image src='https://hips.hearstapps.com/hmg-prod/images/large-group-of-happy-friends-in-mountains-area-royalty-free-image-1653422631.jpg' preview={false} />
        {/* <Card
        cover={<Image src='https://hips.hearstapps.com/hmg-prod/images/large-group-of-happy-friends-in-mountains-area-royalty-free-image-1653422631.jpg' preview={false} />}
        >
          <h1>Trending Destinations</h1>
          <p>Most popular choices for travellers from Pakistan</p>
        </Card> */}
        {/* <ProCard
          cardProps={{
            
            cover: (<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />)
          }}
          

        >
          <h1>Trending Destinations</h1>
          <p>Most popular choices for travellers from Pakistan</p>
        </ProCard> */}
        
      </Col>
      
    </Row>
      


      <ProForm
          layout='vertical'
          grid={true}
          // initialValues={initialValues}
          // form={form}
          // onFinish={async (values) => {
          //   console.log(values);
          //   /**
          //    * Add Organization ID into the form Values
          //    */
          //   // values.organization_id = initialState?.currentUser?.meta?.ech_organization_id;
          //   await waitTime(1000);
          //   await onFinishHandlerForm(values);
          // }}
        >

          <ProCard
            title="BIO Details"
            bordered={true}
            headerBordered={true}
            collapsible={false}
            size="default"
            type="inner"
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
              
              <Col span={18}>
                  
                <ProForm.Group size={24}>
                  <ProFormText
                    name={['bio_details', 'first_name']}
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
                    colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                  />
                  <ProFormText
                    name={['bio_details', 'middle_name']}
                    label="Middle Name"
                    // tooltip="The legal name"
                    placeholder="Type Middle Name"
                    // rules={[{ required: true }]}
                    fieldProps={{
                      prefix: <UserOutlined/>,
                      // size: 'large',

                      onChange: (e) => {
                        console.log('e.target.value');
                        console.log(e.target.value);
                      }
                    }}
                    colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                  />
                  <ProFormText
                    name={['bio_details', 'last_name']}
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
                    colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                  />
                  {/*<ProFormText*/}
                  {/*  name={['bio_details', 'nick_name']}*/}
                  {/*  label="Nick Name"*/}
                  {/*  tooltip="The legal name"*/}
                  {/*  placeholder="please enter your legal name"*/}
                  {/*  // rules={[{ required: true }]}*/}
                  {/*  fieldProps={{*/}
                  {/*    prefix: <UserOutlined/>,*/}
                  {/*    // size: 'large',*/}

                  {/*    onChange: (e) => {*/}
                  {/*      console.log('e.target.value');*/}
                  {/*      console.log(e.target.value);*/}
                  {/*    }*/}
                  {/*  }}*/}
                  {/*  colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}*/}
                  {/*/>*/}
                </ProForm.Group>
                <ProForm.Group size={24}>
                  <ProFormRadio.Group
                    name={['bio_details', 'gender']}
                    label="Gender"
                    radioType="button"
                    options={[
                      {
                        label: 'Male',
                        value: 'male',
                      },
                      {
                        label: 'Female',
                        value: 'female',
                      },
                      {
                        label: 'Others',
                        value: 'others',
                      },
                    ]}
                    colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                  />

                  <ProFormDatePicker
                    label="Date of Birth"
                    name={['bio_details', 'date_of_birth']}
                    // placeholder="5453-763876-7686"
                    // maxLength={20}
                    // min={1}
                    // max={10}
                    // fieldProps={{ precision: 0 }}
                    colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                  />
                  <ProFormSegmented
                    label="Account Status"
                    name={['bio_details', 'account_status']}
                    request={async () => [
                      {label: 'Pending', value: 'pending'},
                      {label: 'Enabled', value: 'enabled'},
                      {label: 'Disabled', value: 'disabled'},
                    ]}
                    // fieldProps={{ precision: 0 }}
                    colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                  />
                </ProForm.Group>
                <ProForm.Group size={24}>
                  <ProFormTextArea
                    name={['bio_details', 'biographical_info']}
                    label="Biographical Info"
                    placeholder="Share a little biographical information to fill out your profile. This may be shown publicly. "
                    colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
                  />
                </ProForm.Group>
              </Col>
            </Row>
          </ProCard>
      </ProForm>
      
      
      <Row className="sa-edrup-scholarship-search-filters">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <div className="sa-edurp-search-fields">
              <Input size="large" placeholder="Keywords" prefix={<SearchOutlined />} onChange={(e) => {
                setSearch(e.target.value);
              }} />
              <Button type="button" className="sa-search-btn" onClick={() => {
                setMappedData([]);
                setPage(1);
                setHasMore(false);
              }}>Search</Button>
            </div>
          </Col>
        </Row>

      <ProList    
          pagination={{
            defaultPageSize: 6,
            showSizeChanger: true,
            pageSizeOptions: [6, 9, 10, 20, 50, 100],
            // onChange: (page) => // console.log(page),
          }}
        showActions="hover"
        grid={{ gutter: 16, column: 3 }}
        itemCardProps={{
          prefixCls: 'trips-grid'
        }}
        request={ async(params, sorter, filter) => {
          /**
           * Delay the API request
           */
          await waitTime(2000);

          return await request('/api/trips/view/all', {
            params: {
              page: params?.current,
              per_page: params?.pageSize,
              order_by: 'id',
              order: 'asc',
            },
          }).then(async (api_response) => {
            return { data: api_response.data.data, total: api_response.data.total, current_page: api_response.data.current_page};
          }).catch(function (error) {
            // console.log(error);
          });
        }}

        metas={{
          content: {
            render: (text, item) => {
              return (
                <Card
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
                      onClick={ () => {}}
                    >
                        Book Now
                    </Button>
                    </Tooltip>
                  ]}
                  cover={
                    <img
                      alt="example"
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
                    avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"/>}
                    // title="Card title"
                    description={item?.description}
                  />
                </Card>
              )
            }
          }

        }}

        />

    </div>

);

};

export default HomePageNew;
