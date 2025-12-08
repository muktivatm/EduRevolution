import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';


import PerformanceComparison from '../../components/features/parent/PerformanceComparison';
import PerformanceNavigator from '../../components/features/parent/PerformanceNavigator';
import CommunityBoard from '../../components/features/parent/CommunityBoard';
import WeeklySchedule from '../../components/features/parent/WeeklySchedule';
import { MessageSquarePlus } from 'lucide-react';

import StudentActivityWidget from '../../components/features/parent/StudentActivityWidget';

const ParentDashboard = () => {
    return (
        <DashboardLayout role="parent">
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ marginBottom: '1.5rem', paddingTop: '0.5rem' }}>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#111827', letterSpacing: '-0.025em', marginBottom: '0.25rem' }}>Welcome, Mr. Sharma</h1>
                    <p style={{ fontSize: '0.95rem', color: '#6b7280' }}>Here's what's happening with Rahul today.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    {/* Left Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <StudentActivityWidget />
                        <WeeklySchedule />

                    </div>

                    {/* Right Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <PerformanceNavigator />
                        <PerformanceComparison />
                        <CommunityBoard />
                    </div>
                </div>

                {/* Feedback Button (Subtle) */}
                <div style={{ textAlign: 'right', marginTop: '2rem' }}>
                    <button style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--color-text-light)',
                        fontSize: '0.9rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        cursor: 'pointer',
                        opacity: 0.7,
                        transition: 'opacity 0.3s'
                    }}
                        onMouseOver={(e) => e.currentTarget.style.opacity = 1}
                        onMouseOut={(e) => e.currentTarget.style.opacity = 0.7}
                    >
                        <MessageSquarePlus size={18} /> Share Feedback / Complaint
                    </button>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default ParentDashboard;
