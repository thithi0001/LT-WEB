import React from 'react';

const suggested = [
  "Bánh tráng phơi sương 1",
  "Bánh tráng phơi sương 2",
  "Bánh tráng phơi sương 3",
  "Bánh tráng phơi sương 4",
  "Bánh tráng phơi sương 5",
  "Bánh tráng phơi sương 6"
];

function SuggestedProducts() {
  return (
    <div>
      <div>Có thể bạn cũng muốn</div>
      <div className="product-grid">
        {suggested.map((title, index) => (
          <div className="product-item" key={index}>
            <a href="productinfo.html">
              <img src="./assets/img/banh-trang-phoi-suong.png" alt={title} />
            </a>
            <div className="product-info">
              <div className="product-title">{title}</div>
              <div className="product-price">20.000₫</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuggestedProducts;
