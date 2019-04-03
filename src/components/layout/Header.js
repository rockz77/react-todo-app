import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.svg';

function Header() {
  return (
    <header className="header">
      <h1 className="main-title">CK Item Manager</h1>
      <Link className="main-link" to="/"><img src={logo} className="main-logo" alt="logo" /></Link>
      <div>
        <Link className="main-link" to="/manage-items">Manage Items</Link> | <Link className="main-link" to="/request-items">Request Items</Link> | <Link className="main-link" to="/info">Info</Link>
      </div>
    </header>
  )
}

export default Header;
