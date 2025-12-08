import React, { useState } from 'react';
import { Calendar, Clock, ChevronRight, ChevronLeft } from 'lucide-react';
import { useSchedule } from '../../../context/ScheduleContext';

const WeeklySchedule = () => {
    const { scheduleData } = useSchedule();
    const [currentWeekStart, setCurrentWeekStart] = useState(new Date());
    const days = Object.keys(scheduleData);
    const [selectedDay, setSelectedDay] = useState('Monday');

    return (
        <div className="glass-card" style={{ padding: '1.5rem', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ padding: '0.5rem', background: '#eff6ff', borderRadius: '8px', color: 'var(--color-primary-blue)' }}>
                        <Calendar size={20} />
                    </div>
                    <h3 style={{ fontSize: '1.1rem', color: '#1e3a8a' }}>Weekly Schedule</h3>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {/* Simple day selector for mobile/compact view */}
                    <select
                        value={selectedDay}
                        onChange={(e) => setSelectedDay(e.target.value)}
                        style={{ padding: '0.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', outline: 'none', fontSize: '0.9rem' }}
                    >
                        {days.map(day => <option key={day} value={day}>{day}</option>)}
                    </select>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {scheduleData[selectedDay].map((slot, index) => (
                    <div key={index} style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '1rem',
                        background: slot.color,
                        borderRadius: '12px',
                        borderLeft: `4px solid ${slot.textColor}`
                    }}>
                        <div style={{ marginRight: '1rem', minWidth: '120px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: slot.textColor, fontWeight: '600', fontSize: '0.9rem' }}>
                                <Clock size={16} />
                                {slot.time}
                            </div>
                        </div>

                        <div style={{ flex: 1 }}>
                            <h4 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.2rem' }}>{slot.subject}</h4>
                            {slot.teacher && <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>{slot.teacher}</p>}
                            {slot.note && <p style={{ fontSize: '0.8rem', color: '#ef4444', fontStyle: 'italic', marginTop: '0.2rem' }}>* {slot.note}</p>}
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #f3f4f6', textAlign: 'center' }}>
                <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                    Regular Tuition Timing: <span style={{ fontWeight: '600', color: '#1f2937' }}>3:00 PM - 6:00 PM</span>
                </p>
            </div>
        </div>
    );
};

export default WeeklySchedule;
