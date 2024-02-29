import {addRule, removeRule, rule, updateRule} from '@/services/ant-design-pro/api';
import {getEchCustomerPolicies, getEchCustomerPolicy, putEchCustomerPolicy} from '@/services/wp-api/EchCustomerPolicy';
import {EditOutlined, PlusOutlined, SettingOutlined, UserOutlined} from '@ant-design/icons';
// import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
  FooterToolbar,
  ModalForm,
  PageContainer,
  ProDescriptions,
  ProFormText,
  ProFormTextArea,
  ProTable, TableDropdown,
} from '@ant-design/pro-components';
import {FormattedMessage, useIntl} from '@umijs/max';
import {
  Button,
  Avatar,
  Drawer,
  List,
  Space,
  Input,
  message,
  Skeleton,
  Modal,
  Transfer,
  Switch,
  Divider,
  Tooltip, Dropdown
} from 'antd';
import React, {useEffect, useRef, useState} from 'react';
import {
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
  DownloadOutlined,
  ReadOutlined,
  AntDesignOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
// import type { FormValueType } from './components/UpdateForm';
import UpdateForm from './components/UpdateForm';
// import type { RequestConfig } from 'umi';
import {history, Link, request} from '@umijs/max';
import {date} from "mockjs/src/mock/random/date";
import moment from 'moment';

import {useModel} from 'umi';
import {getEchPolicies} from "@/services/wp-api/EchPolicy";
import {render} from "@testing-library/react";
import {getEchOrganization, getEchOrganizations, putEchOrganization} from "@/services/wp-api/EchOrganization";
import {getUsers} from "@/services/wp-api/User";
import TableTransfer from "@/components/Helpers/TableTransfer";

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

const data = Array.from({
  length: 23,
}).map((_, i) => ({
  href: 'https://ant.design',
  title: `ant design part ${i}`,
  avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));

const IconText = ({icon, text}) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);


const onChangeHandlerPolicyUsers = (selected_policy_id, values, policiesTableRef) => {
  console.log('onChangeHandlerPolicyUsers');
  console.log('Received values of transfer-table selected items:');
  console.log(values);

  // const updatePolicy = async () => {
  //     try {
  //
  //         const selected_staff_members = values.map(item => ({
  //             staff_member_id: item,
  //         }));
  //         console.log('selected_staff_members');
  //         console.log(selected_staff_members);
  //
  //
  //         const request_data = {
  //             meta: {
  //                 ech_staff_members: selected_staff_members,
  //                 ech_used_seats: selected_staff_members.length.toString(),
  //             },
  //         };
  //
  //         console.log('request_data');
  //         console.log(request_data);
  //
  //         const msg = putEchCustomerPolicy(
  //             {id: selected_policy_id},
  //             {},
  //             {
  //                 data: request_data
  //             }
  //         );
  //
  //
  //         message.success('Submitted Successfully');
  //         /**
  //          * Reload the table after modal closing to show the updated seats in the table
  //          */
  //         if (policiesTableRef.current) {
  //             policiesTableRef.current.reload();
  //         }
  //
  //
  //         // return msg.data;
  //         return msg;
  //
  //     } catch (error) {
  //         console.log('updateEchOrganization - error');
  //         console.log(error);
  //         // history.push(loginPath);
  //     }
  //     return undefined;
  // };
  //
  // const policy_updated = updatePolicy();
  // console.log('policy_updated');
  // console.log(policy_updated);

};

const TableList = () => {

  const {initialState, loading, refresh, setInitialState} = useModel('@@initialState');

  console.log('initialState');
  console.log(initialState);

  console.log('loading');
  console.log(loading);

  const [organizationId, setOrganizationId] = useState(0);

  useEffect(() => {
    setOrganizationId(initialState?.currentUser?.meta?.ech_organization_id);
  }, [initialState]); //empty dependency array so it only runs once at render


  const [policyStaffMemberModelOpen, setPolicyStaffMemberModelOpen] = useState(false);
  const [policyStaffMembers, setPolicyStaffMembers] = useState([]);
  const [targetKeys, setTargetKeys] = useState([]);


  // useEffect(() => {
  //     getUsers(
  //         {
  //             context: 'edit',
  //             // sort: {...sort},
  //             // pagination: {...params},
  //             roles: 'ech_staff_member',
  //             organization_id: initialState?.currentUser?.meta?.ech_organization_id,
  //         },
  //         {getResponse: true}
  //     ).then(function ({data, response}) {
  //         console.log("policy-staff-members-data");
  //         console.log(data);
  //         // console.log(response.status);
  //         // console.log(response.statusText);
  //         // console.log(response.headers);
  //
  //
  //         // data.map((item) => (item.email));
  //
  //         // setPolicyStaffMembers(data);
  //
  //         const table_data = data.map((item, i) => ({
  //             // key: i.toString(),
  //             key: item.id,
  //             name: item.name,
  //             email: item.email,
  //             // disabled: i % 4 === 0,
  //         }));
  //
  //         /**
  //          * Set Policy Users Modal Left Side All Users List
  //          */
  //         setPolicyStaffMembers(table_data);
  //
  //     });
  //
  // }, [policyStaffMemberModelOpen]);

  // const leftTableColumns = [
  //   {
  //     dataIndex: 'name',
  //     title: 'Name',
  //   },
  //   {
  //     dataIndex: 'email',
  //     title: 'Email',
  //   },
  // ];
  // const rightTableColumns = [
  //   {
  //     dataIndex: 'name',
  //     title: 'Name',
  //   },
  //   {
  //     dataIndex: 'email',
  //     title: 'Email',
  //   },
  // ];


  const [policyOrganizationsDrawer, setPolicyOrganizationsDrawer] = useState(false);

  const onClosePolicyOrganizationsDrawer = () => {
    setPolicyOrganizationsDrawer(false);
  };

  const showPolicyOrganizationsDrawer = async () => {

    setPolicyOrganizationsDrawer(true);

    await getEchOrganizations(
      {
        context: 'edit',
        // sort: {...sort},
        // pagination: {...params},
      },
      {getResponse: true}
    ).then(function ({data, response}) {
      console.log(data);
      // console.log(response.status);
      // console.log(response.statusText);
      // console.log(response.headers);

      setViewSelectedPolicyOrganizations(data);


      setViewSelectedPolicyOrganizationsLoading(false);

    });


  };


  const [viewSelectedPolicy, setViewSelectedPolicy] = useState({});
  const [viewSelectedPolicyOrganizationsLoading, setViewSelectedPolicyOrganizationsLoading] = useState(true);
  const [viewSelectedPolicyOrganizations, setViewSelectedPolicyOrganizations] = useState([]);
  const [availableSeatsOfSelectedPolicy, setAvailableSeatsOfSelectedPolicy] = useState(0);

  // useEffect(() => {
  // setUserId(params.id);
  // console.log('viewSelectedPolicy -- updates');

  // const test_organization = getEchOrganizations(
  //   {
  //     context: 'edit',
  //     // sort: {...sort},
  //     // pagination: {...params},
  //   },
  //   { getResponse: true }
  // ).then(function({ data, response }) {
  //   console.log(data);
  //   // console.log(response.status);
  //   // console.log(response.statusText);
  //   // console.log(response.headers);
  //
  //   setViewSelectedPolicyOrganizations(data);
  //
  //   setViewSelectedPolicyOrganizationsLoading(false);

  // });
  //
  // console.log('test_organization -- updates');
  // console.log(test_organization);

  /**
   * Call the organizations api and log the response and set in the states
   */


  // }, [policyOrganizationsDrawer, viewSelectedPolicy]); //empty dependency array so it only runs once at render


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

  const policiesTableRef = useRef();
  const [currentRow, setCurrentRow] = useState();
  const [selectedRowsState, setSelectedRows] = useState([]);

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
      dataIndex: 'name',
      key: 'filter-column-name',
      hideInTable: true,
      // tip: 'The rule name is the unique key',
      search: {
        transform: (value) => {
          return {
            search: value,
          }
        }
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
      width: 80,
    },
    {
      title: "Name",
      dataIndex: 'name',
      key: 'table-column-name',
      copyable: true,
      hideInSearch: true,
      // tip: 'The rule name is the unique key',
      width: 300,
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
      title: "Description",
      dataIndex: 'description',
      key: 'table-column-description',
      // valueType: 'textarea',
      // ellipsis: true,
      hideInSearch: true,
      ellipsis: {
        showTitle: false,
      },
    },
    // {
    //   title: "Slug",
    //   dataIndex: 'slug',
    //   key: 'table-column-slug',
    //   sorter: true,
    //   hideInForm: true,
    //   hideInSearch: true,
    //   // renderText: (val) =>
    //   // `${val}${intl.formatMessage({
    //   //   id: 'pages.organizationTable.tenThousand',
    //   //   defaultMessage: ' Ten thousand ',
    //   //     moment(${val}).format("DD/MM/YYYY"),
    //   // })}`,
    //   // },
    //   //   render: (text, record, _, action) => {
    //   //     return  date(text).format("DD/MM/YYYY");
    //   //   }
    //   // render: (date) => {
    //   //   return (<p>{moment(new Date(date)).format('DD-MM-YYYY')}</p>)
    //   // },
    //   // valueType: 'date',
    //   // search: {
    //   //   transform: (value) => {
    //   //     return {
    //   //       startTime: moment( new Date(value[0]) ).toISOString(),
    //   //       endTime: moment( new Date(value[1]) ).toISOString(),
    //   //     };
    //   //   },
    //   // },
    // },
    {
      title: "Count",
      dataIndex: 'count',
      key: 'table-column-count',
      // copyable: true,
      // tip: 'The rule name is the unique key',
      hideInSearch: true,
      width: 80,
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
    // {
    //     title: <FormattedMessage id="pages.organizationTable.organizationSeats" defaultMessage="Seats"/>,
    //     dataIndex: 'seats',
    //     // valueType: 'textarea',
    //     hideInSearch: true,
    //     render: (text, record, _, seats) => {
    //         const total_seats = record?.meta?.ech_total_seats;
    //         // const used_seats = ( '' !== record?.meta?.ech_used_seats || '0' !== record?.meta?.ech_used_seat ) ? record?.meta?.ech_used_seat: 0;
    //         const used_seats = record?.meta?.ech_used_seats;
    //         return (<p>{total_seats}/{used_seats}</p>)
    //     }
    // },
    // {
    //     title: <FormattedMessage id="pages.organizationTable.organizationStaffMembers"
    //                              defaultMessage="Staff Members"/>,
    //     dataIndex: 'status',
    //     // valueType: 'textarea',
    //     // render: (record) => {
    //     //   return (
    //     //     <a key="selected-policy-drawer-staff-members-button" onClick={() => {
    //     //       // history.push( '/policies/view/' + viewSelectedPolicy?.id + '/' + item?.id );
    //     //     }} > <UserOutlined /> Staff Members </a>
    //     //   );
    //     // },
    //
    //     render: (text, record, _, action) => {
    //
    //         return (
    //             <a
    //                 key="add-new-staff-member"
    //                 onClick={() => {
    //                     console.log("record-testing-for-add-new-staff-member");
    //                     console.log(record);
    //
    //                     /**
    //                      * Set the table row Selected Policy
    //                      */
    //                     setViewSelectedPolicy(record);
    //
    //                     /**
    //                      * Set the Policy Users Modal Open State
    //                      */
    //                     setPolicyStaffMemberModelOpen(true);
    //
    //                     /**
    //                      * Set the selected policy already associated staff-members
    //                      */
    //                     if (Array.isArray(record?.meta?.ech_staff_members) && record?.meta?.ech_staff_members.length > 0) {
    //                         const policy_users_arr = record?.meta?.ech_staff_members.map(staff_member => staff_member.staff_member_id);
    //                         setTargetKeys(policy_users_arr);
    //                     }
    //
    //                     /**
    //                      * Set Available Policies on Run Time
    //                      */
    //                     setAvailableSeatsOfSelectedPolicy((parseInt(record?.meta?.ech_total_seats) - parseInt(record?.meta?.ech_used_seats)));
    //
    //                     // history.push(record);
    //
    //                 }}
    //             >
    //                 {/*Add new Staff Member*/}
    //                 <Avatar.Group
    //                     maxCount={3}
    //                     maxPopoverTrigger="focus"
    //                     size="large"
    //                     maxStyle={{
    //                         color: '#f56a00',
    //                         backgroundColor: '#fde3cf',
    //                         cursor: 'pointer',
    //                     }}
    //                 >
    //                     {
    //                         record?.meta?.ech_staff_members.map(function (ech_staff_member, index) {
    //                             console.log('ech_staff_member_id');
    //                             console.log(ech_staff_member.staff_member_id);
    //                             console.log('ech_staff_member_profile_image_url');
    //                             console.log(ech_staff_member.profile_image_url);
    //                             return (
    //                                 <Avatar
    //                                     key={ech_staff_member?.staff_member_id}
    //                                     src={ech_staff_member?.profile_image_url}
    //                                     size={'default'}
    //                                     data-staff_member_id={ech_staff_member?.staff_member_id}
    //                                 />);
    //                         })
    //                     }
    //
    //
    //                     {(record?.meta?.ech_staff_members.length === 0) &&
    //                         /**
    //                          * Not Found any Staff member yet now then will display an default icon
    //                          */
    //                         <Avatar
    //                             // style={{
    //                             //   backgroundColor: '#1677ff',
    //                             // }}
    //                             size={'default'}
    //                             icon={<UserAddOutlined/>}
    //                         />
    //                     }
    //
    //                 </Avatar.Group>
    //             </a>
    //         );
    //     },
    //     hideInSearch: true,
    // },
    {
      title: 'Actions',
      valueType: 'option',
      key: 'table-column-actions',
      width: 100,
      render: (text, record, _, action) => [

        <Space key={'space-row-actions-' + record.id} wrap>
          <Dropdown.Button key={'row-actions-' + record.id} menu={{items, onClick: ({ key }) => {

              if (key === 'editable') {
                console.log('drop-down-menu-item click callback trigred...');
                console.log('record');
                console.log(record);

                history.push('/administrator/policies-bundles/edit/' + record.id);
              }

            } }}
          >
            <SettingOutlined/>
          </Dropdown.Button>
        </Space>


        // <a
        //   key="editable"
        //   onClick={() => {
        //     history.push('/administrator/policies-bundles/edit/' + record.id);
        //   }}
        // >
        //   Edit
        // </a>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable
        // headerTitle={intl.formatMessage({
        //   id: 'pages.organizationTable.title',
        //   defaultMessage: 'Enquiry form',
        // })}
        actionRef={policiesTableRef}
        rowKey="id"
        search={{
          // labelWidth: 120,
          searchText: 'Filter'
        }}
        // search={false}
        pagination={{
          pageSize: 10,
          onChange: (page) => console.log(page),
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              // handleModalOpen(true);
              history.push('/administrator/policies-bundles/new');
            }}
          >
            <PlusOutlined/> <FormattedMessage id="pages.organizationTable.new" defaultMessage="New"/>
          </Button>,
        ]}
        request={
          // const params = {};
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


            /**
             * API Request
             */
            return await request('/wp/v2/ech_policy_bundles', {
              method: 'GET',
              // context: 'edit',
              // data: {},
              params: {
                context: 'edit',
                sort: {...sort},
                pagination: {...params},
                // ...params
              },
              // important to work properly in the request
              getResponse: true
            });

            //   .then((api_response) => {
            //   console.log('api_response');
            //   console.log(api_response);
            //   // return { data: api_response };
            //   //         /**
            //   //          * Policy Bundle Created then show message and redirect to listing screen
            //   //          */
            //   //         if (api_response?.id > 0) {
            //   //             message.success('Submitted successfully');
            //   //             // history.push('/super-users/list');
            //   //             history.push('/administrator/policies-bundles/edit/' + api_response?.id);
            //   //         }
            //   return api_response;
            //
            // });




          /**
             * Site admins will only see their created parent ( ECH Policy ) CPT records
             */
            // if (initialState?.currentUser?.roles.includes('administrator')) {
            //   return await getEchPolicies(
            //     {
            //       context: 'edit',
            //       sort: {...sort},
            //       pagination: {...params},
            //       author: initialState?.currentUser?.id,
            //       // after: {...params?.startTime },
            //       // before: {...params?.endTime },
            //     },
            //     {getResponse: true}
            //   );
            // }

            /**
             * Site Customer ( Organisation Supper Admin ) will see only their purchased and dynamically created policies rrecords.
             */
            // if( ! initialState?.currentUser?.roles.includes('ech_super_admin') ) {
            // return await getEchCustomerPolicies(
            //   {
            //     context: 'edit',
            //     sort: {...sort},
            //     pagination: {...params},
            //     author: initialState?.currentUser?.id
            //   },
            //   {getResponse: true}
            // );
            // }

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
              policiesTableRef.current?.reloadAndRest?.();
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
            if (policiesTableRef.current) {
              policiesTableRef.current.reload();
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
            if (policiesTableRef.current) {
              policiesTableRef.current.reload();
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
        open={policyOrganizationsDrawer}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
          onClosePolicyOrganizationsDrawer(false);
        }}
        closable={true}
        // title="Testing Drawer"
        // title={render()}
        title={viewSelectedPolicy?.title?.rendered}
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


        <List
          itemLayout="horizontal"
          size="large"
          loading={viewSelectedPolicyOrganizationsLoading}
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 8,
          }}
          // dataSource={data}
          dataSource={viewSelectedPolicyOrganizations}
          // footer={
          //   <div>
          //     <b>ant design</b> footer part
          //   </div>
          // }
          renderItem={(item) => {

            const organization_logo_url = (item?.meta?.ech_organization_logo_url) ? item?.meta?.ech_organization_logo_url : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==';

            console.log('item');
            console.log(item);

            return (
              (

                <List.Item
                  key={item.title.rendered}
                  actions={[
                    // <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                    // <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                    // <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    <a key="selected-policy-drawer-view-button" onClick={() => {
                      history.push('/policies/view/' + viewSelectedPolicy?.id + '/' + item?.id);
                    }}> <ReadOutlined/> Read Policy </a>,
                    <a key="selected-policy-drawer-download-button"> <DownloadOutlined/> </a>,
                  ]}
                  // extra={
                  //   <img
                  //     width={50}
                  //     alt="logo"
                  //     // src={(item) => {
                  //     //   if( item?.meta?.ech_organization_logo_url ){
                  //     //     return item?.meta?.ech_organization_logo_url;
                  //     //   }else{
                  //     //     return 'data:image/png;base64,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';
                  //     //   }
                  //     // }}
                  //     src={organization_logo_url}
                  //   />
                  // }
                >
                  <Skeleton avatar title={false} loading={item.loading} active>
                    <List.Item.Meta
                      avatar={<Avatar src={organization_logo_url}/>}
                      title={<a href={item.href}>{item.title.rendered}</a>}
                      description={item.content.rendered}
                    />
                    {item.content.rendered}
                  </Skeleton>
                </List.Item>
              )
            );
          }}
        />


        {/*<List*/}
        {/*  itemLayout="vertical"*/}
        {/*  size="large"*/}
        {/*  loading={viewSelectedPolicyOrganizationsLoading}*/}
        {/*  pagination={{*/}
        {/*    onChange: (page) => {*/}
        {/*      console.log(page);*/}
        {/*    },*/}
        {/*    pageSize: 3,*/}
        {/*  }}*/}
        {/*  // dataSource={data}*/}
        {/*  dataSource={viewSelectedPolicyOrganizations}*/}
        {/*  footer={*/}
        {/*    <div>*/}
        {/*      <b>ant design</b> footer part*/}
        {/*    </div>*/}
        {/*  }*/}
        {/*  renderItem={(item) => {*/}

        {/*   console.log('item');*/}
        {/*   console.log(item);*/}

        {/*    return(*/}
        {/*     (*/}

        {/*       <List.Item*/}
        {/*         key={item.title.rendered}*/}
        {/*         actions={[*/}
        {/*           <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,*/}
        {/*           <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,*/}
        {/*           <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,*/}
        {/*           <a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>*/}
        {/*         ]}*/}
        {/*         // extra={*/}
        {/*         //   // <img*/}
        {/*         //   //   width={272}*/}
        {/*         //   //   alt="logo"*/}
        {/*         //   //   src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"*/}
        {/*         //   // />*/}
        {/*         // }*/}
        {/*       >*/}
        {/*         <List.Item.Meta*/}
        {/*           avatar={<Avatar src={item.avatar} />}*/}
        {/*           title={<a href={item.href}>{item.title.rendered}</a>}*/}
        {/*           description={item.content.rendered}*/}
        {/*         />*/}
        {/*         {item.content.rendered}*/}
        {/*       </List.Item>*/}
        {/*     )*/}
        {/*   );*/}
        {/*  }}*/}
        {/*/>*/}
      </Drawer>

      {/*<ModalForm*/}
      {/*    title={viewSelectedPolicy?.title?.rendered + ' Total Seats:= ' + viewSelectedPolicy?.meta?.ech_total_seats + ' Avaliable Seats:= ' + availableSeatsOfSelectedPolicy}*/}
      {/*    open={policyStaffMemberModelOpen}*/}
      {/*    onOpenChange={setPolicyStaffMemberModelOpen}*/}
      {/*    modalProps={{*/}
      {/*        destroyOnClose: true,*/}
      {/*        onCancel: () => console.log('run'),*/}
      {/*        afterClose: () => {*/}
      {/*            /***/}
      {/*             * Reset the Policy Selected Users when the modal is close to make sure the modal new open will be fresh*/}

      {/*            setTargetKeys([]);*/}
      {/*        },*/}
      {/*        okText: 'Save',*/}
      {/*    }}*/}
      {/*    preserve={false}*/}
      {/*    submitTimeout={2000}*/}
      {/*    onFinish={async (values) => {*/}
      {/*        await waitTime(2000);*/}
      {/*        /***/}
      {/*         * Call the APIs to update the selected policy's users association*/}

      {/*        await onChangeHandlerPolicyUsers(viewSelectedPolicy?.id, targetKeys, policiesTableRef);*/}
      {/*        /***/}
      {/*         * The following return is necessary to auto close the modal*/}

      {/*        return true;*/}
      {/*    }}*/}
      {/*>*/}
      {/*    <TableTransfer*/}
      {/*        dataSource={policyStaffMembers}*/}
      {/*        targetKeys={targetKeys}*/}
      {/*        onChange={(values) => {*/}
      {/*            /***/}
      {/*             * Check if seats avaliable to associate or not*/}

      {/*            if (parseInt(viewSelectedPolicy?.meta?.ech_total_seats) >= parseInt(values.length)) {*/}
      {/*                /***/}
      {/*                 * Set Available Policies on Run Time*/}

      {/*                setAvailableSeatsOfSelectedPolicy((parseInt(viewSelectedPolicy?.meta?.ech_total_seats) - parseInt(values.length)));*/}
      {/*                /***/}
      {/*                 * Set newly selected users to the associated users list in the right column of TransferTable*/}

      {/*                setTargetKeys(values);*/}
      {/*            }*/}
      {/*        }}*/}
      {/*        showSearch={true}*/}
      {/*        filterOption={(inputValue, item) =>*/}
      {/*            item.name.indexOf(inputValue) !== -1 || item.email.indexOf(inputValue) !== -1*/}
      {/*        }*/}
      {/*        leftColumns={leftTableColumns}*/}
      {/*        rightColumns={rightTableColumns}*/}
      {/*    />*/}
      {/*</ModalForm>*/}

    </PageContainer>
  );
};

export default TableList;
