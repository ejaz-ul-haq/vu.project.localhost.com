import {addRule, removeRule, rule, updateRule} from '@/services/ant-design-pro/api';
import {getUsers, putUser} from '@/services/wp-api/User';
import {
  CustomerServiceOutlined,
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined, ExclamationCircleFilled,
  PlusOutlined, QuestionCircleOutlined,
  SettingOutlined, VideoCameraOutlined, WhatsAppOutlined
} from '@ant-design/icons';
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
import {Button, Drawer, Image, Input, message, Avatar, Dropdown, Space, FloatButton, Divider, Col, Row} from 'antd';
import React, {useRef, useState} from 'react';
// import type { FormValueType } from './components/UpdateForm';
// import UpdateForm from './components/UpdateForm';
import {useRequest} from 'umi';
// import type { RequestConfig } from 'umi';
import {history, Link, request} from '@umijs/max';
import {date} from "mockjs/src/mock/random/date";
import moment from 'moment';

import {useModel} from 'umi';
// import {getEchPolicies} from "@/services/wp-api/EchPolicy";
import ActiveStaffMembersScreenListingVideoIframe from "@/components/VideoTutorialsIframes/SuperUserIframes/ActiveStaffMembersScreenListingVideoIframe";
import VideoTutorialIframe from "@/components/VideoTutorialsIframes/VideoTutorialIframe";

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



  /**
   * Start By Mairaj
   */

  const [activeStaffMembersListingVideoTutorials, setActiveStaffMembersListingVideoTutorials] = useState({});
  const [activeStaffMembersListingVideoTutorialModelOpen, setActiveStaffMembersListingVideoTutorialModelOpen] = useState(false);

  const [staffMemberDeleteConfirmationData, setStaffMemberDeleteConfirmationData] = useState({});
  const [staffMemberDeleteConfirmationModelOpen, setStaffMemberDeleteConfirmationModelOpen] = useState(false);
  /**
   * End By Mairaj
   */



  /**
   * @en-US International configuration
   * @zh-CN Internationalization configuration
   * */
  const intl = useIntl();


  const items = [
    {
      label: 'Download Staff Profile',
      key: 'download-pdf',
      icon: <DownloadOutlined/>,
    },
    {
      label: 'Edit',
      key: 'editable',
      icon: <EditOutlined />,
    },
    {
      label: 'Delete',
      key: 'deletable',
      danger: true,
      icon: <DeleteOutlined/>,
    },
  ];



  const columns = [

    /**
     * Start Filter Columns
     */
    {
      title: "Name",
      dataIndex: "name",
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
      // dataIndex: "name",
      key: 'table-column-name',
      hideInSearch: true,
      copyable: true,
      // tip: 'The rule name is the unique key',
      render: (dom, record) => {

        const user_full_name = record?.first_name + ' ' + record?.meta?.ech_middle_name + ' ' + record?.last_name;

        return (
          <div>
            {/*<Image*/}
            {/*    width={50}*/}
            {/*    height={50}*/}
            {/*    src={record?.meta?.ech_organization_logo_url}*/}
            {/*/>*/}
            <Avatar size={"large"}
                    src={('' !== record?.meta?.ech_user_profile_image_url ? record?.meta?.ech_user_profile_image_url : DEFAULT_USER_PROFILE_IMAGE_URL)}/>
            <span style={{margin: "0px 0px 0px 10px"}}>
              {/*{dom}*/}

              {user_full_name}
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
      // render: (dom, entity) => {
      //   return (
      //     <a
      //       onClick={() => {
      //         setCurrentRow(entity);
      //         setShowDetail(true);
      //       }}
      //     >
      //       {dom}
      //     </a>
      //   );
      // },
    },
    {
      title: "Email",
      dataIndex: 'email',
      key: 'table-column-email',
      hideInSearch: true,
    },
    {
      title: "Status",
      dataIndex: ['meta', 'ech_account_status'],
      key: 'table-column-status',
      sorter: true,
      hideInForm: true,
      hideInSearch: true,
      // render: (date) => {
      //   return (<p>{moment( new Date(date) ).format('DD-MM-YYYY')}</p>)
      // },
    },
    {
      title: 'Actions',
      valueType: 'option',
      key: 'table-column-actions',
      render: (text, record, _, action) => [

        <Space key={'space-row-actions-' + record.id} wrap>
          <Dropdown.Button key={'row-actions-' + record.id} menu={{items, onClick: ({ key }) => {

              if (key === 'download-pdf') {
                console.log('drop-down-menu-item click callback trigred...');
                console.log('record');
                console.log(record);

                request('/wp/v2/staff-member-profile-pdf', {
                  method: 'POST',
                  data: {user_id: record.id},
                }).then(async (api_response) => {
                  console.log('staff-member-profile-pdf = api_response');
                  console.log(api_response);

                  const newWindow = window.open(api_response?.user_profile_pdf_url, '_blank', 'noopener,noreferrer')
                  if (newWindow) {
                    newWindow.opener = null
                  }

                });

              }

              if (key === 'editable') {
                console.log('drop-down-menu-item click callback trigred...');
                console.log('record');
                console.log(record);

                history.push('/super-user/staff-members/edit/' + record.id);
              }

              if (key === 'deletable') {
                console.log('drop-down-menu-item click callback trigred...');
                console.log('record');
                console.log(record);


                setStaffMemberDeleteConfirmationData(record);

                setStaffMemberDeleteConfirmationModelOpen(true);

                // /**
                //  * API Request
                //  */
                // try {
                //
                //   const request_data = {
                //     meta: {
                //       ech_user_delete_request: [{
                //         super_user_id: initialState?.currentUser?.id,
                //         request_status: 'pending',
                //         request_time: moment(new Date()).format('DD-MMMM-YYYY, h:mm:ss a'),
                //       }],
                //     },
                //   };
                //
                //   putUser(
                //       {id: record.id},
                //       {},
                //       {
                //         data: request_data,
                //       }
                //   ).then((api_response) => {
                //     console.log('api_response');
                //     console.log(api_response);
                //     /**
                //      * User Created then show message and redirect to listing screen
                //      */
                //     if (api_response?.id > 0) {
                //       message.success('Your Delete Request has been received. Upon admin approval, this user will be automatically deleted.', 10);
                //       // history.push('/staff-members/list');
                //     }
                //   });
                //
                // } catch (api_response) {
                //   console.log('api_response - error');
                //   console.log(api_response);
                //   // history.push(loginPath);
                // }

              }

            } }}
          >
            <SettingOutlined/>
          </Dropdown.Button>
        </Space>


        // <a
        //   key="download-pdf"
        //   onClick={(event) => {
        //     console.log('record-test');
        //     console.log(record);
        //     // history.push('/staff-members/view/' + record.id);
        //
        //     // console.log('event.currentTarget.href ');
        //     // console.log(event?.currentTarget?.href );
        //
        //     request('/wp/v2/staff-member-profile-pdf', {
        //       method: 'POST',
        //       data: { user_id: record.id },
        //     }).then(async (api_response) => {
        //       console.log('staff-member-profile-pdf = api_response');
        //       console.log(api_response);
        //
        //       // window.location.href = api_response?.user_profile_pdf_url;
        //
        //       // event.currentTarget.href = api_response?.user_profile_pdf_url;
        //
        //       const newWindow = window.open(api_response?.user_profile_pdf_url, '_blank', 'noopener,noreferrer')
        //       if (newWindow){
        //         newWindow.opener = null
        //       }
        //
        //       // const link = document.createElement("a");
        //       // link.href = api_response?.user_profile_pdf_url;
        //       // link.setAttribute(
        //       //     "download",
        //       //     `${api_response?.pdf_file_name}.${api_response?.pdf_file_name}`
        //       // );
        //       // document.body.appendChild(link);
        //       // link.click();
        //       //
        //       // // Clean up and remove the link
        //       // link.parentNode.removeChild(link);
        //
        //       // const link = document.createElement('a');
        //       // // link.download = 'Example-PDF-File';
        //       // link.href = api_response?.user_profile_pdf_url;
        //       // link.click();
        //       // link.remove();
        //
        //     });
        //
        //   }}
        // >
        //   Download PDF
        // </a>,
        // <a
        //   key="editable"
        //   onClick={() => {
        //     history.push('/super-user/staff-members/edit/' + record.id);
        //   }}
        // >
        //   Edit
        // </a>,
        // <a
        //   key="deletable"
        //   onClick={() => {
        //     console.log('event....');
        //     // console.log(event);
        //     // history.push('/staff-members/edit/' + record.id);
        //     // return deleteUser(
        //     //     {
        //     //         id: record.id,
        //     //     },
        //     //     {
        //     //         force: true,
        //     //     }
        //     // )
        //
        //
        //     /**
        //      * API Request
        //      */
        //     try {
        //
        //       const request_data = {
        //         meta: {
        //             ech_user_delete_request: [{
        //                 super_user_id: initialState?.currentUser?.id,
        //                 request_status: 'pending',
        //                 request_time: moment(new Date()).format('DD-MMMM-YYYY, h:mm:ss a'),
        //             }],
        //         },
        //       };
        //
        //       putUser(
        //         {id: record.id},
        //         {},
        //         {
        //           data: request_data,
        //         }
        //       ).then((api_response) => {
        //         console.log('api_response');
        //         console.log(api_response);
        //         /**
        //          * User Created then show message and redirect to listing screen
        //          */
        //         if (api_response?.id > 0) {
        //           message.success('Your Delete Request has been received. Upon admin approval, this user will be automatically deleted.', 10);
        //           // history.push('/staff-members/list');
        //         }
        //       });
        //
        //     } catch (api_response) {
        //       console.log('api_response - error');
        //       console.log(api_response);
        //       // history.push(loginPath);
        //     }
        //
        //
        //     // request('/wp/v2/users/' + record.id, {
        //     //   method: 'DELETE',
        //     //   data: {
        //     //     id: record.id,
        //     //     force: true,
        //     //     reassign: 0,
        //     //   },
        //     // }).then(async (api_response) => {
        //     //   console.log('setup-wizard = api_response');
        //     //   console.log(api_response);
        //     //
        //     //   if (api_response.deleted) {
        //     //     console.log('setup-wizard = api_response - 01');
        //     //     // async () => {
        //     //     console.log('setup-wizard = api_response - 02');
        //     //     await waitTime(3000);
        //     //     console.log('setup-wizard = api_response - 03');
        //     //     await message.success('Submitted successfully');
        //     //     console.log('setup-wizard = api_response - 04');
        //     //     // history.go(0);
        //     //     // history.push('/organization');
        //     //     // history.replace('/organization');
        //     //     // window.location.replace(window.location.protocol + '//' + window.location.host + window.location.pathname + '#/organization');
        //     //     // console.log('setup-wizard = api_response - 05');
        //     //     // window.location.href = '/app/#/organization';
        //     //     // }
        //     //     if (staffmembersTableRef.current) {
        //     //       staffmembersTableRef.current?.reloadAndRest?.();
        //     //     }
        //     //   }
        //     //
        //     // }).catch(function (error) {
        //     //   console.log(error);
        //     // });
        //
        //
        //   }}
        // >
        //   Delete
        // </a>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable
        // headerTitle={intl.formatMessage({
        //   id: 'pages.staffmemberTable.title',
        //   defaultMessage: 'Enquiry form',
        // })}
        // actionRef={actionRef}
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
              history.push('/super-user/staff-members/new');
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

            /**
             * Delay the API request
             */
            await waitTime(2000);

            return await getUsers(
              {
                context: 'edit',
                sort: {...sort},
                // sort: { ['id'] ...sort},
                pagination: {...params},
                roles: 'ech_staff_member',
                organization_id: initialState?.currentUser?.meta?.ech_organization_id,
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
              <FormattedMessage id="pages.staffmemberTable.chosen" defaultMessage="Chosen"/>{' '}
              <a style={{fontWeight: 600}}>{selectedRowsState.length}</a>{' '}
              <FormattedMessage id="pages.staffmemberTable.item" defaultMessage="item"/>
              &nbsp;&nbsp;
              <span>
                <FormattedMessage
                  id="pages.staffmemberTable.totalServiceCalls"
                  defaultMessage="Total number of service calls"
                />{' '}
                {/*{selectedRowsState.reduce((pre, item) => pre + item.callNo!"," 0)}{' '}*/}
                {/*{selectedRowsState.reduce((pre, item) => { return  pre + item.callNo!, 0} }{' '}*/}
                <FormattedMessage id="pages.staffmemberTable.tenThousand"
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
              id="pages.staffmemberTable.batchDeletion"
              defaultMessage="Batch deletion"
            />
          </Button>
          <Button type="primary">
            <FormattedMessage
              id="pages.staffmemberTable.batchApproval"
              defaultMessage="Batch approval"
            />
          </Button>
        </FooterToolbar>
      )}
      <ModalForm
        title={intl.formatMessage({
          id: 'pages.staffmemberTable.createForm.newRule',
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
                  id="pages.staffmemberTable.organizationName"
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
      {/*<UpdateForm*/}
      {/*  onSubmit={async (value) => {*/}
      {/*    // const success = await handleUpdate(value);*/}
      {/*    const success = false;*/}
      {/*    if (success) {*/}
      {/*      handleUpdateModalOpen(false);*/}
      {/*      setCurrentRow(undefined);*/}
      {/*      if (actionRef.current) {*/}
      {/*        actionRef.current.reload();*/}
      {/*      }*/}
      {/*    }*/}
      {/*  }}*/}
      {/*  onCancel={() => {*/}
      {/*    handleUpdateModalOpen(false);*/}
      {/*    if (!showDetail) {*/}
      {/*      setCurrentRow(undefined);*/}
      {/*    }*/}
      {/*  }}*/}
      {/*  updateModalOpen={updateModalOpen}*/}
      {/*  values={currentRow || {}}*/}
      {/*/>*/}

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

              request('/wp/v2/super-user-video-tutorials', {
                method: 'GET',
              }).then((api_response) => {
                console.log('api_response');
                console.log(api_response);

                const active_staff_members_screen_listing_video_tutorials_data = {
                  // ...initialValues,
                  active_staff_members_screen: {
                    // ...initialValues.active_staff_members_screen,
                    listing_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'active_staff_members_screen_listing_video_url') ].video_url,
                  },
                };

                setActiveStaffMembersListingVideoTutorials(active_staff_members_screen_listing_video_tutorials_data);

                console.log('active_staff_members_screen_listing_video_tutorials_data');
                console.log(active_staff_members_screen_listing_video_tutorials_data);

              });
              setActiveStaffMembersListingVideoTutorialModelOpen(true);
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
          title={'Active Staff Members Listing Video Tutorial'}
          open={activeStaffMembersListingVideoTutorialModelOpen}
          onOpenChange={setActiveStaffMembersListingVideoTutorialModelOpen}
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
            iframeUrl={activeStaffMembersListingVideoTutorials?.active_staff_members_screen?.listing_video_url}
        />

      </ModalForm>





      <ModalForm
          // title={'Are you sure you want to delete this user?'}
          open={staffMemberDeleteConfirmationModelOpen}
          onOpenChange={setStaffMemberDeleteConfirmationModelOpen}
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
            // width: 416,
            width: 716,
            okText: 'Yes',
            cancelText: 'No',
            // okType: "danger",
          }}
          submitter={{
            // Configure the properties of the button
            resetButtonProps: {
              style: {
                // Hide the reset button
                // display: 'none',
              },
            },
            submitButtonProps: {
              style: {
                // Hide the submit button
                // display: 'none',
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


            // await deleteStaffMember(staffMemberDeleteConfirmationData?.id);


              try {

                  const request_data = {
                    meta: {
                      ech_user_delete_request: [{
                        super_user_id: initialState?.currentUser?.id,
                        request_status: 'pending',
                        request_time: moment(new Date()).format('DD-MMMM-YYYY, h:mm:ss a'),
                      }],
                    },
                  };

                  putUser(
                      {id: staffMemberDeleteConfirmationData?.id},
                      {},
                      {
                        data: request_data,
                      }
                  ).then((api_response) => {
                    console.log('api_response');
                    console.log(api_response);
                    /**
                     * User Created then show message and redirect to listing screen
                     */
                    if (api_response?.id > 0) {
                      message.success('Your Delete Request has been received. Upon admin approval, this user will be automatically deleted.', 10);
                      // history.push('/staff-members/list');
                    }
                  });

              } catch (api_response) {
                  console.log('api_response - error');
                  console.log(api_response);
                  // history.push(loginPath);
              }



            /**
             * The following return is necessary to auto close the modal
             */
            return true;
          }}
      >

        <h6 style={{fontSize: '16px'}}>
          <span> <ExclamationCircleFilled style={{color: '#ff4d4f', fontSize: '20px', paddingRight: '5px'}} /> </span>
          Are you sure you want to delete this user?
        </h6>

        <span style={{fontSize: '16px', paddingLeft: '30px'}}>
             <strong> Name: </strong> {staffMemberDeleteConfirmationData?.name}
        </span>

        <Divider style={{margin: '10px 0px'}}/>

        <span style={{fontSize: '16px', paddingLeft: '30px', color: 'red'}} >
              Your prompt attention to this matter is appreciated!
        </span>

        <br />

        <p style={{fontSize: '16px', paddingLeft: '30px'}}>
           Please ensure you've downloaded the staff profile. If you haven't done so, you can simply click the "Download Staff Profile" button. Otherwise, this staff member will be permanently deleted.
        </p>

        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
            <Col span={8}>

            </Col>

            <Col span={8}>
                <Button
                    type="primary"
                    key="primary"
                    onClick={() => {

                        request('/wp/v2/staff-member-profile-pdf', {
                        method: 'POST',
                        data: {user_id: staffMemberDeleteConfirmationData?.id},
                        }).then(async (api_response) => {
                            console.log('staff-member-profile-pdf = api_response');
                            console.log(api_response);

                            const newWindow = window.open(api_response?.user_profile_pdf_url, '_blank', 'noopener,noreferrer')
                            if (newWindow) {
                                newWindow.opener = null
                            }

                        });

                    }}
                  >
                  <DownloadOutlined/> <FormattedMessage id="pages.organizationTable.new" defaultMessage="Download Staff Profile"/>
                </Button>
            </Col>

            <Col span={8}>

            </Col>
        </Row>


      </ModalForm>


    </PageContainer>
  );
};

// const TableList = () => {
//   return (<h1>Hello</h1>);
// }
export default TableList;
