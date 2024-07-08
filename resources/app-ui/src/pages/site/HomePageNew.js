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
  AntDesignOutlined,
  UserAddOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CarryOutOutlined,
  ShoppingCartOutlined, UserOutlined, EnvironmentOutlined, PhoneOutlined, MailOutlined, LockOutlined
} from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { waitTime } from '../../components/Helpers/TableHelpers';
import {request, useModel } from '@umijs/max';
import {history} from "@@/core/history";
import {render} from "@testing-library/react";
import moment from 'moment';

import {truncateText} from '../../components/Helpers/TextHelpers';

import './styles/HomePage.scss';

const { Meta } = Card;



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

    <Row>
    <Col xs={24} sm={24} md={24} lg={24} xl={24} className='page-banner-wrapper'>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
      </Col>
      
      
    </Row>
      

    <Card>      
      <Row className="sa-edrup-scholarship-search-filters">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <div className="sa-edurp-search-fields">
              <Input size="large" placeholder="Keywords" prefix={<SearchOutlined />} onChange={(e) => {
                setSearch(e.target.value);
              }} />
            </div>
          </Col>
        </Row>
    </Card>

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
                // return(
                //     <div
                //         className="vu-project-card"
                //         style={{ border: "1px solid red" }}
                //         onClick={() => {
                //           window.open(item.link, "_self");
                //         }}
                //     >
                //         <div className="vu-project-card-cover">
                //           <Image src={item?.image_url} preview={false} />
                //         </div>
                //         <div className="vu-project-card-body">
                //             jkhkjj
                //         </div>
                //     </div>
                // );
              return (
                <Card
                  style={{
                    width: '100%',
                    height: '700px', // Set a fixed height for all cards
                  }}
                  actions={[
                    <Tooltip title="Thanks for using antd. Have a nice day!">
                    <Button
                      type="primary"
                    //   icon={<ArrowRightOutlined />}
                      key="preview"
                      size={"large"}
                      onClick={ () => {
                        history.push('/trips/'+item?.id);
                      }}
                    >
                        View Details
                        <ArrowRightOutlined />
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
                    // avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"/>}
                    // title="Card title"
                    description={
                        
                        <>
                        <p>{truncateText(item?.description, 20)}</p>
                        <p><ShoppingCartOutlined /> Price: {item?.price}</p>
                        <p><CarryOutOutlined /> Start Date: {moment(new Date(item?.start_date_time)).format('DD-MM-YYYY hh:mm:ss A')}</p>
                        <p><CalendarOutlined /> End Date: {moment(new Date(item?.end_date_time)).format('DD-MM-YYYY hh:mm:ss A')}</p>
                        {/* <p>created_at: {moment(new Date(item?.created_at)).format('DD-MM-YYYY hh:mm:ss A')}</p> */}
                        {/* <p>updated_at: {moment(new Date(item?.updated_at)).format('DD-MM-YYYY hh:mm:ss A')}</p> */}

                    
                        <Avatar.Group
      size="large"
      max={{
        count: 2,
        style: {
          color: '#f56a00',
          backgroundColor: '#fde3cf',
        },
      }}
    >
      {
                item?.users.map(function (user, index) {
                  console.log('user');
                  console.log(user);
                  return (
                    <Avatar
                      key={user?.id}
                      src={user?.image_url}
                      size={'default'}
                      data-user_id={user?.id}
                    />);
                })
              }


              {(item?.users?.length === 0) &&
                /**
                 * Not Found any Staff member yet now then will display an default icon
                 */
                <Avatar
                  // style={{
                  //   backgroundColor: '#1677ff',
                  // }}
                  size={'default'}
                  icon={<UserAddOutlined/>}
                />
              }
    </Avatar.Group>

                        </>
                    }
                  />
                </Card>
              );
            }
          }

        }}

        />

    </div>

);

};

export default HomePageNew;
