
import React, {useEffect, useState, useRef} from 'react';
import {message, Radio, Space, Tabs} from 'antd';
import {
  FooterToolbar,
  ModalForm,
  PageContainer, ProCard,
  ProDescriptions, ProForm, ProFormDatePicker, ProFormRadio, ProFormSegmented,
  ProFormText,
  ProFormTextArea,
  ProTable, TableDropdown,
} from '@ant-design/pro-components';

import StaffMemberCreated from '@/pages/EmailNotifications/StaffMemberCreated';
import SuperUserCreated from "@/pages/EmailNotifications/SuperUserCreated";
import SuperUserUpdated from "@/pages/EmailNotifications/SuperUserUpdated";
import {getEchOrganization} from "@/services/wp-api/EchOrganization";
import {request, useModel} from "@@/exports";

const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const getActiveTabContent = (organizationId, activeTabKey) => {

  return request('/wp/v2/email-notification/?organization_id='+organizationId+'&email_notification_id='+activeTabKey, {
    // request('/wp/v2/email-notification/'+organizationId+'/'+activeKey, {
    method: 'GET',
    // data: organizationId,
  }).then(async (api_response) => {
    console.log('get-email-notification = api_response');
    console.log(api_response);

    return api_response;

  }).catch(function (error) {
    console.log(error);
  });

};

const NotificationsTabs = () => {

  const {initialState, loading, refresh, setInitialState} = useModel('@@initialState');
  const [organizationId, setOrganizationId] = useState(0);
  const [activeTabKey, setActiveTabKey] = useState('');
  const [tabsItems, setTabsItems] = useState([]);
  const [tabRequest, setTabRequest] = useState(false);
  const [activeTabApiResponse, setActiveTabApiResponse] = useState({});
  const [defaultActiveTabKey, setDefaultActiveKey] = useState('');
  // const [defaultActiveTabKeyRef, setDefaultActiveKeyRef] = useRef();

  useEffect(() => {
    if (initialState?.currentUser?.meta?.ech_organization_id === 0) {
      return;
    }
    setOrganizationId(initialState?.currentUser?.meta?.ech_organization_id);
    setDefaultActiveKey('super_user_created');
  }, [initialState]);


  // useEffect( () => {
  //
  //   if( 0 === organizationId || '' === defaultActiveTabKey ){
  //     return;
  //   }
  //
  //
  //   const active_tab_content = getActiveTabContent(organizationId, defaultActiveTabKey);
  //
  //
  //
  //   // await waitTime(3000);
  //
  //   setActiveTabApiResponse(active_tab_content);
  //
  //   const new_tabs_items = tabsItems.map(tabItem => {
  //     if (tabItem.key === defaultActiveTabKey) {
  //       return {...tabItem, children: <SuperUserCreated status={active_tab_content?.status} subject={active_tab_content?.subject} body={active_tab_content?.body}/>};
  //     }
  //     return tabItem;
  //   });
  //
  //   setTabsItems(new_tabs_items);
  //
  //
  // }, [organizationId, defaultActiveTabKey]);


  useEffect(() => {

      // const active_tab_content =  getActiveTabContent(organizationId, defaultActiveTabKey);



      // await waitTime(3000);

      // setActiveTabApiResponse(active_tab_content);
    //
    //   const new_tabs_items = tabsItems.map(tabItem => {
    //     if (tabItem.key === defaultActiveTabKey) {
    //       return {...tabItem, children: <SuperUserCreated status={active_tab_content?.status} subject={active_tab_content?.subject} body={active_tab_content?.body}/>};
    //     }
    //     return tabItem;
    //   });
    //
    //   setTabsItems(new_tabs_items);

    let tabs_items = [
      {
        label: 'Super User Created',
        key: 'super_user_created',
        children: <SuperUserCreated/>,
        forceRender: true,
      },
      {
        label: 'Super User Updated',
        key: 'super_user_updated',
        children: <SuperUserUpdated/>,
      },
      {
        label: 'Super User Deleted',
        key: 'user_user_deleted',
        children: '',
      },
      {
        label: 'Staff Member Created',
        key: 'staff_member_created',
        children: <StaffMemberCreated />,
      },
      {
        label: 'Staff Member Updated',
        key: 'staff_member_updated',
        children: '',
      },
      {
        label: 'Staff Member Deleted',
        key: 'staff_member_deleted',
        children: '',
      },
    ];
    setTabsItems(tabs_items);

    // waitTime(3000);
    // document.ready( () => {
    //   document.getElementById('rc-tabs-0-tab-super_user_created').click();
    // });



  }, []);





  return (
    <PageContainer>
      <Tabs
        tabPosition={'left'}
        items={ tabsItems }
        // defaultActiveKey={defaultActiveTabKey}
        // onChange={(activeKey) => {
        onTabClick={async ( activeKey, event) => {

          setActiveTabKey(activeKey);

          /**
           * Recall the the APi by updateing the state dependency
           */
          // setOrganizationId(initialState?.currentUser?.meta?.ech_organization_id);
          // setTabRequest(true);
          // console.log('Tab Changed');
          // console.log(activeKey);

          const active_tab_content = await getActiveTabContent(organizationId, activeKey);


          // await waitTime(3000);

          // setActiveTabApiResponse(api_response);

          const new_tabs_items = tabsItems.map(tabItem => {
            if (tabItem.key === activeKey) {
              return {...tabItem, children: <SuperUserCreated status={active_tab_content?.status} subject={active_tab_content?.subject} body={active_tab_content?.body}/>};
            }
            if (tabItem.key === activeKey) {
              return {...tabItem, children: <SuperUserUpdated status={active_tab_content?.status} subject={active_tab_content?.subject} body={active_tab_content?.body}/>};
            }
            if (tabItem.key === activeKey) {
              return {...tabItem, children: <StaffMemberCreated status={active_tab_content?.status} subject={active_tab_content?.subject} body={active_tab_content?.body}/>};
            }
            return tabItem;
          });

          setTabsItems(new_tabs_items);


        }}
      />

      {/*{(document.getElementById('rc-tabs-0-tab-super_user_created') ) &&*/}
      {/*    document.getElementById('rc-tabs-0-tab-super_user_created').click()*/}
      {/*}*/}
    </PageContainer>
  );
};
export default NotificationsTabs;
