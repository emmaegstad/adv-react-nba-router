import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <div className="Header">
      <img className="logo" src={logo} alt="logo" />
      <Link to="/">
        <h1 className="page-title">Creatures of Hyrule</h1>
      </Link>
    </div>
  );
}
