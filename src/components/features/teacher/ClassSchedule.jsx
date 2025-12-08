import React from 'react';
import { Clock, MapPin, Users } from 'lucide-react';

const ClassSchedule = () => {
    const classes = [
        { time: '09:00 AM - 10:00 AM', class: 'Class 10-A', subject: 'Physics', room: 'Room 302', students: 35 },
        { time: '10:15 AM - 11:15 AM', class: 'Class 9-B', subject: 'Physics', room: 'Lab 1', students: 32 },
        { time: '12:00 PM - 01:00 PM', class: 'Class 11-A', subject: 'Physics (Advanced)', room: 'Room 305', students: 28 },
    ];

    return (
        <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Today's Schedule</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {classes.map((cls, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#f9fafb', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '80px', textAlign: 'center' }}>
                            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#1f2937' }}>{cls.time.split(' - ')[0]}</span>
                            <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>{cls.time.split(' - ')[1]}</span>
                        </div>
                        <div style={{ width: '2px', height: '40px', background: 'var(--color-primary-blue)', opacity: 0.5 }}></div>
                        <div style={{ flex: 1 }}>
                            <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.25rem' }}>{cls.class} - {cls.subject}</h4>
                            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: '#6b7280' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><MapPin size={14} /> {cls.room}</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Users size={14} /> {cls.students} Students</span>
                            </div>
                        </div>
                        <button className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>View</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClassSchedule;
