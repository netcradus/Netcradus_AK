import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col brand-col">
          <Link to="/" className="logo brand-logo-link">
            <img src="/images/logo.png" alt="NETCRADUS™" className="site-logo-img" />
            <span className="logo-sub-tag">ACADEMIA</span>
          </Link>
          <p className="footer-desc">
            Netcradus Academia is India's premier cybersecurity and artificial intelligence skill development platform.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navigation Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/certificate">Certificate</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact & Support</h4>
          <p><i className="fa-solid fa-phone"></i> 1800 121 008800</p>
          <p><i className="fa-regular fa-envelope"></i> academia@netcradus.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>&copy; {new Date().getFullYear()} Netcradus Academia. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
