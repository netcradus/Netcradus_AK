import React, { useState } from 'react';
import { useApp } from '../App';

export default function Certificate() {
  const [certId, setCertId] = useState('NC-2026-9941');
  const [showResult, setShowResult] = useState(false);
  const { showToast } = useApp();

  const handleVerify = (e) => {
    e.preventDefault();
    showToast(`Querying Netcradus Global Accreditation Database for ID: ${certId.trim()}...`);
    setShowResult(true);
  };

  return (
    <div className="certificate-page">
      {/* PAGE HEADER */}
      <section className="page-banner-section">
        <div className="container text-center">
          <span className="section-badge"><i className="fa-solid fa-award"></i> VERIFICATION PORTAL</span>
          <h1 className="page-title">Credential Verification Portal</h1>
          <p className="page-subtitle">Verify student certification status or download accredited digital certificates.</p>
        </div>
      </section>

      {/* CERTIFICATE & VERIFICATION SECTION */}
      <section className="section certificate-section" id="certificate">
        <div className="container">
          <div className="cert-grid-2col">
            
            {/* Verification Tool Box */}
            <div className="cert-verify-card">
              <div className="verify-header">
                <i className="fa-solid fa-shield-check verify-icon"></i>
                <h3>Credential Verification Portal</h3>
                <p>Enter the 12-digit Certificate ID printed on the official certificate to verify authenticity.</p>
              </div>

              <form onSubmit={handleVerify} className="verify-form">
                <div className="form-group">
                  <label htmlFor="certIdInput">Certificate ID Number *</label>
                  <div className="input-with-btn">
                    <input
                      type="text"
                      id="certIdInput"
                      className="form-input"
                      placeholder="e.g. NC-2026-9941"
                      value={certId}
                      onChange={(e) => setCertId(e.target.value)}
                      required
                    />
                    <button type="submit" className="btn btn-cyan">
                      <i className="fa-solid fa-magnifying-glass"></i> VERIFY
                    </button>
                  </div>
                </div>
              </form>

              {/* Verification Result Display Box */}
              {showResult && (
                <div className="cert-result-box" style={{ display: 'block', animation: 'fadeIn 0.5s ease' }}>
                  <div className="result-status valid">
                    <i className="fa-solid fa-circle-check"></i> OFFICIAL CREDENTIAL VERIFIED
                  </div>
                  <div className="result-details">
                    <div className="rd-row"><span>Student Name:</span><strong>Rahul Sharma</strong></div>
                    <div className="rd-row"><span>Certificate Name:</span><strong>Netcradus Certified Ethical Hacker (NCEH)</strong></div>
                    <div className="rd-row"><span>Certificate ID:</span><code>{certId.trim()}</code></div>
                    <div className="rd-row"><span>Issue Date:</span><strong>July 15, 2026</strong></div>
                    <div className="rd-row"><span>Accreditation:</span><strong>ISO 9001:2015 & NASSCOM Aligned</strong></div>
                  </div>
                  <button className="btn btn-sm btn-outline-cyan btn-block" onClick={() => showToast(`Downloading official syllabus/certificate for ID: ${certId}...`)}>
                    <i className="fa-solid fa-download"></i> Download Verified Certificate (PDF)
                  </button>
                </div>
              )}
            </div>

            {/* Sample Digital Certificate Display */}
            <div className="sample-cert-card">
              <div className="cert-frame">
                <div className="cert-inner-border">
                  <div className="cert-top-header">
                    <div className="cert-seal"><i className="fa-solid fa-award"></i></div>
                    <div className="cert-org">NETCRADUS ACADEMIA OF TECHNOLOGY</div>
                    <div className="cert-subtitle">CERTIFICATE OF EXCELLENCE</div>
                  </div>
                  <div className="cert-body-text">
                    <p>This is to certify that</p>
                    <h2 className="cert-holder-name">Rahul Sharma</h2>
                    <p>has successfully completed the 6-Month Intensive Practical Track in</p>
                    <h3 className="cert-course-name">ETHICAL HACKING & PENETRATION TESTING</h3>
                    <p>and demonstrated high proficiency in VAPT, Web Security & SOC Operations.</p>
                  </div>
                  <div className="cert-footer-row">
                    <div className="cert-sig">
                      <div className="sig-line">Dr. Vikram Singh</div>
                      <span>Chief Technical Officer</span>
                    </div>
                    <div className="cert-qr">
                      <i className="fa-solid fa-qrcode"></i>
                      <span>Scan to Verify</span>
                    </div>
                    <div className="cert-sig">
                      <div className="sig-line">Academic Council</div>
                      <span>Netcradus Director</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cert-action-bar">
                <button className="btn btn-sm btn-cyan" onClick={() => showToast('Downloading Sample Certificate PDF...')}>
                  <i className="fa-solid fa-file-arrow-down"></i> Download Sample Certificate
                </button>
                <button className="btn btn-sm btn-outline" onClick={() => showToast('Share link copied! Add directly to your LinkedIn Licenses & Certifications.')}>
                  <i className="fa-brands fa-linkedin"></i> Share to LinkedIn
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
