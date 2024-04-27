import {
  EditOutlined,
  PlusOutlined,
  DeleteOutlined, ExclamationCircleFilled
} from '@ant-design/icons';
import {
  ModalForm,
  PageContainer,
  ProTable
} from '@ant-design/pro-components';
import {FormattedMessage, useIntl, request, history} from '@umijs/max';
import {
  Button, Divider, message
} from 'antd';
import React, {useRef, useState} from 'react';
import moment from 'moment';
import {useModel} from 'umi';


export const waitTimePromise = async (time = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};


export const waitTime = async (time = 100) => {
    await waitTimePromise(time);
};

const ListAttractions = () => {

    const {initialState, loading, refresh, setInitialState} = useModel('@@initialState');

    console.log('initialState');
    console.log(initialState);

    console.log('loading');
    console.log(loading);


    const [showDetail, setShowDetail] = useState(false);

    const attractionsTableRef = useRef();
    const [currentRow, setCurrentRow] = useState();

    const [attractionDeleteConfirmationData, setAttractionDeleteConfirmationData] = useState({});
    const [attractionDeleteConfirmationModelOpen, setAttractionDeleteConfirmationModelOpen] = useState(false);


    const deleteAttraction = async (attractionId) => {
      console.log('deleteAttraction');

      request('/api/attractions/' + attractionId, {

          method: 'DELETE',

      }).then(async (api_response) => {
          console.log('api_response');
          console.log(api_response);

          if (api_response.status === true) {

              // await waitTime(3000);

              console.log('api_response.status');

              await message.success('Deleted successfully');

              if (attractionsTableRef.current) {
                  attractionsTableRef.current?.reloadAndRest?.();
              }
          }

      }).catch(function (error) {
          console.log(error);
      });


      return true;
    };



    /**
     * @en-US International configuration
     * @zh-CN Internationalization configuration
     * */
    const intl = useIntl();

    const columns = [

        {
            title: 'ID',
            dataIndex: 'id',
            key: 'table-column-id',
            hideInSearch: true,
            sorter: true,
            defaultSortOrder: 'descend',
        },
        {
            title: "Image",
            dataIndex: "image_url",
            key: 'table-column-image',
            hideInSearch: true,
            render: (dom, entity) => {
                return (
                    <img
                        alt="example"
                        src={dom}
                        style={{ height: '80px', width: '150px' }}
                    />
                );
            },
        },
        {
            title: "Title",
            dataIndex: "title",
            key: 'table-column-title',
            copyable: true,
            hideInSearch: true,
            render: (dom, entity) => {
                return (
                    <a
                        onClick={() => {
                            setCurrentRow(entity);
                            setShowDetail(true);
                        }}
                    >
                        {dom}
                    </a>
                );
            },
        },
        {
            title: "Created Date",
            dataIndex: 'created_at',
            key: 'table-column-created-date',
            sorter: true,
            hideInForm: true,
            hideInSearch: true,
            render: (created_at) => {
                return (<p>{moment(new Date(created_at)).format('DD-MM-YYYY')}</p>)
            },
        },
        {
            title: "Updated Date",
            dataIndex: 'updated_at',
            key: 'table-column-updated-date',
            sorter: true,
            hideInForm: true,
            hideInSearch: true,
            render: (updated_at) => {
                return (<p>{moment(new Date(updated_at)).format('DD-MM-YYYY')}</p>)
            },
        },
        {
            title: 'Actions',
            valueType: 'option',
            key: 'table-column-actions',
            render: (text, record, _, action) => [

                <Button
                    key="editable"
                    onClick={() => {
                        history.push('/admin-app/attractions/edit/' + record.id);
                    }}
                >
                    <EditOutlined />
                </Button>,

                <Button
                    key="deletable"
                    onClick={() => {

                        setAttractionDeleteConfirmationData(record);

                        setAttractionDeleteConfirmationModelOpen(true);

                    }}
                    danger={true}
                >
                    <DeleteOutlined />
                </Button>,

            ],
        },
    ];

    return (
        <PageContainer>
            <ProTable
                actionRef={attractionsTableRef}
                rowKey="id"
                search={false}
                toolBarRender={() => [
                    <Button
                        type="primary"
                        key="primary"
                        onClick={() => {
                            history.push('/admin-app/attractions/new');
                        }}
                    >
                        <PlusOutlined/> <FormattedMessage id="pages.organizationTable.new" defaultMessage="New"/>
                    </Button>,
                ]}
                pagination={{
                    defaultPageSize: 10,
                    showSizeChanger: true,
                    pageSizeOptions: [10, 20, 50, 100],
                    onChange: (page) => console.log(page),
                }}
                request={

                    async (params = {}, sort, filter, paginate) => {

                        console.log('params');
                        console.log(params);

                        console.log('params - sort');
                        console.log(sort);

                        console.log('params - filter');
                        console.log(filter);

                        console.log('initialState?.currentUser');
                        console.log(initialState?.currentUser);

                        /**
                         * Delay the API request
                         */
                        await waitTime(2000);

                        return await request('/api/attractions', {

                            params: {
                                page: params?.current,
                                per_page: params?.pageSize,
                                order_by: 'id',
                                order: 'asc',
                            },

                        }).then(async (api_response) => {
                            console.log('api_response');
                            console.log(api_response);

                            console.log('api_response.data');
                            console.log(api_response.data);

                            console.log('api_response.data.data');
                            console.log(api_response.data.data);

                            return { data: api_response.data.data, total: api_response.data.total, current_page: api_response.data.current_page};

                        }).catch(function (error) {
                            console.log(error);
                        });

                    }}
                columns={columns}

            />


            <ModalForm
              // title={'Are you sure you want to delete this user?'}
              open={attractionDeleteConfirmationModelOpen}
              onOpenChange={setAttractionDeleteConfirmationModelOpen}
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
                width: 716,
                okText: 'Confirm',
              }}
              submitter={{
                // Configure the properties of the button
                resetButtonProps: {
                  style: {
                    // Hide the reset button
                    // display: 'none',
                  },
                },
                submitButtonProps: {
                  style: {
                    // Hide the submit button
                    // display: 'none',
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


                await deleteAttraction(attractionDeleteConfirmationData?.id);

                /**
                 * The following return is necessary to auto close the modal
                 */
                return true;
              }}
            >

              <h6 style={{fontSize: '16px'}}>
                <span> <ExclamationCircleFilled style={{color: '#ff4d4f', fontSize: '20px', paddingRight: '5px'}} /> </span>
                Are you sure you want to delete this attraction?
              </h6>

              <span style={{fontSize: '16px', paddingLeft: '30px'}}>
                  <strong> Name: </strong> {attractionDeleteConfirmationData?.title}
              </span>

              <Divider style={{margin: '10px 0px'}}/>

              <p style={{fontSize: '16px', paddingLeft: '30px'}}>
                Please confirm if you would like to proceed with deleting this attraction.
              </p>

              <span style={{fontSize: '16px', paddingLeft: '30px', color: 'red'}} >
                  Note: This action cannot be undone.
              </span>

            </ModalForm>

        </PageContainer>
    );
};

export default ListAttractions;
