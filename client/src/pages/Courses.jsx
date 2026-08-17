import React, { useState } from 'react';
import { useApp } from '../App';

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { openEnrollModalFor, openCourseDetails } = useApp();

  const coursesList = [
    {
      key: 'cyber',
      category: 'cyber',
      badge: 'CYBER SECURITY',
      bannerClass: 'cyber-bg',
      bannerIcon: 'fa-solid fa-user-secret',
      title: 'Ethical Hacking & VAPT',
      image: '/images/cyber.png',
      subtitle: 'Ethical Hacking & VAPT Professional Program',
      meta: '6 Months | Live Labs & SOC',
      metaIcon1: 'fa-regular fa-clock',
      metaIcon2: 'fa-solid fa-laptop-code',
      highlights: [
        'Vulnerability Assessment & Penetration Testing',
        'Network & Web Application Security',
        'Bug Bounty & SIEM/SOC Tools'
      ],
      enrollTitle: 'Ethical Hacking & VAPT'
    },
    {
      key: 'ai',
      category: 'ai',
      badge: 'ARTIFICIAL INTELLIGENCE',
      bannerClass: 'ai-bg',
      bannerIcon: 'fa-solid fa-brain',
      title: 'AI & Machine Learning',
      image: '/images/ai.png',
      subtitle: 'AI & Machine Learning With Generative AI',
      meta: '6 Months | PyTorch & LLMs',
      metaIcon1: 'fa-regular fa-clock',
      metaIcon2: 'fa-solid fa-microchip',
      highlights: [
        'Deep Learning & Computer Vision',
        'Generative AI, RAG & LangChain',
        'Model Deployment & MLOps'
      ],
      enrollTitle: 'AI & Machine Learning With Generative AI'
    },
    {
      key: 'cloud',
      category: 'cloud',
      badge: 'CLOUD COMPUTING',
      bannerClass: 'cloud-bg',
      bannerIcon: 'fa-solid fa-cloud-arrow-up',
      title: 'Cloud Architecture',
      image: '/images/cloud.png',
      subtitle: 'AWS, Azure & Google Cloud Masterclass',
      meta: '5 Months | Multi-Cloud Labs',
      metaIcon1: 'fa-regular fa-clock',
      metaIcon2: 'fa-solid fa-network-wired',
      highlights: [
        'AWS Solutions Architect Prep',
        'Azure Cloud Administration & GCP',
        'Terraform Infrastructure as Code'
      ],
      enrollTitle: 'AWS, Azure & Google Cloud Architecture'
    },
    {
      key: 'data',
      category: 'data',
      badge: 'DATA SCIENCE',
      bannerClass: 'data-bg',
      bannerIcon: 'fa-solid fa-chart-line',
      title: 'Data Analytics',
      image: '/images/data.png',
      subtitle: 'Data Analytics & Visualization with Python',
      meta: '4 Months | PowerBI & SQL',
      metaIcon1: 'fa-regular fa-clock',
      metaIcon2: 'fa-solid fa-table',
      highlights: [
        'Advanced SQL, Python Data Science',
        'PowerBI & Tableau Dashboards',
        'Business Intelligence & Analytics'
      ],
      enrollTitle: 'Data Analytics & Visualization'
    },
    {
      key: 'fullstack',
      category: 'fullstack',
      badge: 'FULL STACK DEVELOPMENT',
      bannerClass: 'fullstack-bg',
      bannerIcon: 'fa-solid fa-layer-group',
      title: 'Full Stack MERN',
      image: '/images/fullstack.png',
      subtitle: 'MERN Stack Development with Next.js',
      meta: '6 Months | Full Stack Projects',
      metaIcon1: 'fa-regular fa-clock',
      metaIcon2: 'fa-solid fa-laptop',
      highlights: [
        'MongoDB, Express, React, Node.js',
        'Next.js 14, TypeScript & Tailwind',
        'CI/CD Pipeline & Web Deployment'
      ],
      enrollTitle: 'MERN Stack Development'
    },
    {
      key: 'soc',
      category: 'cyber', // Belongs to cyber security filter
      badge: 'CYBER SECURITY',
      bannerClass: 'devops-bg',
      bannerIcon: 'fa-solid fa-shield-virus',
      title: 'SOC & Threat Intel',
      image: '/images/soc.png',
      subtitle: 'SOC Analyst & Network Defense Specialist',
      meta: '5 Months | Splunk & Wireshark',
      metaIcon1: 'fa-regular fa-clock',
      metaIcon2: 'fa-solid fa-tower-broadcast',
      highlights: [
        'Splunk Enterprise SIEM Operations',
        'Malware Analysis & Incident Response',
        'Threat Hunting & Forensic Analysis'
      ],
      enrollTitle: 'SOC Analyst & Network Defense'
    }
  ];

  const filteredCourses = activeCategory === 'all'
    ? coursesList
    : coursesList.filter(c => c.category === activeCategory);

  return (
    <div className="courses-page">
      {/* PAGE HEADER */}
      <section className="page-banner-section">
        <div className="container text-center">
          <span className="section-badge">POPULAR COURSES</span>
          <h1 className="page-title">Industry-Relevant Course Catalog</h1>
          <p className="page-subtitle">
            Master in-demand technology stacks with hands-on lab environments and dedicated mentor support.
          </p>
        </div>
      </section>

      {/* COURSES GRID SECTION */}
      <section className="section courses-section" id="courses">
        <div className="container">
          {/* Category Filter Tabs */}
          <div className="course-tabs">
            <button
              className={`tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Courses
            </button>
            <button
              className={`tab-btn ${activeCategory === 'cyber' ? 'active' : ''}`}
              onClick={() => setActiveCategory('cyber')}
            >
              Cyber Security
            </button>
            <button
              className={`tab-btn ${activeCategory === 'ai' ? 'active' : ''}`}
              onClick={() => setActiveCategory('ai')}
            >
              Artificial Intelligence
            </button>
            <button
              className={`tab-btn ${activeCategory === 'cloud' ? 'active' : ''}`}
              onClick={() => setActiveCategory('cloud')}
            >
              Cloud Computing
            </button>
            <button
              className={`tab-btn ${activeCategory === 'data' ? 'active' : ''}`}
              onClick={() => setActiveCategory('data')}
            >
              Data Science
            </button>
            <button
              className={`tab-btn ${activeCategory === 'fullstack' ? 'active' : ''}`}
              onClick={() => setActiveCategory('fullstack')}
            >
              Full Stack
            </button>
          </div>

          {/* Course Cards Grid */}
          <div className="courses-grid" id="coursesGrid">
            {filteredCourses.map((c) => (
              <div key={c.key} className="course-card">
                <div className={`course-banner ${c.bannerClass}`}>
                  <img src={c.image} alt={c.title} className="course-banner-img" />
                  <div className="banner-overlay"></div>
                  <div className="course-badge">{c.badge}</div>
                  <div className="banner-icon"><i className={c.bannerIcon}></i></div>
                  <h3 className="banner-title">{c.title}</h3>
                </div>
                <div className="course-content">
                  <h4 className="course-subtitle">{c.subtitle}</h4>
                  <p className="course-meta">
                    <i className={c.metaIcon1}></i> {c.meta.split('|')[0]} | <i className={c.metaIcon2}></i> {c.meta.split('|')[1]}
                  </p>
                  <ul className="course-highlights">
                    {c.highlights.map((hl, idx) => (
                      <li key={idx}><i className="fa-solid fa-check"></i> {hl}</li>
                    ))}
                  </ul>
                  <div className="course-footer">
                    <button className="btn-link" onClick={() => openCourseDetails(c.key)}>
                      VIEW COURSE <i className="fa-solid fa-arrow-right-long"></i>
                    </button>
                    <button className="btn btn-sm btn-outline-cyan" onClick={() => openEnrollModalFor(c.enrollTitle)}>
                      Enroll
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
