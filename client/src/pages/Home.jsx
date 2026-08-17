import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../App';

export default function Home() {
  const { openModal, openEnrollModalFor, openCourseDetails } = useApp();

  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero-section hero-new-style" id="home">
        <div className="hero-bg-overlay"></div>
        <div className="container hero-container">
          {/* Hero Left Content */}
          <div className="hero-content">
            <div className="badge-pill pill-cyan">
              <i className="fa-solid fa-graduation-cap"></i>
              <span>EMPOWERING FUTURES</span>
            </div>

            <h1 className="hero-title hero-title-large">
              Learn. Build. <br />
              <span className="highlight-blue-gradient">Succeed.</span>
            </h1>

            <p className="hero-subtitle hero-subtitle-new">
              Netcradus Academia is your pathway to in-demand skills, real-world projects, and industry-recognized
              certifications that accelerate your career.
            </p>

            <div className="hero-buttons">
              <Link to="/dashboard" className="btn btn-blue-glow">
                Explore Dashboard <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
              <Link to="/about" className="btn btn-outline-play">
                About Us <i className="fa-solid fa-play"></i>
              </Link>
            </div>
          </div>

          {/* Hero Right Circular Courses Graphic */}
          <div className="hero-visual">
            <div className="cyber-orbit-hero">
              <div className="orbit-glow-bg"></div>
              <div className="orbit-ring orbit-ring-outer"></div>
              <div className="orbit-ring orbit-ring-inner"></div>
              <div className="orbit-radar-sweep"></div>

              {/* Central Hub */}
              <div className="orbit-center-hub">
                <h2 className="hub-title">
                  WELCOME TO <br />
                  <span className="highlight-blue-gradient">NETCRADUS ACADEMIA</span>
                </h2>
                <p className="hub-subtitle">Cyber Security & AI Excellence</p>
              </div>

              {/* Automated Circular Orbit Track with Courses */}
              <div className="orbit-spinning-track">
                {/* Node 1 */}
                <div className="orbit-node node-pos-0" onClick={() => openEnrollModalFor('Ethical Hacking & VAPT')}>
                  <div className="node-card cyber-node">
                    <div className="node-icon"><i className="fa-solid fa-user-secret"></i></div>
                    <div className="node-info">
                      <span className="node-tag">CYBER SECURITY</span>
                      <h4 className="node-name">Ethical Hacking & VAPT</h4>
                    </div>
                  </div>
                </div>

                {/* Node 2 */}
                <div className="orbit-node node-pos-45" onClick={() => openEnrollModalFor('SOC Analyst & Network Defense')}>
                  <div className="node-card soc-node">
                    <div className="node-icon"><i className="fa-solid fa-shield-virus"></i></div>
                    <div className="node-info">
                      <span className="node-tag">DEFENSE</span>
                      <h4 className="node-name">SOC Analyst & Defense</h4>
                    </div>
                  </div>
                </div>

                {/* Node 3 */}
                <div className="orbit-node node-pos-90" onClick={() => openEnrollModalFor('AI & Machine Learning With Generative AI')}>
                  <div className="node-card ai-node">
                    <div className="node-icon"><i className="fa-solid fa-brain"></i></div>
                    <div className="node-info">
                      <span className="node-tag">AI & ML</span>
                      <h4 className="node-name">AI & Generative AI</h4>
                    </div>
                  </div>
                </div>

                {/* Node 4 */}
                <div className="orbit-node node-pos-135" onClick={() => openEnrollModalFor('AWS, Azure & Google Cloud Architecture')}>
                  <div className="node-card cloud-node">
                    <div className="node-icon"><i className="fa-solid fa-cloud-arrow-up"></i></div>
                    <div className="node-info">
                      <span className="node-tag">CLOUD</span>
                      <h4 className="node-name">AWS & Cloud Security</h4>
                    </div>
                  </div>
                </div>

                {/* Node 5 */}
                <div className="orbit-node node-pos-180" onClick={() => openEnrollModalFor('Ethical Hacking & VAPT')}>
                  <div className="node-card net-node">
                    <div className="node-icon"><i className="fa-solid fa-lock"></i></div>
                    <div className="node-info">
                      <span className="node-tag">VAPT AUDIT</span>
                      <h4 className="node-name">Network VAPT Audit</h4>
                    </div>
                  </div>
                </div>

                {/* Node 6 */}
                <div className="orbit-node node-pos-225" onClick={() => openEnrollModalFor('Data Analytics & Visualization')}>
                  <div className="node-card data-node">
                    <div className="node-icon"><i className="fa-solid fa-chart-line"></i></div>
                    <div className="node-info">
                      <span className="node-tag">DATA SCIENCE</span>
                      <h4 className="node-name">Data Analytics & BI</h4>
                    </div>
                  </div>
                </div>

                {/* Node 7 */}
                <div className="orbit-node node-pos-270" onClick={() => openEnrollModalFor('MERN Stack Development')}>
                  <div className="node-card fullstack-node">
                    <div className="node-icon"><i className="fa-solid fa-code"></i></div>
                    <div className="node-info">
                      <span className="node-tag">FULL STACK</span>
                      <h4 className="node-name">MERN Web Dev</h4>
                    </div>
                  </div>
                </div>

                {/* Node 8 */}
                <div className="orbit-node node-pos-315" onClick={() => openEnrollModalFor('SOC Analyst & Network Defense')}>
                  <div className="node-card threat-node">
                    <div className="node-icon"><i className="fa-solid fa-bug"></i></div>
                    <div className="node-info">
                      <span className="node-tag">THREAT INTEL</span>
                      <h4 className="node-name">Threat Intelligence</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OVERLAPPING BOTTOM STATS BAR */}
        <div className="container">
          <div className="new-stats-bar">
            <div className="ns-item">
              <div className="ns-icon"><i className="fa-solid fa-users"></i></div>
              <div className="ns-info">
                <h3>50,000+</h3>
                <p>Active Learners</p>
              </div>
            </div>

            <div className="ns-divider"></div>

            <div className="ns-item">
              <div className="ns-icon"><i className="fa-solid fa-circle-play"></i></div>
              <div className="ns-info">
                <h3>100+</h3>
                <p>Expert Courses</p>
              </div>
            </div>

            <div className="ns-divider"></div>

            <div className="ns-item">
              <div className="ns-icon"><i className="fa-solid fa-certificate"></i></div>
              <div className="ns-info">
                <h3>25+</h3>
                <p>Industry Certificates</p>
              </div>
            </div>

            <div className="ns-divider"></div>

            <div className="ns-item">
              <div className="ns-icon"><i className="fa-solid fa-rocket"></i></div>
              <div className="ns-info">
                <h3>500+</h3>
                <p>Real-World Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED COURSES SECTION */}
      <section className="section courses-preview-section" id="featured-courses">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-badge"><i className="fa-solid fa-graduation-cap"></i> POPULAR PROGRAMS</span>
            <h2 className="section-title">Explore Industry-Ready Courses</h2>
            <p className="section-desc">
              Master high-demand tech skills with hands-on virtual labs, real-world projects, and global certifications.
            </p>
          </div>

          <div className="courses-grid">
            {/* Cyber Course Preview */}
            <div className="course-card">
              <div className="course-banner cyber-bg">
                <img src="/images/cyber.png" alt="Ethical Hacking & VAPT" className="course-banner-img" />
                <div className="banner-overlay"></div>
                <div className="course-badge">CYBER SECURITY</div>
                <div className="banner-icon"><i className="fa-solid fa-user-secret"></i></div>
                <h3 className="banner-title">Ethical Hacking & VAPT</h3>
              </div>
              <div className="course-content">
                <h4 className="course-subtitle">Ethical Hacking & VAPT Professional Program</h4>
                <p className="course-meta">
                  <i className="fa-regular fa-clock"></i> 6 Months | <i className="fa-solid fa-laptop-code"></i> Live Labs & SOC
                </p>
                <ul className="course-highlights">
                  <li><i className="fa-solid fa-check"></i> Vulnerability Assessment & Penetration Testing</li>
                  <li><i className="fa-solid fa-check"></i> Network & Web Application Security</li>
                </ul>
                <div className="course-footer">
                  <button className="btn-link" onClick={() => openCourseDetails('cyber')}>
                    VIEW COURSE <i className="fa-solid fa-arrow-right-long"></i>
                  </button>
                  <button className="btn btn-sm btn-outline-cyan" onClick={() => openEnrollModalFor('Ethical Hacking & VAPT')}>
                    Enroll
                  </button>
                </div>
              </div>
            </div>

            {/* AI Course Preview */}
            <div className="course-card">
              <div className="course-banner ai-bg">
                <img src="/images/ai.png" alt="AI & Machine Learning" className="course-banner-img" />
                <div className="banner-overlay"></div>
                <div className="course-badge">ARTIFICIAL INTELLIGENCE</div>
                <div className="banner-icon"><i className="fa-solid fa-brain"></i></div>
                <h3 className="banner-title">AI & Machine Learning</h3>
              </div>
              <div className="course-content">
                <h4 className="course-subtitle">AI & Machine Learning With Generative AI</h4>
                <p className="course-meta">
                  <i className="fa-regular fa-clock"></i> 6 Months | <i className="fa-solid fa-microchip"></i> PyTorch & LLMs
                </p>
                <ul className="course-highlights">
                  <li><i className="fa-solid fa-check"></i> Deep Learning & Neural Networks</li>
                  <li><i className="fa-solid fa-check"></i> Generative AI, RAG & LangChain</li>
                </ul>
                <div className="course-footer">
                  <button className="btn-link" onClick={() => openCourseDetails('ai')}>
                    VIEW COURSE <i className="fa-solid fa-arrow-right-long"></i>
                  </button>
                  <button className="btn btn-sm btn-outline-cyan" onClick={() => openEnrollModalFor('AI & Machine Learning With Generative AI')}>
                    Enroll
                  </button>
                </div>
              </div>
            </div>

            {/* Cloud Course Preview */}
            <div className="course-card">
              <div className="course-banner cloud-bg">
                <img src="/images/cloud.png" alt="Cloud Architecture" className="course-banner-img" />
                <div className="banner-overlay"></div>
                <div className="course-badge">CLOUD COMPUTING</div>
                <div className="banner-icon"><i className="fa-solid fa-cloud-arrow-up"></i></div>
                <h3 className="banner-title">Cloud Architecture</h3>
              </div>
              <div className="course-content">
                <h4 className="course-subtitle">AWS, Azure & Google Cloud Masterclass</h4>
                <p className="course-meta">
                  <i className="fa-regular fa-clock"></i> 5 Months | <i className="fa-solid fa-network-wired"></i> Multi-Cloud Labs
                </p>
                <ul className="course-highlights">
                  <li><i className="fa-solid fa-check"></i> AWS Solutions Architect Prep</li>
                  <li><i className="fa-solid fa-check"></i> Terraform Infrastructure as Code</li>
                </ul>
                <div className="course-footer">
                  <button className="btn-link" onClick={() => openCourseDetails('cloud')}>
                    VIEW COURSE <i className="fa-solid fa-arrow-right-long"></i>
                  </button>
                  <button className="btn btn-sm btn-outline-cyan" onClick={() => openEnrollModalFor('AWS, Azure & Google Cloud Architecture')}>
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link to="/courses" className="btn btn-cyan btn-lg">
              VIEW ALL COURSES <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* PORTAL PAGE LAUNCHER GRID */}
      <section className="section portal-hub-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-badge">EXPLORE NETCRADUS PORTAL</span>
            <h2 className="section-title">Open Any Section Individually</h2>
            <p className="section-desc">Select any dedicated page module below to jump directly into the full experience.</p>
          </div>

          <div className="hub-pages-grid">
            <Link to="/about" className="hub-card">
              <div className="hub-icon"><i className="fa-solid fa-building-columns"></i></div>
              <h3>About Us</h3>
              <p>Learn about our virtual cloud labs, certified mentors, and learning ecosystem.</p>
              <span className="hub-link">Open About Page <i className="fa-solid fa-arrow-right"></i></span>
            </Link>

            <Link to="/courses" className="hub-card">
              <div className="hub-icon"><i className="fa-solid fa-layer-group"></i></div>
              <h3>Popular Courses</h3>
              <p>Explore 100+ industry tracks: Ethical Hacking, AI & ML, Cloud, Data Science, MERN & SOC.</p>
              <span className="hub-link">Open Courses Page <i className="fa-solid fa-arrow-right"></i></span>
            </Link>

            <Link to="/projects" className="hub-card">
              <div className="hub-icon"><i className="fa-solid fa-diagram-project"></i></div>
              <h3>Real-World Projects</h3>
              <p>3 to 6 months hands-on projects, live code submissions, stipend tracks, and mentor guidance.</p>
              <span className="hub-link">Open Projects Page <i className="fa-solid fa-arrow-right"></i></span>
            </Link>

            <Link to="/dashboard" className="hub-card highlight-hub">
              <div className="hub-icon"><i className="fa-solid fa-gauge-high"></i></div>
              <h3>Student Dashboard</h3>
              <p>Access your live classes, recorded lectures, assignments, progress graph, and virtual sandboxes.</p>
              <span className="hub-link">Launch Student Dashboard <i className="fa-solid fa-arrow-right"></i></span>
            </Link>

            <Link to="/certificate" className="hub-card">
              <div className="hub-icon"><i className="fa-solid fa-award"></i></div>
              <h3>Certificate Verification</h3>
              <p>Verify 12-digit student credentials, download ISO-certified certificates, and share to LinkedIn.</p>
              <span className="hub-link">Open Certificate Portal <i className="fa-solid fa-arrow-right"></i></span>
            </Link>

            <Link to="/contact" className="hub-card">
              <div className="hub-icon"><i className="fa-solid fa-headset"></i></div>
              <h3>Contact Us</h3>
              <p>Connect with expert academic counselors, request a demo callback, or visit our tech campus.</p>
              <span className="hub-link">Open Contact Page <i className="fa-solid fa-arrow-right"></i></span>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES / VALUE PROPOSITION BAR */}
      <section className="features-bar-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon"><i className="fa-solid fa-display"></i></div>
              <div className="feature-text">
                <h4>LIVE CLASSES</h4>
                <p>Interactive instructor-led sessions</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><i className="fa-solid fa-gears"></i></div>
              <div className="feature-text">
                <h4>HANDS-ON LABS</h4>
                <p>Real-world labs and tools for practical learning</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><i className="fa-solid fa-certificate"></i></div>
              <div className="feature-text">
                <h4>CERTIFICATIONS</h4>
                <p>Industry-recognized certifications</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><i className="fa-solid fa-diagram-project"></i></div>
              <div className="feature-text">
                <h4>REAL-WORLD PROJECTS</h4>
                <p>Work on live projects with expert guidance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
