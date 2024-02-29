import {
  ProForm,
  ProFormDependency,
  ProFormGroup,
  ProFormList,
  ProFormText,
} from '@ant-design/pro-components';
import { Form } from 'antd';
// import type { NamePath } from 'antd/lib/form/interface';

const Test01 = () => {

  const initialValues = {
    organization:{
      step_01: {
        profile_details: {
          name: 'This is initial title',
          type: '',
          registration_number: '',
        },
        contact_details: {
          phone_number: '',
          email: '',
          website: '',
          person: ['Wu Jiahao', 'Zhou Xingxing'],
        },
      },
      step_02: {
        policies: [
          { policy_id: 1, policy_seats: 2},
          { policy_id: 2, policy_seats: 4},
          { policy_id: 3, policy_seats: 7},
        ],
      },
    },
  };

  const depName1= [
    ['organization', 'step_01', 'profile_details', 'name'],
    ['organization', 'step_01', 'profile_details', 'type'],
    ['organization', 'step_01', 'profile_details', 'registration_number'],
    ['organization', 'step_01', 'contact_details', 'phone_number'],
    ['organization', 'step_01', 'contact_details', 'email'],
    ['organization', 'step_01', 'contact_details', 'website'],
    ['organization', 'step_01', 'contact_details', 'person'],

    ['organization', 'step_02', 'policies'],
    // ['organization', 'step_02', 'policies', 'policy_id'],
    // ['organization', 'step_02', 'policies', 'policy_seats'],

  ];
  // const depName2 = ['a', 'b', ['c', 'a']];
  // const depName3 = ['a', 'b', ['c', 'a']];
  return (
    <ProForm initialValues={initialValues}>
      <ProFormGroup>
        <ProFormText name={['organization', 'step_01', 'profile_details', 'name']} label="Name" />
        <ProFormText name={['organization', 'step_01', 'profile_details', 'type']} label="Type" />
      </ProFormGroup>
      <ProFormGroup title="Policies">
        <ProFormList name={['organization', 'step_02', 'policies']}>
          <ProFormGroup key="group">
            <ProFormText name="policy_id" label="Policy ID" />
            <ProFormText name="policy_seats" label="Policy Seats" />
            {/*<ProFormDependency name={depName3}>*/}
            {/*{(depValues) => (*/}
            {/*  <Form.Item*/}
            {/*    label={`搜集依赖值（情形3） <ProFormDependency name={${JSON.stringify(*/}
            {/*      depName3,*/}
            {/*    )}}>`}*/}
            {/*    extra="a, b, c.a取自局部"*/}
            {/*  >*/}
            {/*    <pre>*/}
            {/*      <code>{JSON.stringify(depValues, null, 2)}</code>*/}
            {/*    </pre>*/}
            {/*  </Form.Item>*/}
            {/*)}*/}
            {/*</ProFormDependency>*/}
          </ProFormGroup>
        </ProFormList>
      </ProFormGroup>
      <ProFormGroup
        // title={`收集依赖值（情形1) <ProFormDependency name={${JSON.stringify(
        //   depName1,
        // )}}>`}
        title='JSON Result'
      >
        <ProFormDependency name={depName1}>
          {(depValues) => (
            <pre>
              <code>{JSON.stringify(depValues)}</code>
            </pre>
          )}
        </ProFormDependency>
      </ProFormGroup>
    </ProForm>
  );
};

export default Test01;
