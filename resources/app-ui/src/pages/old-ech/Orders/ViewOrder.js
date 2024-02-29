import React, {useEffect, useState} from "react";
import {useModel, useParams} from 'umi';
import {Button, Drawer, Input, message, Card, Row, Col, Typography, Table, Tag, Space, FloatButton} from 'antd';
import moment from "moment";
import {
    FooterToolbar,
    ModalForm,
    PageContainer, ProCard,
    ProDescriptions,
    ProForm,
    ProFormText,
    ProFormTextArea,
    ProTable, TableDropdown,
} from '@ant-design/pro-components';
import {getEchPolicy} from "@/services/wp-api/EchPolicy";
import {getEchCustomerPolicy} from "@/services/wp-api/EchCustomerPolicy";
import ViewerIframe from "@/components/Editor/ViewerIframe";
import {
    CustomerServiceOutlined,
    DownloadOutlined,
    PlusOutlined,
    QuestionCircleOutlined,
    VideoCameraOutlined, WhatsAppOutlined
} from '@ant-design/icons';

const {Text, Title, Link} = Typography;

import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import {history} from "@@/core/history";
import {FormattedMessage, request} from "@@/exports";
import {getUsers} from "@/services/wp-api/User";
import OrdersScreenViewVideoIframe from "@/components/VideoTutorialsIframes/SuperAdminIframes/OrdersScreenViewVideoIframe";
import VideoTutorialIframe from "@/components/VideoTutorialsIframes/VideoTutorialIframe";

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


const line_items_table_columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'table-column-id',
        render: (text, record, index) => {
            return (
                <span>{text}</span>
            );
        },
    },
    {
        title: 'Product',
        dataIndex: 'name',
        key: 'table-column-product',
        render: (text, record, index) => {
            return (
                <span>{text}</span>
            );
        },
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'table-column-price',
        render: (text, record, index) => {
            return (
                <span>{text}</span>
            );
        },
    },
    {
        title: 'QTY',
        dataIndex: 'quantity',
        key: 'table-column-quantity',
    },
    {
        title: 'Total',
        dataIndex: 'total',
        key: 'table-column-total',
    },
];

const subscriptions_line_items_table_columns = [
    {
        title: 'Subscription ID',
        dataIndex: 'id',
        key: 'table-column-subscription-id',
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
                <p> {record?.currency} {record?.currency_symbol} {record?.total} / {record?.billing_period} </p>)
        }
    },
    {
        title: "Next Payment",
        dataIndex: 'next_payment_date_gmt',
        key: 'table-column-next-payment',
        // valueType: 'textarea',
        hideInSearch: true,
        render: (text, record, _, next_payment_date_gmt) => {
            //     // const total_seats = record?.meta?.ech_total_seats;
            //     // const used_seats = ( '' !== record?.meta?.ech_used_seats || '0' !== record?.meta?.ech_used_seat ) ? record?.meta?.ech_used_seat: 0;
            //     // const used_seats = record?.meta?.ech_used_seats;
            return (
                // <p> {record?.currency} {record?.currency_symbol} {record?.total} for {record?.line_items?.length} item</p>
                // <p> {record?.next_payment_date_gmt}</p>,
                <p>{moment(new Date(record?.next_payment_date_gmt)).format('LL')}</p>
            )
        }
    },
    {
        title: "Start Date",
        dataIndex: 'start_date_gmt',
        key: 'table-column-start-date',
        // valueType: 'textarea',
        hideInSearch: true,
        render: (text, record, _, next_payment_date_gmt) => {
            //     // const total_seats = record?.meta?.ech_total_seats;
            //     // const used_seats = ( '' !== record?.meta?.ech_used_seats || '0' !== record?.meta?.ech_used_seat ) ? record?.meta?.ech_used_seat: 0;
            //     // const used_seats = record?.meta?.ech_used_seats;
            return (
                // <p> {record?.currency} {record?.currency_symbol} {record?.total} for {record?.line_items?.length} item</p>
                // <p> {record?.next_payment_date_gmt}</p>,
                <p>{moment(new Date(record?.start_date_gmt)).format('LLL')}</p>
            )
        }
    },
    {
        title: "End Date",
        dataIndex: 'end_date_gmt',
        key: 'table-column-end-date',
        // valueType: 'textarea',
        hideInSearch: true,
        render: (text, record, _, next_payment_date_gmt) => {
            //     // const total_seats = record?.meta?.ech_total_seats;
            //     // const used_seats = ( '' !== record?.meta?.ech_used_seats || '0' !== record?.meta?.ech_used_seat ) ? record?.meta?.ech_used_seat: 0;
            //     // const used_seats = record?.meta?.ech_used_seats;
            return (
                // <p> {record?.currency} {record?.currency_symbol} {record?.total} for {record?.line_items?.length} item</p>
                // <p> {record?.next_payment_date_gmt}</p>,
                <p>{moment(new Date(record?.end_date_gmt)).format('LLL')}</p>
            )
        }
    },
    // {
    //     title: 'Actions',
    //     valueType: 'option',
    //     key: 'option',
    //     render: (text, record, _, action) => [
    //         <>
    //             {(record?.payment_url) &&
    //                 <a
    //                     key="payment_url"
    //                     // onClick={() => {
    //                     //     console.log('record-test');
    //                     //     console.log(record);
    //                     //     // action?.startEditable?.(record.id);
    //                     //     history.push(record?.payment_url);
    //                     // }}
    //                     href={record?.payment_url}
    //                 >
    //                     Change Payment
    //                 </a>
    //             }
    //         </>,
    //         <a
    //             key="editable"
    //             onClick={() => {
    //                 history.push('/policies/edit/' + record.id);
    //             }}
    //         >
    //             Pay
    //         </a>,
    //
    //         <a
    //             key="view"
    //             onClick={() => {
    //                 // history.push('/subscriptions/view/' + record.id + '/' + record.parent_id);
    //                 history.push('/orders/view/' + record.id);
    //                 // console.log("record-testing-for-view-subscriptions-details");
    //                 // console.log(record);
    //
    //                 /**
    //                  * Set the table row Selected Subscription ID State
    //                  */
    //                 // setViewPopupSubscriptionId(record?.id);
    //
    //                 /**
    //                  * Set the table row Selected Subscription ID State
    //                  */
    //                 // setViewPopupOrderId(record?.parent_id);
    //
    //
    //                 /**
    //                  * Set the Subscriptions Details Modal Open State
    //                  */
    //                 // setSubscriptionsDetailsModelOpen(true);
    //             }}
    //         >
    //             View
    //         </a>,
    //
    //         <a
    //             key="editable"
    //             onClick={() => {
    //                 history.push('/policies/edit/' + record.id);
    //             }}
    //         >
    //             Cancel
    //         </a>,
    //
    //     ],
    // },
];

