import React from 'react';
import { useApp } from '../App';

export default function Contact() {
  const { handleFormSubmit } = useApp();

  return (
    <div className="contact-page">
      {/* PAGE HEADER */}
      <section className="page-banner-section">
        <div className="container text-center">
          <span className="section-badge">GET IN TOUCH</span>
          <h1 className="page-title">Contact Career Desk</h1>
          <p className="page-subtitle">Speak with our certified tech advisors for personalized course counseling.</p>
        </div>
      </section>

      {/* CONTACT US SECTION */}
      <section className="section contact-section" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="section-badge">CAREER COUNSELING</span>
              <h2 className="section-title">Talk to Our Tech Career Expert</h2>
              <p className="contact-text">
                Whether you want to select the right course, inquire about fees, or schedule a campus visit, our career counselors are here to help you.
              </p>

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon"><i className="fa-solid fa-phone"></i></div>
                  <div>
                    <h5>Call Us Toll-Free</h5>
                    <p>1800 121 008800 (Mon - Sat, 9 AM - 8 PM)</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><i className="fa-regular fa-envelope"></i></div>
                  <div>
                    <h5>Email Support</h5>
                    <p>academia@netcradus.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><i className="fa-solid fa-location-dot"></i></div>
                  <div>
                    <h5>Headquarters Location</h5>
                    <p>Netcradus Innovation Park, Tech Zone 4, IT Corridor, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-card">
              <h3>Request Free Career Counseling</h3>
              <form id="mainContactForm" onSubmit={(e) => handleFormSubmit(e, 'Contact Form')}>
                <div className="form-group">
                  <label htmlFor="cName">Full Name *</label>
                  <input type="text" id="cName" className="form-input" placeholder="e.g. Rahul Sharma" required />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="cEmail">Email Address *</label>
                    <input type="email" id="cEmail" className="form-input" placeholder="name@example.com" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cPhone">Phone Number *</label>
                    <input type="tel" id="cPhone" className="form-input" placeholder="+91 9876543210" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="cCourse">Interested Course *</label>
                  <select id="cCourse" className="form-input" required>
                    <option value="">Select a course...</option>
                    <option value="Cyber Security">Ethical Hacking & VAPT</option>
                    <option value="AI & ML">AI & Machine Learning With GenAI</option>
                    <option value="Cloud Computing">AWS, Azure & GCP Cloud</option>
                    <option value="Data Science">Data Science & Analytics</option>
                    <option value="Full Stack">Full Stack MERN Development</option>
                    <option value="SOC Analyst">SOC Analyst & Incident Response</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="cMessage">Your Message / Query</label>
                  <textarea id="cMessage" className="form-input" rows={3} placeholder="Tell us about your background or requirements..."></textarea>
                </div>

                <button type="submit" className="btn btn-cyan btn-block">SUBMIT REQUEST</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
