import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Users, GraduationCap, ShieldCheck, Phone, ArrowRight, Fingerprint } from 'lucide-react';
import Navbar from '../components/layout/Navbar';

const LoginPage = () => {
    const [role, setRole] = useState('student');
    const [mobile, setMobile] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const roles = [
        { id: 'student', label: 'Student', icon: <GraduationCap size={20} /> },
        { id: 'parent', label: 'Parent', icon: <Users size={20} /> },
        { id: 'teacher', label: 'Teacher', icon: <User size={20} /> },
        { id: 'admin', label: 'Admin', icon: <ShieldCheck size={20} /> },
    ];

    const handleSendOtp = (e) => {
        e.preventDefault();
        if (mobile.length >= 10) {
            setOtpSent(true);
        }
    };

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
                    maxWidth: '500px',
                    padding: isMobile ? '1.5rem' : '2.5rem',
                    borderRadius: isMobile ? '20px' : '24px' // Modern rounding
                }}>
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Welcome Back</h2>
                        <p style={{ color: 'var(--color-text-light)' }}>Please select your role to continue</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', marginBottom: '2rem' }}>
                        {roles.map((r) => (
                            <button
                                key={r.id}
                                onClick={() => setRole(r.id)}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '1rem 0.5rem',
                                    background: role === r.id ? 'var(--color-primary-blue)' : 'rgba(255,255,255,0.5)',
                                    color: role === r.id ? 'white' : 'var(--color-text-dark)',
                                    border: 'none',
                                    borderRadius: '12px',
                                    transition: 'all 0.3s'
                                }}
                            >
                                {r.icon}
                                <span style={{ fontSize: '0.8rem', fontWeight: '500' }}>{r.label}</span>
                            </button>
                        ))}
                    </div>

                    <form onSubmit={handleSendOtp}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Mobile Number</label>
                            <div style={{ position: 'relative' }}>
                                <Phone size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-light)' }} />
                                <input
                                    type="tel"
                                    placeholder="Enter your mobile number"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '1rem 1rem 1rem 3rem',
                                        borderRadius: '12px',
                                        border: '1px solid rgba(0,0,0,0.1)',
                                        background: 'rgba(255,255,255,0.8)',
                                        fontSize: '1rem',
                                        outline: 'none'
                                    }}
                                />
                            </div>
                        </div>

                        {otpSent && (
                            <div style={{ marginBottom: '1.5rem' }} className="animate-fade-in">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Enter OTP</label>
                                <input
                                    type="text"
                                    placeholder="XXXX"
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '12px',
                                        border: '1px solid rgba(0,0,0,0.1)',
                                        background: 'rgba(255,255,255,0.8)',
                                        fontSize: '1rem',
                                        textAlign: 'center',
                                        letterSpacing: '0.5rem'
                                    }}
                                />
                            </div>
                        )}

                        <Link to={role === 'parent' ? "/parent/dashboard" : role === 'teacher' ? "/teacher/dashboard" : role === 'admin' ? "/admin/dashboard" : "/student/dashboard"} className="btn-primary" style={{ width: '100%', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                            {otpSent ? 'Login' : 'Send OTP'} <ArrowRight size={20} />
                        </Link>
                    </form>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1.5rem 0' }}>
                        <div style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.1)' }}></div>
                        <span style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>Or continue with</span>
                        <div style={{ flex: 1, height: '1px', background: 'rgba(0,0,0,0.1)' }}></div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                        <button className="btn-secondary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                            Google
                        </button>
                        <button className="btn-secondary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                            Facebook
                        </button>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <button style={{ background: 'none', border: 'none', color: 'var(--color-primary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', margin: '0 auto', fontSize: '0.9rem' }}>
                            <Fingerprint size={20} /> Login with Biometrics
                        </button>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <p style={{ color: 'var(--color-text-light)' }}>
                            Don't have an account? <Link to="/register" style={{ color: 'var(--color-primary-orange)', fontWeight: '600', textDecoration: 'none' }}>Register Now</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
