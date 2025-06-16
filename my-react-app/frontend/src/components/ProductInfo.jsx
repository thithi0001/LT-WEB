import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductInfo.css';

////////////////////////////////////////////////Demo////////////////////////////////////////////////////////////

const ProductInfo = () => {
    const [productData, setProductData] = useState(null);
    const [selectedWeight, setSelectedWeight] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const [showWeights, setShowWeights] = useState(false);
  
    useEffect(() => {
      const product = JSON.parse(localStorage.getItem('product'));
      if (product) {
        setProductData(product);
        setSelectedWeight(product.weights[0].value);
      }
    }, []);
  
    const handleWeightClick = (weight) => {
      setSelectedWeight(weight.value);
      setShowWeights(false);
    };
  
    const updateQuantity = (value) => {
      const newQuantity = Math.max(0, Math.min(100, parseInt(value) || 0));
      setQuantity(newQuantity);
    };
  
    const handleAddToCart = () => {
      if (quantity <= 0) {
        alert("Vui lòng chọn số lượng sản phẩm!");
        return;
      }
  
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const index = cart.findIndex(
        (item) => item.name === productData.name && item.weight === selectedWeight
      );
  
      const price = parseInt(productData.price.replaceAll(".", ""));
  
      if (index !== -1) {
        cart[index].quantity += quantity;
      } else {
        cart.push({
          name: productData.name,
          price,
          weight: selectedWeight,
          quantity,
          image: productData.image,
          total: price * quantity
        });
      }
  
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Đã thêm vào giỏ hàng!");
    };
  
    if (!productData) return <p>Đang tải sản phẩm...</p>;const ProductInfo = () => {
  const [productData, setProductData] = useState(null);
  const [selectedWeight, setSelectedWeight] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [showWeights, setShowWeights] = useState(false);

  useEffect(() => {
    const product = JSON.parse(localStorage.getItem('product'));
    if (product) {
      setProductData(product);
      setSelectedWeight(product.weights[0].value);
    }
  }, []);

  const handleWeightClick = (weight) => {
    setSelectedWeight(weight.value);
    setShowWeights(false);
  };

  const updateQuantity = (value) => {
    const newQuantity = Math.max(0, Math.min(100, parseInt(value) || 0));
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    if (quantity <= 0) {
      alert("Vui lòng chọn số lượng sản phẩm!");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cart.findIndex(
      (item) => item.name === productData.name && item.weight === selectedWeight
    );

    const price = parseInt(productData.price.replaceAll(".", ""));

    if (index !== -1) {
      cart[index].quantity += quantity;
    } else {
      cart.push({
        name: productData.name,
        price,
        weight: selectedWeight,
        quantity,
        image: productData.image,
        total: price * quantity
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Đã thêm vào giỏ hàng!");
  };

  if (!productData) return <p>Đang tải sản phẩm...</p>;

////////////////////////////////////////////////Demo///////////////////////////////////////////////////////////
// const ProductInfo = ({ productId, onClose }) => {
//   const [productData, setProductData] = useState(null);
//   const [selectedWeight, setSelectedWeight] = useState(null);
//   const [quantity, setQuantity] = useState(0);
//   const [showWeights, setShowWeights] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         setLoading(true);
//         const res = await axios.get(`https://api.example.com/products/${productId}`);
//         const data = res.data;
//         setProductData(data);
//         setSelectedWeight(data.weights[0].value);
//       } catch (err) {
//         setError("Không thể tải sản phẩm.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   const updateQuantity = (value) => {
//     const newQuantity = Math.max(0, Math.min(100, parseInt(value) || 0));
//     setQuantity(newQuantity);
//   };

//   const handleWeightClick = (weight) => {
//     setSelectedWeight(weight.value);
//     setShowWeights(false);
//   };

//   const handleAddToCart = () => {
//     if (quantity <= 0) {
//       alert("Vui lòng chọn số lượng sản phẩm!");
//       return;
//     }

//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const index = cart.findIndex(
//       (item) => item.name === productData.name && item.weight === selectedWeight
//     );

//     const price = parseInt(productData.price.replaceAll(".", ""));

//     if (index !== -1) {
//       cart[index].quantity += quantity;
//     } else {
//       cart.push({
//         name: productData.name,
//         price,
//         weight: selectedWeight,
//         quantity,
//         image: productData.image,
//         total: price * quantity
//       });
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));
//     alert("Đã thêm vào giỏ hàng!");
//   };

//   if (loading) return <div className="product-overlay">Đang tải sản phẩm...</div>;
//   if (error) return <div className="product-overlay">{error}</div>;
//   if (!productData) return null;

  return (
    <div className="product-overlay">
      <div className="product-modal">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>THÔNG TIN SẢN PHẨM</h2>
        <div className="product-content">
          <div className="product-image-container">
            <img src={productData.image} alt={productData.name} />
          </div>
          <div className="product-info">
            <h3>{productData.name}</h3>
            <p>{parseInt(productData.price).toLocaleString()} VNĐ</p>
            <div className="weight-selector">
              <div
                onClick={() => setShowWeights(!showWeights)}
                className="selected-weight-display"
              >
                {productData.weights.find(w => w.value === selectedWeight)?.display}
              </div>
              {showWeights && (
                <ul className="weight-options">
                  {productData.weights.map(weight => (
                    <li key={weight.value} onClick={() => handleWeightClick(weight)}>
                      {weight.display}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="quantity-control">
              <button onClick={() => updateQuantity(quantity - 1)}>-</button>
              <span
                contentEditable
                onInput={(e) => updateQuantity(e.currentTarget.textContent)}
                suppressContentEditableWarning={true}
              >
                {quantity}
              </span>
              <button onClick={() => updateQuantity(quantity + 1)}>+</button>
            </div>
            <button onClick={handleAddToCart} className="add-to-cart-button">
              <img src="/assets/img/cart-icon.png" alt="Giỏ hàng" className="cart-icon" />
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
        <p className="description-title">Mô tả:</p>
        <p>{productData.description}</p>
        <table className="details-table">
          <thead>
            <tr>
              <th>Thông tin</th>
              <th>Chi tiết</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(productData.details).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
};
export default ProductInfo;
