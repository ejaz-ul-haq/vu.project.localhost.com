
import {useParams} from "@@/exports";
import {useModel, request, history} from '@umijs/max';
import React, { useState, useEffect } from 'react';
import {Avatar, Button, Card, Col, Drawer, List, message, Progress, Row, Skeleton, Tag, Image, Tooltip, Input } from 'antd';
import {
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
    LikeOutlined,
    MessageOutlined,
    StarOutlined,
    EyeOutlined,
    AntDesignOutlined,
    UserAddOutlined,
    ArrowRightOutlined,
    CalendarOutlined,
    CarryOutOutlined,
    ShoppingCartOutlined, UserOutlined, EnvironmentOutlined, PhoneOutlined, MailOutlined, LockOutlined
  } from '@ant-design/icons';
  import {
    FooterToolbar, ProCard,
    ProForm, ProFormDatePicker,
    ProFormRadio, ProFormSegmented,
    ProFormSwitch, ProFormText, ProFormTextArea,
    ProList,
  } from '@ant-design/pro-components';

  import moment from 'moment';

  import "./styles/SingleTrip.scss";


const { Meta } = Card;

const SingleTrip = () => {

    const {initialState, loading, refresh, setInitialState} = useModel('@@initialState');

    console.log('initialState');
    console.log(initialState);

    const params = useParams();
    const [tripID, setTripID] = useState(0);
    const [trip, setTrip] = useState(null);
    const [loadingStatus, setLoadingStatus] = useState(false);


    useEffect(() => {
        setTripID(params.id);
    }, []); //empty dependency array so it only runs once at render


    useEffect( () => {
       
        if( tripID == 0 ) {
            return;
        }

        request('/api/trips/' + tripID, {
            method: 'GET',
        }).then(async (api_response) => {
            console.log('api_response');
            console.log(api_response);

            setTrip(api_response?.data);

        }).catch(function (error) {
            console.log(error);
        });

    }, [tripID]); 


    return(<>
    

    <div className="single-trip-section-banner-wrapper">

        <h1 className="trip-section-heading">Trip Details</h1>
        
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="single-trip-section-banner-content">
              <h1>{trip?.title}</h1>
              <p>{trip?.description}</p>
              <p><ShoppingCartOutlined /> Price: {trip?.price}</p>
              <p><CarryOutOutlined /> Start Date: {moment(new Date(trip?.start_date_time)).format('DD-MM-YYYY hh:mm:ss A')}</p>
              <p><CalendarOutlined /> End Date: {moment(new Date(trip?.end_date_time)).format('DD-MM-YYYY hh:mm:ss A')}</p>
            
              <Tooltip title="Thanks for using antd. Have a nice day!">
                    <Button
                      type="primary"
                      icon={<ShoppingCartOutlined />}
                      key="preview"
                      size={"large"}
                      // loading={loadings[1]}
                      // style={{'margin': '10px 0px 0px 0px'}}
                      loading={loadingStatus} 
                      iconPosition={'end'}
                      onClick={ async() => {

                        setLoadingStatus(true);

                        /**
     * API Request
     */
    try {

        /**
         * Start Code By M
         */

        const request_data = {
            // first_name: initialState?.currentUser?.first_name,
            // last_name: initialState?.currentUser?.last_name,
            // email: initialState?.currentUser?.email,
            // password: values?.password,
            user_id: initialState?.currentUser?.id,
            trip_id: trip?.id,
            payment_id: 0,
            checkout_session_id: 0,
            price: trip?.price,
            trip_title: trip?.title
        };

        /**
         * End Code By M
         */

        return await request('/api/bookings', {
            method: 'POST',
            /**
             * Start Comment By M
             */

            // data: formData,

            /**
             * End Comment By M
             */
            data: request_data,
        }).then(async (api_response) => {
            console.log('api_response');
            console.log(api_response);

            setLoadingStatus(false);

            /**
             * User Created then show message and redirect to listing screen
             */
            if (api_response?.data?.stripe_checkout_session?.url ) {
                message.success('Submitted successfully');
                // history.push('/admin-app/accommodations/edit/' + api_response?.data?.id);
                window.location.href=api_response?.data?.stripe_checkout_session?.url;
            }

        }).catch(function (error) {
            console.log(error);

            setLoadingStatus(false);
        });

    } catch (api_response) {
        console.log('api_response - error');
        console.log(api_response);
    }

                      }}

                    >
                      Book Now
                    </Button>
                </Tooltip>

            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="single-trip-section-banner-content">
            <Image src={trip?.image_url} preview={false}  style={{
                maxHeight: '400px'
            }}/>
            </div>
          </Col>
        </Row>
    
    </div>

    <div className="single-trip-destination-section-banner-wrapper">

        <h1 className="trip-section-heading">Destination</h1>
        
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="single-trip-destination-section-banner-content">
            <Image src={trip?.destination?.image_url} preview={false}  style={{
                maxHeight: '400px'
            }}/>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="single-trip-destination-section-banner-content">
              <h1>{trip?.destination?.title}</h1>
              <p>{trip?.destination?.description}</p>
            </div>
          </Col>
        </Row>

    </div>

    <div className="single-trip-accommodation-section-banner-wrapper">

        <h1 className="trip-section-heading">Accommodation</h1>
        
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="single-trip-accommodation-section-banner-content">
              <h1>{trip?.accommodation?.title}</h1>
              <p>{trip?.accommodation?.description}</p>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="single-trip-accommodation-section-banner-content">
            <Image src={trip?.accommodation?.image_url} preview={false}  style={{
                maxHeight: '400px'
            }}/>
            </div>
          </Col>
        </Row>
    
    </div>


    <div className="single-trip-travel-mates-section-banner-wrapper">

       

        <Row justify={"center"}>
          <Col xs={24} sm={24} md={20} lg={20} xl={20}>
          <h1 className="trip-section-heading">Travel Mates</h1>
          <Row >
            {trip?.users.map(function (user, index) {
                console.log("user");
                console.log(user);
                return (

                    <Col xs={24} sm={24} md={6} lg={6} xl={6}>

                    <div className="single-trip-travel-mates-section-banner-content">
                        <Card
                            hoverable
                            style={{
                            width: 240,
                            marginBlockEnd: 20,
                            }}
                            cover={<img alt="example" src={user?.image_url} />}
                        >
                            <Meta title={user?.name} description={user?.email} />
                        </Card>
                    </div>

                    </Col>
                );
            })}
            </Row>
          </Col>
        </Row>



    </div>


    </>);
};

export default SingleTrip;