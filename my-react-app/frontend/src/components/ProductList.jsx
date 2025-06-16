import '../assets/css/ProductList.css';
import ProductCard from './ProductCard';

function ProductList({ products = [], onPageChange, currentPage = 1, totalPages = 5 }) {
  return (
    <div className="product-list-container">
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <div className="pagination-controls">
        <button
          className="pagination-button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          &lt;
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`pagination-button ${i + 1 === currentPage ? 'active' : ''}`}
            onClick={() => onPageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="pagination-button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default ProductList;
