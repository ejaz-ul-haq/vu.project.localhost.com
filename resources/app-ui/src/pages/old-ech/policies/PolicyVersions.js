
import React, {useEffect, useState} from "react";
import moment from 'moment';
import {useModel, useParams} from "@@/exports";
import {request, Link} from '@umijs/max';
import {Row, Col, Space, message, Button, Form, DatePicker, Image, Tag, Typography, FloatButton} from 'antd';
import {
    CodeOutlined,
    CustomerServiceOutlined,
    EyeOutlined,
    QuestionCircleOutlined,
    UploadOutlined,
    UserOutlined, VideoCameraOutlined, WhatsAppOutlined
} from '@ant-design/icons';
import VersionCodeViewIframe from '@/components/Editor/VersionCodeViewIframe';

import {
  FooterToolbar,
  ModalForm,
  PageContainer,
  ProDescriptions,
  ProForm,
  ProFormText,
  ProFormTextArea,
  ProTable, TableDropdown,
  ProList, ProCard,
} from '@ant-design/pro-components';
import {getEchPolicy} from "@/services/wp-api/EchPolicy";
import {getEchCustomerPolicy} from "@/services/wp-api/EchCustomerPolicy";
import EditorIframe from "@/components/Editor/EditorIframe";
import VersionPreviewIframe from "@/components/Editor/VersionPreviewIframe";
import PoliciesScreenVersionsVideoIframe from "@/components/VideoTutorialsIframes/SuperAdminIframes/PoliciesScreenVersionsVideoIframe";
import VideoTutorialIframe from "@/components/VideoTutorialsIframes/VideoTutorialIframe";
import 'moment/locale/en-gb';


const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};


