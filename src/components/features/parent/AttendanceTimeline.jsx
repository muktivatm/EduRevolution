import React from 'react';
import { CheckCircle, XCircle, Clock, FileText, AlertCircle } from 'lucide-react';

const AttendanceTimeline = () => {
    const classes = [
        { subject: 'Mathematics', time: '10:00 AM', status: 'attended', homework: 'Ex 4.2 Q1-Q5', teacher: 'Mr. Verma' },
        { subject: 'Science', time: '12:00 PM', status: 'missed', reason: 'Internet Issue', teacher: 'Mrs. Gupta' },
        { subject: 'English', time: '02:00 PM', status: 'cancelled', reason: 'Teacher Unavailable', apology: 'Sorry for the inconvenience.', teacher: 'Ms. Roy' },
        { subject: 'History', time: '04:00 PM', status: 'upcoming', teacher: 'Mr. Singh' },
    ];

    return (
        <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Today's Activity</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {classes.map((cls, index) => (
                    <div key={index} style={{ display: 'flex', gap: '1rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{
                                width: '12px', height: '12px', borderRadius: '50%',
                                background: cls.status === 'attended' ? '#10b981' :
                                    cls.status === 'missed' ? '#ef4444' :
                                        cls.status === 'cancelled' ? '#f59e0b' : '#d1d5db',
                                marginTop: '6px'
                            }}></div>
                            {index !== classes.length - 1 && <div style={{ width: '2px', flex: 1, background: '#f3f4f6', marginTop: '4px' }}></div>}
                        </div>

                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                <h4 style={{ fontSize: '1rem', fontWeight: '600' }}>{cls.subject}</h4>
                                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-light)' }}>{cls.time}</span>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                {cls.status === 'attended' && <span style={{ fontSize: '0.8rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><CheckCircle size={14} /> Attended</span>}
                                {cls.status === 'missed' && <span style={{ fontSize: '0.8rem', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><XCircle size={14} /> Missed</span>}
                                {cls.status === 'cancelled' && <span style={{ fontSize: '0.8rem', color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><AlertCircle size={14} /> Cancelled</span>}
                                {cls.status === 'upcoming' && <span style={{ fontSize: '0.8rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Clock size={14} /> Upcoming</span>}

                                <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>• {cls.teacher}</span>
                            </div>

                            {cls.homework && (
                                <div style={{ background: '#f0f9ff', padding: '0.75rem', borderRadius: '8px', border: '1px solid #bae6fd' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem', color: '#0284c7' }}>
                                        <FileText size={14} />
                                        <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>Homework Assigned</span>
                                    </div>
                                    <p style={{ fontSize: '0.9rem', color: '#0c4a6e' }}>{cls.homework}</p>
                                </div>
                            )}

                            {cls.status === 'cancelled' && (
                                <div style={{ background: '#fffbeb', padding: '0.75rem', borderRadius: '8px', border: '1px solid #fcd34d' }}>
                                    <p style={{ fontSize: '0.9rem', color: '#92400e', marginBottom: '0.25rem' }}>Reason: {cls.reason}</p>
                                    <p style={{ fontSize: '0.85rem', color: '#b45309', fontStyle: 'italic' }}>"{cls.apology}"</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AttendanceTimeline;
