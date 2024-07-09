
import {useParams} from "@@/exports";
import {request, history} from '@umijs/max';
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

  import moment from 'moment';

  import "./styles/SingleTrip.scss";


const { Meta } = Card;

const SingleTrip = () => {

    const params = useParams();
    const [tripID, setTripID] = useState(0);
    const [trip, setTrip] = useState(null);

    
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

        <h1>Trip Details</h1>
        
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="single-trip-section-banner-content">
              <h1>{trip?.title}</h1>
              <p>{trip?.description}</p>
              <p><ShoppingCartOutlined /> Price: {trip?.price}</p>
              <p><CarryOutOutlined /> Start Date: {moment(new Date(trip?.start_date_time)).format('DD-MM-YYYY hh:mm:ss A')}</p>
              <p><CalendarOutlined /> End Date: {moment(new Date(trip?.end_date_time)).format('DD-MM-YYYY hh:mm:ss A')}</p>
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

        <h1>Destination</h1>
        
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

        <h1>Accommodation</h1>
        
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

        <h1>Travel Mates</h1>

        <Row>

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
    
    </div>


    </>);
};

export default SingleTrip;