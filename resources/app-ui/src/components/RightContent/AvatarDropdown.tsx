// import { outLogin } from '@/services/ant-design-pro/api';
import {LogoutOutlined, SettingOutlined, UserOutlined, LockOutlined} from '@ant-design/icons';
import {useEmotionCss} from '@ant-design/use-emotion-css';
import {history, useModel} from '@umijs/max';
import {message, Spin} from 'antd';
import {stringify} from 'querystring';
import type {MenuInfo} from 'rc-menu/lib/interface';
import React, {useCallback} from 'react';
import {flushSync} from 'react-dom';
import HeaderDropdown from '../HeaderDropdown';
import {request, Link} from '@umijs/max';

export type GlobalHeaderRightProps = {
    menu?: boolean;
    children?: React.ReactNode;
};

export const AvatarName = () => {
    const {initialState} = useModel('@@initialState');
    const {currentUser} = initialState || {};
    return (<span className="anticon">{currentUser?.name}</span>);
};

export const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({menu, children}) => {
    /**
     * sign out，and change the current url save
     */
    const loginOut = async () => {
        // await outLogin();
        const {search, pathname} = window.location;
        const urlParams = new URL(window.location.href).searchParams;

        /** This method jumps to redirect Where the parameter is located */
        // const redirect = urlParams.get('redirect');
        // Note: There may be security issues, please note
        // if (window.location.pathname !== '/user/login' && !redirect) {
        //   history.replace({
        //     pathname: '/user/login',
        //     search: stringify({
        //       redirect: pathname + search,
        //     }),
        //   });
        // }
    };
    const actionClassName = useEmotionCss(({token}) => {
        return {
            display: 'flex',
            height: '48px',
            marginLeft: 'auto',
            overflow: 'hidden',
            alignItems: 'center',
            padding: '0 8px',
            cursor: 'pointer',
            borderRadius: token.borderRadius,
            '&:hover': {
                backgroundColor: token.colorBgTextHover,
            },
        };
    });
    const {initialState, setInitialState} = useModel('@@initialState');

    const onMenuClick = useCallback(
        (event: MenuInfo) => {
            const {key} = event;
            if (key === 'logout') {
                // flushSync(() => {
                //     setInitialState((s) => ({...s, currentUser: undefined}));
                // });
                // loginOut();

                request('/api/auth/logout', {
                    method: 'POST',
                    data: {},
                }).then(async (api_response) => {
                    console.log('logout = api_response');
                    console.log(api_response);

                    if (api_response.status) {

                      // Assuming you have obtained the token from your backend API response
                      localStorage.setItem('laravel_api_bearer_token', '');

                        // console.log('logout = api_response - 01');
                        // async () => {
                        // console.log('logout = api_response - 02');
                        // await waitTime(3000);
                        // console.log('logout = api_response - 03');
                        // await message.success('Submitted successfully');
                        // console.log('logout = api_response - 04');
                        // history.go();
                        // history.push(api_response.data.wp_login_url);
                        // history.replace('/organization');

                        // window.location.href = api_response.data.wp_login_url;
                      window.location.href = '/authentication';

                        // window.location.replace(window.location.protocol + '//' + window.location.host + window.location.pathname + '#/organization');
                        console.log('logout = api_response - 05');
                        // window.location.href = '/app/#/organization';
                        // }
                    }

                }).catch(function (error) {
                    console.log(error);
                });

                return;
            }

            if (key === 'profile') {
                // console.log('initialState?.currentUser?.data?.role');
                // console.log(initialState?.currentUser);
                // console.log(initialState?.currentUser?.role);

                history.push('/'+initialState?.currentUser?.role+'-app/profile');
                // history.location.href =  '/'+logged_user_api_response?.data?.user?.role+'-app/';
            }
            // history.push(`/account/${key}`);

            if( key == 'signup_login' ){
                history.push('/authentication');
            }
        },
        [setInitialState],
    );

    const loading = (
        <span className={actionClassName}>
      <Spin
          size="small"
          style={{
              marginLeft: 8,
              marginRight: 8,
          }}
      />
    </span>
    );

    if (!initialState) {
        return loading;
    }

    const {currentUser} = initialState;

    // if (!currentUser || !currentUser.name) {
    //     return loading;
    // }

    const menuItems = [
        ...(menu
            ? [
                {
                    key: 'center',
                    icon: <UserOutlined/>,
                    label: 'personal center',
                },
                {
                    key: 'settings',
                    icon: <SettingOutlined/>,
                    label: 'Personal settings',
                },
                {
                    type: 'divider' as const,
                },
            ]
            : []),
            ...( (currentUser) ?  [    
        {
            key: 'profile',
            icon: <UserOutlined/>,
            label: 'Profile',
        },
        {
            key: 'logout',
            icon: <LogoutOutlined/>,
            label: 'Log Out',
        },
    ] : [] ),
        ...( (!currentUser || !currentUser.name) ?  [
            { 
                key: 'signup_login', 
                icon: <LockOutlined/>, 
                label: 'Signup / Login', 
            }
        ] : [] )
    ];

    return (
        <HeaderDropdown
            menu={{
                selectedKeys: [],
                onClick: onMenuClick,
                items: menuItems,
            }}
        >
            {children}
        </HeaderDropdown>
    );
};