const ViewOrder = () => {

    const {initialState, loading, refresh, setInitialState} = useModel('@@initialState');
    const {orderId} = useParams();

    const [apiProcessing, setApiProcessing] = useState(true);
    const [userOrder, setUserOrder] = useState({});
    const [subTotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(0);



    /**
     * Start By Mairaj
     */

    const [ordersViewVideoTutorials, setOrdersViewVideoTutorials] = useState({});
    const [ordersViewVideoTutorialModelOpen, setOrdersViewVideoTutorialModelOpen] = useState(false);
    /**
     * End By Mairaj
     */



    /**
     * Set Selected Order
     */
    useEffect(() => {

        /**
         * Check if viewPopupSubscriptionId is realy updated
         */
        if (0 === orderId) {
            return;
        }

        const api = new WooCommerceRestApi({
            url: SITE_URL,
            consumerKey: initialState?.currentUser?.meta?.ech_wc_api_consumer_key,
            consumerSecret: initialState?.currentUser?.meta?.ech_wc_api_consumer_secret,
            version: "wc/v3"
        });

        api.get("orders/" + orderId, {
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
                /**
                 * Set User Order State
                 */
                setUserOrder(response.data);
                /**
                 * Set User Line Items Sub Total state
                 */
                const line_items_sub_totals = response.data?.line_items.map((line_item) => line_item?.subtotal).reduce((a, b) => a + b);
                setSubTotal(line_items_sub_totals);
                /**
                 * Set User Line Items Total state
                 */
                const line_items_totals = response.data?.line_items.map((line_item) => line_item?.total).reduce((a, b) => a + b);
                setTotal(line_items_totals);

                // return response.data.line_items;
            }
        }).catch((error) => {
        });
    }, [orderId]);


    useEffect(() => {

        if (Object.keys(userOrder).length === 0) {
            return;
        }

        setApiProcessing(false);

    }, [userOrder]);

    return (
        <PageContainer>
            <p>Order #{userOrder?.id} was placed on {moment(new Date(userOrder?.date_created)).format('LL')} and is
                currently {userOrder?.status}.</p>
            <ProCard
                loading={apiProcessing}
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
                {/*<Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>*/}
                {/*    <Col span={6}>*/}
                {/*        test 01*/}
                {/*    </Col>*/}
                {/*    <Col span={18}>*/}
                {/*        test 02*/}
                {/*    </Col>*/}
                {/*</Row>*/}

                {/*<ProTable columns={line_items_table_columns} dataSource={userOrder?.line_items}/>*/}

                <ProTable
                    // headerTitle={intl.formatMessage({
                    //   id: 'pages.staffmemberTable.title',
                    //   defaultMessage: 'Enquiry form',
                    // })}
                    // actionRef={actionRef}
                    // rowKey="key"
                    search={false}
                    pagination={{
                        pageSize: 10,
                        onChange: (page) => console.log(page),
                    }}

                    request={async (params = {}, sort, filter, paginate) => {

                        const api = new WooCommerceRestApi({
                            url: SITE_URL,
                            consumerKey: initialState?.currentUser?.meta?.ech_wc_api_consumer_key,
                            consumerSecret: initialState?.currentUser?.meta?.ech_wc_api_consumer_secret,
                            version: "wc/v3"
                        });

                        return api.get("orders/" + orderId, {
                            per_page: 20,
                            status: 'completed',
                        }).then((response) => {
                            console.log('orders-api-response');
                            console.log(response);

                            // const subscription_line_items = viewSelectedSubscription?.line_items.map(item => ({
                            //     product_name: item.name,
                            // }));


                            if (response.status === 200) {
                                // setOrders(response.data);
                                // return response;
                                /**
                                 * Set User Order State
                                 */
                                setUserOrder(response.data);
                                /**
                                 * Set User Line Items Sub Total state
                                 */
                                const line_items_sub_totals = response.data?.line_items.map((line_item) => line_item?.subtotal).reduce((a, b) => a + b);
                                setSubTotal(line_items_sub_totals);
                                /**
                                 * Set User Line Items Total state
                                 */
                                const line_items_totals = response.data?.line_items.map((line_item) => line_item?.total).reduce((a, b) => a + b);
                                setTotal(line_items_totals);

                                // return response.data.line_items;
                            }

                            if (response.status === 200) {

                                // return response?.data?.line_items;

                                return {
                                    data: userOrder?.line_items,
                                    success: true,
                                };

                            }

                        }).catch((error) => {
                        });

                        // return {
                        //   data: userOrder?.line_items,
                        //   success: true,
                        // };
                    }}
                    columns={line_items_table_columns}
                />

                <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                    {/*<Col span={8}>*/}
                    {/*    test 01*/}
                    {/*</Col>*/}
                    <Col span={8}>
                        SUBTOTAL:
                    </Col>
                    <Col span={8} style={{textAlign: "right"}}>
                        {userOrder?.currency_symbol} {subTotal}
                    </Col>
                </Row>
                <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                    {/*<Col span={8}>*/}
                    {/*    test 01*/}
                    {/*</Col>*/}
                    <Col span={8}>
                        PAYMENT METHOD:
                    </Col>
                    <Col span={8} style={{textAlign: "right"}}>
                        {userOrder?.payment_method} - {userOrder?.payment_method_title}
                    </Col>
                </Row>
                <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                    {/*<Col span={8}>*/}
                    {/*    test 01*/}
                    {/*</Col>*/}
                    <Col span={8}>
                        TOTAL:
                    </Col>
                    <Col span={8} style={{textAlign: "right"}}>
                        $ 125
                    </Col>
                </Row>

            </ProCard>

            <ProCard
                loading={apiProcessing}
                title="Related Subscriptions"
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
                <ProTable
                    // headerTitle={intl.formatMessage({
                    //   id: 'pages.staffmemberTable.title',
                    //   defaultMessage: 'Enquiry form',
                    // })}
                    // actionRef={actionRef}
                    // rowKey="key"
                    search={false}
                    pagination={{
                        pageSize: 10,
                        onChange: (page) => console.log(page),
                    }}

                    request={async (params = {}, sort, filter, paginate) => {


                        const api = new WooCommerceRestApi({
                            url: SITE_URL,
                            consumerKey: initialState?.currentUser?.meta?.ech_wc_api_consumer_key,
                            consumerSecret: initialState?.currentUser?.meta?.ech_wc_api_consumer_secret,
                            version: "wc/v3"
                        });

                        return api.get("subscriptions/", {
                            parent: orderId,
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
                                return response;
                                // setUserSubscription(response.data);
                            }
                        }).catch((error) => {
                        });

                        // return {
                        //   data: userOrder?.line_items,
                        //   success: true,
                        // };
                    }}
                    columns={subscriptions_line_items_table_columns}
                />

            </ProCard>


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

                            const orders_screen_view_video_tutorials_data = {
                                // ...initialValues,
                                orders_screen: {
                                    // ...initialValues.orders_screen,
                                    view_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'orders_screen_view_video_url') ].video_url,
                                },
                            };

                            setOrdersViewVideoTutorials(orders_screen_view_video_tutorials_data);

                            console.log('orders_screen_view_video_tutorials_data');
                            console.log(orders_screen_view_video_tutorials_data);

                        });
                        setOrdersViewVideoTutorialModelOpen(true);
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
                title={'Order View Video Tutorial'}
                open={ordersViewVideoTutorialModelOpen}
                onOpenChange={setOrdersViewVideoTutorialModelOpen}
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
                    iframeUrl={ordersViewVideoTutorials?.orders_screen?.view_video_url}
                />

            </ModalForm>

        </PageContainer>
    );


};

export default ViewOrder;
