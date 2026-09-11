import React, { createContext, useContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AuthLayoutContainer from './components/auth/AuthLayoutContainer';
import ProtectedRoute from './components/ProtectedRoute';
import PublicOnlyRoute from './components/PublicOnlyRoute';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Dashboard from './pages/Dashboard';
import Certificate from './pages/Certificate';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { academyService } from './services/academyService';

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export default function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [activeDrawer, setActiveDrawer] = useState(null);
  const [enrollCourseName, setEnrollCourseName] = useState('');
  const [selectedCourseKey, setSelectedCourseKey] = useState('cyber');
  const [toast, setToast] = useState({ show: false, message: '' });

  // Dynamic API Courses state
  const [courses, setCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [coursesError, setCoursesError] = useState(null);

  const loadCourses = async () => {
    setLoadingCourses(true);
    setCoursesError(null);
    try {
      const data = await academyService.getCourses('all');
      setCourses(data);
    } catch (err) {
      console.error('[App] Failed to fetch courses catalog from API:', err);
      setCoursesError(err.message || 'Unable to load courses right now. Please try again.');
    } finally {
      setLoadingCourses(false);
    }
  };

  useEffect(() => {
    loadCourses();
  }, []);

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
    <AuthProvider>
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
        handleFormSubmit,
        courses,
        loadingCourses,
        coursesError,
        reloadCourses: loadCourses,
      }}>
        <BrowserRouter>
          <Routes>
            {/* Protected Main Website Routes (Requires Successful Login) */}
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="courses" element={<Courses />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="certificate" element={<Certificate />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
              </Route>
            </Route>

            {/* Public Authentication Routes (Redirects to / if already logged in) */}
            <Route element={<PublicOnlyRoute />}>
              <Route element={<AuthLayoutContainer />}>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </AuthProvider>
  );
}
