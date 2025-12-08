import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/features/landing/Hero';
import Features from '../components/features/landing/Features';
import Footer from '../components/layout/Footer';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Navbar />
            <Hero />
            <Features />
            <Footer />
        </div>
    );
};

export default LandingPage;
