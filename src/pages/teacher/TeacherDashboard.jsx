import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Users, ArrowRight, UserPlus, Award } from 'lucide-react';

const TeacherDashboard = () => {
    // Mock class data
    const myClasses = [
        { id: 1, name: 'Class 10-A', subject: 'Physics', students: 42, nextClass: '10:00 AM' },
        { id: 2, name: 'Class 9-B', subject: 'Science', students: 38, nextClass: '12:00 PM' },
        { id: 3, name: 'Class 11-C', subject: 'Physics - Lab', students: 30, nextClass: 'Tomorrow' },
        { id: 4, name: 'Class 8-A', subject: 'Science', students: 45, nextClass: 'Tomorrow' },
        { id: 5, name: 'Class 9-A', subject: 'Physics', students: 40, nextClass: 'Mon' },
        { id: 6, name: 'Class 12-B', subject: 'Advanced Physics', students: 25, nextClass: 'Tue' },
    ];

    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <DashboardLayout role="teacher">
            <div className="animate-fade-in" style={{ paddingBottom: '2rem' }}>
                {/* Announcement Banner */}
                <div style={{
                    background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                    borderRadius: '16px',
                    padding: '1rem',
                    marginBottom: '1.5rem',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.4)',
                    border: '1px solid rgba(255,255,255,0.2)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ padding: '0.25rem', background: 'rgba(255,255,255,0.2)', borderRadius: '6px' }}>
                            <Award size={18} color="white" />
                        </div>
                        <h3 style={{ fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: 'bold' }}>More features are coming soon</h3>
                    </div>
                    <div>
                        <p style={{ fontSize: '0.9rem', opacity: 0.95, fontWeight: '500', marginBottom: '0.1rem' }}>
                            we are here to convert your imagination to reality
                        </p>
                        <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>
                            (Providing fully Personalized solution for your organization)
                        </p>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827' }}>My Classes</h1>
                    {/* <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem', borderRadius: '30px', fontSize: '1rem' }}>
                        <UserPlus size={18} /> Add Class
                    </button> */}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
                    {myClasses.map((cl) => (
                        <div key={cl.id} className="glass-card" style={{ padding: '0', overflow: 'hidden', position: 'relative', borderRadius: '16px' }}>
                            <div style={{
                                padding: '1rem',
                                background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)',
                                borderBottom: '1px solid #f3f4f6',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '12px',
                                        background: 'var(--color-primary-blue)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: 'white',
                                        flexShrink: 0
                                    }}>
                                        <Users size={24} />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0' }}>{cl.name}</h3>
                                        <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>{cl.students} Students</p>
                                    </div>
                                </div>
                                <span style={{ fontSize: '0.75rem', fontWeight: '600', padding: '0.25rem 0.75rem', borderRadius: '20px', background: '#e0e7ff', color: '#3730a3' }}>
                                    {cl.subject}
                                </span>
                            </div>

                            <div style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <p style={{ fontSize: '0.9rem', color: '#6b7280' }}>Next: <span style={{ fontWeight: '600', color: '#111827' }}>{cl.nextClass}</span></p>
                                </div>
                                <button style={{
                                    width: '40px', height: '40px', borderRadius: '50%',
                                    border: '1px solid #e5e7eb', background: 'white',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    cursor: 'pointer', color: '#4b5563', transition: 'all 0.2s'
                                }}>
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default TeacherDashboard;
