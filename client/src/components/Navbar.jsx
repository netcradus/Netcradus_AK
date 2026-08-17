import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useApp } from '../App';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useApp();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar" id="navbar">
      <div className="container navbar-container">
        {/* Logo */}
        <NavLink to="/" className="logo brand-logo-link" onClick={closeMobileMenu}>
          <img src="/images/logo.png" alt="NETCRADUS™" className="site-logo-img" />
          <span className="logo-sub-tag">ACADEMIA</span>
        </NavLink>

        {/* Desktop Nav Links */}
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} id="nav-menu">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMobileMenu} end>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/courses" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>
              Courses
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/certificate" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>
              Certificate
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Navbar Right Action */}
        <div className="nav-actions">
          <button className="btn btn-login-pill" onClick={() => openModal('login')}>
            <i className="fa-regular fa-user"></i> Login / Sign Up
          </button>
          <button className="hamburger" id="hamburger" aria-label="Toggle navigation" onClick={toggleMobileMenu}>
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
