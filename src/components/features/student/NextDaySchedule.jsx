import React, { useState } from 'react';
import { Calendar, Clock, ChevronRight, Video } from 'lucide-react';
import { useSchedule } from '../../../context/ScheduleContext';
import WeeklySchedule from '../../features/parent/WeeklySchedule'; // Reusing the weekly schedule component

const NextDaySchedule = () => {
    const { scheduleData } = useSchedule();
    const [showWeekly, setShowWeekly] = useState(false);

    // Helper to get "Tomorrow's" day name
    const getTomorrowDayName = () => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return days[tomorrow.getDay()];
    };

    const tomorrowDay = getTomorrowDayName();
    const tomorrowSchedule = scheduleData[tomorrowDay] || [];

    if (showWeekly) {
        return (
            <div className="animate-fade-in">
                <button
                    onClick={() => setShowWeekly(false)}
                    style={{ marginBottom: '1rem', background: 'none', border: 'none', color: 'var(--color-primary-blue)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                    &larr; Back to Daily View
                </button>
                <WeeklySchedule />
            </div>
        );
    }

    return (
        <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>Tomorrow's Schedule</h2>
                    <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>{tomorrowDay}</p>
                </div>
                <button
                    onClick={() => setShowWeekly(true)}
                    className="btn-secondary"
                    style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
                >
                    View Full Week
                </button>
            </div>

            {tomorrowSchedule.length > 0 ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                    {tomorrowSchedule.map((slot, index) => (
                        <div key={index} style={{
                            padding: '1rem',
                            borderRadius: '12px',
                            background: slot.type === 'Break' ? '#f3f4f6' : 'white',
                            border: '1px solid #e5e7eb',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {slot.type !== 'Break' && (
                                <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--color-primary-blue)' }} />
                            )}

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#4b5563', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                    <Clock size={14} /> {slot.time}
                                </span>
                                {slot.type !== 'Break' && <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: '#eff6ff', color: 'var(--color-primary-blue)', borderRadius: '10px' }}>Class</span>}
                            </div>

                            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#111827' }}>{slot.subject}</h3>

                            {slot.teacher && (
                                <p style={{ fontSize: '0.9rem', color: '#6b7280' }}>{slot.teacher}</p>
                            )}

                            {slot.type !== 'Break' && (
                                <button style={{
                                    marginTop: 'auto',
                                    padding: '0.5rem',
                                    background: 'var(--color-primary-blue)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    fontSize: '0.85rem'
                                }}>
                                    <Video size={16} /> Join Class
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <div style={{ textAlign: 'center', padding: '2rem', color: '#9ca3af' }}>
                    <Calendar size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                    <p>No classes scheduled for tomorrow.</p>
                </div>
            )}
        </div>
    );
};

export default NextDaySchedule;
