import React from 'react';
import HomeIcon from '../components/HomeIcon';
import CartTable from '../components/CartTable';
import CartSummary from '../components/CartSummary';
import SuggestedProducts from '../components/SuggestedProducts';
import '../assets/css/CartPage.css';

function CartPage() {
  return (
    <div className="container">
      <HomeIcon />
      <h1>Giỏ Hàng</h1>
      <CartTable />
      <div>
        <i className="material-icons small-icon">card_giftcard</i>
        <label htmlFor="voucher">Thêm mã khuyến mãi</label>
      </div>
      <CartSummary />
      <div id="total-button" className="text-right">
        <button className="checkout">Đặt hàng</button>
      </div>
      <SuggestedProducts />
    </div>
  );
}

export default CartPage;
