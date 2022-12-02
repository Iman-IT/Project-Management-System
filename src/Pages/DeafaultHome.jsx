import React from 'react'

import {Button, Col, Layout, Row,Typography ,Space, Image} from 'antd';
const { Header, Content, Footer } = Layout;
import styled from 'styled-components';
import { RightCircleFilled } from '@ant-design/icons'

const { Title } = Typography;
function DeafaultHome ()
{
 return (
    <Wrapper>
     
     
      <Content className='bgimg'>
        <Row>
     
        <Col  md={12} sm={12} className='front'>
        <Space direction='vertical'>
          <h1 className='h1' >Project Management System</h1>
          <Title level={3}>Manage Your Final Year Project Here</Title> 
              <Button type='primary'>Get Started  <RightCircleFilled /> </Button>
              </Space>     
          </Col>
          <Col md={12} sm={8} className='frimg'>
            <Image src='dhome.jpg' width={'auto'}/>
          </Col>
        
</Row>

</Content>
      </Wrapper>
     
  )
}

export default DeafaultHome
const Wrapper = styled.div`
.front{
  margin-top: 4rem;
  padding-left: 3rem;
}
.frimg{
  margin-top: 1.5rem;
}

`;