import React, { Fragment } from 'react'
import { Outlet } from 'react-router'
import Footer from '../../layout/admin/Footer/Footer'
import Header from '../../layout/admin/Header/Header'

const AdminRoot = () => {
  return (
  <Fragment>
  <Header/>
   <Outlet/>
   <Footer/>
  </Fragment>
  
 
  )
}

export default AdminRoot