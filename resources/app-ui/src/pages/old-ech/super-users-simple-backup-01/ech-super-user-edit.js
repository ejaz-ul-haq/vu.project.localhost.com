
// import { React, useState } from "react";
import React, { useEffect, useState } from "react";
// import { useEffect, useState } from '@wordpress/element';

import { Button, Table, Modal, Input, Radio, Form } from "antd";
import { DeleteOutlined, EditOutlined  } from '@ant-design/icons';

const EchSuperUserEdit = ( { open, onCreate, onCancel }  ) => {
//  setVisible(true);

    const [form] = Form.useForm();

    return (
        <>
        <Modal
            open={open}
            title="Create a new collection"
            okText="Create"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        onCreate(values);
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{
                    modifier: 'public',
                }}
            >
                <Form.Item
                    name="title"
                    label="Title"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the title of collection!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="description" label="Description">
                    <Input type="textarea" />
                </Form.Item>
                <Form.Item name="modifier" className="collection-create-form_last-form-item">
                    <Radio.Group>
                        <Radio value="public">Public</Radio>
                        <Radio value="private">Private</Radio>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </Modal>
        </>
    );

}

export default EchSuperUserEdit;