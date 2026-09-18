import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopUtilityBar from './components/Common/TopUtilityBar';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BusinessesPage from './pages/BusinessesPage';
import EventsPage from './pages/EventsPage';
import NewsPage from './pages/NewsPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import FundPage from './pages/FundPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import RefundPage from './pages/RefundPage';
import DisclaimerPage from './pages/DisclaimerPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-slate-800 font-sans antialiased overflow-x-hidden selection:bg-brand-gold selection:text-white">
        <TopUtilityBar />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/businesses" element={<BusinessesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/fund" element={<FundPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/refund" element={<RefundPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;