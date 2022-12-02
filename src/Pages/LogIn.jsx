import React from 'react'
import { Select,Form,Input,Button } from 'antd';

const LogIn = () =>
{
    const { Option } = Select;
    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    
    onViewChange = ( value ) =>
    {
        switch ( value )
        {
            case 'Student':
                this.formRef.current.setFieldsValue( {
                    note: 'Hi, man!',
                } );
                return;
            case 'SuperVisor':
                this.formRef.current.setFieldsValue( {
                    note: 'Hi, lady!',
                } );
                return;
            default:
        }
    };
    
      return (
        <Form
          name="basic" labelCol={{  span: 8,  }}
          wrapperCol={{   span: 16, }}
          initialValues={{  remember: true,  }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="on"  >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },  ]} >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="Password"    name="password"
            rules={[
              {  required: true,  message: 'Please input your password!', },
            ]}  >
            <Input.Password />
              </Form.Item>
              <Form.Item
          name="Select"
          label="View"
          rules={[
            {
              required: true,
                      }, ]} >
                   <Select
            placeholder="Select a option and change input text above"
            onChange={this.onViewChange}
            allowClear
          >
            <Option value="Student">Student</Option>
            <Option value="SuperVisor">SuperVisor</Option>
            {/* <Option value="other">other</Option> */}
          </Select>




              </Form.Item>   


    
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
    
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
  )
}

export default LogIn