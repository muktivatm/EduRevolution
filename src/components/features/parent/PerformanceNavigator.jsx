import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Award, X, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';

const PerformanceNavigator = () => {
    const [showAttendanceModal, setShowAttendanceModal] = useState(false);
    const [selectedDay, setSelectedDay] = useState(null); // For detailed day view
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [currentMonth, setCurrentMonth] = useState(new Date(2025, 0)); // January 2025

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Mock Attendance Data for Jan 2025
    const getDayStatus = (day) => {
        if (day === 4 || day === 11 || day === 12 || day === 18 || day === 19 || day === 25) return 'holiday';
        if (day === 8) return 'absent';
        if (day === 15) return 'late';
        if (day > 25) return 'upcoming';
        return 'present';
    };

    // Mock Details for specific days
    const getDayDetails = (day) => {
        if (day === 8) {
            return {
                type: 'Sick Leave',
                description: "Rahul had a high fever and was advised rest by the doctor.",
                parentConfirmed: true,
                teacherConfirmed: true,
                date: "8th Jan 2025"
            };
        }
        if (day === 15) {
            return {
                type: 'Emergency Leave / Late',
                description: "School bus breakdown caused significant delay.",
                parentConfirmed: false, // Not confirmed example
                teacherConfirmed: true,
                date: "15th Jan 2025"
            };
        }
        return null;
    };

    const handleDayClick = (day, status) => {
        if (status === 'absent' || status === 'late') {
            setSelectedDay({
                day,
                status,
                details: getDayDetails(day) || { type: 'Unspecified', description: 'No details available.', parentConfirmed: false, teacherConfirmed: false, date: `${day} Jan 2025` }
            });
        }
    };

    const renderCalendar = () => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();

        const firstDay = new Date(year, month, 1).getDay(); // 0 = Sun
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const days = [];

        // Empty slots
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} style={{ height: '40px' }}></div>);
        }

        // Days
        for (let day = 1; day <= daysInMonth; day++) {
            const status = getDayStatus(day);
            let color = '#ccc';
            let isInteractable = false;

            switch (status) {
                case 'present': color = '#22c55e'; break;
                case 'absent': color = '#ef4444'; isInteractable = true; break;
                case 'late': color = '#eab308'; isInteractable = true; break;
                case 'holiday': color = '#3b82f6'; break;
                case 'upcoming': color = '#e5e7eb'; break;
                default: color = '#e5e7eb';
            }

            days.push(
                <div
                    key={day}
                    onClick={() => isInteractable && handleDayClick(day, status)}
                    style={{
                        height: '50px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: isInteractable ? `1px solid ${color}` : '1px solid #f3f4f6',
                        borderRadius: '8px',
                        background: status === 'upcoming' ? '#ffffff' : (isInteractable ? '#fff' : '#f8fafc'),
                        cursor: isInteractable ? 'pointer' : 'default',
                        boxShadow: isInteractable ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
                        transition: 'transform 0.1s',
                        transform: isInteractable ? 'scale(1)' : 'none'
                    }}
                    onMouseDown={(e) => isInteractable && (e.currentTarget.style.transform = 'scale(0.95)')}
                    onMouseUp={(e) => isInteractable && (e.currentTarget.style.transform = 'scale(1)')}
                >
                    <span style={{ fontSize: '0.8rem', color: '#374151', marginBottom: '2px', fontWeight: isInteractable ? '600' : '400' }}>{day}</span>
                    <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: color
                    }}></div>
                </div>
            );
        }

        return days;
    };

    return (
        <>
            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                {/* Header: Quick Overview */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ padding: '0.5rem', background: '#f0fdf4', borderRadius: '8px' }}>
                        <TrendingUp size={20} color="#16a34a" />
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937' }}>Quick Overview</h3>
                </div>

                {/* Section 1: Attendance Overview */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
                    <div>
                        <p style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '0.25rem' }}>Attendance</p>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#111827' }}>85%</h2>
                            <span style={{ fontSize: '0.85rem', color: '#16a34a', fontWeight: '500' }}>Good</span>
                        </div>
                    </div>
                    <button
                        onClick={() => setShowAttendanceModal(true)}
                        style={{
                            padding: '0.5rem 1rem',
                            background: 'white',
                            border: '1px solid #e5e7eb',
                            borderRadius: '8px',
                            fontSize: '0.85rem',
                            fontWeight: '500',
                            color: '#374151',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                        }}
                    >
                        <CalendarIcon size={16} /> Details
                    </button>
                </div>

                {/* Section 2: Class Rank */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', borderRadius: '12px', color: 'white' }}>
                    <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}>
                        <Award size={24} color="#fbbf24" />
                    </div>
                    <div>
                        <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.25rem' }}>Class Rank</p>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>5th</h3>
                            <span style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>/ 40 Students</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Attendance Modal */}
            {showAttendanceModal && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: isMobile ? 'white' : 'rgba(0,0,0,0.6)',
                    zIndex: 1000,
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    padding: isMobile ? '0' : '1.5rem',
                    backdropFilter: isMobile ? 'none' : 'blur(4px)'
                }}>
                    <div className="animate-fade-in" style={{
                        background: 'white',
                        borderRadius: isMobile ? '0' : '20px',
                        width: isMobile ? '100%' : '100%',
                        height: isMobile ? '100%' : 'auto',
                        maxWidth: isMobile ? 'none' : '500px',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        overflow: 'hidden',
                        display: 'flex', flexDirection: 'column',
                    }}>
                        {/* Modal Header */}
                        <div style={{ padding: '1.25rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f9fafb' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CalendarIcon size={20} color="#374151" />
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#111827' }}>Attendance Detail</h3>
                            </div>
                            <button
                                onClick={() => setShowAttendanceModal(false)}
                                style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                            >
                                <X size={18} color="#6b7280" />
                            </button>
                        </div>

                        {/* Calendar Content */}
                        <div style={{ padding: '1.5rem', overflowY: 'auto' }}>

                            {/* Month Navigation */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', background: '#f8fafc', padding: '0.75rem', borderRadius: '8px' }}>
                                <button style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '0.25rem' }}>
                                    <ChevronLeft size={20} color="#6b7280" />
                                </button>
                                <h4 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#1f2937', textTransform: 'uppercase' }}>
                                    {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                                </h4>
                                <button style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '0.25rem' }}>
                                    <ChevronRight size={20} color="#6b7280" />
                                </button>
                            </div>

                            {/* Weekday Headers */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', marginBottom: '0.5rem', textAlign: 'center' }}>
                                {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
                                    <span key={day} style={{ fontSize: '0.75rem', fontWeight: '600', color: '#6b7280' }}>{day}</span>
                                ))}
                            </div>

                            {/* Days Grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                {renderCalendar()}
                            </div>

                            {/* Legend */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', padding: '1rem', background: '#f8fafc', borderRadius: '8px', border: '1px solid #f3f4f6' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}></div>
                                    <span style={{ fontSize: '0.8rem', color: '#4b5563' }}>Present</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }}></div>
                                    <span style={{ fontSize: '0.8rem', color: '#4b5563' }}>Absent</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#eab308' }}></div>
                                    <span style={{ fontSize: '0.8rem', color: '#4b5563' }}>Late</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6' }}></div>
                                    <span style={{ fontSize: '0.8rem', color: '#4b5563' }}>Holiday</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Day Detail Popup */}
            {selectedDay && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    zIndex: 1100, // Higher than calendar modal
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    padding: isMobile ? '0' : '1.5rem',
                    backdropFilter: 'blur(4px)'
                }}>
                    <div className="animate-fade-in" style={{
                        background: 'white',
                        borderRadius: isMobile ? '0' : '16px',
                        width: isMobile ? '100%' : '400px',
                        height: isMobile ? '100%' : 'auto',
                        padding: '1.5rem',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                        display: 'flex', flexDirection: 'column'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827' }}>
                                {selectedDay.details.date || selectedDay.day}
                            </h3>
                            <button
                                onClick={() => setSelectedDay(null)}
                                style={{ background: '#f3f4f6', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                            >
                                <X size={18} color="#4b5563" />
                            </button>
                        </div>

                        <div style={{ flex: 1 }}>
                            {/* Leave Type Badge */}
                            <div style={{
                                display: 'inline-block',
                                padding: '0.5rem 1rem',
                                background: selectedDay.status === 'absent' ? '#fee2e2' : '#fef9c3',
                                color: selectedDay.status === 'absent' ? '#991b1b' : '#854d0e',
                                borderRadius: '9999px',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                marginBottom: '1.5rem',
                                border: `1px solid ${selectedDay.status === 'absent' ? '#fecaca' : '#fde047'}`
                            }}>
                                {selectedDay.details.type}
                            </div>

                            <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: '1.6', marginBottom: '2rem' }}>
                                {selectedDay.details.description}
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {/* Parent Confirmation */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', background: '#f9fafb', borderRadius: '8px' }}>
                                    {selectedDay.details.parentConfirmed ? (
                                        <CheckCircle size={20} color="#16a34a" />
                                    ) : (
                                        <AlertCircle size={20} color="#dc2626" />
                                    )}
                                    <span style={{ fontSize: '0.9rem', color: '#374151', fontWeight: '500' }}>
                                        {selectedDay.details.parentConfirmed ? 'Confirmed by Parents' : 'Not Confirmed by Parents'}
                                    </span>
                                </div>

                                {/* Teacher Confirmation */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', background: '#f9fafb', borderRadius: '8px' }}>
                                    {selectedDay.details.teacherConfirmed ? (
                                        <CheckCircle size={20} color="#16a34a" />
                                    ) : (
                                        <AlertCircle size={20} color="#dc2626" />
                                    )}
                                    <span style={{ fontSize: '0.9rem', color: '#374151', fontWeight: '500' }}>
                                        {selectedDay.details.teacherConfirmed ? 'Confirmed by Teacher' : 'Not Confirmed by Teacher'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PerformanceNavigator;
