import React, { useState, useEffect } from 'react';
import { Button, Result } from 'antd';
import {useParams} from "@@/exports";
import {FormattedMessage, useIntl, request, history} from '@umijs/max';

const CheckoutSuccess = () => {

  const params = useParams();
  console.log('params');
  console.log(params);

  // const [user_id, booking_id, stripe_checkout_session_id] = params;

  useEffect(() => {

    const stripe_checkout_session_id = params?.stripe_checkout_session_id;
    console.log('stripe_checkout_session_id');
    console.log(stripe_checkout_session_id);

 

    /**
     * Update Payment in DB
     */
 
  return  request('/api/payments/'+params?.payment_id, {
      method: 'PUT',
      data: {
        user_id: params?.user_id,
        booking_id: params?.booking_id,
        payment_id: params?.payment_id,
        status: 'completed',
    },
  }).then(async (api_response) => {
      console.log('/api/payments - updated - api_response');
      console.log(api_response);

      /**
       * User Created then show message and redirect to listing screen
       */
      // if (api_response?.data?.stripe_checkout_session?.url ) {
      //     message.success('Submitted successfully');
      //     // history.push('/admin-app/accommodations/edit/' + api_response?.data?.id);
      //     window.location.href=api_response?.data?.stripe_checkout_session?.url;
      // }

  }).catch(function (error) {
      console.log(error);
  });

    

  }, [params]);

  return(
    <>
      <Result
        status="success"
        title="Successfully Completed The Booking!"
        subTitle="Congratulations on successfully booking your trip! 🎉 Your adventure awaits! Get ready to explore new destinations, create unforgettable memories, and experience the world like never before. Thank you for choosing us as your travel partner. Bon voyage! We'll keep you updated and notify you when your travel mates are ready to start the journey."
        extra={[
          <Button type="primary" key="console" onClick={() => {
            window.location.href=SITE_URL+'/user-app/';
          }}>
            Visit Dashboard
          </Button>,
          // <Button key="buy">Book</Button>,
        ]}
      />
    </>
  );
};
export default CheckoutSuccess;
