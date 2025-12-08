import React, { useState, useEffect } from 'react';
import { FileText, CheckCircle, XCircle, Download, Clock, X, ChevronRight, UserCheck, AlertCircle, AlertTriangle } from 'lucide-react';

const StudentActivityWidget = () => {
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [viewChangeDetails, setViewChangeDetails] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Mock Data representing "Today's Lectures"
    const activities = [
        {
            id: 1,
            subject: 'Mathematics',
            time: '10:00 AM',
            isAttended: true,
            homeworkAssigned: true,
            homework: {
                description: "Complete Exercise 4.2 on Derivatives. Solve Q1 to Q10.",
                hasPdf: true,
                fileName: "Calculus_Worksheet_4.2.pdf"
            },
            submission: {
                status: 'submitted',
                hasPdf: true,
                fileName: "Rahul_Maths_Sol.pdf",
                timestamp: "2:30 PM"
            },
            assessment: {
                status: 'assessed',
                teacher: "Mr. Verma",
                feedback: "Excellent work! Your steps are very clear. Keep it up.",
                time: "5:00 PM"
            }
        },
        {
            id: 2,
            subject: 'Physics',
            time: '12:00 PM',
            isAttended: true,
            homeworkAssigned: true,
            hasChanges: true,
            changeDetails: {
                title: "Subject Changed to Social Science",
                description: "Physics teacher appears to be unavailable due to an emergency, so the period has been swapped with Social Science."
            },
            homework: {
                description: "Read Chapter 3: Thermodynamics.",
                hasPdf: true,
                fileName: "Thermo_Notes.pdf"
            },
            submission: {
                status: 'pending',
            },
            assessment: {
                status: 'pending',
                deadline: "9:00 PM"
            }
        },
        {
            id: 3,
            subject: 'English',
            time: '02:00 PM',
            isAttended: true,
            homeworkAssigned: true,
            homework: {
                description: "Write an essay on 'The Road Not Taken'.",
                hasPdf: false
            },
            submission: {
                status: 'submitted',
                hasPdf: true,
                fileName: "Rahul_Essay.pdf"
            },
            assessment: {
                status: 'assessed',
                teacher: "Mrs. Gupta",
                feedback: "All good"
            }
        }
    ];

    return (
        <>
            <div className="glass-card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                    <div style={{ padding: '0.5rem', background: '#eff6ff', borderRadius: '8px' }}>
                        <FileText size={20} color="var(--color-primary-blue)" />
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937' }}>Today's Activity</h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {activities.map((activity) => (
                        <div key={activity.id} style={{
                            padding: '1rem',
                            background: activity.hasChanges ? '#fff7ed' : '#f9fafb',
                            borderRadius: '12px',
                            border: activity.hasChanges ? '1px solid #fed7aa' : '1px solid #f3f4f6'
                        }}>
                            {/* Header: Subject & Time & Changes Link */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    <h4 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#111827' }}>{activity.subject}</h4>
                                    {activity.hasChanges && (
                                        <button
                                            onClick={() => setViewChangeDetails(activity)}
                                            style={{
                                                fontSize: '0.85rem', color: '#ea580c', fontWeight: '600',
                                                cursor: 'pointer', background: 'none', border: 'none', padding: 0,
                                                display: 'flex', alignItems: 'center', gap: '2px'
                                            }}
                                        >
                                            View Changes <ChevronRight size={14} />
                                        </button>
                                    )}
                                </div>
                                <span style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: '500' }}>{activity.time}</span>
                            </div>

                            {/* Checklist */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>

                                {/* Attended */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#374151' }}>
                                    {activity.isAttended ? (
                                        <CheckCircle size={16} color="#10b981" />
                                    ) : (
                                        <AlertCircle size={16} color="#ef4444" />
                                    )}
                                    <span>{activity.isAttended ? 'Attended by Rahul' : 'Not Attended / Changed'}</span>
                                </div>

                                {/* Homework Assigned + View More */}
                                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', fontSize: '0.9rem', color: '#374151' }}>
                                    {activity.homeworkAssigned ? <CheckCircle size={16} color="#10b981" /> : <XCircle size={16} color="#9ca3af" />}
                                    <span>Homework Assigned</span>
                                    {activity.homeworkAssigned && (
                                        <>
                                            <span style={{ color: '#9ca3af' }}>—</span>
                                            <button
                                                onClick={() => setSelectedActivity(activity)}
                                                style={{
                                                    background: 'none', border: 'none', padding: 0,
                                                    color: 'var(--color-primary-blue)',
                                                    cursor: 'pointer',
                                                    fontWeight: '500',
                                                    display: 'flex', alignItems: 'center', gap: '2px',
                                                    textDecoration: 'underline'
                                                }}
                                            >
                                                view more <ChevronRight size={14} />
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Change Details Modal */}
            {viewChangeDetails && (
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
                        border: '1px solid #f3f4f6'
                    }}>
                        <div style={{ padding: '1.25rem', borderBottom: '1px solid #fed7aa', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff7ed' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{ padding: '0.5rem', background: '#ffedd5', borderRadius: '50%' }}>
                                    <AlertTriangle size={24} color="#ea580c" />
                                </div>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#9a3412' }}>Schedule Update</h3>
                            </div>
                            <button
                                onClick={() => setViewChangeDetails(null)}
                                style={{ background: 'white', border: '1px solid #fed7aa', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                            >
                                <X size={18} color="#9a3412" />
                            </button>
                        </div>

                        <div style={{ padding: '2rem' }}>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
                                {viewChangeDetails.changeDetails.title}
                            </h4>
                            <p style={{ color: '#4b5563', lineHeight: '1.6', fontSize: '1rem' }}>
                                {viewChangeDetails.changeDetails.description}
                            </p>

                            <div style={{ marginTop: '2rem', padding: '1rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <p style={{ fontSize: '0.9rem', color: '#64748b', fontStyle: 'italic' }}>
                                    "We apologize for the last-minute change. Please ensure Rahul is prepared for the requested subject."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Homework Modal / Popup Overlay */}
            {selectedActivity && (
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
                        maxWidth: isMobile ? 'none' : '600px',
                        maxHeight: isMobile ? 'none' : '90vh',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        overflow: 'hidden',
                        display: 'flex', flexDirection: 'column'
                    }}>
                        {/* Modal Header */}
                        <div style={{ padding: '1.25rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f9fafb' }}>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#111827' }}>{selectedActivity.subject} - Homework Workflow</h3>
                                <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>Timeline of today's assignment</p>
                            </div>
                            <button
                                onClick={() => setSelectedActivity(null)}
                                style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                            >
                                <X size={18} color="#6b7280" />
                            </button>
                        </div>

                        {/* Modal Content - The 3 Steps */}
                        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '2rem', maxHeight: '70vh', overflowY: 'auto' }}>

                            {/* Step 1: Homework Assigned */}
                            <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid #e5e7eb' }}>
                                <div style={{
                                    position: 'absolute', left: '-11px', top: '0',
                                    width: '20px', height: '20px', borderRadius: '50%',
                                    background: '#3b82f6', border: '4px solid white',
                                    boxShadow: '0 0 0 2px #3b82f6'
                                }} />
                                <h4 style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>1. Homework Assigned</h4>
                                <div style={{ background: '#eff6ff', padding: '1rem', borderRadius: '8px', border: '1px solid #dbeafe' }}>
                                    <p style={{ fontSize: '0.9rem', color: '#1e40af', marginBottom: '0.75rem' }}>{selectedActivity.homework.description}</p>
                                    {selectedActivity.homework.hasPdf && (
                                        <button style={{
                                            display: 'flex', alignItems: 'center', gap: '0.5rem',
                                            padding: '0.5rem 0.75rem', background: 'white',
                                            border: '1px solid #bfdbfe', borderRadius: '6px',
                                            color: '#2563eb', fontSize: '0.85rem', fontWeight: '500',
                                            cursor: 'pointer'
                                        }}>
                                            <Download size={14} /> Download PDF
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Step 2: Homework Submitted */}
                            <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid #e5e7eb' }}>
                                <div style={{
                                    position: 'absolute', left: '-11px', top: '0',
                                    width: '20px', height: '20px', borderRadius: '50%',
                                    background: selectedActivity.submission.status === 'submitted' ? '#10b981' : '#ef4444',
                                    border: '4px solid white',
                                    boxShadow: `0 0 0 2px ${selectedActivity.submission.status === 'submitted' ? '#10b981' : '#ef4444'}`
                                }} />
                                <h4 style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>2. Submission Status</h4>
                                {selectedActivity.submission.status === 'submitted' ? (
                                    <div style={{ background: '#ecfdf5', padding: '1rem', borderRadius: '8px', border: '1px solid #d1fae5' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                            <CheckCircle size={16} color="#059669" />
                                            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#065f46' }}>Submitted by Rahul</span>
                                        </div>
                                        {selectedActivity.submission.hasPdf && (
                                            <button style={{
                                                display: 'flex', alignItems: 'center', gap: '0.5rem',
                                                padding: '0.5rem 0.75rem', background: 'white',
                                                border: '1px solid #a7f3d0', borderRadius: '6px',
                                                color: '#059669', fontSize: '0.85rem', fontWeight: '500',
                                                cursor: 'pointer'
                                            }}>
                                                <Download size={14} /> Download Final Submission
                                            </button>
                                        )}
                                    </div>
                                ) : (
                                    <div style={{ background: '#fef2f2', padding: '1rem', borderRadius: '8px', border: '1px solid #fee2e2' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <XCircle size={16} color="#dc2626" />
                                            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#991b1b' }}>Not Submitted by Student</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Step 3: Assessment */}
                            <div style={{ position: 'relative', paddingLeft: '2rem' }}>
                                <div style={{
                                    position: 'absolute', left: '-11px', top: '0',
                                    width: '20px', height: '20px', borderRadius: '50%',
                                    background: selectedActivity.assessment.status === 'assessed' ? '#f59e0b' : '#9ca3af',
                                    border: '4px solid white',
                                    boxShadow: `0 0 0 2px ${selectedActivity.assessment.status === 'assessed' ? '#f59e0b' : '#9ca3af'}`
                                }} />
                                <h4 style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>3. Teacher's Assessment</h4>
                                {selectedActivity.assessment.status === 'assessed' ? (
                                    <div style={{ background: '#fffbeb', padding: '1rem', borderRadius: '8px', border: '1px solid #fde68a' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                            <UserCheck size={16} color="#d97706" />
                                            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#92400e' }}>Assessed by {selectedActivity.assessment.teacher}</span>
                                        </div>
                                        <div style={{ fontSize: '0.9rem', color: '#78350f', fontStyle: 'italic', paddingLeft: '1.5rem', borderLeft: '2px solid #fbbf24' }}>
                                            "{selectedActivity.assessment.feedback}"
                                        </div>
                                    </div>
                                ) : (
                                    <div style={{ background: '#f3f4f6', padding: '1rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <Clock size={16} color="#4b5563" />
                                            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#374151' }}>Pending - Assessed before {selectedActivity.assessment.deadline || '9:00 PM'}</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default StudentActivityWidget;
