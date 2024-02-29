import {addRule, removeRule, rule, updateRule} from '@/services/ant-design-pro/api';
import {getEchOrganizations} from '@/services/wp-api/EchOrganization';
import {
  PlusOutlined,
  ReadOutlined,
  UserOutlined,
  FileProtectOutlined,
  EditOutlined,
  SettingOutlined
} from '@ant-design/icons';
// import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
  FooterToolbar,
  ModalForm,
  PageContainer,
  ProDescriptions,
  ProFormText,
  ProFormTextArea,
  ProTable,
} from '@ant-design/pro-components';
import {FormattedMessage, useIntl} from '@umijs/max';
import {Button, Drawer, Input, message, Image, Dropdown, Space} from 'antd';
import React, {useRef, useState} from 'react';
// import type { FormValueType } from './components/UpdateForm';
import UpdateForm from './components/UpdateForm';
import request from "umi-request";
import {useRequest} from 'umi';
import {history} from "@@/core/history";
import moment from 'moment';
import {useModel} from "@@/exports";
// import type { RequestConfig } from 'umi';


/**
 * @en-US Add node
 * @zh-CN add node
 * @param fields
 */
const handleAdd = async (fields) => {
  const hide = message.loading('adding');
  try {
    await addRule({...fields});
    hide();
    message.success('Added successfully');
    return true;
  } catch (error) {
    hide();
    message.error('Adding failed, please try again!');
    return false;
  }
};

/**
 * @en-US Update node
 * @zh-CN update node
 *
 * @param fields
 */
const handleUpdate = async (fields) => {
  const hide = message.loading('Configuring');
  try {
    await updateRule({
      name: fields.name,
      desc: fields.desc,
      key: fields.key,
    });
    hide();

    message.success('Configuration is successful');
    return true;
  } catch (error) {
    hide();
    message.error('Configuration failed, please try again!');
    return false;
  }
};

/**
 *  Delete node
 * @zh-CN delete node
 *
 * @param selectedRows
 */
const handleRemove = async (selectedRows) => {
  const hide = message.loading('deleting');
  if (!selectedRows) return true;
  try {
    await removeRule({
      key: selectedRows.map((row) => row.key),
    });
    hide();
    message.success('Deleted successfully and will refresh soon');
    return true;
  } catch (error) {
    hide();
    message.error('Delete failed, please try again');
    return false;
  }
};

