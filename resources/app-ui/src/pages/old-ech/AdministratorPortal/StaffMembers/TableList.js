import {addRule, removeRule, rule, updateRule} from '@/services/ant-design-pro/api';
import {getUsers} from '@/services/wp-api/User';
import {DeleteOutlined, DownloadOutlined, EditOutlined, PlusOutlined, SettingOutlined} from '@ant-design/icons';
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
import {Button, Drawer, Image, Input, message, Avatar, Dropdown, Space} from 'antd';
import React, {useRef, useState} from 'react';
// import type { FormValueType } from './components/UpdateForm';
// import UpdateForm from './components/UpdateForm';
import {useRequest} from 'umi';
// import type { RequestConfig } from 'umi';
import {request,history, Link} from '@umijs/max';
import {date} from "mockjs/src/mock/random/date";
import moment from 'moment';

import {useModel} from 'umi';
// import {getEchPolicies} from "@/services/wp-api/EchPolicy";

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
            copyable: true,
            // tip: 'The rule name is the unique key',
            hideInSearch: true,
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

                                history.push('/administrator/staff-members/edit/' + record.id);
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
                //       // console.log('event.currentTarget.href ');
                //       // console.log(event?.currentTarget?.href );
                //
                //        request('/wp/v2/staff-member-profile-pdf', {
                //           method: 'POST',
                //            data: { user_id: record.id },
                //       }).then(async (api_response) => {
                //           console.log('staff-member-profile-pdf = api_response');
                //           console.log(api_response);
                //
                //           // window.location.href = api_response?.user_profile_pdf_url;
                //
                //            // event.currentTarget.href = api_response?.user_profile_pdf_url;
                //
                //            const newWindow = window.open(api_response?.user_profile_pdf_url, '_blank', 'noopener,noreferrer')
                //            if (newWindow){
                //                newWindow.opener = null
                //            }
                //
                //            // const link = document.createElement("a");
                //            // link.href = api_response?.user_profile_pdf_url;
                //            // link.setAttribute(
                //            //     "download",
                //            //     `${api_response?.pdf_file_name}.${api_response?.pdf_file_name}`
                //            // );
                //            // document.body.appendChild(link);
                //            // link.click();
                //            //
                //            // // Clean up and remove the link
                //            // link.parentNode.removeChild(link);
                //
                //            // const link = document.createElement('a');
                //            // // link.download = 'Example-PDF-File';
                //            // link.href = api_response?.user_profile_pdf_url;
                //            // link.click();
                //            // link.remove();
                //
                //        });
                //
                //   }}
                // >
                //   Download PDF
                // </a>,
                // <a
                //     key="editable"
                //     onClick={() => {
                //         history.push('/administrator/staff-members/edit/' + record.id);
                //     }}
                // >
                //     Edit
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
                            history.push('/administrator/staff-members/new');
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
                                // organization_id: initialState?.currentUser?.meta?.ech_organization_id,
                            },
                            {getResponse: true}
                        );

                    }}
                columns={columns}
                // rowSelection={{
                //     onChange: (_, selectedRows) => {
                //         setSelectedRows(selectedRows);
                //     },
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
        </PageContainer>
    );
};

// const TableList = () => {
//   return (<h1>Hello</h1>);
// }
export default TableList;
