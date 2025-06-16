import '../assets/css/ProductSlider.css';

function ProductSlider({ image }) {
  return (
    <div className="product-slider">
      <h4>🔥 BEST SELLER</h4>
      <div className="slider-container">
        <button className="arrow left">{'<'}</button>
        <img src={image} alt="Best seller" />
        <button className="arrow right">{'>'}</button>
      </div>
    </div>
  );
}

export default ProductSlider;
