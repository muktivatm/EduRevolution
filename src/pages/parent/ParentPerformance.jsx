import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { TrendingUp, Award, Calendar } from 'lucide-react';

const ParentPerformance = () => {
    return (
        <DashboardLayout role="parent">
            <div className="animate-fade-in">
                <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#111827' }}>Performance Analytics</h1>
                <p style={{ color: '#6b7280', marginBottom: '2rem' }}>Detailed insights into Rahul's academic progress.</p>

                <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                    <TrendingUp size={48} color="var(--color-primary-blue)" style={{ marginBottom: '1rem' }} />
                    <h2>Performance Dashboard Coming Soon</h2>
                    <p>We are building a comprehensive view of test scores, attendance trends, and subject-wise analysis.</p>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default ParentPerformance;
