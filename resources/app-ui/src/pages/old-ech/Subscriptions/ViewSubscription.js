import React, {useEffect, useState} from "react";
import {useModel, useParams} from 'umi';
import {Button, Drawer, Input, message, Card, Row, Col, Typography, Table, Tag, Space} from 'antd';
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
import {DownloadOutlined} from '@ant-design/icons';

const {Text, Title, Link} = Typography;

import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

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
        key: 'order.productsTable.id',
        render: (text, record, index) => {
            return (
                <span>{text}</span>
            );
        },
    },
    {
        title: 'Product',
        dataIndex: 'name',
        key: 'order.productsTable.name',
        render: (text, record, index) => {
            return (
                <span>{text}</span>
            );
        },
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'order.productsTable.price',
        render: (text, record, index) => {
            return (
                <span>{text}</span>
            );
        },
    },
    {
        title: 'QTY',
        dataIndex: 'quantity',
        key: 'order.productsTable.quantity',
    },
    {
        title: 'Total',
        dataIndex: 'total',
        key: 'order.productsTable.total',
    },
];

const ViewSubscription = () => {

    const {initialState, loading, refresh, setInitialState} = useModel('@@initialState');
    const {subscriptionId, orderId} = useParams();

    const [apiProcessing, setApiProcessing] = useState(true);
    const [userSubscription, setUserSubscription] = useState({});
    const [userOrder, setUserOrder] = useState({});
    const [userData, setUserData] = useState([{}]);
    const [subTotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(0);


    /**
     * Set Selected Subscriotion
     */
    useEffect(() => {

        /**
         * Check if viewPopupSubscriptionId is realy updated
         */
        if (0 === subscriptionId) {
            return;
        }

        const api = new WooCommerceRestApi({
            url: "http://wi.ecarehub.localhost.com",
            consumerKey: initialState?.currentUser?.meta?.ech_wc_api_consumer_key,
            consumerSecret: initialState?.currentUser?.meta?.ech_wc_api_consumer_secret,
            version: "wc/v3"
        });

        api.get("subscriptions/", {
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
                // return response;
                setUserSubscription(response.data);
            }
        }).catch((error) => {
        });
    }, [orderId]);


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
            url: "http://wi.ecarehub.localhost.com",
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
            }
        }).catch((error) => {
        });
    }, [orderId]);


    useEffect(() => {

        if (Object.keys(userOrder).length === 0 || Object.keys(userSubscription).length === 0) {
            return;
        }

        setApiProcessing(false);

    }, [userOrder, userSubscription]);

    return (
        <PageContainer>
            <p>Order #378 was placed on September 2, 2023 and is currently Processing.</p>
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
                <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                    <Col span={6}>
                        test 01
                    </Col>
                    <Col span={18}>
                        test 02
                    </Col>
                </Row>

                <ProTable columns={line_items_table_columns} dataSource={userOrder?.line_items}/>

                <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                    <Col span={8}>
                        test 01
                    </Col>
                    <Col span={8}>
                        SUBTOTAL:
                    </Col>
                    <Col span={8} style={{textAlign: "right"}}>
                        {userOrder?.currency_symbol} {subTotal}
                    </Col>
                </Row>
                <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                    <Col span={8}>
                        test 01
                    </Col>
                    <Col span={8}>
                        PAYMENT METHOD:
                    </Col>
                    <Col span={8} style={{textAlign: "right"}}>
                        {userOrder?.payment_method} - {userOrder?.payment_method_title}
                    </Col>
                </Row>
                <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                    <Col span={8}>
                        test 01
                    </Col>
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
                title="Related subscriptions"
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
            </ProCard>

        </PageContainer>
    );


};

export default ViewSubscription;
