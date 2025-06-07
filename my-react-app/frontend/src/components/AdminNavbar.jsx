import React from 'react'
import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <nav>
        <NavLink to='/'></NavLink> {/* tài khoản admin */}
        <NavLink to='/overview'></NavLink> {/* tổng quan */}
        <NavLink to='/revenue'></NavLink> {/* xem doanh thu */}
        <NavLink to='/stock'></NavLink> {/* kho hàng */}
        <NavLink to='/'></NavLink> {/* quản lý khuyến mãi */}
        <NavLink to='/'></NavLink> {/* về vận chuyển */}
    </nav>
  )
}

export default AdminNavbar