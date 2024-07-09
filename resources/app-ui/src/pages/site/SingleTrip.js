
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
    
    <Row>
    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
        <h1>{trip?.title}</h1>
        <p>{trip?.description}</p>
      {/* Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. */}
      </Col>
      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
        <Image src={trip?.image_url} preview={false}  style={{
            maxHeight: '400px'
        }}/>
      </Col>
    </Row>

    <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
        <p><ShoppingCartOutlined /> Price: {trip?.price}</p>
                        <p><CarryOutOutlined /> Start Date: {moment(new Date(trip?.start_date_time)).format('DD-MM-YYYY hh:mm:ss A')}</p>
                        <p><CalendarOutlined /> End Date: {moment(new Date(trip?.end_date_time)).format('DD-MM-YYYY hh:mm:ss A')}</p>
                        <p>created_at: {moment(new Date(trip?.created_at)).format('DD-MM-YYYY hh:mm:ss A')}</p>
                        <p>updated_at: {moment(new Date(trip?.updated_at)).format('DD-MM-YYYY hh:mm:ss A')}</p>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}></Col>
    </Row>


    <Row>
    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
        <Image src={trip?.destination?.image_url} preview={false}  style={{
            maxHeight: '400px'
        }}/>
      </Col>
    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
        <h1>{trip?.destination?.title}</h1>
        <p>{trip?.destination?.description}</p>
      {/* Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. */}
      </Col>
      
    </Row>


    </>);
};

export default SingleTrip;