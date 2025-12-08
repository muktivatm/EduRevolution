import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Rocket, Star } from 'lucide-react';

const TeacherAssessment = () => {
    return (
        <DashboardLayout role="teacher">
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
                    background: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)',
                    padding: '2rem',
                    borderRadius: '50%',
                    marginBottom: '2rem',
                    position: 'relative'
                }}>
                    <Rocket size={64} className="text-secondary" style={{ color: '#db2777' }} />
                    <Star
                        size={24}
                        fill="#f472b6"
                        color="#f472b6"
                        style={{ position: 'absolute', top: '10px', right: '10px', animation: 'pulse 2s infinite' }}
                    />
                </div>

                <h1 style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    background: 'linear-gradient(90deg, #db2777 0%, #be185d 100%)',
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
                    The Teacher Assessment panel is under construction. Soon you will be able to create, schedule, and grade assessments efficiently!
                </p>
            </div>
        </DashboardLayout>
    );
};

export default TeacherAssessment;
