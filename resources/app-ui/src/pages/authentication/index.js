import { register, login } from '@/services/api/authentication';
import {
    AlipayCircleOutlined,
    LockOutlined,
    MobileOutlined,
    TaobaoCircleOutlined,
    UserOutlined,
    WeiboCircleOutlined,
} from '@ant-design/icons';
import {
    LoginForm,
    ProFormCaptcha,
    ProFormCheckbox,
    ProFormText,
} from '@ant-design/pro-components';
import { history, SelectLang, useIntl, useModel, Helmet } from '@umijs/max';
import { Row, Col, Alert, message, Tabs } from 'antd';
import Settings from '../../../config/defaultSettings';
import React, { useState } from 'react';
import { flushSync } from 'react-dom';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => {
    return {
        action: {
            marginLeft: '8px',
            color: 'rgba(0, 0, 0, 0.2)',
            fontSize: '24px',
            verticalAlign: 'middle',
            cursor: 'pointer',
            transition: 'color 0.3s',
            '&:hover': {
                color: token.colorPrimaryActive,
            },
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            overflow: 'auto',
            backgroundImage:
                "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
            backgroundSize: '100% 100%',
        },
        main:{
            padding: '0px',
        }
    };
});

const LoginMessage = ({ content }) => {
    return (
        <Alert
            style={{
                marginBottom: 24,
            }}
            message={content}
            type="error"
            showIcon
        />
    );
};

