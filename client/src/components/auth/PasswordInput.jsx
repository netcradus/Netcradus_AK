import React, { useState } from 'react';

export default function PasswordInput({
  id,
  name,
  label = 'Password',
  value,
  onChange,
  placeholder = '••••••••',
  error,
  required = true,
  autoComplete = 'current-password',
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="form-group">
      <label htmlFor={id}>
        {label} {required && '*'}
      </label>
      <div className="password-input-wrapper" style={{ position: 'relative' }}>
        <input
          type={showPassword ? 'text' : 'password'}
          id={id}
          name={name}
          className={`form-input ${error ? 'input-error' : ''}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          style={{ paddingRight: '42px' }}
        />
        <button
          type="button"
          className="password-toggle-btn"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          tabIndex={-1}
          style={{
            position: 'absolute',
            right: '14px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--text-muted)',
            fontSize: '1rem',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
        </button>
      </div>
      {error && (
        <div
          className="field-error"
          style={{
            color: '#ff4757',
            fontSize: '0.8rem',
            marginTop: '5px',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
          }}
        >
          <i className="fa-solid fa-circle-exclamation"></i> {error}
        </div>
      )}
    </div>
  );
}
