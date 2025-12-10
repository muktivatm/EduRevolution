import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Phone, Lock, ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import { BRAND } from '../branding';

const RegisterPage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div style={{ minHeight: '100vh', background: 'var(--gradient-bg)' }}>
            <Navbar />
            <div className="container" style={{
                paddingTop: isMobile ? '6rem' : '8rem',
                paddingBottom: '2rem',
                paddingLeft: isMobile ? '1rem' : '1rem',
                paddingRight: isMobile ? '1rem' : '1rem',
                display: 'flex', justifyContent: 'center'
            }}>
                <div className="glass-card" style={{
                    width: '100%',
                    maxWidth: isMobile ? '500px' : '900px',
                    display: isMobile ? 'block' : 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    overflow: 'hidden',
                    borderRadius: isMobile ? '20px' : '24px'
                }}>

                    {/* Left Side - Info - Hidden on Mobile */}
                    {!isMobile && (
                        <div style={{ background: 'var(--color-primary-blue)', padding: '3rem', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Join the Revolution</h2>
                                <p style={{ opacity: 0.8, marginBottom: '2rem' }}>Experience the future of education with AI-powered learning.</p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    {[
                                        'Digital Learning Tools',
                                        'Real-Time Parental Transparency Portal',
                                        'Maximized Classroom Productivity',
                                        'Deep Performance Analytics Dashboards '
                                    ].map((item, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                            <div style={{ background: 'rgba(255,255,255,0.2)', padding: '0.25rem', borderRadius: '50%' }}>
                                                <CheckCircle size={16} />
                                            </div>
                                            <span style={{ fontSize: '0.9rem' }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '12px', marginTop: '2rem' }}>
                                <p style={{ fontStyle: 'italic', fontSize: '0.9rem', marginBottom: '0.5rem' }}>"{BRAND.name} changed the way I study. My grades improved by 40% in just 3 months!"</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{ width: '32px', height: '32px', background: 'white', borderRadius: '50%' }}></div>
                                    <div>
                                        <p style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Rahul Sharma</p>
                                        <p style={{ fontSize: '0.7rem', opacity: 0.7 }}>Class 10 Student</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Right Side - Form */}
                    <div style={{ padding: isMobile ? '1.5rem' : '3rem' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--color-primary-blue)' }}>Register Now</h3>

                        <form>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>First Name</label>
                                    <input type="text" placeholder="John" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #e5e7eb', outline: 'none' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Last Name</label>
                                    <input type="text" placeholder="Doe" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #e5e7eb', outline: 'none' }} />
                                </div>
                            </div>

                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Email Address</label>
                                <div style={{ position: 'relative' }}>
                                    <Mail size={18} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                                    <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', outline: 'none' }} />
                                </div>
                            </div>

                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Mobile Number</label>
                                <div style={{ position: 'relative' }}>
                                    <Phone size={18} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                                    <input type="tel" placeholder="9876543210" style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', outline: 'none' }} />
                                </div>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Password</label>
                                <div style={{ position: 'relative' }}>
                                    <Lock size={18} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                                    <input type="password" placeholder="Create a strong password" style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', outline: 'none' }} />
                                </div>
                            </div>

                            <Link to="/login" className="btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                                Admission Inquiry form  <ArrowRight size={18} />
                            </Link>
                        </form>

                        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                            <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>
                                Already have an account? <Link to="/login" style={{ color: 'var(--color-primary-blue)', fontWeight: '600', textDecoration: 'none' }}>Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
