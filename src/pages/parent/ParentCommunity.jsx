import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { MessageCircle, Users, Calendar } from 'lucide-react';

const ParentCommunity = () => {
    return (
        <DashboardLayout role="parent">
            <div className="animate-fade-in">
                <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#111827' }}>School Community</h1>
                <p style={{ color: '#6b7280', marginBottom: '2rem' }}>Connect with other parents and stay updated on school events.</p>

                <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                    <Users size={48} color="var(--color-primary-blue)" style={{ marginBottom: '1rem' }} />
                    <h2>Community Hub Coming Soon</h2>
                    <p>Discussion forums, event calendars, and parent-teacher association updates are on the way.</p>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default ParentCommunity;
