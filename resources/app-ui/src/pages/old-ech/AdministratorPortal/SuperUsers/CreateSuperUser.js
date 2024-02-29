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
import {Row, Col, Space, message, Button, Form, DatePicker, Image, Skeleton} from 'antd';
import {UploadOutlined, UserOutlined} from '@ant-design/icons';

import {createUser} from "@/services/wp-api/User";
import {request} from '@umijs/max';
import {date, datetime} from "mockjs/src/mock/random/date";
import moment from 'moment';
import React, {useEffect, useState} from "react";
import {history} from "@@/core/history";
import {useModel} from "umi";
import CreateSuperUserSkeleton from "@/components/Skeleton/CreateSuperUserSkeleton";
import {getEchOrganizations} from "@/services/wp-api/EchOrganization";

const waitTime = (time = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};


/**
 * The Form Initial values
 */
const initialValues = {
    bio_details: {
        super_user_profile_image: '',
        first_name: '',
        last_name: '',
        middle_name: '',
        nick_name: '',
        gender: '',
        date_of_birth: Date.now(),
        account_status: 'pending',
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
    },
    account_details: {
        username: '', password: ''
    },

};

/**
 * Form Submission handler and API Request Performer
 */

const onFinishHandlerForm = (values) => {
    console.log('onFinishHandlerForm');
    console.log('Received values of form: ', values);

    const request_data = {
        first_name: values?.bio_details?.first_name,
        last_name: values?.bio_details?.last_name,
        name: values?.bio_details?.first_name + ' ' + values?.bio_details?.last_name,
        nickname: values?.bio_details?.nick_name,
        description: values?.bio_details?.biographical_info,
        email: values?.contact_details?.email,
        url: values?.contact_details?.website,
        username: values?.account_details?.username,
        password: values?.account_details?.password,
        roles: 'ech_super_user',
        meta: {
            ech_user_profile_image_url: values?.bio_details?.super_user_profile_image,
            ech_middle_name: values?.bio_details?.middle_name,
            ech_gender: values?.bio_details?.gender,
            ech_dob: moment(new Date(values?.bio_details?.date_of_birth)).format('YYYY-MM-DD'),
            ech_account_status: values?.bio_details?.account_status,
            ech_phone_no: values?.contact_details?.phone_number,
            ech_street_address_line_1: values?.mailing_details?.Street_address_line_1,
            ech_street_address_line_2: values?.mailing_details?.Street_address_line_2,
            ech_country_region: values?.mailing_details?.country_region,
            ech_state_county: values?.mailing_details?.state_county,
            ech_city: values?.mailing_details?.city,
            ech_postcode_zip: values?.mailing_details?.postcode_zip,
            ech_user_password: values?.account_details?.password,
            // ech_organization_id: values?.organization_id,
            ech_organization_id: values?.user_organization_id,
        },
    }

    /**
     * API Request
     */

    try {
        createUser(
            {},
            {
                data: request_data,
            }
        ).then((api_response) => {
            console.log('api_response');
            console.log(api_response);
            /**
             * User Created then show message and redirect to listing screen
             */
            if (api_response?.id > 0) {
                message.success('Submitted successfully');
                // history.push('/super-users/list');
                history.push('/administrator/super-users/edit/' + api_response?.id);
            }
        });
    } catch (api_response) {
        console.log('api_response - error');
        console.log(api_response);
        // history.push(loginPath);
    }

    return true;
};

