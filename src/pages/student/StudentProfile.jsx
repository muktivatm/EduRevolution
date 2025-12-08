import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { User, Mail, Award, Calendar, ChevronRight, Edit2, LogOut, HelpCircle, MapPin, Phone, MessageSquare } from 'lucide-react';
import StudentLeaveManager from '../../components/features/student/StudentLeaveManager';

const StudentProfile = () => {
    const navigate = useNavigate();
    const [leaveManagerConfig, setLeaveManagerConfig] = useState({ isOpen: false, initialView: 'overview' });
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const openLeaveManager = (view) => {
        setLeaveManagerConfig({ isOpen: true, initialView: view });
    };

    return (
        <DashboardLayout role="student">
            <div style={{ maxWidth: '600px', margin: '0 auto', paddingBottom: isMobile ? '5rem' : '6rem' }} className="animate-fade-in">

                {/* 0. Announcement Banner */}
                <div style={{
                    background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                    borderRadius: isMobile ? '16px' : '20px',
                    padding: isMobile ? '1rem' : '1.25rem',
                    marginBottom: isMobile ? '1rem' : '1.5rem',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.4)',
                    border: '1px solid rgba(255,255,255,0.2)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ padding: '0.25rem', background: 'rgba(255,255,255,0.2)', borderRadius: '6px' }}>
                            <Award size={isMobile ? 16 : 18} color="white" />
                        </div>
                        <h3 style={{ fontSize: isMobile ? '0.95rem' : '1.1rem', fontWeight: 'bold' }}>More features are coming soon</h3>
                    </div>
                    <div>
                        <p style={{ fontSize: isMobile ? '0.8rem' : '0.9rem', opacity: 0.95, fontWeight: '500', marginBottom: '0.1rem' }}>
                            we are here to convert your imagination to reality
                        </p>
                        <p style={{ fontSize: isMobile ? '0.7rem' : '0.8rem', opacity: 0.8 }}>
                            (Providing fully Personalized solution for your organization)
                        </p>
                    </div>
                </div>

                {/* 1. Profile Badge Card */}
                <div className="glass-card" style={{
                    padding: isMobile ? '1rem' : '1.5rem',
                    marginBottom: isMobile ? '1rem' : '1.5rem',
                    position: 'relative',
                    borderRadius: isMobile ? '20px' : '24px',
                    border: '1px solid rgba(255,255,255,0.8)'
                }}>
                    <button style={{
                        position: 'absolute', top: isMobile ? '0.75rem' : '1rem', right: isMobile ? '0.75rem' : '1rem',
                        background: '#f3f4f6', border: 'none', borderRadius: '50%',
                        width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer'
                    }}>
                        <Edit2 size={16} color="#4b5563" />
                    </button>

                    <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '1rem' : '1.5rem' }}>
                        <img
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                            alt="Profile"
                            style={{
                                width: isMobile ? '64px' : '80px', height: isMobile ? '64px' : '80px', borderRadius: '50%',
                                border: '3px solid white', boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                            }}
                        />
                        <div style={{ flex: 1 }}>
                            <h2 style={{ fontSize: isMobile ? '1.2rem' : '1.4rem', fontWeight: '800', color: '#111827', marginBottom: '0.25rem' }}>Rahul Sharma</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', fontSize: isMobile ? '0.8rem' : '0.85rem', color: '#6b7280' }}>
                                <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Phone size={14} /> +91 98765 43210</p>
                                <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Mail size={14} /> rahul.s@edu.com</p>
                                <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={14} /> Mumbai, India</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Main Actions */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '0.75rem' : '1rem', marginBottom: isMobile ? '1.5rem' : '2rem' }}>
                    <button
                        onClick={() => openLeaveManager('overview')}
                        className="glass-card"
                        style={{
                            width: '100%', padding: isMobile ? '1rem' : '1.25rem', borderRadius: '16px',
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            cursor: 'pointer', border: '1px solid #e5e7eb', textAlign: 'left'
                        }}
                    >
                        <span style={{ fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: '700', color: '#1f2937' }}>Attendance & Leave Application </span>
                        <ChevronRight size={20} color="#9ca3af" />
                    </button>


                </div>

                {/* 3. Footer Actions */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '0.75rem' : '1rem' }}>
                    <button
                        className="glass-card"
                        style={{
                            width: '100%', padding: '1rem', borderRadius: '12px',
                            display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem',
                            cursor: 'pointer', border: '1px solid #e5e7eb',
                            color: '#4b5563', fontWeight: '600', fontSize: isMobile ? '0.9rem' : '1rem'
                        }}
                    >
                        <HelpCircle size={18} /> Need Help & Support
                    </button>

                    <button
                        className="glass-card"
                        style={{
                            width: '100%', padding: '1rem', borderRadius: '12px',
                            display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem',
                            cursor: 'pointer', border: '1px solid #e5e7eb',
                            color: '#4b5563', fontWeight: '600', fontSize: isMobile ? '0.9rem' : '1rem'
                        }}
                    >
                        <MessageSquare size={18} /> Complains & Feedback
                    </button>

                    <button
                        onClick={() => navigate('/login')}
                        className="glass-card"
                        style={{
                            width: '100%', padding: '1rem', borderRadius: '12px',
                            display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem',
                            cursor: 'pointer', border: '1px solid #fee2e2',
                            color: '#dc2626', fontWeight: '600', background: '#fef2f2', fontSize: isMobile ? '0.9rem' : '1rem'
                        }}
                    >
                        <LogOut size={18} /> Logout
                    </button>
                </div>

            </div>

            <StudentLeaveManager
                isOpen={leaveManagerConfig.isOpen}
                onClose={() => setLeaveManagerConfig(prev => ({ ...prev, isOpen: false }))}
                initialView={leaveManagerConfig.initialView}
            />
        </DashboardLayout>
    );
};

export default StudentProfile;
