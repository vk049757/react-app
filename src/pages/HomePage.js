// src/pages/HomePage.js
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import TechnologyStack from '../components/TechnologyStack';
import Portfolio from '../components/Portfolio';
import DesignSolution from '../components/DesignSolution';
import Experience from '../components/Experience';
import Timeline from '../components/Timeline';
import InquiryForm from '../components/InquiryForm';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <TechnologyStack />
      <Portfolio />
      <DesignSolution />
      <Experience />
      <Timeline />
      <InquiryForm />
      <Footer />
    </div>
  );
};

export default HomePage;
