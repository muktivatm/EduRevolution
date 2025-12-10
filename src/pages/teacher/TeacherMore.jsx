import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { User, Settings, LogOut, HelpCircle, Bell, CreditCard, FileText, Rocket, Star, Book, MessageCircle } from 'lucide-react';

const TeacherMore = () => {
    const navigate = useNavigate();
    const menuItems = [
        { icon: User, label: 'My Profile', color: '#3b82f6', bg: '#eff6ff' },
        { icon: CreditCard, label: 'Payout & Receipt', color: '#10b981', bg: '#ecfdf5' },
        { icon: MessageCircle, label: 'Check Feedbacks', color: '#8b5cf6', bg: '#f3e8ff' },
        { icon: Book, label: 'Study Materials ', color: '#f59e0b', bg: '#fef3c7' },
        { icon: Settings, label: 'Settings', color: '#6b7280', bg: '#f3f4f6' },
        { icon: HelpCircle, label: 'Help & Support', color: '#6366f1', bg: '#e0e7ff' },
        { icon: LogOut, label: 'Logout', color: '#ef4444', bg: '#fee2e2' },
    ];

    return (
        <DashboardLayout role="teacher">
            <div className="animate-fade-in" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                {/* Coming Soon Hero Section */}
                <div style={{
                    minHeight: '25vh', // Significantly reduced
                    background: 'linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)',
                    borderRadius: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    marginBottom: '1rem',
                    position: 'relative',
                    overflow: 'hidden',
                    textAlign: 'center',
                    padding: '1.5rem',
                    boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.15)'
                }}>
                    {/* Decorative elements */}
                    <Rocket size={80} style={{ position: 'absolute', top: '5%', right: '5%', opacity: 0.1, transform: 'rotate(15deg)' }} />
                    <Star size={50} style={{ position: 'absolute', bottom: '10%', left: '5%', opacity: 0.1, transform: 'rotate(-15deg)' }} />

                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', zIndex: 1 }}>More Power to You!</h2>
                    <p style={{ fontSize: '0.9rem', maxWidth: '500px', opacity: 0.95, marginBottom: '1rem', zIndex: 1, lineHeight: '1.4' }}>
                        Advanced analytics and automated reporting are coming soon.
                    </p>
                    <span style={{
                        background: 'rgba(255,255,255,0.25)',
                        padding: '0.4rem 1rem',
                        borderRadius: '20px',
                        backdropFilter: 'blur(10px)',
                        fontWeight: '700',
                        fontSize: '0.75rem',
                        letterSpacing: '0.05em',
                        border: '1px solid rgba(255,255,255,0.3)'
                    }}>
                        COMING SOON
                    </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1rem' }}>
                    {menuItems.map((item, index) => (
                        <div key={index} className="glass-card" style={{
                            padding: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            border: '1px solid transparent',
                            borderRadius: '16px',
                            marginBottom: 0
                        }}
                            onClick={() => {
                                if (item.label === 'Logout') {
                                    navigate('/login');
                                } else if (item.label === 'My Profile') {
                                    navigate('/teacher/profile');
                                } else if (item.label === 'Assessment') {
                                    navigate('/teacher/assessment');
                                } else if (item.label === 'Communication') {
                                    navigate('/teacher/communication');
                                }
                            }}
                        >
                            <div style={{
                                width: '40px', height: '40px',
                                borderRadius: '12px',
                                background: item.bg,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: item.color,
                                flexShrink: 0
                            }}>
                                <item.icon size={20} />
                            </div>
                            <span style={{ fontSize: '1rem', fontWeight: '600', color: '#1f2937' }}>{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default TeacherMore;
