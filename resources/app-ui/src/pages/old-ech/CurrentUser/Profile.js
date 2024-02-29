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
    ProFormTextArea, ProFormSwitch, ModalForm,
} from '@ant-design/pro-components';
import {Row, Col, Space, message, Button, Form, DatePicker, Image} from 'antd';
import {HistoryOutlined, UploadOutlined, UserOutlined} from '@ant-design/icons';

import {createUser, getUser, getUsers, putUser} from "@/services/wp-api/User";
import {request} from '@umijs/max';
import {date, datetime} from "mockjs/src/mock/random/date";
import moment from 'moment';
import {FormattedMessage, useModel, useParams} from "@@/exports";
import React, {useEffect, useState} from "react";
import {getEchPolicy} from "@/services/wp-api/EchPolicy";
import ProfileSkeleton from "@/components/Skeleton/ProfileSkeleton";
import UpdateStaffMemberSkeleton from "@/components/Skeleton/UpdateStaffMemberSkeleton";


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
        customer_profile_image: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        nick_name: '',
        gender: '',
        date_of_birth: Date.now(),
        biographical_info: '',
        account_status: '',
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
        username: '',
        password: '',
    },
};

/**
 * Form Submission handler and API Request Performer
 */
const onFinishHandlerForm = async (userId, values) => {
    console.log('onFinishHandlerForm');
    console.log('Received values of form: ', values);

    /**
     * API Request
     */
    try {

        const request_data = {
            first_name: values?.bio_details?.first_name,
            last_name: values?.bio_details?.last_name,
            name: values?.bio_details?.first_name + ' ' + values?.bio_details?.last_name,
            nickname: values?.bio_details?.nick_name,
            description: values?.bio_details?.biographical_info,
            email: values?.contact_details?.email,
            url: values?.contact_details?.website,
            // username: values?.account_details?.username,
            // password: values?.account_details?.password,
            meta: {
                ech_user_profile_image_url: values?.bio_details?.customer_profile_image,
                ech_middle_name: values?.bio_details?.middle_name,
                ech_gender: values?.bio_details?.gender,
                ech_dob: moment(new Date(values?.bio_details?.date_of_birth)).format('YYYY-MM-DD'),
                ech_phone_no: values?.contact_details?.phone_number,
                ech_street_address_line_1: values?.mailing_details?.Street_address_line_1,
                ech_street_address_line_2: values?.mailing_details?.Street_address_line_2,
                ech_country_region: values?.mailing_details?.country_region,
                ech_state_county: values?.mailing_details?.state_county,
                ech_city: values?.mailing_details?.city,
                ech_postcode_zip: values?.mailing_details?.postcode_zip,
                // ech_user_password: values?.account_details?.password,
                ech_account_status: values?.bio_details?.account_status,
                ech_organization_id: values?.organization_id,
            },
        };

        putUser(
            {id: userId},
            {},
            {
                data: request_data,
            }
        ).then((api_response) => {
            console.log('api_response');
            console.log(api_response);
            /**
             * Staff Member Created then show message and redirect to listing screen
             */
            if (api_response?.id > 0) {
                message.success('Updated successfully');
                // history.push('/staff-members/list');
            }
        });

    } catch (api_response) {
        console.log('api_response - error');
        console.log(api_response);
        // history.push(loginPath);
    }

    return true;
};

