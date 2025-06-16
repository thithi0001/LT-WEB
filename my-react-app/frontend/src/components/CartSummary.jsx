import React from 'react';

function CartSummary() {
  return (
    <table>
      <tbody>
        <tr><td>Tổng Giá</td><td className="text-right" id="grand-total">0 VNĐ</td></tr>
        <tr><td>Phí vận chuyển</td><td className="text-right" id="transFee">10.000 VNĐ</td></tr>
        <tr><td>Voucher giảm giá</td><td className="text-right" id="voucher">- 0.000 VNĐ</td></tr>
        <tr><td>Tổng tiền thanh toán</td><td className="text-right" id="bill">200.000 VNĐ</td></tr>
      </tbody>
    </table>
  );
}

export default CartSummary;
