import React, {useEffect, useState} from "react";
import {useParams} from 'umi';
import {ModalForm, PageContainer, ProDescriptions} from "@ant-design/pro-components";
import EditorIframe from '@/components/Editor/EditorIframe';
import {
    DownloadOutlined,
    CodeOutlined,
    ReadOutlined,
    CustomerServiceOutlined,
    QuestionCircleOutlined, VideoCameraOutlined, WhatsAppOutlined
} from "@ant-design/icons";
import {Avatar, Button, Drawer, List, Typography, Skeleton, FloatButton} from "antd";
import {history} from "@@/core/history";
import {OrganizationShortCodes} from '../policies/components/OrganizationShortCodes';
import PoliciesScreenEditVideoIframe from "@/components/VideoTutorialsIframes/SuperAdminIframes/PoliciesScreenEditVideoIframe";
import {request} from '@umijs/max';
import {waitTime} from "@/pages/policies/TableList";
import VideoTutorialIframe from "@/components/VideoTutorialsIframes/VideoTutorialIframe";
import {useModel} from "@@/exports";
const {Paragraph} = Typography;

const UpdatePolicy = () => {

  const {initialState, loading, refresh, setInitialState} = useModel('@@initialState');

  const params = useParams();
  console.log('params');
  console.log(params);

  const [policyId, setPolicyId] = useState(0);
  console.log('policyId');
  console.log(policyId);

  useEffect(() => {
    setPolicyId(params.id);
  }, []); //empty dependency array so it only runs once at render

  const [organizationShortcodesDrawer, setOrganizationShortcodesDrawer] = useState(false);
  const [currentRow, setCurrentRow] = useState();
  const [showDetail, setShowDetail] = useState(false);


    /**
     * Start By Mairaj
     */

    const [policiesEditVideoTutorials, setPoliciesEditVideoTutorials] = useState({});
    const [policiesEditVideoTutorialModelOpen, setPoliciesEditVideoTutorialModelOpen] = useState(false);
    /**
     * End By Mairaj
     */


  const onCloseOrganizationShortcodesDrawer = () => {
    setOrganizationShortcodesDrawer(false);
  };

  const showOrganizationShortcodesDrawer = async () => {
    setOrganizationShortcodesDrawer(true);
  };

  return (
    <PageContainer
      header={{
        title: 'Edit Your Policy',
        extra: [
          <Button
            key="1"
            onClick={() => {
              showOrganizationShortcodesDrawer(true);
            }}
          > <CodeOutlined/> Shortcodes</Button>,
        ],
      }}
    >

      <Drawer
        width={600}
        open={organizationShortcodesDrawer}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
          onCloseOrganizationShortcodesDrawer(false);
        }}
        closable={true}
        title={"Organisation Shortcodes"}
        // title={viewSelectedPolicy?.title?.rendered}
      >
        {/*{currentRow?.name && (*/}
        {/*  <ProDescriptions*/}
        {/*    column={2}*/}
        {/*    title={currentRow?.name}*/}
        {/*    request={async () => ({*/}
        {/*      data: currentRow || {},*/}
        {/*    })}*/}
        {/*    params={{*/}
        {/*      id: currentRow?.name,*/}
        {/*    }}*/}
        {/*    columns={columns}*/}
        {/*  />*/}
        {/*)}*/}


        <List
          itemLayout="horizontal"
          size="large"
          // loading={viewSelectedPolicyOrganizationsLoading}
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 10,
          }}
          dataSource={OrganizationShortCodes}
          renderItem={(item, index) => {

            // const organization_logo_url = (item?.meta?.ech_organization_logo_url) ? item?.meta?.ech_organization_logo_url : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==';

            // console.log('item');
            // console.log(item);

            return (
              (

                <List.Item
                  // key={item.title.rendered}
                  // actions={[
                  //
                  //   <a key="selected-policy-drawer-view-button" onClick={() => {
                  //     // history.push( '/policies/view/' + viewSelectedPolicy?.id + '/' + item?.id );
                  //   }}> <ReadOutlined/> Read Policy </a>,
                  //   <a key="selected-policy-drawer-download-button"> <DownloadOutlined/> </a>,
                  // ]}
                >
                  <Skeleton avatar title={false} loading={false} active>
                    <List.Item.Meta
                      // avatar={<Avatar src={organization_logo_url}/>}
                      // title={'{{org_field_logo}}'}
                      // title={<a href={item.href}>{item.title.rendered}</a>}
                      // description={item.content.rendered}
                      title={<Paragraph
                        copyable={{
                          // icon: [<SmileOutlined key="copy-icon" />, <SmileFilled key="copied-icon" />],
                          tooltips: ['Copy', 'Copied!'],
                        }}>{item?.short_code}</Paragraph>}
                      description={item?.description}
                    />
                  </Skeleton>
                </List.Item>
              )
            );
          }}
        />

      </Drawer>
      <EditorIframe
        iframeUrlPostID={policyId}
      />

        <FloatButton.Group
            type="primary"
            shape="square"
            style={{
                right: 10,
                bottom: '50vh'
            }}
            icon={<CustomerServiceOutlined/>}
        >
            <FloatButton
                icon={<QuestionCircleOutlined/>}
                tooltip={<div>click to see the helfull tour.</div>}
                onClick={ ()=> {
                    window.open(initialState?.ech_settings[initialState?.ech_settings.findIndex(ech_setting_row => ech_setting_row.key === 'floating_icon_help_url') ]?.value);
                }}
            />
            <FloatButton
                icon={<VideoCameraOutlined />}
                tooltip={<div>Lets See Helpful Tutorial.</div>}
                onClick={ ()=> {
                    console.log('api_response_testing_01');

                    request('/wp/v2/super-admin-video-tutorials', {
                        method: 'GET',
                    }).then((api_response) => {
                        console.log('api_response');
                        console.log(api_response);

                        const policies_screen_edit_video_tutorials_data = {
                            // ...initialValues,
                            policies_screen: {
                                // ...initialValues.policies_screen,
                                edit_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'policies_screen_edit_video_url') ].video_url,
                            },
                        };

                        setPoliciesEditVideoTutorials(policies_screen_edit_video_tutorials_data);

                        console.log('policies_screen_edit_video_tutorials_data');
                        console.log(policies_screen_edit_video_tutorials_data);

                    });
                    setPoliciesEditVideoTutorialModelOpen(true);
                }}
            />
            <FloatButton
                tooltip={<div>Visit Official documentation</div>}
                onClick={ ()=> {
                    window.open(initialState?.ech_settings[initialState?.ech_settings.findIndex(ech_setting_row => ech_setting_row.key === 'floating_icon_documentation_url') ]?.value);
                }}
            />
            <FloatButton
                icon={<WhatsAppOutlined/>}
                tooltip={<div>Lets discuss on Whatsapp.</div>}
                onClick={ ()=> {
                    window.open(initialState?.ech_settings[initialState?.ech_settings.findIndex(ech_setting_row => ech_setting_row.key === 'floating_icon_whatsapp_url') ]?.value);
                }}
            />
        </FloatButton.Group>

        <ModalForm
            title={'Policy Edit Video Tutorial'}
            open={policiesEditVideoTutorialModelOpen}
            onOpenChange={setPoliciesEditVideoTutorialModelOpen}
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
                // width: 1500,
                // okText: 'Save',
            }}
            submitter={{
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
            preserve={false}
            submitTimeout={2000}
            onFinish={async (values) => {
                await waitTime(2000);



                /**
                 * Call the APIs to update the selected policy's users association
                 */



                /**
                 * The following return is necessary to auto close the modal
                 */
                // return true;
            }}
        >
            <VideoTutorialIframe
                iframeUrl={policiesEditVideoTutorials?.policies_screen?.edit_video_url}
            />

        </ModalForm>


    </PageContainer>
  );
};

export default UpdatePolicy;
