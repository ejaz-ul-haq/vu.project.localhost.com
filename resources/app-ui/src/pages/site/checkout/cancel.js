import React, { useState, useEffect } from 'react';
import { Button, Result } from 'antd';

const CheckoutCancel = () => {

  return(
    <>
      <Result
        status="error"
        title="Booking Failed"
        subTitle="We're sorry to see you go! If you've canceled your booking, we understand that plans can change. If you need any assistance or have any questions, feel free to reach out to our customer support team. We hope to see you on another adventure soon. Safe travels!"
        extra={[
          // <Button type="primary" key="console">
          //   Visit Dashboard
          // </Button>,
          <Button key="buy">Buy Again</Button>,
        ]}
      />
    </>
  );
};
export default CheckoutCancel;
