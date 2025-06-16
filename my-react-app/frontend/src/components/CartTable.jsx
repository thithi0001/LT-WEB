import React from 'react';

function CartTable() {
  return (
    <table id="cart-table">
      <thead>
        <tr>
          <th>Hình ảnh sản phẩm</th>
          <th>Sản Phẩm</th>
          <th>Giá</th>
          <th>Số Lượng</th>
          <th>Tổng</th>
          <th>Thao Tác</th>
        </tr>
      </thead>
      <tbody>
        {/* Dữ liệu cartItem sẽ được render ở đây */}
      </tbody>
    </table>
  );
}

export default CartTable;