export const waitTimePromise = async (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const waitTime = async (time = 100) => {
  await waitTimePromise(time);
};

const TableList = () => {

  const {initialState, loading, refresh, setInitialState} = useModel('@@initialState');

  console.log('initialState');
  console.log(initialState);

  console.log('loading');
  console.log(loading);

  /**
   * @en-US Pop-up window of new window
   * @zh-CN Pop-up window for new window
   *  */
  const [createModalOpen, handleModalOpen] = useState(false);
  /**
   * @en-US The pop-up window of the distribution update window
   * @zh-CN Popup window for distribution update window
   * */
  const [updateModalOpen, handleUpdateModalOpen] = useState(false);

  const [showDetail, setShowDetail] = useState(false);

  const actionRef = useRef();
  const [currentRow, setCurrentRow] = useState();
  const [selectedRowsState, setSelectedRows] = useState([]);

  const [organizationsPoliciesDrawer, setOrganizationsPoliciesDrawer] = useState(false);

  const onCloseOrganizationsPoliciesDrawer = () => {
    setOrganizationsPoliciesDrawer(false);
  };

  /**
   * @en-US International configuration
   * @zh-CN Internationalization configuration
   * */
  const intl = useIntl();


  const items = [
    {
      label: 'Edit',
      key: 'editable',
      icon: <EditOutlined />,
    },
  ];



  const columns = [

    /**
     * Start Filter Columns
     */
    {
      title: "Name",
      dataIndex: ["title", "rendered"],
      key: 'filter-column-name',
      // tip: 'The rule name is the unique key',
      hideInTable: true,
      search: {
        transform: (value) => {
          return {
            search: value,
          }
        }
      },
    },
    {
      title: "Created Date",
      dataIndex: 'date',
      key: 'filter-column-created-date',
      hideInForm: true,
      hideInTable: true,
      valueType: 'dateRange',
      search: {
        transform: (value) => {
          return {
            before: moment( new Date(value[1]) ).toISOString(),
            after: moment( new Date(value[0]) ).toISOString(),
          };
        },
      },
    },
    /**
     * End Filter Columns
     */

    {
      title: 'ID',
      dataIndex: 'id',
      key: 'table-column-id',
      hideInSearch: true,
      sorter: true,
      defaultSortOrder: 'descend',
    },
    {
      title: "Name",
      dataIndex: ["title", "rendered"],
      key: 'table-column-name',
      // 'title?.rendered',
      // tip: 'The rule name is the unique key',
      hideInSearch: true,
      render: (dom, record) => {
        return (
          <div>
            <Image
              width={50}
              height={50}
              src={record?.meta?.ech_organization_logo_url}
            />
            <span style={{margin: "0px 0px 0px 10px"}}>
              {dom}
            </span>
            {/*<a*/}
            {/*  onClick={() => {*/}
            {/*    setCurrentRow(record);*/}
            {/*    setShowDetail(true);*/}
            {/*  }}*/}
            {/*  style={{margin: "0px 0px 0px 10px"}}*/}
            {/*>*/}
            {/*  {dom}*/}
            {/*</a>*/}
          </div>
        );
      },
    },
    {
      title: "Status",
      dataIndex: 'status',
      key: 'table-column-status',
      hideInSearch: true,
      // valueType: 'textarea',
    },
    // {
    //     title: <FormattedMessage id="pages.organizationTable.organizationAuthor" defaultMessage="Policies"/>,
    //     // dataIndex: ["title", "rendered"],
    //     render: (record) => {
    //         return (
    //             <a key="selected-policy-drawer-view-button" onClick={() => {
    //                 // history.push( '/policies/view/' + viewSelectedPolicy?.id + '/' + item?.id );
    //             }}> <FileProtectOutlined/> Policies </a>
    //         );
    //     },
    //
    //     hideInSearch: true,
    //     // valueType: 'textarea',
    // },
    // {
    //     title: <FormattedMessage id="pages.organizationTable.organizationAuthor" defaultMessage="Super Users"/>,
    //     // dataIndex: 'status',
    //     render: (record) => {
    //         return (
    //             <a key="selected-policy-drawer-view-button" onClick={() => {
    //                 // history.push( '/policies/view/' + viewSelectedPolicy?.id + '/' + item?.id );
    //             }}> <UserOutlined/> Super Users </a>
    //         );
    //     },
    //     hideInSearch: true,
    //     // valueType: 'textarea',
    // },
    // {
    //     title: <FormattedMessage id="pages.organizationTable.organizationAuthor" defaultMessage="Staff Members"/>,
    //     // dataIndex: 'status',
    //     render: (record) => {
    //         return (
    //             <a key="selected-policy-drawer-view-button" onClick={() => {
    //                 // history.push( '/policies/view/' + viewSelectedPolicy?.id + '/' + item?.id );
    //             }}> <UserOutlined/> Staff Members </a>
    //         );
    //     },
    //     hideInSearch: true,
    //     // valueType: 'textarea',
    // },
    {
      title: "Created Date",
      dataIndex: 'date',
      key: 'table-column-created-date',
      sorter: true,
      hideInForm: true,
      hideInSearch: true,
      render: (date) => {
        return (<p>{moment(new Date(date)).format('DD-MM-YYYY')}</p>)
      },
      // renderText: (val) =>
      //   `${val}${intl.formatMessage({
      //     id: 'pages.organizationTable.tenThousand',
      //     defaultMessage: ' Ten thousand ',
      //   })}`,
    },
    {
      title: 'Actions',
      valueType: 'option',
      key: 'table-column-actions',
      render: (text, record, _, action) => [
        <Space key={'space-row-actions-' + record.id} wrap>
          <Dropdown.Button key={'row-actions-' + record.id} menu={{items, onClick: ({ key }) => {

              if (key === 'editable') {
                console.log('drop-down-menu-item click callback trigred...');
                console.log('record');
                console.log(record);

                history.push('/administrator/organizations/edit/' + record.id);
              }

            } }}
          >
            <SettingOutlined/>
          </Dropdown.Button>
        </Space>


        // <a
        //   key="editable"
        //   onClick={() => {
        //     history.push('/administrator/organizations/edit/' + record.id);
        //   }}
        // >
        //   Edit
        // </a>,
      ],
    },
  ];

  return (
    <PageContainer
      header={
        {title: ""}
      }
    >
      <ProTable
        // headerTitle={intl.formatMessage({
        //   id: 'pages.organizationTable.title',
        //   defaultMessage: 'Enquiry form',
        // })}
        // actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 90,
          // labelWidth: 120,
          searchText: 'Filter'
        }}
        // search={false}
        pagination={{
          pageSize: 10,
          onChange: (page) => console.log(page),
        }}
        // toolBarRender={() => [
        //     <Button
        //         type="primary"
        //         key="primary"
        //         onClick={() => {
        //             // handleModalOpen(true);
        //             history.push('/administrator/organizations/new');
        //         }}
        //     >
        //         <PlusOutlined/> <FormattedMessage id="pages.organizationTable.new" defaultMessage="New"/>
        //     </Button>,
        // ]}
        // request={getEchOrganizations({ context: 'edit' })}
        request={
          // const params = {};
          async (params = {}, sort, filter, paginate) => {

            console.log('params');
            console.log(params);

            console.log('params - sort');
            console.log(sort);

            console.log('params - filter');
            console.log(filter);

            await waitTime(2000);

            return await getEchOrganizations(
              {
                context: 'edit',
                // author: initialState?.currentUser?.id,
                sort: {...sort},
                pagination: {...params},
              },
              {getResponse: true}
            );

          }}
        columns={columns}
        // rowSelection={{
        //   onChange: (_, selectedRows) => {
        //     setSelectedRows(selectedRows);
        //   },
        // }}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              <FormattedMessage id="pages.organizationTable.chosen" defaultMessage="Chosen"/>{' '}
              <a style={{fontWeight: 600}}>{selectedRowsState.length}</a>{' '}
              <FormattedMessage id="pages.organizationTable.item" defaultMessage="item"/>
              &nbsp;&nbsp;
              <span>
                <FormattedMessage
                  id="pages.organizationTable.totalServiceCalls"
                  defaultMessage="Total number of service calls"
                />{' '}
                {/*{selectedRowsState.reduce((pre, item) => pre + item.callNo!"," 0)}{' '}*/}
                {/*{selectedRowsState.reduce((pre, item) => { return  pre + item.callNo!, 0} }{' '}*/}
                <FormattedMessage id="pages.organizationTable.tenThousand"
                                  defaultMessage="Ten thousand"/>
              </span>
            </div>
          }
        >
          <Button
            onClick={async () => {
              // await handleRemove(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            <FormattedMessage
              id="pages.organizationTable.batchDeletion"
              defaultMessage="Batch deletion"
            />
          </Button>
          <Button type="primary">
            <FormattedMessage
              id="pages.organizationTable.batchApproval"
              defaultMessage="Batch approval"
            />
          </Button>
        </FooterToolbar>
      )}
      <ModalForm
        title={intl.formatMessage({
          id: 'pages.organizationTable.createForm.newRule',
          defaultMessage: 'New rule',
        })}
        width="400px"
        open={createModalOpen}
        onOpenChange={handleModalOpen}
        onFinish={async (value) => {
          // const success = await handleAdd(value);
          const success = false;
          if (success) {
            handleModalOpen(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      >
        <ProFormText
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.organizationTable.organizationName"
                  defaultMessage="Rule name is required"
                />
              ),
            },
          ]}
          width="md"
          name="name"
        />
        <ProFormTextArea width="md" name="desc"/>
      </ModalForm>
      <UpdateForm
        onSubmit={async (value) => {
          // const success = await handleUpdate(value);
          const success = false;
          if (success) {
            handleUpdateModalOpen(false);
            setCurrentRow(undefined);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => {
          handleUpdateModalOpen(false);
          if (!showDetail) {
            setCurrentRow(undefined);
          }
        }}
        updateModalOpen={updateModalOpen}
        values={currentRow || {}}
      />

      <Drawer
        width={600}
        open={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.name && (
          <ProDescriptions
            column={2}
            title={currentRow?.name}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.name,
            }}
            columns={columns}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};

export default TableList;
