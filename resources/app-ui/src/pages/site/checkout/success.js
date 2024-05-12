import React, { useState, useEffect } from 'react';
import { Button, Result } from 'antd';

const CheckoutSuccess = () => {

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
