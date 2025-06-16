import { Link } from 'react-router-dom';
import './Sidebar.css';

function SideBarAdmin() {
  return (
    <div className="sidebar">
      <h2 className="title">MENU</h2>
      <ul>
        <li><Link to="/">TỔNG QUAN</Link></li>
        <li><Link to="/thong-tin-tai-khoan">THÔNG TIN TÀI KHOẢN</Link></li>
        <li><Link to="/xem-doanh-thu">XEM DOANH THU</Link></li>
      </ul>
    </div>
  );
}

export default SideBarAdmin;
