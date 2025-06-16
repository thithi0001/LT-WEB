import '../assets/css/ProductFilterSidebar.css';

function ProductFilterSidebar({ categories = [] }) {
  return (
    <div className="filter-sidebar">
      <h5 className="filter-title">Tất cả sản phẩm</h5>
      <ul className="filter-list">
        {categories.map((cat, idx) => (
          <li key={idx} className="filter-item">{cat}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductFilterSidebar;
