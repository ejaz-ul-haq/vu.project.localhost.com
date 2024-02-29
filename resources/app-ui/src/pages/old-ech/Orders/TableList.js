import {addRule, removeRule, rule, updateRule} from '@/services/ant-design-pro/api';
import {
    CustomerServiceOutlined,
    EditOutlined,
    EyeOutlined,
    PlusOutlined, QuestionCircleOutlined,
    SettingOutlined,
    UploadOutlined,
    UserOutlined, VideoCameraOutlined, WhatsAppOutlined
} from '@ant-design/icons';
// import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
    FooterToolbar,
    ModalForm,
    PageContainer, ProCard,
    ProDescriptions, ProForm, ProFormDatePicker, ProFormRadio, ProFormSegmented,
    ProFormText,
    ProFormTextArea,
    ProTable, TableDropdown,
} from '@ant-design/pro-components';
import {FormattedMessage} from '@umijs/max';
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
    Tooltip, Form, Row, Col, Image, Dropdown, FloatButton
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
import {useRequest} from 'umi';
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
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import OrdersScreenListingVideoIframe from "@/components/VideoTutorialsIframes/SuperAdminIframes/OrdersScreenListingVideoIframe";
import VideoTutorialIframe from "@/components/VideoTutorialsIframes/VideoTutorialIframe";


