import {
  EditOutlined,
  PlusOutlined,
  DeleteOutlined
} from '@ant-design/icons';
import {
  PageContainer,
  ProTable
} from '@ant-design/pro-components';
import {FormattedMessage, useIntl, request, history} from '@umijs/max';
import {
  Button, message
} from 'antd';
import React, {useRef, useState} from 'react';
import moment from 'moment';
import {useModel} from 'umi';


export const waitTimePromise = async (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

// helo
export const waitTime = async (time = 100) => {
  await waitTimePromise(time);
};

const ListTrips = () => {

  const {initialState, loading, refresh, setInitialState} = useModel('@@initialState');

  console.log('initialState');
  console.log(initialState);

  console.log('loading');
  console.log(loading);


  const [showDetail, setShowDetail] = useState(false);

  const tripsTableRef = useRef();
  const [currentRow, setCurrentRow] = useState();

  /**
   * @en-US International configuration
   * @zh-CN Internationalization configuration
   * */
  const intl = useIntl();

  const columns = [

    {
      title: 'ID',
      dataIndex: 'id',
      key: 'table-column-id',
      hideInSearch: true,
      sorter: true,
      defaultSortOrder: 'descend',
    },
    {
      title: "Destination",
      dataIndex: ['destination', 'title'],
      key: 'table-column-destination',
      copyable: true,
      hideInSearch: true,
      render: (dom, entity) => {
        return (
          <a
            onClick={() => {
              setCurrentRow(entity);
              setShowDetail(true);
            }}
          >
            {dom}
          </a>
        );
      },
    },
    {
      title: "Accommodation",
      dataIndex: ['accommodation', 'title'],
      key: 'table-column-accommodation',
      copyable: true,
      hideInSearch: true,
      render: (dom, entity) => {
        return (
          <a
            onClick={() => {
              setCurrentRow(entity);
              setShowDetail(true);
            }}
          >
            {dom}
          </a>
        );
      },
    },
    {
      title: "Trip Start Date",
      dataIndex: 'start_date_time',
      key: 'table-column-trip-start-date',
      sorter: true,
      hideInForm: true,
      hideInSearch: true,
      render: (start_date_time) => {
        return (<p>{moment(new Date(start_date_time)).format('DD-MM-YYYY')}</p>)
      },
    },
    {
      title: "Trip End Date",
      dataIndex: 'end_date_time',
      key: 'table-column-trip-end-date',
      sorter: true,
      hideInForm: true,
      hideInSearch: true,
      render: (end_date_time) => {
        return (<p>{moment(new Date(end_date_time)).format('DD-MM-YYYY')}</p>)
      },
    },
    {
      title: 'Actions',
      valueType: 'option',
      key: 'table-column-actions',
      render: (text, record, _, action) => [

        <Button
          key="editable"
          onClick={() => {
            history.push('/admin-app/trips/edit/' + record.id);
          }}
        >
          <EditOutlined />
        </Button>,

        <Button
          key="deletable"
          onClick={() => {

            return request('/api/trips/' + record?.id, {

              method: 'DELETE',

            }).then(async (api_response) => {
              console.log('api_response');
              console.log(api_response);

              if (api_response.status === true) {

                await waitTime(3000);

                console.log('api_response.status');

                await message.success('Deleted successfully');

                if (tripsTableRef.current) {
                  tripsTableRef.current?.reloadAndRest?.();
                }
              }

            }).catch(function (error) {
              console.log(error);
            });

          }}
          danger={true}
        >
          <DeleteOutlined />
        </Button>,

      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable
        actionRef={tripsTableRef}
        rowKey="id"
        search={false}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              history.push('/admin-app/trips/new');
            }}
          >
            <PlusOutlined/> <FormattedMessage id="pages.organizationTable.new" defaultMessage="New"/>
          </Button>,
        ]}
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: [10, 20, 50, 100],
          onChange: (page) => console.log(page),
        }}
        request={

          async (params = {}, sort, filter, paginate) => {

            console.log('params');
            console.log(params);

            console.log('params - sort');
            console.log(sort);

            console.log('params - filter');
            console.log(filter);

            console.log('initialState?.currentUser');
            console.log(initialState?.currentUser);

            /**
             * Delay the API request
             */
            await waitTime(2000);

            return await request('/api/trips', {

              params: {
                page: params?.current,
                per_page: params?.pageSize,
                order_by: 'id',
                order: 'asc',
              },

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
        columns={columns}

      />

    </PageContainer>
  );
};

export default ListTrips;
