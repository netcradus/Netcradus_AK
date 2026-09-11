import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useApp } from '../../App';

export default function AuthLayoutContainer() {
  const { toast } = useApp();

  return (
    <div className="auth-site-wrapper">
      {/* Minimal Clean Header for Auth Pages */}
      <header className="auth-minimal-header">
        <div className="container auth-minimal-header-container">
          <Link to="/" className="auth-header-brand" title="Return to Netcradus Home">
            <img src="/images/logo.png" alt="Netcradus Academy" className="auth-header-logo" />
          </Link>

          <Link to="/" className="auth-back-home-link">
            <i className="fa-solid fa-arrow-left"></i>
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Auth View (Login / Signup) */}
      <main className="auth-site-main">
        <Outlet />
      </main>

      {/* Global Toast Notification */}
      <div className={`toast ${toast.show ? 'show' : ''}`} id="toast">
        <div className="toast-icon">
          <i className="fa-solid fa-circle-check"></i>
        </div>
        <div className="toast-message" id="toastMessage">
          {toast.message}
        </div>
      </div>
    </div>
  );
}
