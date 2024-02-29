import {
    PageContainer,
    FooterToolbar,
    ProCard,
    ProForm,
    ProFormCheckbox,
    ProFormDatePicker,
    ProFormDateRangePicker,
    ProFormDigit,
    ProFormSelect,
    ProFormText,
    StepsForm,
    ProFormDependency,
    ProFormList,
    ProFormGroup,
    ProFormRadio,
    ProFormSegmented,
    ProFormTextArea,
} from '@ant-design/pro-components';
import {Row, Col, Space, message, Button, Form, DatePicker, Tabs, Radio, Avatar, Typography, Image} from 'antd';
import {UserOutlined} from '@ant-design/icons';

import {createUser, getUser, getUsers, putUser} from "@/services/wp-api/User";
import {request} from '@umijs/max';
import {date, datetime} from "mockjs/src/mock/random/date";
import moment from 'moment';
import {useParams} from "@@/exports";
import React, {useEffect, useState} from "react";
import {getEchPolicy} from "@/services/wp-api/EchPolicy";
import viewSelectedSuperUser from "mockjs";


const waitTime = (time = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};

const {Title} = Typography;


// const onFinishHandlerStepsForm =   (values) => {
//   console.log('onFinishHandlerStepsForm');
//   console.log('Received values of form: ', values);
//
//   const viewSuperUser = async () => {
//     try {
//
//       const request_data = {
//         first_name: values?.super_user?.step_01?.bio_details?.first_name,
//         last_name: values?.super_user?.step_01?.bio_details?.last_name,
//         name: values?.super_user?.step_01?.bio_details?.first_name+' '+values?.super_user?.step_01?.bio_details?.last_name,
//         nickname: values?.super_user?.step_01?.bio_details?.nick_name,
//         description: values?.super_user?.step_01?.bio_details?.biographical_info,
//         email: values?.super_user?.step_01?.contact_details?.email,
//         url: values?.super_user?.step_01?.contact_details?.website,
//         password: values?.super_user?.step_02?.account_details?.password,
//
//         meta: {
//           ech_gender: values?.super_user?.step_01?.bio_details?.gender,
//           ech_dob: moment( new Date(values?.super_user?.step_01?.bio_details?.date_of_birth) ).format('YYYY-MM-DD'),
//           ech_phone_no: values?.super_user?.step_01?.contact_details?.phone_number,
//           ech_street_address_line_1: values?.super_user?.step_01?.mailing_details?.Street_address_line_1,
//           ech_street_address_line_2: values?.super_user?.step_01?.mailing_details?.Street_address_line_2,
//           ech_country_region: values?.super_user?.step_01?.mailing_details?.country_region,
//           ech_state_county: values?.super_user?.step_01?.mailing_details?.state_county,
//           ech_city: values?.super_user?.step_01?.mailing_details?.city,
//           ech_postcode_zip: values?.super_user?.step_01?.mailing_details?.postcode_zip,
//         },
//
//         roles: 'ech_super_user',
//       };
//
//       const msg =  putUser(
//         {id: values?.user_id},
//         {},
//         {
//           data: request_data,
//         }
//       );
//       // return msg.data;
//       return msg;
//     } catch (error) {
//       console.log('viewSuperUser - error');
//       console.log(error);
//       // history.push(loginPath);
//     }
//     return undefined;
//   };
//
//   const superUserViewed = viewSuperUser();
//   console.log('superUserViewed');
//   console.log(superUserViewed);
//
// };

