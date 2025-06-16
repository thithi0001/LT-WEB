import React from 'react';
import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';

function HomeIcon() {
  return (
    <div>
      <Link to="/">
        <MdHome size={24} className="home-icon" />
      </Link>
    </div>
  );
}

export default HomeIcon;