const UpdateProfile = () => {

    /**
     * States of Component
     */
    const {initialState, loading, refresh, setInitialState} = useModel('@@initialState');
    const params = useParams();
    const [userId, setUserId] = useState(0);
    const [form] = Form.useForm();
    const [superUserProfileImageUrl, setSuperUserProfileImageUrl] = useState('');
    const [superUserData, setSuperUserData] = useState({});
    const [updateProfileRequestEditButton, setUpdateProfileRequestEditButton] = useState(true);
    const [updateProfileSkeleton, setUpdateProfileSkeleton] = useState(true);
    const [updateProfilePasswordResetModelOpen, setUpdateProfilePasswordResetModelOpen] = useState(false);

    /**
     * Update the userId State individually whenever the related State/Params is updated/effected
     */
    useEffect(() => {
        setUserId(initialState?.currentUser?.id);
    }, [initialState]); //empty dependency array so it only runs once at render


    /**
     * Update the Profile Image input field individually whenever the related State is updated/effected
     */
    useEffect(() => {
        form.setFieldValue(['bio_details', 'customer_profile_image'], superUserProfileImageUrl);
        setUpdateProfileSkeleton(false);

    }, [superUserProfileImageUrl]);


    /**
     * Update/prefill the form fields whenever the related staffMemberData State is updated/effected
     */
    useEffect(() => {
        form.setFieldValue(['bio_details', 'customer_profile_image'], initialState?.currentUser?.meta?.ech_user_profile_image_url);
        form.setFieldValue(['bio_details', 'first_name'], initialState?.currentUser?.first_name);
        form.setFieldValue(['bio_details', 'middle_name'], initialState?.currentUser?.meta?.ech_middle_name);
        form.setFieldValue(['bio_details', 'last_name'], initialState?.currentUser?.last_name);
        form.setFieldValue(['bio_details', 'nick_name'], initialState?.currentUser?.nickname);
        form.setFieldValue(['bio_details', 'gender'], initialState?.currentUser?.meta?.ech_gender);
        form.setFieldValue(['bio_details', 'date_of_birth'], '' !== initialState?.currentUser?.meta?.ech_dob ? initialState?.currentUser?.meta?.ech_dob : Date());
        form.setFieldValue(['bio_details', 'biographical_info'], initialState?.currentUser?.description);
        form.setFieldValue(['bio_details', 'account_status'], initialState?.currentUser?.meta?.ech_account_status);
        form.setFieldValue(['contact_details', 'phone_number'], initialState?.currentUser?.meta?.ech_phone_no);
        form.setFieldValue(['contact_details', 'email'], initialState?.currentUser?.email);
        form.setFieldValue(['contact_details', 'website'], initialState?.currentUser?.url);
        form.setFieldValue(['mailing_details', 'Street_address_line_1'], initialState?.currentUser?.meta?.ech_street_address_line_1);
        form.setFieldValue(['mailing_details', 'Street_address_line_2'], initialState?.currentUser?.meta?.ech_street_address_line_2);
        form.setFieldValue(['mailing_details', 'country_region'], initialState?.currentUser?.meta?.ech_country_region);
        form.setFieldValue(['mailing_details', 'state_county'], initialState?.currentUser?.meta?.ech_state_county);
        form.setFieldValue(['mailing_details', 'city'], initialState?.currentUser?.meta?.ech_city);
        form.setFieldValue(['mailing_details', 'postcode_zip'], initialState?.currentUser?.meta?.ech_postcode_zip);
        form.setFieldValue(['account_details', 'username'], initialState?.currentUser?.username);
        form.setFieldValue(['account_details', 'password'], initialState?.currentUser?.meta?.ech_user_password);

        setSuperUserProfileImageUrl(initialState?.currentUser?.meta?.ech_user_profile_image_url);

    }, [initialState, form]);


    /**
     * The Component Output
     */

    if (updateProfileSkeleton) {

        return (
            <PageContainer
                header={
                    {title: ""}
                }
            >
                <UpdateStaffMemberSkeleton
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
                        console.log('profile - form - values');
                        console.log(values);
                        /**
                         * Add Organization ID into the form Values
                         */
                        values.organization_id = initialState?.currentUser?.meta?.ech_organization_id;
                        await waitTime(1000);
                        await onFinishHandlerForm(userId, values);
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
                        extra={
                            <ProFormGroup>
                                <ProFormSwitch
                                    name="Request Edit"
                                    noStyle
                                    checkedChildren={'Editing On'}
                                    unCheckedChildren={'Editing Off'}
                                    fieldProps={{
                                        // prefix: <UserOutlined/>,
                                        // size: 'large',

                                        onChange: (checked, event) => {
                                            console.log(' Request Edit - checked');
                                            console.log(checked);

                                            if (checked === true) {
                                                setUpdateProfileRequestEditButton(false);
                                            } else {
                                                setUpdateProfileRequestEditButton(true);
                                            }

                                        }
                                    }}
                                    // size={'large'}
                                />
                            </ProFormGroup>
                        }
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
                                            src={('' !== superUserProfileImageUrl ? superUserProfileImageUrl : DEFAULT_USER_PROFILE_IMAGE_URL)}
                                        />
                                    </Col>
                                    <Col span={24} style={{'textAlign': 'center'}}>
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
                                                            text: 'Change Super User Profile Image',
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
                                            disabled={updateProfileRequestEditButton}

                                        >
                                            Change Picture!
                                        </Button>

                                        <ProFormText
                                            name={['bio_details', 'customer_profile_image']}
                                            label="Super User Profile Image URL"
                                            // tooltip="The legal name of the super user"
                                            placeholder="please enter your super user legal name"
                                            hidden={true}
                                        />
                                    </Col>
                                </ProForm.Group>
                            </Col>
                            <Col span={18}>

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
                                        disabled={updateProfileRequestEditButton}
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
                                        disabled={updateProfileRequestEditButton}
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
                                        disabled={updateProfileRequestEditButton}
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
                                    {/*    disabled={updateProfileRequestEditButton}*/}
                                    {/*    colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}*/}
                                    {/*/>*/}
                                </ProForm.Group>
                                <ProForm.Group size={24}>
                                    <ProFormRadio.Group
                                        name={['bio_details', 'gender']}
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
                                        disabled={updateProfileRequestEditButton}
                                        colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                                    />

                                    <ProFormDatePicker
                                        label="Date of Birth"
                                        name={['bio_details', 'date_of_birth']}
                                        // placeholder="5453-763876-7686"
                                        // maxLength={20}
                                        // min={1}
                                        // max={10}
                                        // fieldProps={{ precision: 0 }}
                                        disabled={updateProfileRequestEditButton}
                                        colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
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
                                        disabled={updateProfileRequestEditButton}
                                        colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                                    />
                                </ProForm.Group>
                                <ProForm.Group size={24}>
                                    <ProFormTextArea
                                        name={['bio_details', 'biographical_info']}
                                        label="Biographical Info"
                                        placeholder="Share a little biographical information to fill out your profile. This may be shown publicly. "
                                        disabled={updateProfileRequestEditButton}
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
                                disabled={updateProfileRequestEditButton}
                                colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                            />
                            <ProFormText
                                label="Email"
                                name={['contact_details', 'email']}
                                // tooltip="The legal name of the organization"
                                placeholder="info@example.com etc."
                                rules={[{required: true}]}
                                disabled={true}
                                colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                            />
                            <ProFormText
                                label="Website"
                                name={['contact_details', 'website']}
                                // tooltip="The legal name of the organization"
                                placeholder="http://example.com"
                                // rules={[{ required: true }]}
                                disabled={updateProfileRequestEditButton}
                                colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                            />
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
                                disabled={updateProfileRequestEditButton}
                                colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                            />
                            <ProFormText
                                name={['mailing_details', 'Street_address_line_2']}
                                label="Street address line 2"
                                // tooltip="The legal name"
                                placeholder="Please Enter Street Address"
                                // rules={[{ required: true }]}
                                disabled={updateProfileRequestEditButton}
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
                                disabled={updateProfileRequestEditButton}
                                colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                                // rules={[{ required: true, message: 'Please select your organization type!' }]}
                            />
                            <ProFormText
                                name={['mailing_details', 'state_county']}
                                label="State / County"
                                // tooltip="The legal name"
                                placeholder="Please Enter State / County"
                                // rules={[{ required: true }]}
                                disabled={updateProfileRequestEditButton}
                                colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                            />
                            <ProFormText
                                name={['mailing_details', 'city']}
                                label="City"
                                // tooltip="The legal name"
                                placeholder="Please Enter City"
                                // rules={[{ required: true }]}
                                disabled={updateProfileRequestEditButton}
                                colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                            />
                            <ProFormText
                                name={['mailing_details', 'postcode_zip']}
                                label="Post Code / ZIP"
                                // tooltip="The legal name"
                                placeholder="Please Enter Post Code / ZIP"
                                // rules={[{ required: true }]}
                                disabled={updateProfileRequestEditButton}
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
                                rules={[{required: true}]}
                                disabled={true}
                                colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                            />
                            <ProFormText.Password
                                name={['account_details', 'password']}
                                label="Password"
                                // tooltip="The legal name"
                                placeholder="Please type a password"
                                rules={[{required: true}]}
                                disabled={true}
                                colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                            />

                            <Form.Item
                                label="Reset Password"
                            >
                                <Button
                                    key="reset-password"
                                    onClick={() => {
                                        // handleModalOpen(true);
                                        setUpdateProfilePasswordResetModelOpen(true);
                                    }}
                                    style={{marginBlockEnd: 15}}
                                    disabled={updateProfileRequestEditButton}
                                    colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                                >
                                    <HistoryOutlined/> <FormattedMessage id="pages.organizationTable.new" defaultMessage="Click here to Reset Password"/>
                                </Button>
                            </Form.Item>

                        </ProForm.Group>
                    </ProCard>

                </ProForm>


                <ModalForm
                    title={'Reset your Password'}
                    open={updateProfilePasswordResetModelOpen}
                    onOpenChange={setUpdateProfilePasswordResetModelOpen}
                    modalProps={{
                        destroyOnClose: true,
                        onCancel: () => console.log('run'),
                        afterClose: () => {
                            /**
                             * Reset the Policy Selected Users when the modal is close to make sure the modal new open will be fresh
                             */
                            // setTargetKeys([]);
                        },
                        getContainer: () => {
                            document.body
                        },
                        width: 416,
                        // width: 1500,
                        // okText: 'Save',
                    }}
                    submitter={{
                        // Configure the properties of the button
                        searchConfig: {
                            // resetText: 'Reset',
                            submitText: 'Reset Password',
                        },
                        // resetButtonProps: {
                        //     style: {
                        //         // Hide the reset button
                        //         display: 'none',
                        //     },
                        // },
                        // submitButtonProps: {
                        //     style: {
                        //         // Hide the submit button
                        //         display: 'none',
                        //     },
                        // },
                    }}
                    preserve={false}
                    submitTimeout={2000}
                    onFinish={async (values) => {
                        await waitTime(2000);

                        /**
                         * Call the APIs to update the selected policy's users association
                         */


                        request('/wp/v2/user-reset-password', {
                            method: 'POST',
                            data: {
                                user_id: userId,
                                new_password: values?.new_password,
                            }
                        }).then((api_response) => {
                            console.log('api_response');
                            console.log(api_response);

                            if (api_response.success) {
                                message.success('Password Reset Successfully');
                            }

                        });

                        /**
                         * The following return is necessary to auto close the modal
                         */
                        return true;
                    }}
                >

                    <ProFormText.Password
                        name={'new_password'}
                        label="New Password"
                        // tooltip="The legal name"
                        placeholder="Please type a new password"
                        rules={[{required: true}]}
                        colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                    />

                </ModalForm>

            </PageContainer>
        );
    }
};

export default UpdateProfile;
