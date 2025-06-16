import React, { useState, useEffect } from 'react';
import ProductDetailModal from './ProductDetailModal';
import { FaShoppingCart } from 'react-icons/fa';
import useCartStore from '../stores/cartStore';
import '../assets/css/ProductCard.css';

function ProductCard({ product }) {
  const [showModal, setShowModal] = useState(false);

  const addToCart = useCartStore(state => state.addToCart);
  const cartItem = useCartStore(state =>
    state.cartItems.find(item => item.product.id === product.id)
  );

  const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 0);
  const [showQuantity, setShowQuantity] = useState(cartItem ? cartItem.quantity > 0 : false);

  // 🔄 Đồng bộ khi cartItem thay đổi
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
    addToCart(product, 1); // tự động hiển thị input
  };

  const handleQuantityChange = (e) => {
    const val = parseInt(e.target.value);
    if (isNaN(val) || val < 0) return;

    setQuantity(val);
    addToCart(product, val); // nếu val = 0 sẽ xóa khỏi cart (đúng theo logic cartStore)
  };

  return (
    <div className="product-card">
      <div className="image-wrapper">
        <img src={product.image} alt={product.name} className="product-image" />
        <button className="info-button" onClick={() => setShowModal(true)}>i</button>
      </div>

      <div className="product-name">{product.name}</div>

      <div className="product-bottom">
        <div className="product-price">{product.price}đ</div>

        {showQuantity ? (
          <input
            type="number"
            min={0}
            value={quantity}
            onChange={handleQuantityChange}
            className="quantity-input"
          />
        ) : (
          <button className="cart-icon" onClick={handleCartClick}>
            <FaShoppingCart />
          </button>
        )}
      </div>

      {showModal && (
        <ProductDetailModal
          product={product}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default ProductCard;
