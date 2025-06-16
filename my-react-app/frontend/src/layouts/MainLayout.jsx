import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import NavbarCustomer from '../components/NavBarCustomer'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <>
      <Header />
      <NavbarCustomer/>
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout