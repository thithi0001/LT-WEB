import React, { useState } from 'react';
import '../assets/css/Header.css';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      console.log('Tìm kiếm:', searchTerm);
    }
  };

  return (
    <header className="header">
      <div className="header-section left">
        <img src="/logo.png" alt="logo" className="logo" />
        <h4 className="brand">ĂN VẶT 24H</h4>
      </div>

      <div className="header-section center">
        <input
          type="text"
          className="search-input"
          placeholder="Nhập tên sản phẩm"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className="search-button" onClick={handleSearch}>🔍</button>
      </div>

      <div className="header-section right">
        <button className="login-button">Đăng nhập</button>
      </div>
    </header>
  );
}

export default Header;
