import { Link, useLocation } from 'react-router-dom';
import '../assets/css/NavBarCustomer.css';

function NavBarCustomer() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="navbar-customer">
      <ul className="navbar-links">
        <li>
          <Link to="/" className={currentPath === '/' ? 'active' : ''}>Trang chủ</Link>
        </li>
        <li>
          <Link to="/products" className={currentPath === '/products' ? 'active' : ''}>Tất cả sản phẩm</Link>
        </li>
        <li>
          <Link to="/promotion" className={currentPath === '/promotion' ? 'active' : ''}>Khuyến mãi</Link>
        </li>
        <li>
          <Link to="/cart" className={currentPath === '/cart' ? 'active' : ''}>Giỏ hàng</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBarCustomer;
