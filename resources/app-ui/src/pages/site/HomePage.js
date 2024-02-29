import { getDestinations } from '@/services/api/destination';
import {
  ProFormRadio,
  ProFormSwitch,
  ProList,
} from '@ant-design/pro-components';
import {Avatar, Card, message, Progress, Tag} from 'antd';
import { SettingOutlined, EditOutlined, EllipsisOutlined, LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { waitTime } from '../../components/Helpers/TableHelpers';
import {request } from '@umijs/max';
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

const HomePage = () => {

  const [destinationsData, setDestinationsData] = useState([]);
  const { styles } = useStyles();

  const [cardActionProps, setCardActionProps] = useState(
    'extra',
  );


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
        rowSelection={{}}
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

          return await request('/api/destinations/view/all', {
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
                  style={{
                    width: '100%',
                  }}
                  cover={
                    <img
                      alt="example"
                      // src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      src={item?.image_url}
                      style={{ height: '300px' }}
                    />
                  }
                  onClick={() => {
                    history.push('/admin-app/destinations/new');
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
    </div>
);

};

export default HomePage;
