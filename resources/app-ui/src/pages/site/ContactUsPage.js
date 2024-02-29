import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { ProList } from '@ant-design/pro-components';
import { Button, Tag } from 'antd';

const IconText = ({ icon, text } ) => (
  <span>
    {/*{React.createElement(icon, { style: { marginInlineEnd: 8 } })}*/}
    {text}
  </span>
);

const dataSource = [
  {
    title: 'The Sky of Yuque',
  },
  {
    title: 'Ant Design',
  },
  {
    title: 'Ant Financial Experience Technology',
  },
  {
    title: 'TechUI',
  },
];


const ContactUsPage = () => {

  return (
    <ProList
      toolBarRender={() => {
        return [
          <Button key="3" type="primary">
            New
          </Button>,
        ];
      }}
      itemLayout="vertical"
      rowKey="id"
      headerTitle="vertical style"
      dataSource={dataSource}
      metas={{
        title: {},
        description: {
          render: () => (
            <>
              <Tag>Yuque Column</Tag>
              <Tag>Design language</Tag>
              <Tag>Ant Financial</Tag>
            </>
          ),
        },
        actions: {
          render: () => [
            <IconText
              icon={StarOutlined}
              text="156"
              key="list-vertical-star-o"
            />,
            <IconText
              icon={LikeOutlined}
              text="156"
              key="list-vertical-like-o"
            />,
            <IconText
              icon={MessageOutlined}
              text="2"
              key="list-vertical-message"
            />,
          ],
        },
        extra: {
          render: () => (
            <img
              width={272}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          ),
        },
        content: {
          render: () => {
            return (
              <div>
                Paragraph description: Ant Financial Design Platform
                design.alipay.com, with minimal workload, seamlessly connects to the Ant Financial ecosystem and provides experience solutions spanning design and development. Ant Financial Design Platform
                design.alipay.com, with minimal workload, seamlessly connects to the Ant Financial ecosystem to provide experience solutions spanning design and development.
              </div>
            );
          },
        },
      }}
    />
  );

};

export default ContactUsPage;
