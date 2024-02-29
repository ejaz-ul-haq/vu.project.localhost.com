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
    ProFormGroup, PageHeader, ProFormRadio,
} from '@ant-design/pro-components';
import {Steps, Row, Col, Skeleton, Space, message, Button, Form, Image, Tour, FloatButton} from 'antd';
import {
    UserOutlined,
    UploadOutlined,
    CustomerServiceOutlined,
    CommentOutlined,
    QuestionCircleOutlined,
    WhatsAppOutlined,
    SkypeOutlined
} from '@ant-design/icons';

import {
    createEchOrganization,
    getEchOrganization,
    getEchOrganizations,
    putEchOrganization
} from '@/services/wp-api/EchOrganization';
import {getEchPolicies} from "@/services/wp-api/EchPolicy";
import {useModel, useParams} from "@@/exports";
import {getEchCustomerPolicies, getEchCustomerPolicy} from "@/services/wp-api/EchCustomerPolicy";
import {createUser, getUser, getUsers} from "@/services/wp-api/User";
import React, {useState, useEffect, useRef} from "react";
// import moment from "moment/moment";
import {request} from '@umijs/max';
// import {errorConfig} from '../../requestErrorConfig';
import MultiStepsFormSkeleton from "@/components/Skeleton/MultiStepsFormSkeleton";

const waitTime = (time = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};


const onFinishHandlerStepsForm = async (organizationId, values) => {
    console.log('onFinishHandlerStepsForm');
    console.log('Received values of form: ', values);

    const request_data = {
        title: values?.organization?.step_01?.organization_details?.name,
        status: 'publish',
        meta: {
            ech_organization_trading_name: values?.organization?.step_01?.organization_details?.trading_name,
            ech_organization_type: values?.organization?.step_01?.organization_details?.type,
            ech_organization_registration_no: values?.organization?.step_01?.organization_details?.registration_number,
            ech_organization_phone: values?.organization?.step_01?.contact_details?.phone_number,
            ech_organization_email: values?.organization?.step_01?.contact_details?.email,
            ech_organization_website: values?.organization?.step_01?.contact_details?.website,
            ech_organization_contact_person: values?.organization?.step_01?.contact_details?.person,
            ech_organization_logo_url: values?.organization?.step_01?.organization_details?.organization_logo,

            ech_organization_door_no: values?.organization?.step_01?.address_details?.door_no,
            ech_organization_building_name: values?.organization?.step_01?.address_details?.building_name,
            ech_organization_street_line_01: values?.organization?.step_01?.address_details?.street_line_01,
            ech_organization_street_line_02: values?.organization?.step_01?.address_details?.street_line_02,
            ech_organization_city_town: values?.organization?.step_01?.address_details?.city_town,
            ech_organization_county: values?.organization?.step_01?.address_details?.county,
            ech_organization_post_code: values?.organization?.step_01?.address_details?.post_code,

            ech_organization_nominated_individual_first_name: values?.organization?.step_02?.nominated_individual_details?.first_name,
            ech_organization_nominated_individual_middle_name: values?.organization?.step_02?.nominated_individual_details?.middle_name,
            ech_organization_nominated_individual_last_name: values?.organization?.step_02?.nominated_individual_details?.last_name,
            ech_organization_nominated_individual_email: values?.organization?.step_02?.nominated_individual_details?.email,
            ech_organization_nominated_individual_phone: values?.organization?.step_02?.nominated_individual_details?.phone,

            ech_organization_registered_manager_first_name: values?.organization?.step_02?.registered_manager_details?.first_name,
            ech_organization_registered_manager_middle_name: values?.organization?.step_02?.registered_manager_details?.middle_name,
            ech_organization_registered_manager_last_name: values?.organization?.step_02?.registered_manager_details?.last_name,
            ech_organization_registered_manager_email: values?.organization?.step_02?.registered_manager_details?.email,
            ech_organization_registered_manager_phone: values?.organization?.step_02?.registered_manager_details?.phone,

            ech_organization_data_protection_officer_first_name: values?.organization?.step_02?.data_protection_officer_details?.first_name,
            ech_organization_data_protection_officer_middle_name: values?.organization?.step_02?.data_protection_officer_details?.middle_name,
            ech_organization_data_protection_officer_last_name: values?.organization?.step_02?.data_protection_officer_details?.last_name,
            ech_organization_data_protection_officer_email: values?.organization?.step_02?.data_protection_officer_details?.email,
            ech_organization_data_protection_officer_phone: values?.organization?.step_02?.data_protection_officer_details?.phone,
            ech_organization_data_protection_officer_regulated_activity: values?.organization?.step_02?.data_protection_officer_details?.regulated_activity,

            ech_organization_local_authority_authority_name: values?.organization?.step_02?.local_authority_details?.authority_name,
            ech_organization_local_authority_safeguarding_officer_name: values?.organization?.step_02?.local_authority_details?.safeguarding_officer_name,
            ech_organization_local_authority_role_department: values?.organization?.step_02?.local_authority_details?.role_department,
            ech_organization_local_authority_information_link: values?.organization?.step_02?.local_authority_details?.information_link,
            ech_organization_local_authority_phone_number: values?.organization?.step_02?.local_authority_details?.phone_number,

        },
    };

    // request('/wp/v2/setup-wizard', {
    //   method: 'POST',
    //   data: request_data,
    // }).then((api_response) => {
    //   console.log('api_response');
    //   console.log(api_response);
    // }).catch(function(error) {
    //   console.log(error);
    // });

    const msg = putEchOrganization(
        // {id: values.organization_id },
        {id: organizationId},
        {},
        {
            data: request_data
        }
    );


};