const CreateSuperUser = () => {

    /**
     * States of Component
     */
    const {initialState, loading, refresh, setInitialState} = useModel('@@initialState');
    const [form] = Form.useForm();
    const [superUserProfileImageUrl, setSuperUserProfileImageUrl] = useState('');
    const [createSuperUserSkeleton, setCreateSuperUserSkeleton] = useState(true);
    const [allEchOrganizations, setAllEchOrganizations] = useState([]);

    /**
     * Update the Profile Image input field individually whenever the related State is updated/effected
     */
    useEffect(() => {
        form.setFieldValue(['bio_details', 'super_user_profile_image'], superUserProfileImageUrl);
        setCreateSuperUserSkeleton(false);
    }, [superUserProfileImageUrl, form]);


    /**
     * Start - Staff member Organizations Data
     */
    useEffect(() => {


        getEchOrganizations(
            {
                context: 'edit',
            },
            {getResponse: true}
        ).then(function ({data, response}) {
            console.log("all-organizations-data");
            console.log(data);

            const table_data = data.map((item, i) => ({
                value: item.id.toString(),
                label: item.title?.rendered,
            }));

            /**
             * Set All Organizations List Into The Create Staff Member Profile
             */
            setAllEchOrganizations(table_data);

        });

    }, []);


    /**
     * The Component Output
     */

    if (createSuperUserSkeleton) {

        return (
            <PageContainer
                header={
                    {title: ""}
                }
            >
                <CreateSuperUserSkeleton
                    active={true}
                />
            </PageContainer>
        );

    } else {

        return (
            <PageContainer>
                <ProForm
                    layout='vertical'
                    grid={true}
                    initialValues={initialValues}
                    form={form}
                    onFinish={async (values) => {
                        console.log(values);
                        /**
                         * Add Organization ID into the form Values
                         */
                        // values.organization_id = initialState?.currentUser?.meta?.ech_organization_id;
                        await waitTime(1000);
                        await onFinishHandlerForm(values);
                    }}
                    formProps={{
                        validateMessages: {
                            required: 'This is required',
                        },
                    }}
                    submitter={{
                        render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>,
                    }}
                >

                    <ProCard
                        title="BIO Details"
                        bordered
                        headerBordered
                        collapsible
                        size="default"
                        type="inner"
                        style={{
                            marginBlockEnd: 15,
                            minWidth: 800,
                            maxWidth: '100%',
                        }}
                        onCollapse={(collapse) => console.log(collapse)}
                    >
                        <Row
                            gutter={{
                                xs: 8,
                                sm: 16,
                                md: 24,
                                lg: 32,
                            }}
                        >
                            <Col span={6}>

                                <ProForm.Group size={24}>
                                    <Col span={24}>
                                        <Image
                                            width='100%'
                                            height={200}
                                            src={superUserProfileImageUrl}
                                            fallback={DEFAULT_USER_PROFILE_IMAGE_URL}
                                        />
                                    </Col>
                                    <Col span={24} style={{'text-align': 'center'}}>
                                        <Button
                                            type="primary"
                                            icon={<UploadOutlined/>}
                                            // loading={loadings[1]}
                                            style={{'margin': '10px 0px 0px 0px'}}
                                            onClick={
                                                (event) => {
                                                    // wp media call
                                                    console.log('ldugl - profile-image-uploader');
                                                    let file_frame; // variable for the wp.media file_frame
                                                    // if the file_frame has already been created, just reuse it
                                                    if (file_frame) {
                                                        console.log('ldugl - profile-image-logo-uploader - case 01');
                                                        file_frame.open();
                                                        return;
                                                    } else {
                                                        console.log('ldugl - profile-image-logo-uploader - case 02');
                                                    }
                                                    file_frame = wp.media.frames.file_frame = wp.media({
                                                        // title: $( this ).data( 'uploader_title' ),
                                                        title: 'The Super User Profile Image Uploader',
                                                        button: {
                                                            // text: $( this ).data( 'uploader_button_text' ),
                                                            text: 'Upload Super User Profile Image',
                                                        },
                                                        multiple: false // set this to true for multiple file selection
                                                    });
                                                    file_frame.on('select', function () {
                                                        console.log('image is selected');
                                                        let attachment = file_frame.state().get('selection').first().toJSON();
                                                        console.log('attachment');
                                                        console.log(attachment);
                                                        setSuperUserProfileImageUrl(attachment?.url);
                                                        console.log('setSuperUserProfileImageUrl - case 02');
                                                        console.log(setSuperUserProfileImageUrl);
                                                    });
                                                    file_frame.on('open', function () {
                                                        // Do something
                                                        console.log('file_frame is opened');
                                                        // $('.ldugl-group-logo-uploader-wraper-overlay').removeClass('hidden');
                                                    });
                                                    file_frame.on('close', function () {
                                                        // Do something
                                                        console.log('file_frame is closed');
                                                        // $('.ldugl-group-logo-uploader-wraper-overlay').addClass('hidden');
                                                    });
                                                    file_frame.open();
                                                }}
                                        >
                                            Change Picture!
                                        </Button>
                                        <ProFormText
                                            name={['bio_details', 'super_user_profile_image']}
                                            label="Super User Profile Image URL"
                                            // tooltip="The legal name of the super user"
                                            placeholder="please enter your super user legal name"
                                            hidden={true}
                                        />
                                    </Col>
                                </ProForm.Group>
                            </Col>
                            <Col span={18}>
                                <ProFormSelect
                                    name={"user_organization_id"}
                                    label="Organisations"
                                    showSearch
                                    options={allEchOrganizations}
                                    debounceTime={300}
                                    placeholder="Please Select Organisation"
                                    tooltip="Please Select User Associated Organisation"
                                    rules={[{required: true}]}
                                    colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
                                />
                                <ProForm.Group size={24}>
                                    <ProFormText
                                        name={['bio_details', 'first_name']}
                                        label="First Name"
                                        // tooltip="The legal name"
                                        placeholder="Type First Name"
                                        // rules={[{ required: true }]}
                                        fieldProps={{
                                            prefix: <UserOutlined/>,
                                            // size: 'large',

                                            onChange: (e) => {
                                                console.log('e.target.value');
                                                console.log(e.target.value);
                                            }
                                        }}
                                        colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                                    />
                                    <ProFormText
                                        name={['bio_details', 'middle_name']}
                                        label="Middle Name"
                                        // tooltip="The legal name"
                                        placeholder="Type Middle Name"
                                        // rules={[{ required: true }]}
                                        fieldProps={{
                                            prefix: <UserOutlined/>,
                                            // size: 'large',

                                            onChange: (e) => {
                                                console.log('e.target.value');
                                                console.log(e.target.value);
                                            }
                                        }}
                                        colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                                    />
                                    <ProFormText
                                        name={['bio_details', 'last_name']}
                                        label="Last Name"
                                        // tooltip="The legal name"
                                        placeholder="Type Last Name"
                                        // rules={[{ required: true }]}
                                        fieldProps={{
                                            prefix: <UserOutlined/>,
                                            // size: 'large',

                                            onChange: (e) => {
                                                console.log('e.target.value');
                                                console.log(e.target.value);
                                            }
                                        }}
                                        colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                                    />
                                    {/*<ProFormText*/}
                                    {/*    name={['bio_details', 'nick_name']}*/}
                                    {/*    label="Nick Name"*/}
                                    {/*    tooltip="The legal name"*/}
                                    {/*    placeholder="please enter your legal name"*/}
                                    {/*    // rules={[{ required: true }]}*/}
                                    {/*    fieldProps={{*/}
                                    {/*        prefix: <UserOutlined/>,*/}
                                    {/*        // size: 'large',*/}

                                    {/*        onChange: (e) => {*/}
                                    {/*            console.log('e.target.value');*/}
                                    {/*            console.log(e.target.value);*/}
                                    {/*        }*/}
                                    {/*    }}*/}
                                    {/*    colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}*/}
                                    {/*/>*/}
                                </ProForm.Group>
                                <ProForm.Group size={24}>
                                    {/*<ProFormRadio.Group*/}
                                    {/*    name={['bio_details', 'gender']}*/}
                                    {/*    label="Gender"*/}
                                    {/*    radioType="button"*/}
                                    {/*    options={[*/}
                                    {/*        {*/}
                                    {/*            label: 'Male',*/}
                                    {/*            value: 'male',*/}
                                    {/*        },*/}
                                    {/*        {*/}
                                    {/*            label: 'Female',*/}
                                    {/*            value: 'female',*/}
                                    {/*        },*/}
                                    {/*        {*/}
                                    {/*            label: 'Others',*/}
                                    {/*            value: 'others',*/}
                                    {/*        },*/}
                                    {/*    ]}*/}
                                    {/*    colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}*/}
                                    {/*/>*/}

                                    <ProFormDatePicker
                                        label="Date of Birth"
                                        name={['bio_details', 'date_of_birth']}
                                        // placeholder="5453-763876-7686"
                                        // maxLength={20}
                                        // min={1}
                                        // max={10}
                                        // fieldProps={{ precision: 0 }}
                                        colProps={{xs: 24, sm: 24, md: 6, lg: 6, xl: 6}}
                                    />
                                    <ProFormSegmented
                                        label="Account Status"
                                        name={['bio_details', 'account_status']}
                                        request={async () => [
                                            {label: 'Pending', value: 'pending'},
                                            {label: 'Enabled', value: 'enabled'},
                                            {label: 'Disabled', value: 'disabled'},
                                        ]}
                                        // fieldProps={{ precision: 0 }}
                                        colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                                    />
                                </ProForm.Group>
                                <ProForm.Group size={24}>
                                    <ProFormTextArea
                                        name={['bio_details', 'biographical_info']}
                                        label="Biographical Info"
                                        placeholder="Share a little biographical information to fill out your profile. This may be shown publicly. "
                                        colProps={{xs: 24, sm: 24, md: 24, lg: 24, xl: 24}}
                                    />
                                </ProForm.Group>
                            </Col>
                        </Row>
                    </ProCard>

                    <ProCard
                        title="Contact Details"
                        bordered
                        headerBordered
                        collapsible
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
                                name={['contact_details', 'phone_number']}
                                placeholder="+2974837487 etc."
                                // min={1}
                                // max={10}
                                fieldProps={{precision: 0}}
                                colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                            />
                            <ProFormText
                                label="Email"
                                name={['contact_details', 'email']}
                                // tooltip="The legal name of the organization"
                                placeholder="info@example.com etc."
                                rules={[
                                    {required: true},
                                    {
                                        validator(_, value) {
                                            console.log('test-rule');
                                            console.log(_);

                                            console.log('test-value');
                                            console.log(value);

                                            return request('/wp/v2/user-validation/email', {
                                                method: 'POST',
                                                data: {
                                                    user_email: value,
                                                }
                                            }).then((api_response) => {
                                                console.log('api_response');
                                                console.log(api_response);

                                                if (api_response === true) {
                                                    return Promise.resolve();
                                                } else {
                                                    return Promise.reject(new Error('The email is already exist'));
                                                }
                                            });
                                        },
                                    },
                                ]}
                                colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                            />
                            {/*<ProFormText*/}
                            {/*    label="Website"*/}
                            {/*    name={['contact_details', 'website']}*/}
                            {/*    tooltip="The legal name of the organization"*/}
                            {/*    placeholder="http://example.com"*/}
                            {/*    // rules={[{ required: true }]}*/}
                            {/*    colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}*/}
                            {/*/>*/}
                        </ProForm.Group>
                    </ProCard>

                    <ProCard
                        title="Mailing Details"
                        bordered
                        headerBordered
                        collapsible
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
                                name={['mailing_details', 'Street_address_line_1']}
                                label="Street address line 1"
                                // tooltip="The legal name"
                                placeholder="Please Enter Street Address"
                                // rules={[{ required: true }]}
                                colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                            />
                            <ProFormText
                                name={['mailing_details', 'Street_address_line_2']}
                                label="Street address line 2"
                                // tooltip="The legal name"
                                placeholder="Please Enter Street Address"
                                // rules={[{ required: true }]}
                                colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                            />
                            <ProFormSelect
                                name={['mailing_details', 'country_region']}
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
                                placeholder="Please Select Country/Region"
                                colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                                // rules={[{ required: true, message: 'Please select your organization type!' }]}
                            />
                            <ProFormText
                                name={['mailing_details', 'state_county']}
                                label="State / County"
                                // tooltip="The legal name"
                                placeholder="Please Enter State / County"
                                // rules={[{ required: true }]}
                                colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                            />
                            <ProFormText
                                name={['mailing_details', 'city']}
                                label="City"
                                // tooltip="The legal name"
                                placeholder="Please Enter City"
                                // rules={[{ required: true }]}
                                colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                            />
                            <ProFormText
                                name={['mailing_details', 'postcode_zip']}
                                label="Post Code / ZIP"
                                // tooltip="The legal name"
                                placeholder="Please Enter Post Code / ZIP"
                                // rules={[{ required: true }]}
                                colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                            />
                        </ProForm.Group>
                    </ProCard>

                    <ProCard
                        title="Account Details"
                        bordered
                        headerBordered
                        collapsible
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
                                name={['account_details', 'username']}
                                label="Username"
                                // tooltip="The legal name"
                                placeholder="Please type a username"
                                rules={[
                                    {required: true},
                                    {
                                        validator(_, value) {
                                            console.log('test-rule');
                                            console.log(_);

                                            console.log('test-value');
                                            console.log(value);

                                            return request('/wp/v2/user-validation/username', {
                                                method: 'POST',
                                                data: {
                                                    user_name: value,
                                                }
                                            }).then((api_response) => {
                                                console.log('api_response');
                                                console.log(api_response);

                                                if (api_response === true) {
                                                    return Promise.resolve();
                                                } else {
                                                    return Promise.reject(new Error('The username is already exist'));
                                                }
                                            });
                                        },
                                    },
                                ]}
                                colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                            />
                            <ProFormText.Password
                                name={['account_details', 'password']}
                                label="Password"
                                // tooltip="The legal name"
                                placeholder="Please type a password"
                                rules={[{required: true}]}
                                colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                            />
                        </ProForm.Group>
                    </ProCard>

                </ProForm>
            </PageContainer>
        );
    }
};

export default CreateSuperUser;
