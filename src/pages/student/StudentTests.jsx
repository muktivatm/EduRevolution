import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Rocket, Star } from 'lucide-react';

const StudentTests = () => {
    return (
        <DashboardLayout role="student">
            <div className="animate-fade-in" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '60vh',
                textAlign: 'center',
                padding: '2rem'
            }}>
                <div style={{
                    background: 'linear-gradient(135deg, #e0f2fe 0%, #dbeafe 100%)',
                    padding: '2rem',
                    borderRadius: '50%',
                    marginBottom: '2rem',
                    position: 'relative'
                }}>
                    <Rocket size={64} className="text-secondary" style={{ color: 'var(--color-primary-blue)' }} />
                    <Star
                        size={24}
                        fill="#fbbf24"
                        color="#fbbf24"
                        style={{ position: 'absolute', top: '10px', right: '10px', animation: 'pulse 2s infinite' }}
                    />
                </div>

                <h1 style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    background: 'var(--gradient-primary)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '1rem'
                }}>
                    Coming Soon!
                </h1>

                <p style={{
                    color: '#6b7280',
                    fontSize: '1.2rem',
                    maxWidth: '500px',
                    lineHeight: '1.6'
                }}>
                    We are building a comprehensive Assessment module. Soon you'll be able to take tests and track your progress like never before!
                </p>
            </div>
        </DashboardLayout>
    );
};

export default StudentTests;