/**
 *
 * https://woocommerce.github.io/woocommerce-rest-api-docs/
 * https://woocommerce.github.io/subscriptions-rest-api-docs/
 * https://woocommerce.com/document/subscriptions/customers-view/#section-3
 */

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
    const [form] = Form.useForm();
    // const [wcApi, setWcApi] = useState({});
    const [viewPopupSubscriptionId, setViewPopupSubscriptionId] = useState(0);
    const [viewSelectedSubscription, setViewSelectedSubscription] = useState({});
    const [viewPopupOrderId, setViewPopupOrderId] = useState(0);
    const [viewSelectedOrder, setViewSelectedOrder] = useState({});


    // const [organizationId, setOrganizationId] = useState(0);

    const [subscriptionsDetailsModelOpen, setSubscriptionsDetailsModelOpen] = useState(false);
    const [policyStaffMembers, setPolicyStaffMembers] = useState([]);
    const [targetKeys, setTargetKeys] = useState([]);
    const [policyOrganizationsDrawer, setPolicyOrganizationsDrawer] = useState(false);
    const [viewSelectedPolicyOrganizationsLoading, setViewSelectedPolicyOrganizationsLoading] = useState(true);
    const [viewSelectedPolicyOrganizations, setViewSelectedPolicyOrganizations] = useState([]);
    const [availableSeatsOfSelectedPolicy, setAvailableSeatsOfSelectedPolicy] = useState(0);
    const [showDetail, setShowDetail] = useState(false);
    const policiesTableRef = useRef();
    const [currentRow, setCurrentRow] = useState();
    const [selectedRowsState, setSelectedRows] = useState([]);


    /**
     * Start By Mairaj
     */

    const [ordersListingVideoTutorials, setOrdersListingVideoTutorials] = useState({});
    const [ordersListingVideoTutorialModelOpen, setOrdersListingVideoTutorialModelOpen] = useState(false);
    /**
     * End By Mairaj
     */



    /**
     * Set WC API State
     */
    // useEffect(() => {
    //     const api = new WooCommerceRestApi({
    //         url: "http://wi.ecarehub.localhost.com",
    //         consumerKey: initialState?.currentUser?.meta?.ech_wc_api_consumer_key,
    //         consumerSecret: initialState?.currentUser?.meta?.ech_wc_api_consumer_secret,
    //         version: "wc/v3"
    //     });
    //     setWcApi(api);
    // }, [initialState]);


    /**
     * Set Selected Subscriotion
     */
    useEffect(() => {

        /**
         * Check if viewPopupSubscriptionId is realy updated
         */
        if (0 === viewPopupSubscriptionId) {
            return;
        }

        const api = new WooCommerceRestApi({
            url: SITE_URL,
            consumerKey: initialState?.currentUser?.meta?.ech_wc_api_consumer_key,
            consumerSecret: initialState?.currentUser?.meta?.ech_wc_api_consumer_secret,
            version: "wc/v3"
        });

        api.get("subscriptions/" + viewPopupSubscriptionId, {
            // per_page: 20,
            // status: 'completed',
        }).then((response) => {
            console.log('subscriptions-api-response');
            console.log(response);

            // const subscription_line_items = viewSelectedSubscription?.line_items.map(item => ({
            //     product_name: item.name,
            // }));


            if (response.status === 200) {
                // setOrders(response.data);
                // return response;
                setViewSelectedSubscription(response.data);
            }
        }).catch((error) => {
        });
    }, [viewPopupSubscriptionId]);


    /**
     * Set Selected Order
     */
    useEffect(() => {

        /**
         * Check if viewPopupSubscriptionId is realy updated
         */
        if (0 === viewPopupOrderId) {
            return;
        }

        const api = new WooCommerceRestApi({
            url: SITE_URL,
            consumerKey: initialState?.currentUser?.meta?.ech_wc_api_consumer_key,
            consumerSecret: initialState?.currentUser?.meta?.ech_wc_api_consumer_secret,
            version: "wc/v3"
        });

        api.get("orders/" + viewPopupOrderId, {
            // per_page: 20,
            // status: 'completed',
        }).then((response) => {
            console.log('orders-api-response');
            console.log(response);

            // const subscription_line_items = viewSelectedSubscription?.line_items.map(item => ({
            //     product_name: item.name,
            // }));


            if (response.status === 200) {
                // setOrders(response.data);
                // return response;
                setViewSelectedOrder(response.data);
            }
        }).catch((error) => {
        });
    }, [viewPopupOrderId]);

    /**
     * Update/prefill the form fields whenever the related staffMemberData State is updated/effected
     */
    useEffect(() => {

        form.setFieldValue(['subcriptions_details', 'product_title'], viewSelectedSubscription?.line_items?.[0]?.name);
        form.setFieldValue(['subcriptions_details', 'product_quantity'], viewSelectedSubscription?.line_items?.[0]?.quantity);
        form.setFieldValue(['subcriptions_details', 'product_total'], viewSelectedSubscription?.line_items?.[0]?.total);

    }, [subscriptionsDetailsModelOpen, viewSelectedSubscription, form]);


  const items = [
    {
      label: 'View',
      key: 'view',
      icon: <EyeOutlined />,
    },
  ];


    const columns = [

      /**
       * Start Filter Columns
       */
      {
        title: "Date",
        dataIndex: 'date_paid',
        key: 'filter-column-date',
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
            title: "Date",
            dataIndex: 'date_paid',
            key: 'table-column-date',
            sorter: true,
            hideInForm: true,
            hideInSearch: true,
            render: (date) => {
                return (<p> {moment(new Date(date)).format('DD-MM-YYYY')}</p>)
            },
        },
        {
            title: "Status",
            dataIndex: 'status',
            key: 'table-column-status',
            // valueType: 'textarea',
            hideInSearch: true,
        },
        {
            title: "Total",
            dataIndex: 'total',
            key: 'table-column-total',
            // valueType: 'textarea',
            hideInSearch: true,
            render: (text, record, _, total) => {
                //     // const total_seats = record?.meta?.ech_total_seats;
                //     // const used_seats = ( '' !== record?.meta?.ech_used_seats || '0' !== record?.meta?.ech_used_seat ) ? record?.meta?.ech_used_seat: 0;
                //     // const used_seats = record?.meta?.ech_used_seats;
                return (
                    <p> {record?.currency} {record?.currency_symbol} {record?.total} for {record?.line_items?.length} item</p>)
            }
        },
        // {
        //     title: <FormattedMessage id="pages.subscriptionsTable.subscriptionsNextPayment"
        //                              defaultMessage="Next Payment"/>,
        //     dataIndex: 'next_payment_date_gmt',
        //     // valueType: 'textarea',
        //     hideInSearch: true,
        //     render: (text, record, _, next_payment_date_gmt) => {
        //         //     // const total_seats = record?.meta?.ech_total_seats;
        //         //     // const used_seats = ( '' !== record?.meta?.ech_used_seats || '0' !== record?.meta?.ech_used_seat ) ? record?.meta?.ech_used_seat: 0;
        //         //     // const used_seats = record?.meta?.ech_used_seats;
        //         return (
        //             // <p> {record?.currency} {record?.currency_symbol} {record?.total} for {record?.line_items?.length} item</p>
        //             // <p> {record?.next_payment_date_gmt}</p>,
        //             <p>{moment(new Date(record?.next_payment_date_gmt)).format('DD-MM-YYYY')}</p>
        //         )
        //     }
        // },
        {
            title: 'Actions',
            valueType: 'option',
            key: 'table-column-actions',
            render: (text, record, _, action) => [

              <Space key={'space-row-actions-' + record.id} wrap>
                <Dropdown.Button key={'row-actions-' + record.id} menu={{items, onClick: ({ key }) => {

                    if (key === 'view') {
                      console.log('drop-down-menu-item click callback trigred...');
                      console.log('record');
                      console.log(record);

                      history.push('/orders/view/' + record.id);
                    }


                  } }}
                >
                  <SettingOutlined/>
                </Dropdown.Button>
              </Space>


                // <a
                //     key="view"
                //     onClick={() => {
                //         // history.push('/subscriptions/view/' + record.id + '/' + record.parent_id);
                //         history.push('/orders/view/' + record.id);
                //         // console.log("record-testing-for-view-subscriptions-details");
                //         // console.log(record);
                //
                //         /**
                //          * Set the table row Selected Subscription ID State
                //          */
                //         // setViewPopupSubscriptionId(record?.id);
                //
                //         /**
                //          * Set the table row Selected Subscription ID State
                //          */
                //         // setViewPopupOrderId(record?.parent_id);
                //
                //
                //         /**
                //          * Set the Subscriptions Details Modal Open State
                //          */
                //         // setSubscriptionsDetailsModelOpen(true);
                //     }}
                // >
                //     View
                // </a>,

                // <a
                //     key="editable"
                //     onClick={() => {
                //         history.push('/policies/edit/' + record.id);
                //     }}
                // >
                //     Cancel
                // </a>,

            ],
        },
    ];


    return (
        <PageContainer>
            <ProTable
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
                request={
                    // const params = {};
                    async (params = {}, sort, filter, paginate) => {

                        /**
                         * Delay the API request
                         */
                        await waitTime(2000);

                        const api = new WooCommerceRestApi({
                            url: SITE_URL,
                            consumerKey: initialState?.currentUser?.meta?.ech_wc_api_consumer_key,
                            consumerSecret: initialState?.currentUser?.meta?.ech_wc_api_consumer_secret,
                            version: "wc/v3",
                        });


                        // return await api.get("subscriptions", {
                        //     per_page: 20,
                        //     // status: 'completed',
                        // }).then((response) => {
                        //     console.log('subscriptions-api-response');
                        //     console.log(response);
                        //
                        //     // const subscription_line_items = viewSelectedSubscription?.line_items.map(item => ({
                        //     //     product_name: item.name,
                        //     // }));
                        //
                        //
                        //     if (response.status === 200) {
                        //         // setOrders(response.data);
                        //         return response;
                        //     }
                        // }).catch((error) => {
                        // });

                        return await api.get("orders", {
                            per_page: 20,
                            customer: initialState?.currentUser?.id,
                            // status: 'completed',
                        }).then((response) => {
                            console.log('orders-api-response');
                            console.log(response);

                            // const subscription_line_items = viewSelectedSubscription?.line_items.map(item => ({
                            //     product_name: item.name,
                            // }));


                            if (response.status === 200) {
                                // setOrders(response.data);
                                return response;
                            }
                        }).catch((error) => {
                        });

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
                // title={viewSelectedPolicy?.title?.rendered + ' Total Seats:= ' + viewSelectedPolicy?.meta?.ech_total_seats + ' Avaliable Seats:= ' + availableSeatsOfSelectedPolicy}
                title={'Subscription #' + viewSelectedSubscription?.id + ' Details:'}
                open={subscriptionsDetailsModelOpen}
                onOpenChange={setSubscriptionsDetailsModelOpen}
                modalProps={{
                    destroyOnClose: true,
                    // onCancel: () => console.log('run'),
                    // afterClose: () => {
                    //     /**
                    //      * Reset the Policy Selected Users when the modal is close to make sure the modal new open will be fresh
                    //      */
                    //     setViewSelectedSubscription({});
                    //     setViewSelectedOrder({});
                    // },
                    // okText: 'Save',
                }}
                submitter={{
                    // Configure the button text
                    // searchConfig: {
                    //   resetText: 'reset',
                    //   submitText: 'make',
                    // },
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
                form={form}
            >
                <h1> The ID of Subscription is {viewSelectedSubscription.id}</h1>

                <p>Order #378 was placed on September 2, 2023 and is currently Processing.</p>

                <ProCard
                    title="Order Details"
                    bordered
                    headerBordered
                    collapsible={false}
                    size="default"
                    type="inner"
                    style={{
                        marginBlockEnd: 15,
                        minWidth: 800,
                        maxWidth: '100%',
                    }}
                    // onCollapse={(collapse) => console.log(collapse)}
                >
                    <Row
                        gutter={{
                            xs: 8,
                            sm: 16,
                            md: 24,
                            lg: 32,
                        }}
                    >
                        <Col span={6}>

                            <ProForm.Group size={24}>
                                <Col span={24}>
                                    test 01
                                </Col>
                                <Col span={24} style={{'text-align': 'center'}}>
                                    test 02
                                </Col>
                            </ProForm.Group>
                        </Col>
                        <Col span={18}>
                            test 03
                        </Col>
                    </Row>
                </ProCard>

                <ProForm.Group size={24}>
                    <ProFormText
                        // name={['bio_details', 'first_name']}
                        name={['subcriptions_details', 'product_title']}
                        label="Product"
                        tooltip="The legal name"
                        placeholder="please enter your legal name"
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
                        name={['subcriptions_details', 'product_quantity']}
                        label="Quantity"
                        tooltip="The legal name"
                        placeholder="please enter your legal name"
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
                        name={['subcriptions_details', 'product_total']}
                        label="Total"
                        tooltip="The legal name"
                        placeholder="please enter your legal name"
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
                </ProForm.Group>

                <ProForm.Group size={24}>
                    <ProFormText
                        // name={['bio_details', 'first_name']}
                        name={['subcriptions_details', 'product_title']}
                        label="Subscription ID"
                        tooltip="The legal name"
                        placeholder="please enter your legal name"
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
                        name={['subcriptions_details', 'product_quantity']}
                        label="Status"
                        tooltip="The legal name"
                        placeholder="please enter your legal name"
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
                        name={['subcriptions_details', 'product_total']}
                        label="Total"
                        tooltip="The legal name"
                        placeholder="please enter your legal name"
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
                </ProForm.Group>

            </ModalForm>


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

                            const orders_screen_listing_video_tutorials_data = {
                                // ...initialValues,
                                orders_screen: {
                                    // ...initialValues.orders_screen,
                                    listing_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'orders_screen_listing_video_url') ].video_url,
                                },
                            };

                            setOrdersListingVideoTutorials(orders_screen_listing_video_tutorials_data);

                            console.log('orders_screen_listing_video_tutorials_data');
                            console.log(orders_screen_listing_video_tutorials_data);

                        });
                        setOrdersListingVideoTutorialModelOpen(true);
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
                title={'Orders Listing Video Tutorial'}
                open={ordersListingVideoTutorialModelOpen}
                onOpenChange={setOrdersListingVideoTutorialModelOpen}
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
                    iframeUrl={ordersListingVideoTutorials?.orders_screen?.listing_video_url}
                />

            </ModalForm>

        </PageContainer>
    );
};

export default TableList;
