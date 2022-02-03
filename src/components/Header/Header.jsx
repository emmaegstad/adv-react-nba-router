import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <h1 className="page-title">Creatures of Hyrule</h1>
      </Link>
    </div>
  );
}
