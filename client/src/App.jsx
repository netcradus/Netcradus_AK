import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Dashboard from './pages/Dashboard';
import Certificate from './pages/Certificate';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export default function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [activeDrawer, setActiveDrawer] = useState(null);
  const [enrollCourseName, setEnrollCourseName] = useState('');
  const [selectedCourseKey, setSelectedCourseKey] = useState('cyber');
  const [toast, setToast] = useState({ show: false, message: '' });

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = (modalType, forceEnroll = false) => {
    setActiveModal(null);
    if (forceEnroll) {
      setTimeout(() => {
        setActiveModal('enroll');
      }, 150);
    }
  };

  const openDrawer = (drawerType) => {
    setActiveDrawer(drawerType);
  };

  const closeDrawer = () => {
    setActiveDrawer(null);
  };

  const openEnrollModalFor = (courseTitle) => {
    setEnrollCourseName(courseTitle || '');
    setActiveModal('enroll');
  };

  const openCourseDetails = (courseKey) => {
    setSelectedCourseKey(courseKey);
    setActiveModal('courseDetail');
  };

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 4500);
  };

  const handleFormSubmit = (event, formTitle) => {
    event.preventDefault();
    setActiveModal(null);
    setActiveDrawer(null);
    showToast(`Thank you! Your ${formTitle} has been received. Our team will contact you within 2 hours.`);
    if (event.target) {
      event.target.reset();
    }
  };

  return (
    <AppContext.Provider value={{
      activeModal,
      activeDrawer,
      openModal,
      closeModal,
      openDrawer,
      closeDrawer,
      enrollCourseName,
      setEnrollCourseName,
      openEnrollModalFor,
      selectedCourseKey,
      setSelectedCourseKey,
      openCourseDetails,
      toast,
      showToast,
      handleFormSubmit
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="courses" element={<Courses />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="certificate" element={<Certificate />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}
