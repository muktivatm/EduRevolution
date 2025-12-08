import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import NextDaySchedule from '../../components/features/student/NextDaySchedule';
import HomeworkSection from '../../components/features/student/HomeworkSection';

const StudentClasses = () => {
    return (
        <DashboardLayout role="student">
            <div className="animate-fade-in">
                <div style={{ marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#111827' }}>My Classes</h1>
                    <p style={{ color: '#6b7280' }}>Manage your schedule and assignments.</p>
                </div>

                <NextDaySchedule />
                <HomeworkSection />
            </div>
        </DashboardLayout>
    );
};

export default StudentClasses;
