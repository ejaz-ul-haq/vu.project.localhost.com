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
      <h1>Trending Destinations</h1>
      <p>Most popular choices for travellers from Pakistan</p>

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
