import React, { useRef, useEffect, useState } from 'react';
import '../assets/css/ProductSection.css';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';

function ProductSection({ title, products }) {
  const listRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const scrollByAmount = 250;

  const scrollLeft = () => {
    listRef.current.scrollBy({ left: -scrollByAmount, behavior: 'smooth' });
  };

  const scrollRight = () => {
    listRef.current.scrollBy({ left: scrollByAmount, behavior: 'smooth' });
  };

  useEffect(() => {
    const interval = setInterval(() => scrollRight(), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="product-section">
      <h4>{title}</h4>
      <div className="section-body">
        <button className="arrow left" onClick={scrollLeft}>{'<'}</button>
        <div className="product-list" ref={listRef}>
          {products.map((p, i) => (
            <ProductCard key={i} product={p} onInfoClick={setSelectedProduct} />
          ))}
        </div>
        <button className="arrow right" onClick={scrollRight}>{'>'}</button>
      </div>

      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

export default ProductSection;
