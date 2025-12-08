import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { CreditCard, Download, Clock } from 'lucide-react';

const ParentFees = () => {
    return (
        <DashboardLayout role="parent">
            <div className="animate-fade-in">
                <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#111827' }}>Fees & Dues</h1>
                <p style={{ color: '#6b7280', marginBottom: '2rem' }}>Manage fee payments and view transaction history.</p>

                <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                    <CreditCard size={48} color="var(--color-primary-blue)" style={{ marginBottom: '1rem' }} />
                    <h2>Fee Management Portal Coming Soon</h2>
                    <p>Secure online payments, invoice downloads, and fee structure details will be available here.</p>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default ParentFees;
