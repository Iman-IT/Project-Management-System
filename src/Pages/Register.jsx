import { Form } from 'antd'
import React from 'react'

const Register = () => {
  return (
      <>
          <Form layout='horizontal'
       labelCol={{    span: 4,    }} wrapperCol={{   span: 14,  }}
          >
          
              
          <Form.Item label="Name">
          <Input />   </Form.Item>
        <Form.Item label="Father Name">
          <Input />
              </Form.Item> 
              
          
          
          </Form>   
          
          
         </>
  )
}

export default Register