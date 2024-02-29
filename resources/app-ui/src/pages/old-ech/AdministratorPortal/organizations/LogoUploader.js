import React, {useState} from 'react';
import {Button, message, Upload, Modal, Input, Tooltip, Form} from 'antd'

import { InboxOutlined, EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const {Dragger} = Upload;

/* Start - Logo Uploader */
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

/* End- Logo Uploader */

const waitTime = (time= 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const uploadButton = (
  <div>
    {/*<PlusOutlined />*/}
    <InboxOutlined/>
    <div
      style={{
        marginTop: 8,
      }}
    >
      Organization Logo
    </div>
  </div>
);

const handleCancel = () => setPreviewOpen(false);
const handlePreview = async (file) => {
  if (!file.url && !file.preview) {
    file.preview = await getBase64(file.originFileObj);
  }
  setPreviewImage(file.url || file.preview);
  setPreviewOpen(true);
  setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
};


const handleChange = (newFileList) => {
  // ({fileList: newFileList}) => setFileList(newFileList);
  setFileList(newFileList);
};

const LogoUploader = () => {

// tmp false
  const [visible, setVisible] = useState(false);
  /* Start - Logo Uploader */
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  // const [fileList, setFileList] = useState([
  //   // {
  //   //   uid: '-1',
  //   //   name: 'image.png',
  //   //   status: 'done',
  //   //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  //   // }
  // ]);

  /* End - Logo Uploader */

  return(
    // <div>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-circle"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
    // </div>
  );

};
export default LogoUploader;