const Login = () => {
    const [userLoginState, setUserLoginState] = useState({});
    const [type, setType] = useState('sign-in');
    const { initialState, setInitialState } = useModel('@@initialState');
    const { styles } = useStyles();
    // const { styles } = {}; // by ejaz
    const intl = useIntl();

    const fetchUserInfo = async () => {
      console.log('auth - fetchUserInfo');
        const userInfo = await initialState?.fetchUserInfo?.();
      console.log('auth - userInfo');
        if (userInfo) {
            flushSync(() => {
                setInitialState((s) => ({
                    ...s,
                    currentUser: userInfo,
                }));
            });
        }
    };

    const handleSubmit = async (values) => {
      console.log('handleSubmit');
      console.log('values');
      console.log(values);

        try {

              let logged_user_api_response = '';
            if( values?.name?.length > 0  ){

              /**
               *  Setup Static values
               */
              values.name = values.first_name+' '+values.last_name;
              values.role = 'user';

              // register
              const register_api_response = await register({ ...values, type });
              console.log('register_api_response');
              console.log(register_api_response);

              logged_user_api_response = register_api_response;

            }else{

              // Log in
              const login_api_response = await login({ ...values, type });
              console.log('login_api_response');
              console.log(login_api_response);


              logged_user_api_response = login_api_response;
            }

          // Assuming you have obtained the token from your backend API response
          localStorage.setItem('laravel_api_bearer_token', logged_user_api_response?.data?.access_token);

          flushSync(() => {
            setInitialState((s) => ({
              ...s,
              currentUser: logged_user_api_response,
            }));
          });

          // Set user error message if failed
          //   setUserLoginState(logged_user_api_response);


          if (logged_user_api_response.status === true) {
            const defaultLoginSuccessMessage = 'login successful!';
            message.success(defaultLoginSuccessMessage);
            await fetchUserInfo();
            const urlParams = new URL(window.location.href).searchParams;
            history.push(urlParams.get('redirect') || '/'+logged_user_api_response?.data?.user?.role+'-app/');
            return;
          }else{
            history.push('/authentication');
            return;
          }




        } catch (error) {
            const defaultLoginFailureMessage = 'Login failed, please try again!';
            console.log(error);
            message.error(defaultLoginFailureMessage);
        }
    };
    const { status, type: loginType } = userLoginState;

    return (
        <div className={styles?.container}>
            <Helmet>
                <title>
                    {Settings.title}
                </title>
            </Helmet>
            <div
                style={{
                    flex: '1',
                    padding: '32px 0',
                }}
            >
                <LoginForm
                    contentStyle={{
                        minWidth: 280,
                        maxWidth: '75vw',
                    }}
                    logo={<img alt="logo" src={initialState?.settings?.logo} />}
                    title="TravelMates - 02"
                    subTitle='Your ultimate travel companion management app.'
                    onFinish={async (values) => {
                        await handleSubmit(values);
                    }}
                >
                    <Tabs
                        activeKey={type}
                        onChange={setType}
                        centered
                        items={[
                            {
                                key: 'sign-in',
                                label: 'Sign in',
                            },
                            {
                                key: 'sign-up',
                                label: 'Sign Up',
                            },
                        ]}
                    />

                    {status === 'error' && loginType === 'sign-in' && (
                        <LoginMessage
                            content='Wrong username or password'
                        />
                    )}
                    {type === 'sign-in' && (
                        <>
                            <ProFormText
                                name="email"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <UserOutlined />,
                                }}
                                placeholder='username: admin or user'
                                rules={[
                                    {
                                        required: true,
                                        message: ("please enter user name!"),
                                    },
                                ]}
                            />
                            <ProFormText.Password
                                name="password"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <LockOutlined />,
                                    max: 10,
                                    min: 6,
                                }}
                                placeholder='password: ant.design'
                                rules={[
                                    {
                                        required: true,
                                        message: ("Please enter your password!"),
                                    },
                                ]}
                            />
                        </>
                    )}

                    {status === 'error' && loginType === 'sign-up' && <LoginMessage content="Verification code error" />}
                    {type === 'sign-up' && (
                        <>
                          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col span={12}>
                              <ProFormText
                                name="first_name"
                                label="First Name:"
                                // tooltip="The legal name of the super user"
                                placeholder="please enter your first name"
                                // hidden={true}
                                rules={[
                                  {
                                    required: true,
                                    message: ("Please enter your first name!"),
                                  }
                                ]}
                              />
                            </Col>
                            <Col span={12}>
                              <ProFormText
                                name="last_name"
                                label="Last Name:"
                                // tooltip="The legal name of the super user"
                                placeholder="please enter your last name"
                                // hidden={true}
                                rules={[
                                  {
                                    required: true,
                                    message: ("Please enter your last name!"),
                                  }
                                ]}
                              />
                            </Col>
                          </Row>
                            <ProFormText
                                fieldProps={{
                                    size: 'large',
                                    prefix: <MobileOutlined />,
                                }}
                                name="name"
                                placeholder='Name'
                                rules={[
                                    {
                                        required: true,
                                        message: ("Please enter name!"),
                                    }
                                ]}
                            />
                            <ProFormText
                                fieldProps={{
                                    size: 'large',
                                    prefix: <MobileOutlined />,
                                }}
                                name="email"
                                placeholder='Email'
                                rules={[
                                    {
                                        required: true,
                                        message: ("Please enter email!"),
                                    }
                                ]}
                            />
                            <ProFormText.Password
                                fieldProps={{
                                    size: 'large',
                                    prefix: <LockOutlined />,
                                    max: 10,
                                    min: 6,
                                }}
                                name="password"
                                placeholder='Password'
                                rules={[
                                    {
                                        required: true,
                                        message: ("Please enter password!"),
                                    }
                                ]}
                            />
                          <ProFormText.Password
                            name="password_confirmation"
                            dependencies={['password']}
                            fieldProps={{
                              size: 'large',
                              prefix: <LockOutlined />,
                              max: 10,
                              min: 6,
                            }}
                            placeholder='password: ant.design'
                            rules={[
                              {
                                required: true,
                                message: 'Please confirm your password!',
                              },
                              ({ getFieldValue }) => ({
                                validator(_, value) {
                                  if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                  }
                                  return Promise.reject(new Error('The new password that you entered do not match!'));
                                },
                              }),
                            ]}
                          />
                        </>
                    )}
                    <div
                        style={{
                            marginBottom: 24,
                        }}
                    >
                    </div>
                </LoginForm>
            </div>
        </div>
    );
};

export default Login;
