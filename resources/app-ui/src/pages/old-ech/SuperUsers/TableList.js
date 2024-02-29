import {addRule, removeRule, rule, updateRule} from '@/services/ant-design-pro/api';
import {deleteUser, getUsers} from '@/services/wp-api/User';
import {
    CustomerServiceOutlined,
    DeleteOutlined,
    DownloadOutlined,
    EditOutlined,
    PlusOutlined, QuestionCircleOutlined,
    SettingOutlined, VideoCameraOutlined, WhatsAppOutlined,
    ExclamationCircleFilled
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
import {Avatar, Button, Dropdown, FloatButton, Input, message, Space} from 'antd';
import React, {useEffect, useRef, useState} from 'react';
// import type { FormValueType } from './components/UpdateForm';
// import UpdateForm from './components/UpdateForm';
// import request from "umi-request";
import {useRequest} from 'umi';
// import type { RequestConfig } from 'umi';
import {request, history, Link} from '@umijs/max';
import {date} from "mockjs/src/mock/random/date";
import moment from 'moment';

import {useModel} from 'umi';
// import {getEchPolicies} from "@/services/wp-api/EchPolicy";

import ProSkeleton from '@ant-design/pro-skeleton';
import CreateSuperUserSkeleton from "@/components/Skeleton/CreateSuperUserSkeleton";
import SuperUsersScreenListingVideoIframe from "@/components/VideoTutorialsIframes/SuperAdminIframes/SuperUsersScreenListingVideoIframe";
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

    const superusersTableRef = useRef();

    const actionRef = useRef();
    const [currentRow, setCurrentRow] = useState();
    const [selectedRowsState, setSelectedRows] = useState([]);
    // const [tableListSuperUserSkeleton, setTableListSuperUserSkeleton] = useState(true);

    // useEffect(() => {
    //     setTableListSuperUserSkeleton(false);
    // }, [initialState]);


    /**
     * Start By Mairaj
     */

    const [superUsersListingVideoTutorials, setSuperUsersListingVideoTutorials] = useState({});
    const [superUsersListingVideoTutorialModelOpen, setSuperUsersListingVideoTutorialModelOpen] = useState(false);

    const [superUserDeleteConfirmationData, setSuperUserDeleteConfirmationData] = useState({});
    const [superUserDeleteConfirmationModelOpen, setSuperUserDeleteConfirmationModelOpen] = useState(false);
    /**
     * End By Mairaj
     */


    const deleteSuperUser = async (superUserId) => {
        console.log('deleteSuperUser');

        request('/wp/v2/users/' + superUserId, {
            method: 'DELETE',
            data: {
                id: superUserId,
                force: true,
                reassign: 0,
            },
        }).then(async (api_response) => {
            console.log('setup-wizard = api_response');
            console.log(api_response);

            if (api_response.deleted) {
                console.log('setup-wizard = api_response - 01');
                // async () => {
                console.log('setup-wizard = api_response - 02');
                await waitTime(3000);
                console.log('setup-wizard = api_response - 03');
                await message.success('Submitted successfully');
                console.log('setup-wizard = api_response - 04');
                // history.go(0);
                // history.push('/organization');
                // history.replace('/organization');
                // window.location.replace(window.location.protocol + '//' + window.location.host + window.location.pathname + '#/organization');
                // console.log('setup-wizard = api_response - 05');
                // window.location.href = '/app/#/organization';
                // }
                if (superusersTableRef.current) {
                    superusersTableRef.current?.reloadAndRest?.();
                }
            }

        }).catch(function (error) {
            console.log(error);
        });


        return true;
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

                            if (key === 'editable') {
                                console.log('drop-down-menu-item click callback trigred...');
                                console.log('record');
                                console.log(record);

                                history.push('/super-users/edit/' + record.id);
                            }

                            if (key === 'deletable') {
                                console.log('drop-down-menu-item click callback trigred...');
                                console.log('record');
                                console.log(record);


                                setSuperUserDeleteConfirmationData(record);

                                setSuperUserDeleteConfirmationModelOpen(true);

                                // deleteSuperUser(record.id);
                            }

                        } }}
                    >
                        <SettingOutlined/>
                    </Dropdown.Button>
                </Space>


                // <a
                //     key="editable"
                //     onClick={() => {
                //         history.push('/super-users/edit/' + record.id);
                //     }}
                // >
                //     Edit
                // </a>,
                // <a
                //     key="deletable"
                //     onClick={() => {
                //         console.log('event....');
                //         // console.log(event);
                //         // history.push('/super-users/edit/' + record.id);
                //         // return deleteUser(
                //         //     {
                //         //         id: record.id,
                //         //     },
                //         //     {
                //         //         force: true,
                //         //     }
                //         // )
                //
                //
                //         request('/wp/v2/users/' + record.id, {
                //             method: 'DELETE',
                //             data: {
                //                 id: record.id,
                //                 force: true,
                //                 reassign: 0,
                //             },
                //         }).then(async (api_response) => {
                //             console.log('setup-wizard = api_response');
                //             console.log(api_response);
                //
                //             if (api_response.deleted) {
                //                 console.log('setup-wizard = api_response - 01');
                //                 // async () => {
                //                 console.log('setup-wizard = api_response - 02');
                //                 await waitTime(3000);
                //                 console.log('setup-wizard = api_response - 03');
                //                 await message.success('Submitted successfully');
                //                 console.log('setup-wizard = api_response - 04');
                //                 // history.go(0);
                //                 // history.push('/organization');
                //                 // history.replace('/organization');
                //                 // window.location.replace(window.location.protocol + '//' + window.location.host + window.location.pathname + '#/organization');
                //                 // console.log('setup-wizard = api_response - 05');
                //                 // window.location.href = '/app/#/organization';
                //                 // }
                //                 if (superusersTableRef.current) {
                //                     superusersTableRef.current?.reloadAndRest?.();
                //                 }
                //             }
                //
                //         }).catch(function (error) {
                //             console.log(error);
                //         });
                //
                //     }}
                // >
                //     Delete
                // </a>,
            ],
        },
    ];

    // if (tableListSuperUserSkeleton) {
    //
    //     return (
    //         <PageContainer
    //             header={
    //                 {title: ""}
    //             }
    //         >
    //             <ProSkeleton type="list"/>
    //             {/*<CreateSuperUserSkeleton*/}
    //             {/*    active={true}*/}
    //             {/*/>*/}
    //         </PageContainer>
    //     );
    //
    // } else {
    return (
        <PageContainer>
            <ProTable
                // headerTitle={intl.formatMessage({
                //   id: 'pages.superuserTable.title',
                //   defaultMessage: 'Enquiry form',
                // })}
                actionRef={superusersTableRef}
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
                            history.push('/super-users/new');
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
                                pagination: {...params},
                                roles: 'ech_super_user',
                                organization_id: initialState?.currentUser?.meta?.ech_organization_id,
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
                            <FormattedMessage id="pages.superuserTable.chosen" defaultMessage="Chosen"/>{' '}
                            <a style={{fontWeight: 600}}>{selectedRowsState.length}</a>{' '}
                            <FormattedMessage id="pages.superuserTable.item" defaultMessage="item"/>
                            &nbsp;&nbsp;
                            <span>
                <FormattedMessage
                    id="pages.superuserTable.totalServiceCalls"
                    defaultMessage="Total number of service calls"
                />{' '}
                                {/*{selectedRowsState.reduce((pre, item) => pre + item.callNo!"," 0)}{' '}*/}
                                {/*{selectedRowsState.reduce((pre, item) => { return  pre + item.callNo!, 0} }{' '}*/}
                                <FormattedMessage id="pages.superuserTable.tenThousand"
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
                            id="pages.superuserTable.batchDeletion"
                            defaultMessage="Batch deletion"
                        />
                    </Button>
                    <Button type="primary">
                        <FormattedMessage
                            id="pages.superuserTable.batchApproval"
                            defaultMessage="Batch approval"
                        />
                    </Button>
                </FooterToolbar>
            )}
            <ModalForm
                title={intl.formatMessage({
                    id: 'pages.superuserTable.createForm.newRule',
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
                                    id="pages.superuserTable.organizationName"
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

                        request('/wp/v2/super-admin-video-tutorials', {
                            method: 'GET',
                        }).then((api_response) => {
                            console.log('api_response');
                            console.log(api_response);

                            const super_users_screen_listing_video_tutorials_data = {
                                // ...initialValues,
                                super_users_screen: {
                                    // ...initialValues.super_users_screen,
                                    listing_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'super_users_screen_listing_video_url') ].video_url,
                                },
                            };

                            setSuperUsersListingVideoTutorials(super_users_screen_listing_video_tutorials_data);

                            console.log('super_users_screen_listing_video_tutorials_data');
                            console.log(super_users_screen_listing_video_tutorials_data);

                        });
                        setSuperUsersListingVideoTutorialModelOpen(true);
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
                title={'Super Users Listing Video Tutorial'}
                open={superUsersListingVideoTutorialModelOpen}
                onOpenChange={setSuperUsersListingVideoTutorialModelOpen}
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
                    iframeUrl={superUsersListingVideoTutorials?.super_users_screen?.listing_video_url}
                />

            </ModalForm>





            <ModalForm
                // title={'Are you sure you want to delete this user?'}
                open={superUserDeleteConfirmationModelOpen}
                onOpenChange={setSuperUserDeleteConfirmationModelOpen}
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
                    width: 416,
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


                     await deleteSuperUser(superUserDeleteConfirmationData?.id);

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


                <p style={{fontSize: '16px', paddingLeft: '30px'}}>
                    {superUserDeleteConfirmationData?.name}
                </p>

            </ModalForm>


        </PageContainer>
    );
    // }
};

// const TableList = () => {
//   return (<h1>Hello</h1>);
// }
export default TableList;
