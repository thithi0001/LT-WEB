import React from 'react'
import { Outlet } from 'react-router-dom'
import ManagerNavbar from '../components/ManagerNavbar'

const ManagerLayout = () => {
  return (
    <>
        <ManagerNavbar />
        <Outlet />
    </>
  )
}

export default ManagerLayout