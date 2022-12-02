import React from 'react'
import { Router } from '@reach/router'
import DeafaultHome from '../Pages/DeafaultHome'
import LogIn from '../Pages/LogIn'
import Register from '../Pages/Register'
const Router = () => {
  return (
      <>
          <Router>
              <DeafaultHome path='/' />   
              <LogIn path="/login " />
         <Register path='/register' />     


      </Router>
      
      </>
  )
}

export default Router