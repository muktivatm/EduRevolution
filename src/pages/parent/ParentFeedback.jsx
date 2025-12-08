import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { AlertCircle, Send, MessageSquare } from 'lucide-react';

const ParentFeedback = () => {
    return (
        <DashboardLayout role="parent">
            <div className="animate-fade-in">
                <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#111827' }}>Feedback & Support</h1>
                <p style={{ color: '#6b7280', marginBottom: '2rem' }}>Share your suggestions or raise concerns directly with the administration.</p>

                <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                    <MessageSquare size={48} color="var(--color-primary-blue)" style={{ marginBottom: '1rem' }} />
                    <h2>Feedback System Coming Soon</h2>
                    <p>A direct channel for your valuable feedback, suggestions, and grievance redressal.</p>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default ParentFeedback;
