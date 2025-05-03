import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Trang chủ</NavLink>
      <NavLink to="/products">Tất cả sản phẩm</NavLink>
      <NavLink to="/promotions">Khuyến mãi</NavLink>
      <NavLink to="/cart">Giỏ hàng</NavLink>
    </nav>
  );
};

export default Navbar;
