import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { LogOut, Shield, Users, MessageSquare, CreditCard, BookOpen, UserCog, Calendar } from 'lucide-react';

const AdminDashboard = () => {
    const navigate = useNavigate();

    const features = [
        { icon: Users, text: 'The 360° Student Profile (The "Super View")' },
        { icon: MessageSquare, text: 'Digital Communication Hub' },
        { icon: CreditCard, text: 'The "Finance Fort" (Fees & Payroll)' },
        { icon: BookOpen, text: 'The "Academic Core" (Batches & Tests)' },
        { icon: UserCog, text: 'Teacher/Staff Management' },
        { icon: Calendar, text: 'Effortless Class Scheduling' },
    ];

    return (
        <DashboardLayout role="admin">
            {/* Full Screen Overlay to blur existing UI and show "Coming Soon" */}
            <div style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                background: 'rgba(255, 255, 255, 0.6)', // Semi-transparent white
                backdropFilter: 'blur(15px)', // Strong blur for the "non-accessible" feel
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem'
            }}>
                <div className="glass-card animate-scale-in" style={{
                    maxWidth: '550px',
                    width: '100%',
                    padding: '2.5rem',
                    textAlign: 'center',
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '24px',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    border: '1px solid rgba(255,255,255,0.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    maxHeight: '90vh', // Ensure it fits on mobile
                    overflowY: 'auto'
                }}>
                    <div style={{
                        width: '72px', height: '72px',
                        background: 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)',
                        borderRadius: '20px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        margin: '0 auto 1.5rem',
                        color: 'white',
                        boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)',
                        flexShrink: 0
                    }}>
                        <Shield size={36} />
                    </div>

                    <h1 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#111827', marginBottom: '0.25rem', lineHeight: '1.2' }}>
                        Admin Panel
                    </h1>
                    <p style={{ fontSize: '1rem', color: '#4f46e5', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                        Coming Soon...
                    </p>
                    <p style={{ fontSize: '1.1rem', color: '#4b5563', marginBottom: '2rem', lineHeight: '1.5' }}>
                        The Digital Command Center for your Tuition Classes
                    </p>

                    <div style={{ textAlign: 'left', display: 'grid', gap: '0.75rem', marginBottom: '2.5rem' }}>
                        {features.map((feat, idx) => (
                            <div key={idx} style={{
                                display: 'flex', alignItems: 'center', gap: '1rem',
                                padding: '0.75rem 1rem',
                                borderRadius: '12px',
                                background: '#f3f4f6',
                                border: '1px solid #e5e7eb'
                            }}>
                                <div style={{ color: '#4f46e5' }}><feat.icon size={18} /></div>
                                <span style={{ fontWeight: '600', color: '#374151', fontSize: '0.95rem' }}>{feat.text}</span>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                        <p style={{
                            fontSize: '1.1rem',
                            fontWeight: '700',
                            color: '#111827',
                            marginBottom: '0.25rem',
                            background: 'linear-gradient(90deg, #4f46e5, #ec4899)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            we are here to convert your imagination to reality
                        </p>
                        <p style={{
                            fontSize: '0.85rem',
                            color: '#6b7280',
                            fontStyle: 'italic'
                        }}>
                            (Providing fully Personalized solution for your organization)
                        </p>
                    </div>

                    <div style={{ marginTop: 'auto' }}>
                        <button
                            onClick={() => navigate('/')}
                            className="btn-primary"
                            style={{
                                width: '100%', padding: '1rem', fontSize: '1rem', borderRadius: '16px',
                                background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                                boxShadow: '0 4px 6px -1px rgba(220, 38, 38, 0.2)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
                            }}
                        >
                            <LogOut size={20} /> Log Out
                        </button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default AdminDashboard;
