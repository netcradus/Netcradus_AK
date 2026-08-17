import React from 'react';
import { useApp } from '../App';
import { courseData } from '../data/coursesData';

export default function Modals() {
  const {
    activeModal,
    activeDrawer,
    closeModal,
    closeDrawer,
    enrollCourseName,
    setEnrollCourseName,
    selectedCourseKey,
    handleFormSubmit,
    showToast
  } = useApp();

  const selectedCourse = courseData[selectedCourseKey];

  return (
    <>
      {/* 1. ENROLL MODAL */}
      <div className={`modal-backdrop ${activeModal === 'enroll' ? 'active' : ''}`} id="enrollModal">
        <div className="modal-card">
          <button className="modal-close" onClick={() => closeModal('enroll')}>&times;</button>
          <div className="modal-header">
            <div className="modal-icon"><i className="fa-solid fa-graduation-cap"></i></div>
            <h3>Enroll in Netcradus Academia</h3>
            <p>Select your preferred course track and submit your application</p>
          </div>
          <form onSubmit={(e) => handleFormSubmit(e, 'Enrollment Registration')}>
            <div className="form-group">
              <label htmlFor="enrollCourseName">Select Course / Program *</label>
              <select
                id="enrollCourseName"
                className="form-input"
                value={enrollCourseName}
                onChange={(e) => setEnrollCourseName(e.target.value)}
                required
              >
                <option value="" disabled>-- Select a Course or Track --</option>
                <optgroup label="Cyber Security & Defense">
                  <option value="Ethical Hacking & VAPT">Ethical Hacking & VAPT</option>
                  <option value="SOC Analyst & Network Defense">SOC Analyst & Network Defense</option>
                </optgroup>
                <optgroup label="Artificial Intelligence & Data">
                  <option value="AI & Machine Learning With Generative AI">AI & Machine Learning With Generative AI</option>
                  <option value="Data Analytics & Visualization">Data Analytics & Visualization</option>
                </optgroup>
                <optgroup label="Cloud & Software Development">
                  <option value="AWS, Azure & Google Cloud Architecture">AWS, Azure & Google Cloud Architecture</option>
                  <option value="MERN Stack Development">MERN Stack Development</option>
                </optgroup>
                <optgroup label="Corporate & Industry Projects">
                  <option value="Corporate Tech Upskilling Program">Corporate Tech Upskilling Program</option>
                  <option value="Netcradus Live Industry Projects">Netcradus Live Industry Projects</option>
                  <option value="SOC Threat Intelligence Engine Project">SOC Threat Intelligence Engine Project</option>
                  <option value="GenAI RAG Assistant Project">GenAI RAG Assistant Project</option>
                  <option value="Multi-Cloud Kubernetes Project">Multi-Cloud Kubernetes Project</option>
                  <option value="VAPT Web Audit Suite Project">VAPT Web Audit Suite Project</option>
                  <option value="Full Stack MERN SaaS Project">Full Stack MERN SaaS Project</option>
                  <option value="Financial Analytics Platform Project">Financial Analytics Platform Project</option>
                </optgroup>
              </select>
            </div>
            <div className="form-group">
              <label>Full Name *</label>
              <input type="text" className="form-input" placeholder="e.g. Rahul Sharma" required />
            </div>
            <div className="form-group">
              <label>Email Address *</label>
              <input type="email" className="form-input" placeholder="e.g. rahul@example.com" required />
            </div>
            <div className="form-group">
              <label>Phone / Mobile *</label>
              <input type="tel" className="form-input" placeholder="e.g. +91 98765 43210" required />
            </div>
            <button type="submit" className="btn btn-cyan btn-block">CONFIRM ENROLLMENT</button>
          </form>
        </div>
      </div>

      {/* 2. COURSE DETAILS MODAL */}
      <div className={`modal-backdrop ${activeModal === 'courseDetail' ? 'active' : ''}`} id="courseDetailModal">
        <div className="modal-card modal-lg">
          <button className="modal-close" onClick={() => closeModal('courseDetail')}>&times;</button>
          {selectedCourse && (
            <div id="courseDetailContent">
              <div style={{ position: 'relative', height: '180px', margin: '-25px -25px 20px -25px', borderRadius: '12px 12px 0 0', overflow: 'hidden' }}>
                <img src={selectedCourse.image} alt={selectedCourse.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(6,12,25,0.4) 0%, rgba(6,12,25,0.95) 100%)' }}></div>
                <div style={{ position: 'absolute', bottom: '15px', left: '20px', right: '20px', zIndex: 2 }}>
                  <span className="course-badge" style={{ display: 'inline-block', marginBottom: '6px' }}>{selectedCourse.category}</span>
                  <h2 style={{ fontSize: '1.6rem', color: '#ffffff', margin: 0 }}>{selectedCourse.title}</h2>
                </div>
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <p style={{ color: 'var(--cyan-primary)', fontSize: '0.95rem', fontWeight: 600 }}>
                  <i className="fa-regular fa-clock"></i> {selectedCourse.duration} | <i className="fa-solid fa-graduation-cap"></i> {selectedCourse.level}
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px', background: 'rgba(0,210,255,0.05)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-glow)' }}>
                <div>
                  <h5 style={{ color: 'var(--text-main)', marginBottom: '4px' }}>Global Certification</h5>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{selectedCourse.cert}</p>
                </div>
                <div>
                  <h5 style={{ color: 'var(--text-main)', marginBottom: '4px' }}>Prerequisites</h5>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{selectedCourse.prereq}</p>
                </div>
              </div>

              <h4 style={{ color: 'var(--text-main)', marginBottom: '10px' }}>Tools & Technologies Covered</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                {selectedCourse.tools.map((t, idx) => (
                  <span key={idx} style={{ background: 'var(--bg-dark)', color: 'var(--cyan-primary)', padding: '6px 14px', borderRadius: 'var(--radius-full)', fontSize: '0.82rem', fontWeight: 600, border: '1px solid var(--border-subtle)' }}>{t}</span>
                ))}
              </div>

              <h4 style={{ color: 'var(--text-main)', marginBottom: '10px' }}>Course Modules & Syllabus</h4>
              <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {selectedCourse.curriculum.map((m, idx) => (
                  <div key={idx} style={{ background: 'var(--bg-dark)', padding: '10px 15px', borderRadius: 'var(--radius-sm)', fontSize: '0.88rem', color: 'var(--text-main)', borderLeft: '3px solid var(--cyan-primary)' }}>
                    <i className="fa-solid fa-angle-right" style={{ color: 'var(--cyan-primary)', marginRight: '8px' }}></i> {m}
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                <button
                  className="btn btn-cyan btn-block"
                  onClick={() => {
                    closeModal('courseDetail');
                    setEnrollCourseName(selectedCourse.title);
                    setTimeout(() => closeModal('enroll', true), 100);
                  }}
                >
                  ENROLL IN THIS COURSE
                </button>
                <button className="btn btn-outline btn-block" onClick={() => showToast(`Downloading official syllabus for ${selectedCourse.title}...`)}>
                  <i className="fa-solid fa-file-pdf"></i> DOWNLOAD SYLLABUS
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 3. CALL MODAL */}
      <div className={`modal-backdrop ${activeModal === 'call' ? 'active' : ''}`} id="callModal">
        <div className="modal-card">
          <button className="modal-close" onClick={() => closeModal('call')}>&times;</button>
          <div className="modal-header">
            <div className="modal-icon"><i className="fa-solid fa-phone-volume"></i></div>
            <h3>Contact Academic Advisory</h3>
            <p>Speak directly with our expert career counselors</p>
          </div>
          <div className="direct-call-box">
            <a href="tel:1800121008800" className="call-number-link"><i class="fa-solid fa-phone"></i> 1800 121 008800</a>
            <div className="toll-free-tag">Toll-Free Support Line (Mon-Sat, 9am - 8pm)</div>
          </div>
          <form onSubmit={(e) => handleFormSubmit(e, 'Callback Request')}>
            <div className="form-group">
              <label>Your Name *</label>
              <input type="text" className="form-input" placeholder="e.g. Rahul Sharma" required />
            </div>
            <div className="form-group">
              <label>Mobile Number for Callback *</label>
              <input type="tel" className="form-input" placeholder="e.g. +91 98765 43210" required />
            </div>
            <button type="submit" className="btn btn-cyan btn-block">REQUEST IMMEDIATE CALLBACK</button>
          </form>
        </div>
      </div>

      {/* 4. LOGIN MODAL */}
      <div className={`modal-backdrop ${activeModal === 'login' ? 'active' : ''}`} id="loginModal">
        <div className="modal-card">
          <button className="modal-close" onClick={() => closeModal('login')}>&times;</button>
          <div className="modal-header">
            <div className="modal-icon"><i className="fa-regular fa-user"></i></div>
            <h3>Login / Sign Up</h3>
            <p>Access your Netcradus Student Portal & Courses</p>
          </div>
          <form onSubmit={(e) => handleFormSubmit(e, 'Login / Account Authentication')}>
            <div className="form-group">
              <label>Email Address or Student ID *</label>
              <input type="text" className="form-input" placeholder="e.g. rahul@example.com or NC-2026-8842" required />
            </div>
            <div className="form-group">
              <label>Password *</label>
              <input type="password" className="form-input" placeholder="••••••••" required />
            </div>
            <button type="submit" className="btn btn-blue-glow btn-block">LOGIN TO DASHBOARD</button>
          </form>
        </div>
      </div>

      {/* 5. ENQUIRE DRAWER */}
      <div className={`drawer-backdrop ${activeDrawer === 'enquire' ? 'active' : ''}`} id="enquireDrawer">
        <div className="drawer-panel">
          <button className="drawer-close" onClick={() => closeDrawer('enquire')}>&times;</button>
          <div className="drawer-header">
            <i className="fa-solid fa-pen-to-square"></i>
            <h3>Quick Enquiry</h3>
            <p>Get instant course details, fee structure & batch timings</p>
          </div>
          <form onSubmit={(e) => handleFormSubmit(e, 'Quick Enquiry')}>
            <div className="form-group">
              <label>Full Name *</label>
              <input type="text" className="form-input" placeholder="e.g. Rahul Sharma" required />
            </div>
            <div className="form-group">
              <label>Email Address *</label>
              <input type="email" className="form-input" placeholder="e.g. rahul@example.com" required />
            </div>
            <div className="form-group">
              <label>Phone Number *</label>
              <input type="tel" className="form-input" placeholder="e.g. +91 98765 43210" required />
            </div>
            <div className="form-group">
              <label>Course Choice *</label>
              <select className="form-input" required>
                <option value="" disabled selected>-- Select Course --</option>
                <option value="Ethical Hacking & VAPT">Ethical Hacking & VAPT</option>
                <option value="AI & Machine Learning With Generative AI">AI & Machine Learning With Generative AI</option>
                <option value="AWS, Azure & Google Cloud Architecture">AWS, Azure & Google Cloud Architecture</option>
                <option value="Data Analytics & Visualization">Data Analytics & Visualization</option>
                <option value="MERN Stack Development">MERN Stack Development</option>
                <option value="SOC Analyst & Network Defense">SOC Analyst & Network Defense</option>
              </select>
            </div>
            <button type="submit" className="btn btn-cyan btn-block">SUBMIT ENQUIRY</button>
          </form>
        </div>
      </div>

      {/* 6. DEMO MODAL FALLBACK */}
      <div className={`modal-backdrop ${activeModal === 'demo' ? 'active' : ''}`} id="demoModal">
        <div className="modal-card">
          <button className="modal-close" onClick={() => closeModal('demo')}>&times;</button>
          <div className="modal-header">
            <div className="modal-icon"><i className="fa-solid fa-laptop-code"></i></div>
            <h3>Free Demo Workshops</h3>
            <p>Secure a seat in our upcoming live cybersecurity sandbox workshop</p>
          </div>
          <div style={{ background: 'rgba(0, 210, 255, 0.05)', padding: '15px', borderRadius: '8px', border: '1px dashed var(--border-glow)', marginBottom: '20px', textAlign: 'center' }}>
            <h4 style={{ color: 'var(--white)', marginBottom: '6px' }}>🔴 Next Session: Penetration Testing Live Hack</h4>
            <p style={{ color: 'var(--cyan-primary)', fontSize: '0.85rem', fontWeight: 600 }}>Saturday at 6:00 PM | Duration: 2 Hours</p>
          </div>
          <form onSubmit={(e) => handleFormSubmit(e, 'Workshop Registration')}>
            <div className="form-group">
              <label>Full Name *</label>
              <input type="text" className="form-input" placeholder="e.g. Rahul Sharma" required />
            </div>
            <div className="form-group">
              <label>WhatsApp Number *</label>
              <input type="tel" className="form-input" placeholder="e.g. +91 98765 43210" required />
            </div>
            <button type="submit" className="btn btn-cyan btn-block">REGISTER & RESERVED SEAT</button>
          </form>
        </div>
      </div>
    </>
  );
}
