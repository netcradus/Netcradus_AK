import React from 'react';
import { useApp } from '../App';

export default function FloatingBar() {
  const { openModal, openDrawer } = useApp();

  return (
    <aside className="floating-contact-bar">
      <button className="floating-btn enquire-btn" onClick={() => openDrawer('enquire')}>
        <i className="fa-solid fa-pen-to-square"></i>
        <span>Enquire Now</span>
      </button>
      <a href="https://wa.me/911800121008" target="_blank" rel="noopener noreferrer" className="floating-btn whatsapp-btn">
        <i className="fa-brands fa-whatsapp"></i>
        <span>WhatsApp</span>
      </a>
      <button className="floating-btn call-btn" onClick={() => openModal('call')}>
        <i className="fa-solid fa-phone-volume"></i>
        <span>Call Us</span>
      </button>
    </aside>
  );
}
