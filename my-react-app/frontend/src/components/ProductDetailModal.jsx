import React, { useState, useEffect } from 'react';
import '../assets/css/ProductDetailModal.css';
import { FaShoppingCart } from 'react-icons/fa';
import useCartStore from '../stores/cartStore';

function ProductDetailModal({ product, onClose }) {
  const cartItem = useCartStore(state =>
    (state.cartItems || []).find(item => item.product.id === product.id)
  );
  const addToCart = useCartStore((state) => state.addToCart);

  const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 0);
  const [showQuantity, setShowQuantity] = useState(cartItem ? cartItem.quantity > 0 : false);

  // Đồng bộ với cart store
  useEffect(() => {
    if (cartItem) {
      setQuantity(cartItem.quantity);
      setShowQuantity(cartItem.quantity > 0);
    } else {
      setQuantity(0);
      setShowQuantity(false);
    }
  }, [cartItem]);

  const handleCartClick = () => {
    setQuantity(1);
    addToCart(product, 1);
    setShowQuantity(true);
  };

  const handleQuantityChange = (e) => {
    const val = parseInt(e.target.value);
    if (isNaN(val) || val < 0) return;

    setQuantity(val);
    addToCart(product, val);

    if (val === 0) setShowQuantity(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h5 className="text-center fw-bold">THÔNG TIN SẢN PHẨM</h5>

        <div className="row">
          <div className="col-md-4">
            <img src={product.image} className="img-fluid" alt={product.name} />
          </div>
          <div className="col-md-8">
            <h6>{product.name}</h6>

            <div className="d-flex align-items-center gap-2 mb-2">
              <div className="fw-bold text-danger fs-5">{product.price}đ</div>

              {showQuantity ? (
                <input
                  type="number"
                  min={0}
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="form-control quantity-input"
                  style={{ maxWidth: '80px' }}
                />
              ) : (
                <button
                className="btn btn-outline-primary d-inline-flex align-items-center"
                style={{ whiteSpace: 'nowrap', gap: '6px', minWidth: '170px' }}
                onClick={handleCartClick}
                >
                <FaShoppingCart />
                <span>Thêm vào giỏ hàng</span>
                </button>
              )}
            </div>

            <p><strong>Mô tả:</strong> {product.description}</p>

            <table className="table table-sm table-bordered bg-light">
              <tbody>
                <tr><td>Loại</td><td>{product.type}</td></tr>
                <tr><td>Năng lượng</td><td>{product.energy}</td></tr>
                <tr><td>Lưu ý</td><td>{product.notice}</td></tr>
                <tr><td>Phù hợp</td><td>{product.suitable}</td></tr>
                <tr><td>Hạn sử dụng</td><td>{product.expire}</td></tr>
                <tr><td>Thương hiệu</td><td>{product.brand}</td></tr>
                <tr><td>Nơi sản xuất</td><td>{product.origin}</td></tr>
                <tr><td>Bảo quản</td><td>{product.preserve}</td></tr>
                <tr><td>Thành phần</td><td>{product.ingredients}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailModal;