const Organization = () => {

    const {initialState, loading, refresh, setInitialState} = useModel('@@initialState');

    console.log('initialState');
    console.log(initialState);


    const [organizationLogoUrl, setOrganizationLogoUrl] = useState('data:image/png;base64,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');
    const [organizationSelectedType, setOrganizationSelectedType] = useState('');
    const [organizationRegulatedActivity, setOrganizationRegulatedActivity] = useState('');
    const [multiStepsFormSkeletonStatus, setMultiStepsFormSkeletonStatus] = useState(true);

    const [organizationData, setOrganizationData] = useState({});

    const params = useParams();
    console.log('params');
    console.log(params);

    const [organizationId, setOrganizationId] = useState(0);
    console.log('organizationId');
    console.log(organizationId);

    useEffect(() => {
        setOrganizationId(params?.id);
    }, [params]); //empty dependency array so it only runs once at render


    useEffect(() => {
        form.setFieldValue(['organization', 'step_01', 'organization_details', 'organization_logo'], organizationLogoUrl);
        console.log('organizationLogoUrl - update case 01');
        console.log(organizationLogoUrl);

    }, [organizationLogoUrl]);

    /**
     * Dynamically set the form field value
     *
     * https://github.com/ant-design/ant-design/issues/22372#issuecomment-1666849022
     * https://github.com/ant-design/ant-design/issues/28405#issuecomment-1303011396
     * https://ant.design/components/form#components-form-demo-usewatch:~:text=You%20cannot%20set%20value%20for%20each%20form%20control%20via%20value%20or%20defaultValue%20prop%2C
     */
    /**
     * https://ant.design/components/form#formuseform
     */
    const [form] = Form.useForm();

    // useEffect(() => {
    //     form.setFieldValue(['organization', 'step_01', 'address_details', 'street_line_01'], initialState?.currentUser?.meta?.ech_street_address_line_1);
    //     form.setFieldValue(['organization', 'step_01', 'address_details', 'street_line_02'], initialState?.currentUser?.meta?.ech_street_address_line_2);
    //     form.setFieldValue(['organization', 'step_01', 'address_details', 'city_town'], initialState?.currentUser?.meta?.ech_city);
    //     form.setFieldValue(['organization', 'step_01', 'address_details', 'county'], initialState?.currentUser?.meta?.ech_state_county);
    //     form.setFieldValue(['organization', 'step_01', 'address_details', 'post_code'], initialState?.currentUser?.meta?.ech_postcode_zip);
    // }, [initialState, form]);


    useEffect(() => {

        if (organizationId === 0) {
            return;
        }

        /**
         * Start - Organization Data Request
         */
        getEchOrganization(
            {
                context: 'edit',
                id: organizationId,
            },
            {getResponse: true}
        ).then((api_response) => {

            console.log('api_response');
            console.log(api_response);

            const organization_data = {
                ...initialValues,
                organization: {
                    ...initialValues.organization,
                    step_01: {
                        ...initialValues.organization.step_01,
                        organization_details: {
                            ...initialValues.organization.step_01.organization_details,
                            organization_logo: api_response?.data?.meta.ech_organization_logo_url,
                            name: api_response?.data?.title.rendered,
                            trading_name: api_response?.data?.meta.ech_organization_trading_name,
                            type: api_response?.data?.meta.ech_organization_type,
                            registration_number: api_response?.data?.meta.ech_organization_registration_no,
                        },
                        contact_details: {
                            ...initialValues.organization.step_01.contact_details,
                            phone_number: api_response?.data?.meta.ech_organization_phone,
                            email: api_response?.data?.meta.ech_organization_email,
                            website: api_response?.data?.meta.ech_organization_website,
                            person: api_response?.data?.meta.ech_organization_contact_person,
                        },
                        address_details: {
                            ...initialValues.organization.step_01.address_details,
                            door_no: api_response?.data?.meta.ech_organization_door_no,
                            building_name: api_response?.data?.meta.ech_organization_building_name,
                            street_line_01: api_response?.data?.meta.ech_organization_street_line_01,
                            street_line_02: api_response?.data?.meta.ech_organization_street_line_02,
                            city_town: api_response?.data?.meta.ech_organization_city_town,
                            county: api_response?.data?.meta.ech_organization_county,
                            post_code: api_response?.data?.meta.ech_organization_post_code,
                        }
                    },
                    step_02: {
                        ...initialValues.organization.step_02,
                        nominated_individual_details: {
                            ...initialValues.organization.step_02.nominated_individual_details,
                            first_name: api_response?.data?.meta.ech_organization_nominated_individual_first_name,
                            middle_name: api_response?.data?.meta.ech_organization_nominated_individual_middle_name,
                            last_name: api_response?.data?.meta.ech_organization_nominated_individual_last_name,
                            email: api_response?.data?.meta.ech_organization_nominated_individual_email,
                            phone: api_response?.data?.meta.ech_organization_nominated_individual_phone,
                        },
                        registered_manager_details: {
                            ...initialValues.organization.step_02.registered_manager_details,
                            first_name: api_response?.data?.meta.ech_organization_registered_manager_first_name,
                            middle_name: api_response?.data?.meta.ech_organization_registered_manager_middle_name,
                            last_name: api_response?.data?.meta.ech_organization_registered_manager_last_name,
                            email: api_response?.data?.meta.ech_organization_registered_manager_email,
                            phone: api_response?.data?.meta.ech_organization_registered_manager_phone,
                        },
                        data_protection_officer_details: {
                            ...initialValues.organization.step_02.data_protection_officer_details,
                            first_name: api_response?.data?.meta.ech_organization_data_protection_officer_first_name,
                            middle_name: api_response?.data?.meta.ech_organization_data_protection_officer_middle_name,
                            last_name: api_response?.data?.meta.ech_organization_data_protection_officer_last_name,
                            email: api_response?.data?.meta.ech_organization_data_protection_officer_email,
                            phone: api_response?.data?.meta.ech_organization_data_protection_officer_phone,
                            regulated_activity: api_response?.data?.meta.ech_organization_data_protection_officer_regulated_activity,
                        },
                        local_authority_details: {
                            ...initialValues.organization.step_02.local_authority_details,
                            authority_name: api_response?.data?.meta.ech_organization_local_authority_authority_name,
                            safeguarding_officer_name: api_response?.data?.meta.ech_organization_local_authority_safeguarding_officer_name,
                            role_department: api_response?.data?.meta.ech_organization_local_authority_role_department,
                            information_link: api_response?.data?.meta.ech_organization_local_authority_information_link,
                            phone_number: api_response?.data?.meta.ech_organization_local_authority_phone_number,
                        },
                    },
                },
            };
            console.log('organization_data');
            console.log(organization_data);
            setOrganizationData(organization_data);

            setOrganizationLogoUrl(api_response?.data?.meta.ech_organization_logo_url);
            console.log('setOrganizationLogoUrl - case 01');
            console.log(setOrganizationLogoUrl);

            setOrganizationSelectedType(api_response?.data?.meta.ech_organization_type);
            console.log('OrganizationSelectedType - case 01');
            console.log(api_response?.data?.meta.ech_organization_type);

            setMultiStepsFormSkeletonStatus(false);

        });
        /**
         * End - Organization Data Request
         */


    }, [organizationId]);


    useEffect(() => {

        form.setFieldValue(['organization', 'step_01', 'organization_details', 'organization_logo'], organizationData?.organization?.step_01?.organization_details?.organization_logo);
        form.setFieldValue(['organization', 'step_01', 'organization_details', 'name'], organizationData?.organization?.step_01?.organization_details?.name);
        form.setFieldValue(['organization', 'step_01', 'organization_details', 'trading_name'], organizationData?.organization?.step_01?.organization_details?.trading_name);
        form.setFieldValue(['organization', 'step_01', 'organization_details', 'type'], organizationData?.organization?.step_01?.organization_details?.type);
        form.setFieldValue(['organization', 'step_01', 'organization_details', 'registration_number'], organizationData?.organization?.step_01?.organization_details?.registration_number);
        form.setFieldValue(['organization', 'step_01', 'contact_details', 'phone_number'], organizationData?.organization?.step_01?.contact_details?.phone_number);
        form.setFieldValue(['organization', 'step_01', 'contact_details', 'email'], organizationData?.organization?.step_01?.contact_details?.email);
        form.setFieldValue(['organization', 'step_01', 'contact_details', 'website'], organizationData?.organization?.step_01?.contact_details?.website);
        form.setFieldValue(['organization', 'step_01', 'contact_details', 'person'], organizationData?.organization?.step_01?.contact_details?.person);
        form.setFieldValue(['organization', 'step_01', 'address_details', 'door_no'], organizationData?.organization?.step_01?.address_details?.door_no);
        form.setFieldValue(['organization', 'step_01', 'address_details', 'building_name'], organizationData?.organization?.step_01?.address_details?.building_name);
        form.setFieldValue(['organization', 'step_01', 'address_details', 'street_line_01'], organizationData?.organization?.step_01?.address_details?.street_line_01);
        form.setFieldValue(['organization', 'step_01', 'address_details', 'street_line_02'], organizationData?.organization?.step_01?.address_details?.street_line_02);
        form.setFieldValue(['organization', 'step_01', 'address_details', 'city_town'], organizationData?.organization?.step_01?.address_details?.city_town);
        form.setFieldValue(['organization', 'step_01', 'address_details', 'county'], organizationData?.organization?.step_01?.address_details?.county);
        form.setFieldValue(['organization', 'step_01', 'address_details', 'post_code'], organizationData?.organization?.step_01?.address_details?.post_code);

        form.setFieldValue(['organization', 'step_02', 'nominated_individual_details', 'first_name'], organizationData?.organization?.step_02?.nominated_individual_details?.first_name);
        form.setFieldValue(['organization', 'step_02', 'nominated_individual_details', 'middle_name'], organizationData?.organization?.step_02?.nominated_individual_details?.middle_name);
        form.setFieldValue(['organization', 'step_02', 'nominated_individual_details', 'last_name'], organizationData?.organization?.step_02?.nominated_individual_details?.last_name);
        form.setFieldValue(['organization', 'step_02', 'nominated_individual_details', 'email'], organizationData?.organization?.step_02?.nominated_individual_details?.email);
        form.setFieldValue(['organization', 'step_02', 'nominated_individual_details', 'phone'], organizationData?.organization?.step_02?.nominated_individual_details?.phone);

        form.setFieldValue(['organization', 'step_02', 'registered_manager_details', 'first_name'], organizationData?.organization?.step_02?.registered_manager_details?.first_name);
        form.setFieldValue(['organization', 'step_02', 'registered_manager_details', 'middle_name'], organizationData?.organization?.step_02?.registered_manager_details?.middle_name);
        form.setFieldValue(['organization', 'step_02', 'registered_manager_details', 'last_name'], organizationData?.organization?.step_02?.registered_manager_details?.last_name);
        form.setFieldValue(['organization', 'step_02', 'registered_manager_details', 'email'], organizationData?.organization?.step_02?.registered_manager_details?.email);
        form.setFieldValue(['organization', 'step_02', 'registered_manager_details', 'phone'], organizationData?.organization?.step_02?.registered_manager_details?.phone);

        form.setFieldValue(['organization', 'step_02', 'data_protection_officer_details', 'first_name'], organizationData?.organization?.step_02?.data_protection_officer_details?.first_name);
        form.setFieldValue(['organization', 'step_02', 'data_protection_officer_details', 'middle_name'], organizationData?.organization?.step_02?.data_protection_officer_details?.middle_name);
        form.setFieldValue(['organization', 'step_02', 'data_protection_officer_details', 'last_name'], organizationData?.organization?.step_02?.data_protection_officer_details?.last_name);
        form.setFieldValue(['organization', 'step_02', 'data_protection_officer_details', 'email'], organizationData?.organization?.step_02?.data_protection_officer_details?.email);
        form.setFieldValue(['organization', 'step_02', 'data_protection_officer_details', 'phone'], organizationData?.organization?.step_02?.data_protection_officer_details?.phone);
        form.setFieldValue(['organization', 'step_02', 'data_protection_officer_details', 'regulated_activity'], organizationData?.organization?.step_02?.data_protection_officer_details?.regulated_activity);

        form.setFieldValue(['organization', 'step_02', 'local_authority_details', 'authority_name'], organizationData?.organization?.step_02?.local_authority_details?.authority_name);
        form.setFieldValue(['organization', 'step_02', 'local_authority_details', 'safeguarding_officer_name'], organizationData?.organization?.step_02?.local_authority_details?.safeguarding_officer_name);
        form.setFieldValue(['organization', 'step_02', 'local_authority_details', 'role_department'], organizationData?.organization?.step_02?.local_authority_details?.role_department);
        form.setFieldValue(['organization', 'step_02', 'local_authority_details', 'information_link'], organizationData?.organization?.step_02?.local_authority_details?.information_link);
        form.setFieldValue(['organization', 'step_02', 'local_authority_details', 'phone_number'], organizationData?.organization?.step_02?.local_authority_details?.phone_number);

    }, [organizationData, form]);


    const initialValues = {
        organization: {
            step_01: {
                organization_details: {
                    organization_logo: '',
                    name: '',
                    trading_name: '',
                    type: '',
                    registration_number: '',
                },
                contact_details: {
                    phone_number: '',
                    email: '',
                    website: '',
                    person: '',
                },
                address_details: {
                    door_no: '',
                    building_name: '',
                    street_line_01: '',
                    street_line_02: '',
                    city_town: '',
                    county: '',
                    post_code: '',
                },
            },
            step_02: {
                nominated_individual_details: {
                    first_name: '',
                    middle_name: '',
                    last_name: '',
                    email: '',
                    phone: '',
                },
                registered_manager_details: {
                    first_name: '',
                    middle_name: '',
                    last_name: '',
                    email: '',
                    phone: '',
                },
                data_protection_officer_details: {
                    first_name: '',
                    middle_name: '',
                    last_name: '',
                    email: '',
                    phone: '',
                    regulated_activity: '',
                },
                local_authority_details: {
                    authority_name: '',
                    safeguarding_officer_name: '',
                    role_department: '',
                    information_link: '',
                    phone_number: '',
                }
            },
        },
    };


    if (multiStepsFormSkeletonStatus) {

        return (
            <PageContainer
                header={
                    {title: ""}
                }
            >
                <MultiStepsFormSkeleton
                    active={true}
                />
            </PageContainer>
        );

    } else {

        return (
            <PageContainer
                header={
                    {title: ""}
                }
            >
                <StepsForm
                    onFinish={async (values) => {
                        console.log(values);
                        await waitTime(1000);
                        /**
                         * Set Organization ID in object to be used for API request
                         */
                        // values.organization_id = organizationId;
                        onFinishHandlerStepsForm(organizationId, values);
                        message.success('Submitted successfully');
                    }}
                    formProps={{
                        validateMessages: {
                            required: 'This is required',
                        },
                    }}
                    submitter={{
                        render: (_, dom) => {
                            return (<FooterToolbar>{dom}</FooterToolbar>)
                        },
                    }}
                    // You can use the stepsRender attribute to customize the step bar, refer to the following
                    stepsRender={(steps, dom) => {
                        console.log('steps');
                        console.log(steps);
                        // According to the business logic, keep 3 steps
                        if (organizationSelectedType === 'nursing-agency') {
                            return (
                                <Steps current={dom?.props?.children?.props?.current}>
                                    {[
                                        // { key: "business_details", title: "Business Details" },
                                    ].map((item) => (
                                        <Steps.Step key={item.key} title={item.title}/>
                                    ))}
                                    {/*{[*/}
                                    {/*  {key: "business_details", title: "Business Details"},*/}
                                    {/*  // { key: "cqc_details", title: "CQC Details" },*/}
                                    {/*  // { key: "policies", title: "Policies" },*/}
                                    {/*  // {key: "super_users", title: "Super Users"},*/}
                                    {/*  // {Key: "staff_members", title: "Staff members"}*/}
                                    {/*].map((item) => (*/}
                                    {/*  <Steps.Step key={item.key} title={item.title}/>*/}
                                    {/*))}*/}
                                </Steps>
                            );

                        }
                        // return 4 steps by default
                        return dom;
                    }}
                >

                    <StepsForm.StepForm
                        name="business_details"
                        title="Business Details"
                        onFinish={async () => {
                            await waitTime(2000);
                            return true;
                        }}
                        layout='vertical'
                        grid={true}
                        initialValues={initialValues}
                        form={form}
                    >
                        <ProCard
                            title="Organisation Details"
                            bordered
                            headerBordered
                            collapsible
                            size="default"
                            type="default"
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
                                <Col span={8}>

                                    <ProForm.Group size={24}>
                                        <Col span={24}>
                                            <Image
                                                width='100%'
                                                height={150}
                                                src={organizationLogoUrl}
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
                                                        console.log('ldugl - logo-uploader');

                                                        let file_frame; // variable for the wp.media file_frame
                                                        // if the file_frame has already been created, just reuse it
                                                        if (file_frame) {
                                                            console.log('ldugl - logo-uploader - case 01');
                                                            file_frame.open();
                                                            return;
                                                        } else {
                                                            console.log('ldugl - logo-uploader - case 02');
                                                        }

                                                        file_frame = wp.media.frames.file_frame = wp.media({
                                                            // title: $( this ).data( 'uploader_title' ),
                                                            title: 'The Organisation Logo Uploader',
                                                            button: {
                                                                // text: $( this ).data( 'uploader_button_text' ),
                                                                text: 'Change Organisation Logo',
                                                            },
                                                            multiple: false // set this to true for multiple file selection
                                                        });

                                                        file_frame.on('select', function () {
                                                            console.log('image is selected');

                                                            let attachment = file_frame.state().get('selection').first().toJSON();
                                                            console.log('attachment');
                                                            console.log(attachment);
                                                            setOrganizationLogoUrl(attachment?.url);
                                                            console.log('setOrganizationLogoUrl - case 02');
                                                            console.log(setOrganizationLogoUrl);
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
                                                Change Logo!
                                            </Button>

                                            <ProFormText
                                                name={['organization', 'step_01', 'organization_details', 'organization_logo']}
                                                label="Organization Logo URL"
                                                tooltip="The legal name of the organization"
                                                placeholder="please enter your organization legal name"
                                                hidden={true}
                                            />
                                        </Col>
                                    </ProForm.Group>
                                </Col>
                                <Col span={16}>
                                    <ProForm.Group size={24}>
                                        <ProFormText
                                            name={['organization', 'step_01', 'organization_details', 'name']}
                                            label="Name"
                                            tooltip="Name of the business as per Companies House register"
                                            placeholder="Please type company name"
                                            rules={[{required: true, message: 'Please provide the company name'}]}
                                            colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                                        />
                                        <ProFormText
                                            name={['organization', 'step_01', 'organization_details', 'trading_name']}
                                            label="Trading Name"
                                            tooltip="Trading under a different name? Please tell us the trading name. Retype the company name if it is the same as per Companies House."
                                            placeholder="Please type company trading name"
                                            colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                                        />
                                    </ProForm.Group>
                                    <ProForm.Group size={24}>
                                        <ProFormSelect
                                            name={['organization', 'step_01', 'organization_details', 'type']}
                                            label="Type"
                                            showSearch
                                            debounceTime={300}
                                            colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                                            tooltip="Company business type"
                                            placeholder='Select business type'
                                            options={[
                                                {
                                                    label: 'Nursing Agency',
                                                    value: 'nursing-agency',
                                                },
                                                {
                                                    label: 'Domiciliary Care',
                                                    value: 'domiciliary-care',
                                                },
                                                {
                                                    label: 'Nursing Agency and Domiciliary Care (Combined)',
                                                    value: 'nursing-agency-and-domiciliary-care-combined',
                                                },
                                                {
                                                    label: 'Supported Living',
                                                    value: 'supported-living',
                                                },
                                            ]}
                                            fieldProps={{
                                                onChange: (value) => {
                                                    console.log('Business Type Changed');
                                                    console.log('value');
                                                    console.log(value);

                                                    setOrganizationSelectedType(value);
                                                }
                                            }}
                                        />
                                        <ProFormText
                                            label="Registration No"
                                            name={['organization', 'step_01', 'organization_details', 'registration_number']}
                                            tooltip="Company registeraion number"
                                            placeholder="5453-763876-7686"
                                            colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
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
                                    name={['organization', 'step_01', 'contact_details', 'phone_number']}
                                    tooltip="Company phone number"
                                    placeholder="+2974837487 etc."
                                    // min={1}
                                    // max={10}
                                    fieldProps={{precision: 0}}
                                    colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                                />
                                <ProFormText
                                    label="Email"
                                    name={['organization', 'step_01', 'contact_details', 'email']}
                                    tooltip="Company email address"
                                    placeholder="info@example.com etc."
                                    // rules={[{ required: true }]}
                                    colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                                />
                            </ProForm.Group>
                            <ProForm.Group size={24}>
                                <ProFormText
                                    label="Website"
                                    name={['organization', 'step_01', 'contact_details', 'website']}
                                    tooltip="Company website url"
                                    placeholder="http://example.com"
                                    // rules={[{ required: true }]}
                                    colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                                />
                                <ProFormText
                                    name={['organization', 'step_01', 'contact_details', 'person']}
                                    label="Contact Person"
                                    tooltip="Company contact person name"
                                    placeholder="Jhon Smith etc"
                                    colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                                />
                            </ProForm.Group>
                        </ProCard>
                        <ProCard
                            title="Address Details"
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
                                    label="Door No"
                                    name={['organization', 'step_01', 'address_details', 'door_no']}
                                    tooltip="Company building door number"
                                    placeholder="123 etc."
                                    colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                                />
                                <ProFormText
                                    label="Building Name"
                                    name={['organization', 'step_01', 'address_details', 'building_name']}
                                    tooltip="Company building name"
                                    placeholder="E-Care-Hub tower etc."
                                    colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                                />
                            </ProForm.Group>
                            <ProForm.Group size={24}>
                                <ProFormText
                                    label="Street Line 1"
                                    name={['organization', 'step_01', 'address_details', 'street_line_01']}
                                    tooltip="Company street address"
                                    placeholder="52 Greyfriars Road"
                                    colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                                />
                                <ProFormText
                                    label="Street Line 2"
                                    name={['organization', 'step_01', 'address_details', 'street_line_02']}
                                    tooltip="Company street address"
                                    placeholder="52 Greyfriars Road"
                                    colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                                />
                            </ProForm.Group>
                            <ProForm.Group size={24}>
                                <ProFormText
                                    label="City/Town"
                                    name={['organization', 'step_01', 'address_details', 'city_town']}
                                    tooltip="Company located city or town"
                                    placeholder="Capel Dewi etc"
                                    colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                                />
                                <ProFormText
                                    label="County"
                                    name={['organization', 'step_01', 'address_details', 'county']}
                                    tooltip="Company located county"
                                    placeholder="Cornwall etc."
                                    colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                                />
                                <ProFormText
                                    label="Post Code"
                                    name={['organization', 'step_01', 'address_details', 'post_code']}
                                    tooltip="Company location Zip/Post Code"
                                    placeholder="IP14 6NJ etc."
                                    colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                                />
                            </ProForm.Group>
                        </ProCard>
                    </StepsForm.StepForm>

                    {/* Start - if not nursing agency then show this step form*/}
                    {(organizationSelectedType !== 'nursing-agency') &&

                        <StepsForm.StepForm
                            name="cqc_details"
                            title="CQC Details"
                            onFinish={async () => {
                                await waitTime(2000);
                                return true;
                            }}
                            layout='vertical'
                            grid={true}
                            initialValues={initialValues}
                            form={form}
                        >


                            <ProCard
                                title="Nominated Individual Details"
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
                                        label="First Name"
                                        name={['organization', 'step_02', 'nominated_individual_details', 'first_name']}
                                        tooltip="The nominated individual first name"
                                        placeholder="Please type the nominated individual first name"
                                        colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                                    />
                                    <ProFormText
                                        label="Middle Name"
                                        name={['organization', 'step_02', 'nominated_individual_details', 'middle_name']}
                                        tooltip="The nominated individual middle name"
                                        placeholder="Please type the nominated individual middle name"
                                        colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                                    />
                                    <ProFormText
                                        label="Last Name"
                                        name={['organization', 'step_02', 'nominated_individual_details', 'last_name']}
                                        tooltip="The nominated individual last name"
                                        placeholder="Please type the nominated individual last name"
                                        colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                                    />
                                </ProForm.Group>
                                <ProForm.Group size={24}>
                                    <ProFormText
                                        label="Email"
                                        name={['organization', 'step_02', 'nominated_individual_details', 'email']}
                                        tooltip="The nominated individual email"
                                        placeholder="Please type the nominated individual email"
                                        colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                                    />
                                    <ProFormText
                                        label="Phone No."
                                        name={['organization', 'step_02', 'nominated_individual_details', 'phone']}
                                        tooltip="The nominated individual phone"
                                        placeholder="Please type the nominated individual phone"
                                        colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                                    />
                                </ProForm.Group>
                            </ProCard>
                            <ProCard
                                title="Registered Manager Details"
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
                                        label="First Name"
                                        name={['organization', 'step_02', 'registered_manager_details', 'first_name']}
                                        tooltip="The registered manager first name"
                                        placeholder="Please type the registered manager first name"
                                        colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                                    />
                                    <ProFormText
                                        label="Middle Name"
                                        name={['organization', 'step_02', 'registered_manager_details', 'middle_name']}
                                        tooltip="The registered manager middle name"
                                        placeholder="Please type the registered manager middle name"
                                        colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                                    />
                                    <ProFormText
                                        label="Last Name"
                                        name={['organization', 'step_02', 'registered_manager_details', 'last_name']}
                                        tooltip="The registered manager last name"
                                        placeholder="Please type the registered manager last name"
                                        colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                                    />
                                </ProForm.Group>
                                <ProForm.Group size={24}>
                                    <ProFormText
                                        label="Email"
                                        name={['organization', 'step_02', 'registered_manager_details', 'email']}
                                        tooltip="The registered manager email"
                                        placeholder="Please type the registered manager email"
                                        colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                                    />
                                    <ProFormText
                                        label="Phone No."
                                        name={['organization', 'step_02', 'registered_manager_details', 'phone']}
                                        tooltip="The registered manager phone"
                                        placeholder="Please type the registered manager phone"
                                        colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                                    />
                                </ProForm.Group>
                            </ProCard>
                            <ProCard
                                title="Data Protection Officer Details"
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
                                        label="First Name"
                                        name={['organization', 'step_02', 'data_protection_officer_details', 'first_name']}
                                        tooltip="The data protection officer first name"
                                        placeholder="Please type the data protection officer first name"
                                        colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                                    />
                                    <ProFormText
                                        label="Middle Name"
                                        name={['organization', 'step_02', 'data_protection_officer_details', 'middle_name']}
                                        tooltip="The data protection officer middle name"
                                        placeholder="Please type the data protection officer middle name"
                                        colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                                    />
                                    <ProFormText
                                        label="Last Name"
                                        name={['organization', 'step_02', 'data_protection_officer_details', 'last_name']}
                                        tooltip="The rdata protection officer last name"
                                        placeholder="Please type the data protection officer last name"
                                        colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                                    />
                                </ProForm.Group>
                                <ProForm.Group size={24}>
                                    <ProFormText
                                        label="Email"
                                        name={['organization', 'step_02', 'data_protection_officer_details', 'email']}
                                        tooltip="The data protection officer email"
                                        placeholder="Please type the data protection officer email"
                                        colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                                    />
                                    <ProFormText
                                        label="Phone No."
                                        name={['organization', 'step_02', 'data_protection_officer_details', 'phone']}
                                        tooltip="The data protection officer phone"
                                        placeholder="Please type the data protection officer phone"
                                        colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                                    />
                                </ProForm.Group>
                                <ProForm.Group size={24}>
                                    <ProFormSelect
                                        name={['organization', 'step_02', 'data_protection_officer_details', 'regulated_activity']}
                                        label="Regulated Activity"
                                        showSearch
                                        debounceTime={300}
                                        colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                                        tooltip="Data Protection Officer Activity"
                                        placeholder='Select regulated activity'
                                        options={[
                                            {
                                                label: 'Personal care',
                                                value: 'personal-care',
                                            },
                                            {
                                                label: 'Accommodation for persons who require nursing or personal care',
                                                value: 'accommodation-for-persons-who-require-nursing-or-personal-care',
                                            },
                                            {
                                                label: 'Accommodation for persons who require treatment for substance abuse',
                                                value: 'accommodation-for-persons-who-require-treatment-for-substance-abuse',
                                            },
                                            {
                                                label: 'Accommodation and nursing or personal care in the further education sector',
                                                value: 'accommodation-and-nursing-or-personal-care-in-the-further-education-sector',
                                            },
                                            {
                                                label: 'Treatment of disease, disorder, or injury',
                                                value: 'treatment-of-disease-disorder-or-injury',
                                            },
                                            {
                                                label: 'Assessment or medical treatment for persons detained under the Mental Health Act',
                                                value: 'assessment-or-medical-treatment-for-persons-detained-under-the-mental-health-act',
                                            },
                                            {
                                                label: 'Surgical procedures',
                                                value: 'surgical-procedures',
                                            },
                                            {
                                                label: 'Diagnostic and screening procedures',
                                                value: 'diagnostic-and-screening-procedures',
                                            },
                                            {
                                                label: 'Management of supply of blood and blood derived products etc',
                                                value: 'management-of-supply-of-blood-and-blood-derived-products-etc',
                                            },
                                            {
                                                label: 'Transport services, triage and medical advice provided remotely',
                                                value: 'transport-services-triage-and-medical-advice-provided-remotely',
                                            },
                                            {
                                                label: 'Maternity and midwifery services',
                                                value: 'maternity-and-midwifery-services',
                                            },
                                            {
                                                label: 'Termination of pregnancies',
                                                value: 'termination-of-pregnancies',
                                            },
                                            {
                                                label: 'Services in slimming clinics',
                                                value: 'services-in-slimming-clinics',
                                            },
                                            {
                                                label: 'Nursing care',
                                                value: 'nursing-care',
                                            },
                                            {
                                                label: 'Family planning service',
                                                value: 'family-planning-service',
                                            },
                                        ]}
                                        fieldProps={{
                                            onChange: (value) => {
                                                console.log('Regulated Activity Changed');
                                                console.log('value');
                                                console.log(value);

                                                setOrganizationRegulatedActivity(value);
                                            }
                                        }}
                                    />
                                </ProForm.Group>
                            </ProCard>
                            <ProCard
                                title="Local Authority Details"
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
                                        label="Authority Name"
                                        name={['organization', 'step_02', 'local_authority_details', 'authority_name']}
                                        tooltip="The local authority name"
                                        placeholder="Please type the local authority name"
                                        colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                                    />
                                    <ProFormText
                                        label="Safeguarding Officer Name"
                                        name={['organization', 'step_02', 'local_authority_details', 'safeguarding_officer_name']}
                                        tooltip="The safeguarding officer name"
                                        placeholder="Please type the safeguarding officer name"
                                        colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                                    />
                                    <ProFormText
                                        label="Role/Department"
                                        name={['organization', 'step_02', 'local_authority_details', 'role_department']}
                                        tooltip="The Authority Role/Department"
                                        placeholder="Please type the Authority Role/Department"
                                        colProps={{xs: 24, sm: 24, md: 8, lg: 8, xl: 8}}
                                    />
                                </ProForm.Group>
                                <ProForm.Group size={24}>
                                    <ProFormText
                                        label="Information link"
                                        name={['organization', 'step_02', 'local_authority_details', 'information_link']}
                                        tooltip="The Authority Information link"
                                        placeholder="Please type the Authority Information link"
                                        colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                                    />
                                    <ProFormText
                                        label="Phone No."
                                        name={['organization', 'step_02', 'local_authority_details', 'phone_number']}
                                        tooltip="The Authority Phone number"
                                        placeholder="Please type the Authority Phone number"
                                        colProps={{xs: 24, sm: 24, md: 12, lg: 12, xl: 12}}
                                    />
                                </ProForm.Group>
                            </ProCard>
                        </StepsForm.StepForm>

                    }
                    {/* End - if not nursing agency then show this step form*/}

                </StepsForm>

                {/*<FloatButton.Group*/}
                {/*    type="primary"*/}
                {/*    shape="square"*/}
                {/*    style={{*/}
                {/*        right: 10,*/}
                {/*        bottom: '50vh'*/}
                {/*    }}*/}
                {/*    icon={<CustomerServiceOutlined/>}*/}
                {/*>*/}
                {/*    <FloatButton icon={<QuestionCircleOutlined/>} tooltip={<div>click to see the helfull tour.</div>}/>*/}
                {/*    <FloatButton tooltip={<div>Visit Official documentation</div>}/>*/}
                {/*    <FloatButton icon={<WhatsAppOutlined/>} tooltip={<div>Lets discuss on Whatsapp.</div>}/>*/}
                {/*</FloatButton.Group>*/}

            </PageContainer>
        );

    }

};

export default Organization;