const ViewSuperUser = () => {

    const params = useParams();
    console.log('params');
    console.log(params);

    const [userId, setUserId] = useState(0);
    console.log('userId');
    console.log(userId);

    useEffect(() => {
        setUserId(params.id);
    }, []); //empty dependency array so it only runs once at render


    const [size, setSize] = useState('small');
    const onChange = (e) => {
        setSize(e.target.value);
    };


    const [user, setUser] = useState(0);
    //
    // const UserByID = async (user_id) => {
    //   const api_response = await getUser(
    //     {
    //       context: 'edit',
    //       id: user_id,
    //     },
    //     {getResponse: true}
    //   );
    //   setUser(api_response?.data);
    //
    // };
    //
    // useEffect(() => {
    //   UserByID(params.id);
    // }, []);
    //
    // console.log('user');
    // console.log(user);
    //
    // console.log('UserByID');
    // console.log(UserByID);


    const initialValues = {
        super_user: {
            step_01: {
                bio_details: {
                    super_user_profile_image: '',
                    first_name: '',
                    last_name: '',
                    nick_name: '',
                    gender: '',
                    date_of_birth: Date.now(),
                    biographical_info: '',
                },
                contact_details: {
                    phone_number: '',
                    email: '',
                    website: '',
                },
                mailing_details: {
                    Street_address_line_1: '',
                    Street_address_line_2: '',
                    country_region: '',
                    state_county: '',
                    city: '',
                    postcode_zip: '',
                }
            },
            step_02: {
                account_details: {
                    username: '',
                    password: '',
                },
            },
        },
    };

    return (
        <PageContainer>

            <ProForm
                name="profile_details"
                title="Profile Details"
                onFinish={async () => {
                    await waitTime(2000);
                    return true;
                }}
                layout='vertical'
                grid={true}
                // rowProps={{
                //   gutter: [16],
                // }}
                submitter={{
                    // Configure the button text
                    // searchConfig: {
                    //   resetText: 'reset',
                    //   submitText: 'make',
                    // },
                    // Configure the properties of the button
                    resetButtonProps: {
                        style: {
                            // Hide the reset button
                            display: 'none',
                        },
                    },
                    submitButtonProps: {
                        style: {
                            // Hide the submit button
                            display: 'none',
                        },
                    },
                }}
                initialValues={initialValues}
                params={{'user_id': userId}}
                request={

                    // console.log('testing-request...')

                    // const params = {};
                    // async (params= {} ) => {
                    async (params = {}) => {

                        console.log('proform-params');
                        console.log(params);

                        if (params?.user_id == 0) {
                            return;
                        }

                        await waitTime(2000);

                        const api_response = await getUser(
                            {
                                context: 'edit',
                                id: params?.user_id,
                            },
                            {getResponse: true}
                        );

                        setUser(api_response?.data);

                        console.log('api_response');
                        console.log(api_response);

                        return {
                            ...initialValues,
                            super_user: {
                                ...initialValues.super_user,
                                step_01: {
                                    ...initialValues.super_user.step_01,
                                    bio_details: {
                                        ...initialValues.super_user.step_01.bio_details,
                                        super_user_profile_image: api_response?.data?.ech_user_profile_image_url,
                                        first_name: api_response?.data?.first_name,
                                        last_name: api_response?.data?.last_name,
                                        nick_name: api_response?.data?.nickname,
                                        gender: api_response?.data?.meta.ech_gender,
                                        date_of_birth: api_response?.data?.meta.ech_dob,
                                        biographical_info: api_response?.data?.description,
                                    },
                                    contact_details: {
                                        ...initialValues.super_user.step_01.contact_details,
                                        phone_number: api_response?.data?.meta.ech_phone_no,
                                        email: api_response?.data?.email,
                                        website: api_response?.data?.url,
                                    },
                                    mailing_details: {
                                        ...initialValues.super_user.step_01.mailing_details,
                                        Street_address_line_1: api_response?.data?.meta.ech_street_address_line_1,
                                        Street_address_line_2: api_response?.data?.meta.ech_street_address_line_2,
                                        country_region: api_response?.data?.meta.ech_country_region,
                                        state_county: api_response?.data?.meta.ech_state_county,
                                        city: api_response?.data?.meta.ech_city,
                                        postcode_zip: api_response?.data?.meta.ech_postcode_zip,
                                    },
                                },
                                step_02: {
                                    ...initialValues.super_user.step_02,
                                    account_details: {
                                        ...initialValues.super_user.step_02.account_details,
                                        username: api_response?.data?.username,
                                        // password: api_response?.data?.password,
                                    },
                                },
                            },
                        };
                        // return api_response;

                    }
                }

            >
                <ProCard
                    title="BIO Details"
                    bordered
                    headerBordered
                    // collapsible
                    size="default"
                    type="inner"
                    style={{
                        marginBlockEnd: 15,
                        minWidth: 800,
                        maxWidth: '100%',
                    }}
                    // onCollapse={(collapse) => console.log(collapse)}
                >
                    <Row
                        gutter={{
                            xs: 8,
                            sm: 16,
                            md: 24,
                            lg: 32,
                        }}
                    >
                        <Col span={8}>

                            <ProForm.Group size={24}>
                                <Col span={24}>
                                    <Image
                                        width='100%'
                                        height={200}
                                        src={user?.meta?.ech_user_profile_image_url}
                                    />
                                </Col>
                            </ProForm.Group>

                        </Col>
                        <Col span={16}>

                            <ProForm.Group size={24}>
                                <ProFormText
                                    name={['super_user', 'step_01', 'bio_details', 'first_name']}
                                    label="First Name"
                                    tooltip="The legal name"
                                    placeholder="please enter your legal name"
                                    // readonly={readonly}
                                    // rules={[{ required: true }]}
                                    // readonly
                                    readonly={true}
                                    // disabled={true}
                                    fieldProps={{
                                        // prefix: <UserOutlined />,
                                        // readonly: true,
                                        // size: 'large',

                                        onChange: (e) => {
                                            console.log('e.target.value');
                                            console.log(e.target.value);
                                        }

                                    }}
                                    colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                                />
                                <ProFormText
                                    name={['super_user', 'step_01', 'bio_details', 'last_name']}
                                    label="Last Name"
                                    tooltip="The legal name"
                                    placeholder="please enter your legal name"
                                    // rules={[{ required: true }]}
                                    // disabled={true}
                                    readonly={true}
                                    fieldProps={{
                                        // prefix: <UserOutlined />,
                                        // size: 'large',

                                        onChange: (e) => {
                                            console.log('e.target.value');
                                            console.log(e.target.value);
                                        }
                                    }}
                                    colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                                />
                                <ProFormText
                                    name={['super_user', 'step_01', 'bio_details', 'nick_name']}
                                    label="Nick Name"
                                    tooltip="The legal name"
                                    placeholder="please enter your legal name"
                                    // rules={[{ required: true }]}
                                    readonly={true}
                                    fieldProps={{
                                        // prefix: <UserOutlined />,
                                        // size: 'large',

                                        onChange: (e) => {
                                            console.log('e.target.value');
                                            console.log(e.target.value);
                                        }
                                    }}
                                    colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                                />
                            </ProForm.Group>
                            <ProForm.Group size={24}>
                                <ProFormRadio.Group
                                    name={['super_user', 'step_01', 'bio_details', 'gender']}
                                    label="Gender"
                                    radioType="button"
                                    options={[
                                        {
                                            label: 'Male',
                                            value: 'male',
                                        },
                                        {
                                            label: 'Female',
                                            value: 'female',
                                        },
                                        {
                                            label: 'Others',
                                            value: 'others',
                                        },
                                    ]}
                                    readonly={true}
                                    colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                                />

                                <ProFormDatePicker
                                    label="Date of Birth"
                                    name={['super_user', 'step_01', 'bio_details', 'date_of_birth']}
                                    // placeholder="5453-763876-7686"
                                    // maxLength={20}
                                    // min={1}
                                    // max={10}
                                    // fieldProps={{ precision: 0 }}
                                    readonly={true}
                                    colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                                />
                                <ProFormTextArea
                                    name={['super_user', 'step_01', 'bio_details', 'biographical_info']}
                                    label="Biographical Info"
                                    placeholder="Share a little biographical information to fill out your profile. This may be shown publicly. "
                                    readonly={true}
                                />
                            </ProForm.Group>

                        </Col>

                        {/*<Col span={6} pull={16}>*/}
                        {/*  <Space direction="vertical" style={{width: '100%', justifyContent: 'center'}} align={"center"} >*/}
                        {/*    <Avatar size={150} src={user?.avatar_urls?.["96"]} />*/}
                        {/*    <Title level={5} style={{textAlign: "center"}}>{user?.name}</Title>*/}
                        {/*  </Space>*/}
                        {/*</Col>*/}

                    </Row>

                </ProCard>

                <ProCard
                    title="Contact Details"
                    bordered
                    headerBordered
                    // collapsible
                    size="default"
                    type="inner"
                    style={{
                        marginBlockEnd: 15,
                        minWidth: 800,
                        maxWidth: '100%',
                    }}
                >
                    <ProForm.Group size={24}>
                        <ProFormText
                            label="Phone No."
                            name={['super_user', 'step_01', 'contact_details', 'phone_number']}
                            placeholder="+2974837487 etc."
                            readonly={true}
                            // min={1}
                            // max={10}
                            fieldProps={{precision: 0}}
                            colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                        />
                        <ProFormText
                            label="Email"
                            name={['super_user', 'step_01', 'contact_details', 'email']}
                            tooltip="The legal name of the organization"
                            placeholder="info@example.com etc."
                            readonly={true}
                            // rules={[{ required: true }]}
                            colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                        />
                        <ProFormText
                            label="Website"
                            name={['super_user', 'step_01', 'contact_details', 'website']}
                            tooltip="The legal name of the organization"
                            placeholder="http://example.com"
                            readonly={true}
                            // rules={[{ required: true }]}
                            colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                        />
                    </ProForm.Group>
                </ProCard>

                <ProCard
                    title="Mailing Details"
                    bordered
                    headerBordered
                    // collapsible
                    size="default"
                    type="default"
                    style={{
                        marginBlockEnd: 15,
                        minWidth: 800,
                        maxWidth: '100%',
                    }}
                >
                    <ProForm.Group size={24}>
                        <ProFormText
                            name={['super_user', 'step_01', 'mailing_details', 'Street_address_line_1']}
                            label="Street address line 1"
                            tooltip="The legal name"
                            placeholder="Please Enter Street Address"
                            readonly={true}
                            // rules={[{ required: true }]}
                            colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                        />
                        <ProFormText
                            name={['super_user', 'step_01', 'mailing_details', 'Street_address_line_2']}
                            label="Street address line 2"
                            tooltip="The legal name"
                            placeholder="Please Enter Street Address"
                            readonly={true}
                            // rules={[{ required: true }]}
                            colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                        />
                        <ProFormSelect
                            name={['super_user', 'step_01', 'mailing_details', 'country_region']}
                            label="Country / Region"
                            showSearch
                            debounceTime={300}
                            options={[
                                {
                                    label: 'England',
                                    value: 'england',
                                },
                                {
                                    label: 'Scotland',
                                    value: 'scotland',
                                },
                                {
                                    label: 'Wales',
                                    value: 'wales',
                                },
                                {
                                    label: 'Northern Ireland',
                                    value: 'northern_ireland',
                                },
                            ]}
                            readonly={true}
                            colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                            // rules={[{ required: true, message: 'Please select your organization type!' }]}
                        />
                        <ProFormText
                            name={['super_user', 'step_01', 'mailing_details', 'state_county']}
                            label="State / County"
                            tooltip="The legal name"
                            placeholder="Please Enter State / County"
                            readonly={true}
                            // rules={[{ required: true }]}
                            colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                        />
                        <ProFormText
                            name={['super_user', 'step_01', 'mailing_details', 'city']}
                            label="City"
                            tooltip="The legal name"
                            placeholder="Please Enter City"
                            readonly={true}
                            // rules={[{ required: true }]}
                            colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                        />
                        <ProFormText
                            name={['super_user', 'step_01', 'mailing_details', 'postcode_zip']}
                            label="Post Code / ZIP"
                            tooltip="The legal name"
                            placeholder="Please Enter Post Code / ZIP"
                            readonly={true}
                            // rules={[{ required: true }]}
                            colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                        />
                    </ProForm.Group>
                </ProCard>
            </ProForm>
        </PageContainer>
    );
};

export default ViewSuperUser;