const PolicyVersions = () => {

  /**
   * States of Component
   */
  const {initialState, loading, refresh, setInitialState} = useModel('@@initialState');
  const [organizationId, setOrganizationId] = useState(0);
  const {childPolicyId, parentPolicyId} = useParams();
  console.log('childPolicyId');
  console.log(childPolicyId);

  const [childPolicy, setChildPolicy] = useState({});
  // const [parentPolicyRevisions, setParentPolicyRevisions] = useState([]);
  const [policyVersionCodeViewModelOpen, setPolicyVersionCodeViewModelOpen] = useState(false);
  const [policyVersionPreviewModelOpen, setPolicyVersionPreviewModelOpen] = useState(false);
    const [selectedVersionId, setSelectedVersionId] = useState(0);
  const [selectedVersionCodeView, setSelectedVersionCodeView] = useState({});
  const [selectedVersionPreview, setSelectedVersionPreview] = useState({});

  /**
   * Moment JS Localization Setup
  */
  moment.locale('en-gb');


    /**
     * Start By Mairaj
     */

    const [policiesVersionsVideoTutorials, setPoliciesVersionsVideoTutorials] = useState({});
    const [policiesVersionsVideoTutorialModelOpen, setPoliciesVersionsVideoTutorialModelOpen] = useState(false);
    /**
     * End By Mairaj
     */


  const { Title } = Typography;



  const updateParentPolicyVersionStatus = async (childPolicyId, parent_policy_updated_versions) => {
    console.log('updateParentPolicyVersionStatus');


    /**
     * API Request
     */
    try {

      const request_data = {
        meta: {
          ech_parent_policy_versions: parent_policy_updated_versions,
        },
      };



        request('/wp/v2/ech-customer-policy/'+childPolicyId,{
            method: 'PUT',     /// By Mairaj
            params: {
                context: 'edit',
                // parent: parentPolicyId,
                id: childPolicyId,
            },
            data: request_data,
        }).then(async (api_response) => {
            console.log('setup-wizard = api_response');
            console.log(api_response);

            if (api_response?.meta?.ech_parent_policy_versions?.parent_policy_version_status === 'completed') {

                message.success('Your Delete Request has been received. Upon admin approval, this user will be automatically deleted.', 10);

                // request('/wp/v2/users/' + staffMemberId, {
                //   method: 'DELETE',
                //   data: {
                //     id: staffMemberId,
                //     force: true,
                //     reassign: 0,
                //   },
                // }).then(async (api_response) => {
                //   console.log('setup-wizard = api_response');
                //   console.log(api_response);
                //
                //   if (api_response.deleted) {
                //     console.log('setup-wizard = api_response - 01');
                //     // async () => {
                //     console.log('setup-wizard = api_response - 02');
                //     await waitTime(3000);
                //     console.log('setup-wizard = api_response - 03');
                //     await message.success('Submitted successfully');
                //     console.log('setup-wizard = api_response - 04');
                //     // history.go(0);
                //     // history.push('/organization');
                //     // history.replace('/organization');
                //     // window.location.replace(window.location.protocol + '//' + window.location.host + window.location.pathname + '#/organization');
                //     // console.log('setup-wizard = api_response - 05');
                //     // window.location.href = '/app/#/organization';
                //     // }
                //     if (staffmembersTableRef.current) {
                //       staffmembersTableRef.current?.reloadAndRest?.();
                //     }
                //   }
                //
                // }).catch(function (error) {
                //   console.log(error);
                // });

            }

        }).catch(function (error) {
            console.log(error);
        });


    } catch (api_response) {
      console.log('api_response - error');
      console.log(api_response);
      // history.push(loginPath);
    }




    return true;
  };



  /**
   * Set Organization ID
   */
  useEffect(() => {
    setOrganizationId(initialState?.currentUser?.meta?.ech_organization_id);
  }, [initialState]); //empty dependency array so it only runs once at render



  /**
   * Update the ChildPolicy State individually whenever the related childPolicyId is updated/effected
   */
  useEffect(() => {
    if( childPolicyId === 0 ){
      return;
    }
    // const api_response =  getEchCustomerPolicy(
    //     {
    //         context: 'edit',
    //         id: id,
    //     },
    //     {getResponse: true}
    // );

     request('/wp/v2/ech-customer-policy/'+childPolicyId,{
        params: {
            context: 'edit',
            // parent: parentPolicyId,
            id: childPolicyId,
        }
     }).then(async (api_response) => {
         console.log('api_response');
         console.log(api_response);
         setChildPolicy(api_response);
     }).catch(function (error) {
         console.log(error);
    });

  }, [childPolicyId]); //empty dependency array so it only runs once at render

  /**
   * Update the ParentPolicyId State individually whenever the related childPolicy is updated/effected
   */
  // useEffect(() => {
  //   console.log('childPolicy');
  //   console.log(childPolicy);
  //   if (Object.keys(childPolicy).length === 0) {
  //     return;
  //   }
  //   setParentPolicyId(childPolicy?.meta?.ech_parent_policy_id);
  // }, [childPolicy]); //empty dependency array so it only runs once at render

  /**
   * Update parentPolicyRevisions State
   */
  // useEffect( () => {
  //   if( parentPolicyId === 0 ){
  //     return;
  //   }
  //   console.log('parentPolicyId');
  //   console.log(parentPolicyId);
  //
  //   // const api_response =  getEchCustomerPolicy(
  //   //     {
  //   //         context: 'edit',
  //   //         id: id,
  //   //     },
  //   //     {getResponse: true}
  //   // );
  //
  //   request('/wp/v2/ech-policy/'+parentPolicyId+'/revisions',{
  //       params: {
  //           context: 'edit',
  //           parent: parentPolicyId,
  //       }
  //   }).then(async (api_response) => {
  //       console.log('api-response-policy-revisions');
  //       console.log(api_response);
  //       setParentPolicyRevisions(api_response);
  //   }).catch(function (error) {
  //       console.log(error);
  //   });
  //
  // }, [parentPolicyId] );


  return (
    <PageContainer
      header={{
      title: '',
    }}
    >

      <Row>
        <Col span={24}>
          <ProCard
            // title="Contact Details"
            // title={childPolicy?.title?.rendered}
            bordered
            headerBordered
            // collapsible
            size="default"
            type="inner"
            style={{
              marginBlockEnd: 15,
              minWidth: 800,
              maxWidth: '100%',
              textAlign: 'center',
            }}
          >
            {/*<h1>{childPolicy?.title?.rendered}</h1>*/}
            <Title level={3}>{childPolicy?.title?.rendered}</Title>
            <Title level={5}>Policy Versions List</Title>
          </ProCard>
            {/*<h1>{childPolicy?.title?.rendered}</h1>*/}
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <ProList
            // toolBarRender={() => {
            //   return [
            //     <Button key="3" type="primary">
            //       Test Tool bar Button
            //     </Button>,
            //   ];
            // }}
            // search={{}}
            rowKey="name"
            headerTitle=" "
            request={async (params = {}) => {
                // request('https://proapi.azurewebsites.net/github/issues', {
                //     params,
                // })

              /**
               * Delay the API request
               */
              await waitTime(2000);

              // if( parentPolicyId === 0 ){
              //   return;
              // }

              // let parentPolicyId = 69;

              return await request('/wp/v2/ech-policy/'+parentPolicyId+'/revisions',{
                params: {
                  context: 'edit',
                  parent: parentPolicyId,
                }
              }).then(async (api_response) => {
                console.log('api-response-policy-revisions');
                console.log(api_response);
                // setParentPolicyRevisions(api_response);
                return { data: api_response };
                // return api_response;
              }).catch(function (error) {
                console.log(error);
              });

            }}
            pagination={{
              pageSize: 5,
            }}
            showActions="hover"
            metas={{
              title: {
                // dataIndex: 'id',
                dataIndex: ["author_data", "name"],
                search: false,
              },
              avatar: {
                dataIndex: ["author_data", "profile_image_url"],
                search: false,
              },
              description: {
                dataIndex: "modified",
                  // title: moment(new Date(modified)).format('DD-MM-YYYY hh:mm:ss'),
                  render: (modified) => {
                      // return (<p> {moment(new Date(modified)).format('DD-MM-YYYY')}</p>)

                      // return (<p> {moment(modified).startOf('hour').fromNow() + ' (' + moment(new Date(modified)).format('LLL') +')'}</p>)
                      return (<p> { moment(new Date(modified)).format('LLL') }</p>)
                  },
                search: false,
              },
              // subTitle: {
              //   dataIndex: 'labels',
              //   render: (_, row) => {
              //     return (
              //       <Space size={0}>
              //         {row.labels?.map((label) => (
              //           <Tag color="blue" key={label.name}>
              //             {label.name}
              //           </Tag>
              //         ))}
              //       </Space>
              //     );
              //   },
              //   search: false,
              // },
              actions: {
                render: (text, record) => [
                  // <a
                  //   href={row.url}
                  //   target="_blank"
                  //   rel="noopener noreferrer"
                  //   key="link"
                  // >
                  //   链路
                  // </a>,

                    <Button
                        type="primary"
                        icon={<CodeOutlined />}
                        key="code-view"
                        // loading={loadings[1]}
                        // style={{'margin': '10px 0px 0px 0px'}}
                        onClick={ () => {
                            console.log('record');
                            console.log(record.id);
                            setSelectedVersionId(record.id);
                            setSelectedVersionCodeView(record);
                            setPolicyVersionCodeViewModelOpen(true);
                        }}



                    >
                        Code View
                    </Button>,
                    <Button
                        type="primary"
                        icon={<EyeOutlined />}
                        key="preview"
                        // loading={loadings[1]}
                        // style={{'margin': '10px 0px 0px 0px'}}
                        onClick={ () => {
                          console.log('record');
                          console.log(record.id);
                          setSelectedVersionId(record.id);
                          setSelectedVersionPreview(record);
                          setPolicyVersionPreviewModelOpen(true);
                        }}

                    >
                        Preview
                    </Button>
                ],
                search: false,
              },
              // status: {
              //   // 自己扩展的字段，主要用于筛选，不在列表中显示
              //   title: '状态',
              //   valueType: 'select',
              //   valueEnum: {
              //     all: { text: '全部', status: 'Default' },
              //     open: {
              //       text: '未解决',
              //       status: 'Error',
              //     },
              //     closed: {
              //       text: '已解决',
              //       status: 'Success',
              //     },
              //     processing: {
              //       text: '解决中',
              //       status: 'Processing',
              //     },
              //   },
              // },
            }}

          />
        </Col>
        {/*<Col span={18}>Preview/Code View</Col>*/}
      </Row>


        <ModalForm
            // title={viewSelectedPolicy?.title?.rendered + ' Total Seats:= ' + viewSelectedPolicy?.meta?.ech_total_seats + ' Avaliable Seats:= ' + availableSeatsOfSelectedPolicy}

            // title={ childPolicy?.title?.rendered + ' - Code View - Last Modified: ' + moment(selectedVersionCodeView?.modified).startOf('hour').fromNow() + ' (' + moment(new Date(selectedVersionCodeView?.modified)).format('LLL') +')' }
            title={ childPolicy?.title?.rendered + ' - Code View - Last Modified: ' + moment(new Date(selectedVersionCodeView?.modified)).format('LLL') }
            open={policyVersionCodeViewModelOpen}
            onOpenChange={setPolicyVersionCodeViewModelOpen}
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
                width: 1500,
                okText: 'Save',
            }}
            preserve={false}
            submitTimeout={2000}
            onFinish={async (values) => {
                await waitTime(2000);




                /**
                 * Call the APIs to update the selected policy's users association
                 */
                // await onChangeHandlerPolicyUsers(viewSelectedPolicy?.id, targetKeys, policiesTableRef);
                /**
                 * The following return is necessary to auto close the modal
                 */
                // return true;
            }}
        >
            <VersionCodeViewIframe
                iframeUrlVersionID={selectedVersionId}
                // iframeUrl={'http://wi.ecarehub.localhost.com/wp-admin/revision.php?revision=105&gutenberg=true'}
            />

        </ModalForm>


      <ModalForm
        // title={viewSelectedPolicy?.title?.rendered + ' Total Seats:= ' + viewSelectedPolicy?.meta?.ech_total_seats + ' Avaliable Seats:= ' + availableSeatsOfSelectedPolicy}

        // title={ childPolicy?.title?.rendered + ' - Preview - Last Modified: ' + moment(selectedVersionPreview?.modified).startOf('hour').fromNow() + ' (' + moment(new Date(selectedVersionPreview?.modified)).format('LLL') +')' + ' #' + selectedVersionPreview?.id}
        title={ childPolicy?.title?.rendered + ' - Preview - Last Modified: ' + moment(new Date(selectedVersionPreview?.modified)).format('LLL') + ' (#' + selectedVersionPreview?.id + ')' }
        open={policyVersionPreviewModelOpen}
        onOpenChange={setPolicyVersionPreviewModelOpen}
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
          width: 1500,
          okText: 'Save',
        }}
        preserve={false}
        submitTimeout={2000}
        onFinish={async (values) => {
          await waitTime(2000);

          console.log('childPolicy');
          console.log(childPolicy);

          console.log('selectedVersionPreview');
          console.log(selectedVersionPreview);

          if( childPolicy?.meta?.ech_parent_policy_versions.length > 0  ) {
            // const index = childPolicy?.meta?.ech_parent_policy_versions.findIndex(parent_policy_version => {
            //   return parent_policy_version.parent_policy_version_id === selectedVersionPreview?.id;
            // });

            const parent_policy_updated_versions = childPolicy?.meta?.ech_parent_policy_versions.map(parent_policy_version => {
                // 👇️ if id equals 2, update country property
                if (parent_policy_version.parent_policy_version_id === selectedVersionPreview?.id) {
                  return {...parent_policy_version, parent_policy_version_status: 'completed'};
                }
                // 👇️ otherwise return the object as is
                return parent_policy_version;
            });

            console.log('parent_policy_updated_versions');
            console.log(parent_policy_updated_versions);


              updateParentPolicyVersionStatus(childPolicyId, parent_policy_updated_versions);

          }

          /**
           * Call the APIs to update the selected policy's users association
           */

          // updateParentPolicyVersionStatus(selectedVersionId, parent_policy_updated_versions);
          // await onChangeHandlerPolicyUsers(viewSelectedPolicy?.id, targetKeys, policiesTableRef);
          /**
           * The following return is necessary to auto close the modal
           */
          // return true;
        }}
      >
        <VersionPreviewIframe
          // iframeUrlVersionID={selectedVersionId}
          iframeUrl={selectedVersionPreview?.version_preview_url+'&organization-id='+organizationId}
        />

      </ModalForm>


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

                        const policies_screen_versions_video_tutorials_data = {
                            // ...initialValues,
                            policies_screen: {
                                // ...initialValues.policies_screen,
                                versions_video_url: api_response[api_response.findIndex(video_tutorial => video_tutorial.screen_id === 'policies_screen_versions_video_url') ].video_url,
                            },
                        };

                        setPoliciesVersionsVideoTutorials(policies_screen_versions_video_tutorials_data);

                        console.log('policies_screen_versions_video_tutorials_data');
                        console.log(policies_screen_versions_video_tutorials_data);

                    });
                    setPoliciesVersionsVideoTutorialModelOpen(true);
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
            title={'Policy Versions Video Tutorial'}
            open={policiesVersionsVideoTutorialModelOpen}
            onOpenChange={setPoliciesVersionsVideoTutorialModelOpen}
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
                iframeUrl={policiesVersionsVideoTutorials?.policies_screen?.versions_video_url}
            />

        </ModalForm>

    </PageContainer>
  );

};

export default PolicyVersions;

