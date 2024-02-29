// import { React, useState } from "react";
import React, {useEffect, useState} from "react";
// import { useEffect, useState } from '@wordpress/element';

import {Button, Table, Modal, Input, Radio, Form} from "antd";
// import { DeleteOutlined, EditOutlined  } from '@ant-design/icons';

// import { data } from "./Data";
import data from "./Data";
import EchSuperUserEdit from "./ech-super-user-edit";
import EchSuperUserDelete from "./ech-super-user-delete";

const EchSuperUserTable = () => {

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      fixed: 'left',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
      filterMode: 'tree',
      filterSearch: true,
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      // onFilter: (value: string, record) => record.address.startsWith(value),
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "1",
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.email - b.email,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "2",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "3",
    },
    {
      title: "Website",
      dataIndex: "website",
      key: "4",
    },
    {
      title: "Actions",
      dataIndex: 'actions',
      fixed: 'right',
      width: 100,
      // render: (record) => {
      // render: ( _, record: { key: React.Key } ) => {
      render: (_, record) => {
        return (
          <>
            <div className="flex">
              <Button
                style={{color: "black"}}
                // onClick={() => Edit(record)}
                onClick={() => {
                  setOpen(true);
                }}
              />
              <Button
                style={{color: "red"}}
                onClick={() => {
                  // console.log('setSelectedRecord = value');
                  // console.log(record);
                  setSelectedRecord(record);
                  setOpenDeleteModal(true);
                }}
              />
            </div>
          </>
        );
      },
    },
  ];
  const [Data, setData] = useState(data);

  const [open, setOpen] = useState(false);
  const [OpenDeleteModal, setOpenDeleteModal] = useState(false);
  const [SelectedRecord, setSelectedRecord] = useState('');

  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setOpen(false);
    setOpenDeleteModal(false);
  };

  return (
    <>
      <div className="app">
        <div className="table">
          <Table
            dataSource={Data}
            columns={columns}
            scroll={{
              x: 1500,
              y: 300,
            }}
            pagination={{pageSize: 8, total: 50, showSizeChanger: true}}
            loading={true}
          />
          <EchSuperUserEdit
            onClick={() => {
              setOpen(true);
            }}
            open={open}
            onCreate={onCreate}
            onCancel={() => {
              setOpen(false);
            }}
          />
          <EchSuperUserDelete
            onClick={() => {
              setOpenDeleteModal(true);
            }}
            record={SelectedRecord}
            open={OpenDeleteModal}
            onCreate={onCreate}
            onCancel={() => {
              setOpenDeleteModal(false);
            }}
          />
        </div>
      </div>
    </>
  );

}

export default EchSuperUserTable;
