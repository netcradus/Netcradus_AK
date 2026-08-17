import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useApp } from '../App';

export default function Dashboard() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('progress');
  const { showToast } = useApp();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabParam = params.get('tab');
    const hash = location.hash.replace('#', '').toLowerCase();
    const tabKey = hash || (tabParam ? tabParam.toLowerCase() : '');

    const tabMap = {
      'assignments': 'assignments',
      'assignment': 'assignments',
      'classes': 'live',
      'class': 'live',
      'live': 'live',
      'recorded': 'recorded',
      'notes': 'notes',
      'study-notes': 'notes',
      'progress': 'progress',
      'labs': 'labs',
      'sandbox': 'labs'
    };

    if (tabKey && tabMap[tabKey]) {
      setActiveTab(tabMap[tabKey]);
    }
  }, [location]);

  return (
    <div className="dashboard-page">
      {/* PAGE HEADER */}
      <section className="page-banner-section">
        <div className="container text-center">
          <span className="section-badge"><i className="fa-solid fa-gauge-high"></i> STUDENT PORTAL</span>
          <h1 className="page-title">Learning Management Dashboard</h1>
          <p className="page-subtitle">Welcome back, Rahul Sharma! Manage your courses, assignments, live classes, and cloud labs.</p>
        </div>
      </section>

      {/* STUDENT DASHBOARD PORTAL SECTION */}
      <section className="section dashboard-section" id="dashboard">
        <div className="container">
          <div className="dashboard-portal-card">
            
            {/* Student Header Info Bar */}
            <div className="dash-user-header">
              <div className="dash-user-profile">
                <div className="dash-avatar">
                  <i className="fa-solid fa-user-shield"></i>
                </div>
                <div className="dash-user-details">
                  <h3>Rahul Sharma <span className="dash-user-badge"><i className="fa-solid fa-circle-check"></i> Active Student</span></h3>
                  <p><i className="fa-solid fa-book-bookmark"></i> Enrolled: <strong>Ethical Hacking & VAPT Track</strong> | Student ID: <code>NC-2026-8842</code></p>
                </div>
              </div>
              
              <div className="dash-user-quick-stats">
                <div className="dash-stat-pill">
                  <span className="stat-pill-icon"><i className="fa-solid fa-fire"></i></span>
                  <div>
                    <strong>14 Days</strong>
                    <span>Learning Streak</span>
                  </div>
                </div>
                <div className="dash-stat-pill">
                  <span className="stat-pill-icon cyan"><i className="fa-solid fa-chart-pie"></i></span>
                  <div>
                    <strong>78%</strong>
                    <span>Overall Completion</span>
                  </div>
                </div>
                <button className="btn btn-sm btn-cyan" onClick={() => showToast("Connecting to Live Zoom Interactive Security Classroom... (Meeting ID: 884-2910)")}>
                  <i className="fa-solid fa-circle-play"></i> Join Live Class
                </button>
              </div>
            </div>

            {/* Quick Dashboard Action Cards Hub */}
            <div className="dash-quick-hub" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', margin: '20px 0 25px' }}>
              <div className="quick-hub-card" style={{ background: 'rgba(0, 210, 255, 0.06)', border: '1px solid var(--border-glow)', padding: '18px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', cursor: 'pointer' }} onClick={() => setActiveTab('assignments')}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(0, 210, 255, 0.15)', color: 'var(--cyan-primary)', display: 'flex', alignItems: 'center', justify: 'center', fontSize: '1.3rem' }}>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--white)', fontSize: '1rem', marginBottom: '2px' }}>Assignments</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>2 Pending Tasks Due</p>
                  </div>
                </div>
                <span className="btn btn-sm btn-outline-cyan">View <i className="fa-solid fa-arrow-right"></i></span>
              </div>

              <div className="quick-hub-card" style={{ background: 'rgba(0, 82, 212, 0.08)', border: '1px solid rgba(0, 82, 212, 0.3)', padding: '18px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', cursor: 'pointer' }} onClick={() => setActiveTab('live')}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(255, 77, 77, 0.15)', color: '#ff4d4d', display: 'flex', alignItems: 'center', justify: 'center', fontSize: '1.3rem' }}>
                    <i className="fa-solid fa-video"></i>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--white)', fontSize: '1rem', marginBottom: '2px' }}>Live Classes</h4>
                    <p style={{ color: '#ff4d4d', fontSize: '0.8rem', fontWeight: 700 }}>🔴 Session at 7:00 PM</p>
                  </div>
                </div>
                <span className="btn btn-sm btn-cyan">Join <i className="fa-solid fa-circle-play"></i></span>
              </div>

              <div className="quick-hub-card" style={{ background: 'rgba(0, 210, 255, 0.06)', border: '1px solid var(--border-glow)', padding: '18px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', cursor: 'pointer' }} onClick={() => setActiveTab('notes')}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(0, 210, 255, 0.15)', color: 'var(--cyan-primary)', display: 'flex', alignItems: 'center', justify: 'center', fontSize: '1.3rem' }}>
                    <i className="fa-solid fa-book-open"></i>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--white)', fontSize: '1rem', marginBottom: '2px' }}>Study Notes</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>PDF Guides & Scripts</p>
                  </div>
                </div>
                <span className="btn btn-sm btn-outline-cyan">Notes <i className="fa-solid fa-download"></i></span>
              </div>
            </div>

            {/* Dashboard Internal Navigation Tabs */}
            <div className="dash-tabs-bar">
              <button className={`dash-tab-btn ${activeTab === 'progress' ? 'active' : ''}`} onClick={() => setActiveTab('progress')}>
                <i className="fa-solid fa-chart-line"></i> Progress Graph
              </button>
              <button className={`dash-tab-btn ${activeTab === 'assignments' ? 'active' : ''}`} onClick={() => setActiveTab('assignments')}>
                <i className="fa-solid fa-pen-to-square"></i> Assignments <span className="dash-badge-count">2 Pending</span>
              </button>
              <button className={`dash-tab-btn ${activeTab === 'live' ? 'active' : ''}`} onClick={() => setActiveTab('live')}>
                <i className="fa-solid fa-video"></i> Live Classes <span className="dash-badge-live">🔴 Live</span>
              </button>
              <button className={`dash-tab-btn ${activeTab === 'recorded' ? 'active' : ''}`} onClick={() => setActiveTab('recorded')}>
                <i className="fa-solid fa-film"></i> Recorded Classes
              </button>
              <button className={`dash-tab-btn ${activeTab === 'notes' ? 'active' : ''}`} onClick={() => setActiveTab('notes')}>
                <i className="fa-solid fa-file-lines"></i> Study Notes
              </button>
              <button className={`dash-tab-btn ${activeTab === 'labs' ? 'active' : ''}`} onClick={() => setActiveTab('labs')}>
                <i className="fa-solid fa-terminal"></i> Virtual Sandbox
              </button>
            </div>

            {/* Tab Panel 1: Progress Graph & Analytics */}
            <div className={`dash-panel ${activeTab === 'progress' ? 'active' : ''}`} id="dash-panel-progress">
              <div className="dash-grid-2col">
                <div className="dash-box">
                  <div className="dash-box-header">
                    <h4><i className="fa-solid fa-chart-simple"></i> Weekly Learning Hours Graph</h4>
                    <span className="dash-tag">Last 7 Days</span>
                  </div>
                  <div className="progress-bar-chart">
                    <div className="chart-col">
                      <div className="bar-fill" style={{ height: '60%' }} data-hours="4.5h"></div>
                      <span>Mon</span>
                    </div>
                    <div className="chart-col">
                      <div className="bar-fill" style={{ height: '85%' }} data-hours="6.2h"></div>
                      <span>Tue</span>
                    </div>
                    <div className="chart-col">
                      <div className="bar-fill" style={{ height: '40%' }} data-hours="3.0h"></div>
                      <span>Wed</span>
                    </div>
                    <div className="chart-col">
                      <div className="bar-fill" style={{ height: '95%' }} data-hours="7.8h"></div>
                      <span>Thu</span>
                    </div>
                    <div className="chart-col">
                      <div className="bar-fill" style={{ height: '75%' }} data-hours="5.5h"></div>
                      <span>Fri</span>
                    </div>
                    <div className="chart-col highlight">
                      <div className="bar-fill" style={{ height: '100%' }} data-hours="8.5h"></div>
                      <span>Sat</span>
                    </div>
                    <div className="chart-col">
                      <div className="bar-fill" style={{ height: '50%' }} data-hours="4.0h"></div>
                      <span>Sun</span>
                    </div>
                  </div>
                  <p className="chart-caption">
                    <i className="fa-solid fa-arrow-trend-up" style={{ color: 'var(--cyan-primary)' }}></i> You logged <strong>39.5 Hours</strong> of hands-on practice this week (+18% higher than average).
                  </p>
                </div>

                <div className="dash-box">
                  <div className="dash-box-header">
                    <h4><i className="fa-solid fa-shield-halved"></i> Skill Mastery Radar</h4>
                    <span className="dash-tag green">On Track</span>
                  </div>
                  <div className="skill-bars-list">
                    <div className="skill-bar-item">
                      <div className="sb-label"><span>Network Penetration Testing</span><strong>92%</strong></div>
                      <div className="sb-track"><div className="sb-fill" style={{ width: '92%' }}></div></div>
                    </div>
                    <div className="skill-bar-item">
                      <div className="sb-label"><span>Vulnerability Assessment (VAPT)</span><strong>85%</strong></div>
                      <div className="sb-track"><div className="sb-fill" style={{ width: '85%' }}></div></div>
                    </div>
                    <div className="skill-bar-item">
                      <div className="sb-label"><span>Web App Security & OWASP Top 10</span><strong>78%</strong></div>
                      <div className="sb-track"><div className="sb-fill" style={{ width: '78%' }}></div></div>
                    </div>
                    <div className="skill-bar-item">
                      <div className="sb-label"><span>Python Exploit Automation</span><strong>70%</strong></div>
                      <div className="sb-track"><div className="sb-fill" style={{ width: '70%' }}></div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab Panel 2: Assignments */}
            <div className={`dash-panel ${activeTab === 'assignments' ? 'active' : ''}`} id="dash-panel-assignments">
              <div className="dash-cards-list">
                <div className="assignment-item">
                  <div className="as-icon pending"><i className="fa-solid fa-clock"></i></div>
                  <div className="as-details">
                    <h4>Assignment 4: Web Application SQL Injection & Privilege Escalation Audit</h4>
                    <p>Module 3 • Due: Tomorrow at 11:59 PM | Target Machine IP: <code>10.10.14.88</code></p>
                    <div className="as-tags">
                      <span className="as-tag warning">In Progress</span>
                      <span className="as-tag">Points: 100</span>
                    </div>
                  </div>
                  <div className="as-actions">
                    <button className="btn btn-sm btn-cyan" onClick={() => showToast('Opening Submission Portal for SQL Injection Lab. Upload your PDF report or Git repository.')}>
                      Submit Assignment
                    </button>
                    <button className="btn btn-sm btn-outline" onClick={() => showToast('Downloading assignment instructions...')}>
                      <i className="fa-solid fa-file-pdf"></i> Guidelines
                    </button>
                  </div>
                </div>

                <div className="assignment-item">
                  <div className="as-icon pending"><i className="fa-solid fa-hourglass-start"></i></div>
                  <div className="as-details">
                    <h4>Assignment 5: Buffer Overflow & Metasploit Payload Customization</h4>
                    <p>Module 4 • Due: Aug 05, 2026 | Environment: Kali Linux Sandbox</p>
                    <div className="as-tags">
                      <span className="as-tag">Pending</span>
                      <span className="as-tag">Points: 100</span>
                    </div>
                  </div>
                  <div className="as-actions">
                    <button className="btn btn-sm btn-outline-cyan" onClick={() => showToast('Opening Submission Portal for Buffer Overflow Lab. Upload your PDF report or Git repository.')}>
                      Start Assignment
                    </button>
                  </div>
                </div>

                <div className="assignment-item completed">
                  <div className="as-icon success"><i className="fa-solid fa-circle-check"></i></div>
                  <div className="as-details">
                    <h4>Assignment 3: Wireshark Network Packet Analysis & Threat Mitigation</h4>
                    <p>Module 2 • Graded: 96 / 100 (Grade: A+)</p>
                    <p className="instructor-feedback"><em>"Feedback from Mentor Dr. Vikram: Exceptional packet breakdown and accurate firewall rule formulation."</em></p>
                  </div>
                  <div className="as-actions">
                    <span className="score-pill">Score: 96%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab Panel 3: Live Classes */}
            <div className={`dash-panel ${activeTab === 'live' ? 'active' : ''}`} id="dash-panel-live">
              <div className="dash-grid-2col">
                <div className="dash-box live-card-featured">
                  <div className="live-status-badge">🔴 LIVE SESSION TODAY</div>
                  <h3>Advanced Blind SQLi & WAF Bypass Techniques</h3>
                  <p className="live-meta"><i className="fa-regular fa-clock"></i> Starts Today at 7:00 PM IST (In 2 Hours)</p>
                  <div className="instructor-row">
                    <div className="inst-avatar"><i className="fa-solid fa-user-gear"></i></div>
                    <div>
                      <h5>Dr. Vikram Singh</h5>
                      <p>Lead Security Architect & Certified Ethical Hacker</p>
                    </div>
                  </div>
                  <button className="btn btn-cyan btn-block" onClick={() => showToast("Connecting to Live Zoom Interactive Security Classroom... (Meeting ID: 884-2910)")}>
                    <i className="fa-solid fa-video"></i> JOIN LIVE CLASSROOM NOW
                  </button>
                </div>

                <div className="dash-box">
                  <h4><i className="fa-regular fa-calendar-days"></i> Upcoming Live Class Schedule</h4>
                  <ul className="schedule-list">
                    <li>
                      <div className="sch-date"><span>FRI</span><strong>30 JUL</strong></div>
                      <div className="sch-info">
                        <h5>Metasploit Framework Deep Dive & Exploit Payloads</h5>
                        <p>7:00 PM - 9:00 PM | Instructor: Rajesh Kumar</p>
                      </div>
                      <button className="btn btn-sm btn-outline-cyan" onClick={() => showToast('Class reminder set for Friday!')}>
                        Set Reminder
                      </button>
                    </li>
                    <li>
                      <div className="sch-date"><span>MON</span><strong>02 AUG</strong></div>
                      <div className="sch-info">
                        <h5>Cloud Pentesting: AWS S3 Bucket Misconfigurations</h5>
                        <p>7:00 PM - 9:00 PM | Instructor: Ananya Sharma</p>
                      </div>
                      <button className="btn btn-sm btn-outline-cyan" onClick={() => showToast('Class reminder set for Monday!')}>
                        Set Reminder
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tab Panel 4: Recorded Classes */}
            <div className={`dash-panel ${activeTab === 'recorded' ? 'active' : ''}`} id="dash-panel-recorded">
              <div className="dash-grid-3col">
                <div className="video-card">
                  <div className="video-thumb cyber-bg">
                    <span className="video-duration">1h 45m</span>
                    <button className="play-btn" onClick={() => showToast('Launching HD Video Player for Lecture 14: Metasploit Deep Dive...')}><i className="fa-solid fa-play"></i></button>
                  </div>
                  <div className="video-info">
                    <h4>Lecture 14: Metasploit Deep Dive</h4>
                    <p>Exploit Payload generation, Meterpreter sessions & pivoting.</p>
                    <div className="video-footer">
                      <span>Watched 100%</span>
                      <button className="btn-link" onClick={() => showToast("Downloading official syllabus/notes for Metasploit Lecture Notes...")}><i className="fa-solid fa-download"></i> Notes</button>
                    </div>
                  </div>
                </div>

                <div className="video-card">
                  <div className="video-thumb ai-bg">
                    <span className="video-duration">2h 10m</span>
                    <button className="play-btn" onClick={() => showToast('Launching HD Video Player for Lecture 13: Burp Suite Pro Vulnerability Scanning...')}><i className="fa-solid fa-play"></i></button>
                  </div>
                  <div className="video-info">
                    <h4>Lecture 13: Burp Suite Pro Scanning</h4>
                    <p>Target intruder attacks, repeater, macro config & extensions.</p>
                    <div className="video-footer">
                      <span>Watched 100%</span>
                      <button className="btn-link" onClick={() => showToast("Downloading official syllabus/notes for Burp Suite Lecture Notes...")}><i className="fa-solid fa-download"></i> Notes</button>
                    </div>
                  </div>
                </div>

                <div className="video-card">
                  <div className="video-thumb cloud-bg">
                    <span className="video-duration">1h 30m</span>
                    <button className="play-btn" onClick={() => showToast('Launching HD Video Player for Lecture 12: Network Footprinting & Nmap NSE Scripts...')}><i className="fa-solid fa-play"></i></button>
                  </div>
                  <div className="video-info">
                    <h4>Lecture 12: Network Nmap Footprinting</h4>
                    <p>Port scanning strategies, firewall evasion & Nmap Scripting Engine.</p>
                    <div className="video-footer">
                      <span>Watched 100%</span>
                      <button className="btn-link" onClick={() => showToast("Downloading official syllabus/notes for Nmap Lecture Notes...")}><i className="fa-solid fa-download"></i> Notes</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab Panel 5: Study Notes & Resources */}
            <div className={`dash-panel ${activeTab === 'notes' ? 'active' : ''}`} id="dash-panel-notes">
              <div className="notes-grid">
                <div className="note-card">
                  <div className="note-icon pdf"><i className="fa-solid fa-file-pdf"></i></div>
                  <div className="note-info">
                    <h4>Ethical Hacking & VAPT Master Cheatsheet (2026 Edition)</h4>
                    <p>PDF Document • 4.2 MB | Updated last week</p>
                  </div>
                  <button className="btn btn-sm btn-outline-cyan" onClick={() => showToast("Downloading official syllabus/notes for VAPT Master Cheatsheet...")}>
                    <i className="fa-solid fa-download"></i> Download
                  </button>
                </div>

                <div className="note-card">
                  <div className="note-icon pdf"><i className="fa-solid fa-file-pdf"></i></div>
                  <div className="note-info">
                    <h4>OWASP Top 10 Web Security Vulnerability & Mitigation Guide</h4>
                    <p>PDF Document • 8.1 MB | Complete Code Remediation Examples</p>
                  </div>
                  <button className="btn btn-sm btn-outline-cyan" onClick={() => showToast("Downloading official syllabus/notes for OWASP Top 10 Mitigation Guide...")}>
                    <i className="fa-solid fa-download"></i> Download
                  </button>
                </div>

                <div className="note-card">
                  <div className="note-icon zip"><i className="fa-solid fa-file-zipper"></i></div>
                  <div className="note-info">
                    <h4>Metasploit & Python Custom Exploit Scripts Bundle</h4>
                    <p>ZIP Archive • 12.4 MB | Lab Scripts & Target PoCs</p>
                  </div>
                  <button className="btn btn-sm btn-outline-cyan" onClick={() => showToast("Downloading official syllabus/notes for Custom Exploit Scripts Bundle...")}>
                    <i className="fa-solid fa-download"></i> Download
                  </button>
                </div>

                <div className="note-card">
                  <div className="note-icon pdf"><i className="fa-solid fa-file-pdf"></i></div>
                  <div className="note-info">
                    <h4>Linux Command Line & Kernel Hardening Manual</h4>
                    <p>PDF Document • 3.5 MB | SysAdmin & Defense Guide</p>
                  </div>
                  <button className="btn btn-sm btn-outline-cyan" onClick={() => showToast("Downloading official syllabus/notes for Linux Hardening Manual...")}>
                    <i className="fa-solid fa-download"></i> Download
                  </button>
                </div>
              </div>
            </div>

            {/* Tab Panel 6: Virtual Sandbox Labs */}
            <div className={`dash-panel ${activeTab === 'labs' ? 'active' : ''}`} id="dash-panel-labs">
              <div className="dash-grid-3col">
                <div className="lab-card">
                  <div className="lab-header">
                    <span className="lab-status active">ONLINE</span>
                    <i className="fa-solid fa-terminal lab-icon"></i>
                  </div>
                  <h4>Kali Linux Security Sandbox</h4>
                  <p>Pre-configured cloud terminal with Metasploit, Nmap, Burp Suite & Hydra preinstalled.</p>
                  <button className="btn btn-cyan btn-block" onClick={() => showToast("Provisioning Cloud Virtual Machine for Kali Linux Terminal... Environment ready in 5s!")}>
                    <i className="fa-solid fa-terminal"></i> LAUNCH TERMINAL
                  </button>
                </div>

                <div className="lab-card">
                  <div className="lab-header">
                    <span className="lab-status active">ONLINE</span>
                    <i className="fa-solid fa-brain lab-icon"></i>
                  </div>
                  <h4>AI / PyTorch GPU Jupyter Cluster</h4>
                  <p>Dedicated Tesla T4 GPU cloud notebook for model training & GenAI prompt engineering.</p>
                  <button className="btn btn-cyan btn-block" onClick={() => showToast("Provisioning Cloud Virtual Machine for Jupyter GPU Lab... Environment ready in 5s!")}>
                    <i className="fa-solid fa-code"></i> LAUNCH JUPYTER
                  </button>
                </div>

                <div className="lab-card">
                  <div className="lab-header">
                    <span className="lab-status active">ONLINE</span>
                    <i className="fa-solid fa-cloud-bolt lab-icon"></i>
                  </div>
                  <h4>AWS Cloud Infrastructure Target</h4>
                  <p>Intentionally vulnerable multi-cloud AWS VPC environment for cloud security auditing.</p>
                  <button className="btn btn-cyan btn-block" onClick={() => showToast("Provisioning Cloud Virtual Machine for AWS Vulnerable VPC... Environment ready in 5s!")}>
                    <i className="fa-solid fa-cloud"></i> CONNECT LAB
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
