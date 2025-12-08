import React from 'react';
import { Award } from 'lucide-react';
import DashboardLayout from '../../components/layout/DashboardLayout';

import ClassesWidget from '../../components/features/student/ClassesWidget';
import HomeworkSection from '../../components/features/student/HomeworkSection';
import QuickActions from '../../components/features/student/QuickActions';
import LeaderboardWidget from '../../components/features/student/LeaderboardWidget';

const StudentDashboard = () => {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <DashboardLayout role="student">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>

                <ClassesWidget />
                <HomeworkSection />
                <QuickActions />
                <LeaderboardWidget />

                {/* Announcement Banner */}
                <div style={{
                    background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                    borderRadius: isMobile ? '16px' : '20px',
                    padding: isMobile ? '1rem' : '1.25rem',
                    marginBottom: '1rem',
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
            </div>
        </DashboardLayout>
    );
};

export default StudentDashboard;
