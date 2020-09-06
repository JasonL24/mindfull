import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
      <div className="head-container">
          <h1 className="heading">MindFull</h1>
          <Link to="/">
            <button>Home</button>
          </Link>
      </div>
    )
}

export default Header;