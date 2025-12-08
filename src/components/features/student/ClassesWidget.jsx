import React, { useState } from 'react';
import { MapPin, Calendar, X, Award } from 'lucide-react';
import WeeklySchedule from '../parent/WeeklySchedule';

const ClassesWidget = () => {
    const [showSchedule, setShowSchedule] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const classes = [
        { subject: 'Math', time: '10:00AM', room: 'Room 5', type: 'live' },
        { subject: 'Science', time: '2:00PM', room: 'Room 3', type: 'upcoming' },
        { subject: 'History', time: '4:00PM', room: 'Room 1', type: 'upcoming' }

    ];

    return (
        <>
            <div className="glass-card" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    📅 TODAY'S CLASSES
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
                    {classes.map((cls, index) => (
                        <div key={index} style={{
                            border: '1px solid #e5e7eb',
                            borderRadius: '12px',
                            padding: '1rem',
                            background: cls.type === 'live' ? 'rgba(255, 107, 53, 0.05)' : 'white',
                            borderColor: cls.type === 'live' ? 'rgba(255, 107, 53, 0.2)' : '#e5e7eb'
                        }}>
                            <div style={{ marginBottom: '0.5rem' }}>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{cls.subject}</h4>
                                <span style={{ fontSize: '0.9rem', color: 'var(--color-primary-blue)', fontWeight: '600' }}>{cls.time}</span>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', color: 'var(--color-text-light)' }}>
                                <MapPin size={14} />
                                <span>{cls.room}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => setShowSchedule(true)}
                    style={{
                        marginTop: '1.5rem',
                        width: '100%',
                        padding: '0.75rem',
                        background: '#f3f4f6',
                        border: 'none',
                        borderRadius: '12px',
                        color: '#4b5563',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
                    }}
                >
                    <Calendar size={18} /> View Weekly Schedule
                </button>


            </div>

            {/* Weekly Schedule Modal */}
            {showSchedule && (
                <div style={{
                    position: 'fixed', inset: 0, zIndex: 1000,
                    background: 'rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(4px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '1rem'
                }}>
                    <div className="animate-fade-in" style={{
                        width: '100%', maxWidth: '600px',
                        maxHeight: '90vh', overflowY: 'auto',
                        background: 'white', borderRadius: '24px',
                        position: 'relative',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                    }}>
                        <button
                            onClick={() => setShowSchedule(false)}
                            style={{
                                position: 'absolute', top: '1rem', right: '1rem',
                                background: '#f3f4f6', border: 'none', borderRadius: '50%',
                                width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer', zIndex: 10
                            }}
                        >
                            <X size={20} color="#374151" />
                        </button>

                        <div style={{ padding: '0.5rem' }}>
                            <WeeklySchedule />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ClassesWidget;
