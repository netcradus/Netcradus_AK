import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="about-page">
      {/* PAGE HEADER */}
      <section className="page-banner-section">
        <div className="container text-center">
          <span className="section-badge">OUR STORY & MISSION</span>
          <h1 className="page-title">About Netcradus Academia</h1>
          <p className="page-subtitle">Pioneering practical cybersecurity and AI education for the next generation of tech leaders.</p>
        </div>
      </section>

      {/* ABOUT CONTENT SECTION */}
      <section className="section about-section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <span className="section-badge">WHY NETCRADUS ACADEMIA</span>
              <h2 className="section-title">Empowering Future Cyber & AI Leaders</h2>
              <p className="about-desc">
                At Netcradus Academia, we bridge the gap between traditional academic education and high-demand IT industry standards. Our curriculum is crafted by certified Ethical Hackers, AI Engineers, and Cloud Architects.
              </p>
              
              <div className="about-highlights">
                <div className="highlight-card">
                  <div className="hl-icon"><i className="fa-solid fa-microchip"></i></div>
                  <div className="hl-body">
                    <h4>24/7 Virtual Cloud & Security Labs</h4>
                    <p>Gain access to isolated sandboxes, vulnerable target machines, and enterprise AI clusters.</p>
                  </div>
                </div>

                <div className="highlight-card">
                  <div className="hl-icon"><i className="fa-solid fa-user-graduate"></i></div>
                  <div className="hl-body">
                    <h4>Guaranteed Internship Experience</h4>
                    <p>Work on real client deliverables under Netcradus Security R&D division.</p>
                  </div>
                </div>

                <div className="highlight-card">
                  <div className="hl-icon"><i className="fa-solid fa-handshake"></i></div>
                  <div className="hl-body">
                    <h4>Dedicated Placement Support</h4>
                    <p>1-on-1 resume reviews, mock technical interviews, and direct referral drives with 500+ recruiters.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-visual">
              <div className="glass-tech-box">
                <div className="tech-box-header">
                  <span className="status-indicator"></span>
                  <span>Netcradus Ecosystem</span>
                </div>
                <div className="tech-box-body">
                  <div className="eco-item">
                    <i className="fa-solid fa-terminal"></i>
                    <span>Live Hackathons & CTF Competitions</span>
                  </div>
                  <div className="eco-item">
                    <i className="fa-solid fa-award"></i>
                    <span>CEH, AWS & CompTIA Global Prep</span>
                  </div>
                  <div className="eco-item">
                    <i className="fa-solid fa-users-gear"></i>
                    <span>Mentor 1-on-1 Doubts Resolution</span>
                  </div>
                </div>
                <div className="cta-banner-inside">
                  <p>Ready to level up your career?</p>
                  <Link to="/courses" className="btn btn-cyan btn-sm">Explore Courses</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
