import React from 'react'
import { Menu,Button } from 'antd'
import { ThunderboltOutlined, FireFilled } from '@ant-design/icons'
import { Link,Router} from '@reach/router';
import DeafaultHome from '../Pages/DeafaultHome';
import LogIn from '../Pages/LogIn'
import Register from '../Pages/Register'
import MenuItem from 'antd/lib/menu/MenuItem';

const DefaultNav = () => {
  return (
      <>
   <Menu fontSize={'1rem'}
        style={{
        width: '100', display:'block' ,fontSize:'1rem',paddingTop:'4px', fontWeight:'bold'}}
       
        mode="horizontal"
          >
          <MenuItem key={"/"}>
          <Link to="/" style={{ fontSize: '100%', color:'#7b68ee' }}><FireFilled className='logo' style={{fontSize:'200%'}}/>  Project Management</Link>
              </MenuItem>     

              <MenuItem key={'/login'} style={{float:'right'}}>
              <Link to="login"> <Button type='primary' className='btn'>Log In</Button></Link>
              </MenuItem>

              <MenuItem key={'/register'} style={{float:'right'}}>
                  <Link to="/register"><Button type='primary' className='btn'>Register</Button></Link> 
                  
              </MenuItem>

          </Menu>
{/* *****************************  Routing  ********************************** */}

          <Router>
              <DeafaultHome path='/' />   
              <LogIn path="/login " />
         <Register path='/register' />     


      </Router>
        </>
  )
}

export default DefaultNav