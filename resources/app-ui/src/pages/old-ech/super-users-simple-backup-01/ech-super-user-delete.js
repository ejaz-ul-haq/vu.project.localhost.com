// import { React, useState } from "react";
import React, { useEffect, useState } from "react";
// import { useEffect, useState } from '@wordpress/element';

import { Button, Table, Modal, Input, Radio, Form } from "antd";
import { DeleteOutlined, EditOutlined  } from '@ant-design/icons';
// import {data} from "../Data";
import data  from "./Data";

const EchSuperUserDelete = ( {  record, open, onCreate, onCancel }  ) => {

    console.log('EchSuperUserDelete ...');
    console.log('record...');
    console.log(record);

    const [Data, setData] = useState(data);

    // Modal.confirm({
    //     title: "Are you sure you want to delete this",
    //     onOk: () => {
    //         // setData((pre) => {
    //         //     return pre.filter((person) => person.id != record.id);
    //         // });
    //     },
    // });


    return (
        <>
            <Modal
                open={open}
                title="Create a new collection"
                okText="Ok"
                cancelText="Cancel"
                onCancel={onCancel}
                onOk = {() => {
                    onCreate(record);
                    setData((pre) => {
                        // return pre.filter((person) => person.id != record.id);
                        return pre.filter((person) => person.key != record.key);
                    });
                }}
            >
            </Modal>
        </>
    );
};

export default EchSuperUserDelete;