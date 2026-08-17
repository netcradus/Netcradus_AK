import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingBar from './FloatingBar';
import Modals from './Modals';
import { useApp } from '../App';

export default function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { toast } = useApp();

  return (
    <>
      {/* Conditionally Render Top Bar (hidden on home page to match original site layout) */}
      {!isHomePage && (
        <header className="top-bar">
          <div className="container top-bar-container">
            <div className="top-bar-contact">
              <a href="tel:1800121008800" className="top-link">
                <i className="fa-solid fa-phone"></i> 1800 121 008800
              </a>
              <span className="divider">|</span>
              <a href="mailto:academia@netcradus.com" className="top-link">
                <i className="fa-regular fa-envelope"></i> academia@netcradus.com
              </a>
            </div>
            <div className="top-bar-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </header>
      )}

      {/* Main Navigation Header */}
      <Navbar />

      {/* Floating Quick Action Contacts sidebar */}
      <FloatingBar />

      {/* Page Content Output */}
      <Outlet />

      {/* Footer */}
      <Footer />

      {/* Overlay Modals & Drawers */}
      <Modals />

      {/* Global Toast Alerts */}
      <div className={`toast ${toast.show ? 'show' : ''}`} id="toast">
        <div className="toast-icon">
          <i className="fa-solid fa-circle-check"></i>
        </div>
        <div className="toast-message" id="toastMessage">
          {toast.message}
        </div>
      </div>
    </>
  );
}
