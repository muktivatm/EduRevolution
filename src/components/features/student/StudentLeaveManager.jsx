import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, ChevronRight, X, CheckCircle, Clock, AlertCircle, FileText, ChevronLeft } from 'lucide-react';

const StudentLeaveManager = ({ isOpen, onClose, initialView = 'overview' }) => {
    const [view, setView] = useState(initialView); // 'overview', 'apply', 'success'
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Form State
    const [leaveType, setLeaveType] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (isOpen) {
            setView(initialView);
        }
    }, [isOpen, initialView]);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleApply = () => {
        setView('success');
    };

    const reset = () => {
        setView('overview');
        setLeaveType('');
        setFromDate('');
        setToDate('');
        setDescription('');
    };

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: isMobile ? 'white' : 'rgba(0,0,0,0.6)',
            zIndex: 2000,
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            backdropFilter: isMobile ? 'none' : 'blur(4px)'
        }}>
            <div className="animate-fade-in" style={{
                background: 'white',
                width: isMobile ? '100%' : '500px',
                height: isMobile ? '100%' : '80vh',
                borderRadius: isMobile ? '0' : '20px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                display: 'flex', flexDirection: 'column',
                overflow: 'hidden'
            }}>

                {/* Header */}
                <div style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f9fafb' }}>
                    {view !== 'overview' && view !== 'success' ? (
                        <button onClick={() => setView('overview')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem' }}>
                            <ChevronLeft size={24} color="#374151" />
                        </button>
                    ) : (
                        <div style={{ width: 32 }}></div> // Spacer
                    )}

                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937' }}>
                        {view === 'overview' ? 'Attendance & Leave' : (view === 'apply' ? 'Apply Leave' : (view === 'detail' ? 'Leave Details' : 'Submission Status'))}
                    </h3>

                    <button onClick={onClose} style={{ background: '#e5e7eb', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                        <X size={18} color="#4b5563" />
                    </button>
                </div>

                {/* Content */}
                <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem' }}>

                    {view === 'overview' && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {/* Attendance Section */}
                            <div style={{ padding: '1.5rem', background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', borderRadius: '16px', color: 'white', textAlign: 'center' }}>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>85%</h2>
                                <p style={{ fontSize: '1rem', opacity: 0.9 }}>Overall Attendance</p>

                            </div>

                            {/* Leaves Section */}
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <h4 style={{ fontWeight: 'bold', color: '#374151' }}>Leave Applications</h4>
                                    <button
                                        onClick={() => setView('apply')}
                                        style={{ background: '#10b981', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                                    >
                                        + Apply Leave
                                    </button>
                                </div>

                                {/* List Placeholder */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {/* Mock Pending Item */}
                                    <div onClick={() => setView('detail')} style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '12px', background: '#f9fafb', cursor: 'pointer', transition: 'background 0.2s' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                            <span style={{ fontWeight: '600', color: '#1f2937' }}>Sick Leave</span>
                                            <span style={{ fontSize: '0.85rem', padding: '0.25rem 0.5rem', background: '#fef3c7', color: '#d97706', borderRadius: '4px' }}>Pending</span>
                                        </div>
                                        <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '0.5rem' }}>8th Jan 2025</p>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#3b82f6', fontSize: '0.85rem', fontWeight: '600' }}>
                                            View Details <ChevronRight size={16} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {view === 'apply' && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {/* Date Section */}
                            <div>
                                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Select Dates</label>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #d1d5db', borderRadius: '8px', padding: '0.75rem' }}>
                                            <CalendarIcon size={18} color="#6b7280" style={{ marginRight: '0.5rem' }} />
                                            <input
                                                type="date"
                                                value={fromDate} onChange={(e) => setFromDate(e.target.value)}
                                                style={{ border: 'none', outline: 'none', width: '100%', color: '#374151' }}
                                            />
                                        </div>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #d1d5db', borderRadius: '8px', padding: '0.75rem' }}>
                                            <CalendarIcon size={18} color="#6b7280" style={{ marginRight: '0.5rem' }} />
                                            <input
                                                type="date"
                                                value={toDate} onChange={(e) => setToDate(e.target.value)}
                                                style={{ border: 'none', outline: 'none', width: '100%', color: '#374151' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Category Section */}
                            <div>
                                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Category</label>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {['Normal Leave', 'Sick Leave', 'Emergency Leave'].map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => setLeaveType(type)}
                                            style={{
                                                padding: '1rem',
                                                borderRadius: '12px',
                                                border: leaveType === type ? '2px solid #3b82f6' : '1px solid #e5e7eb',
                                                background: leaveType === type ? '#eff6ff' : 'white',
                                                color: leaveType === type ? '#1d4ed8' : '#374151',
                                                textAlign: 'left',
                                                fontWeight: '500',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s'
                                            }}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Reason</label>
                                <textarea
                                    rows="4"
                                    value={description} onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Please describe the reason for your leave application..."
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #d1d5db', outline: 'none', fontFamily: 'inherit' }}
                                ></textarea>
                            </div>

                            <button
                                onClick={handleApply}
                                disabled={!leaveType || !fromDate || !toDate || !description}
                                style={{
                                    marginTop: '1rem',
                                    padding: '1rem',
                                    background: (!leaveType || !fromDate || !toDate || !description) ? '#9ca3af' : 'black',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '12px',
                                    fontWeight: 'bold',
                                    fontSize: '1rem',
                                    cursor: (!leaveType || !fromDate || !toDate || !description) ? 'not-allowed' : 'pointer'
                                }}
                            >
                                Submit Request
                            </button>
                        </div>
                    )}

                    {view === 'success' && (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center' }}>

                            <div style={{ marginBottom: '2rem' }}>
                                <div style={{ width: '64px', height: '64px', background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                                    <CheckCircle size={32} color="#16a34a" />
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827' }}>Leave Submitted</h3>
                                <p style={{ color: '#6b7280' }}>Your application is being processed.</p>
                            </div>

                            {/* Workflow Steps */}
                            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '300px' }}>

                                {/* Step 1 */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.5 }}>
                                    <CheckCircle size={24} color="#16a34a" />
                                    <div style={{ textAlign: 'left' }}>
                                        <p style={{ fontWeight: '600', color: '#1f2937' }}>Application Sent</p>
                                        <p style={{ fontSize: '0.8rem', color: '#6b7280' }}>Success</p>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ padding: '4px', background: '#fef3c7', borderRadius: '50%' }}>
                                        <Clock size={16} color="#d97706" />
                                    </div>
                                    <div style={{ textAlign: 'left' }}>
                                        <p style={{ fontWeight: '600', color: '#1f2937', fontSize: '1.1rem' }}>Waiting for Parents</p>
                                        <p style={{ fontSize: '0.85rem', color: '#d97706' }}>Confirmation Pending</p>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.4 }}>
                                    <div style={{ width: '24px', height: '24px', border: '2px solid #d1d5db', borderRadius: '50%' }}></div>
                                    <div style={{ textAlign: 'left' }}>
                                        <p style={{ fontWeight: '600', color: '#1f2937' }}>Teacher Confirmation</p>
                                        <p style={{ fontSize: '0.8rem', color: '#6b7280' }}>Pending Step 2</p>
                                    </div>
                                </div>

                            </div>

                            <button
                                onClick={onClose}
                                style={{ marginTop: '3rem', padding: '0.75rem 2rem', background: '#f3f4f6', border: 'none', borderRadius: '8px', color: '#374151', fontWeight: '600', cursor: 'pointer' }}
                            >
                                Close
                            </button>
                        </div>
                    )}



                    {view === 'detail' && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ padding: '1.5rem', background: '#fff7ed', borderRadius: '16px', border: '1px solid #ffedd5' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#9a3412' }}>Sick Leave</h3>
                                    <span style={{ padding: '0.25rem 0.75rem', background: '#fffbeb', color: '#d97706', borderRadius: '999px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid #fcd34d' }}>Pending</span>
                                </div>
                                <div style={{ display: 'flex', gap: '2rem', marginBottom: '1rem' }}>
                                    <div>
                                        <p style={{ fontSize: '0.8rem', color: '#9a3412', opacity: 0.8 }}>From</p>
                                        <p style={{ fontWeight: '600', color: '#431407' }}>8th Jan 2025</p>
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '0.8rem', color: '#9a3412', opacity: 0.8 }}>To</p>
                                        <p style={{ fontWeight: '600', color: '#431407' }}>8th Jan 2025</p>
                                    </div>
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.8rem', color: '#9a3412', opacity: 0.8 }}>Reason</p>
                                    <p style={{ fontSize: '0.95rem', color: '#431407', fontStyle: 'italic', marginTop: '0.25rem' }}>"High fever and fatigue. Resting as per doctor's advice."</p>
                                </div>
                            </div>

                            {/* Timeline Status */}
                            <div>
                                <h4 style={{ fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>Application Status</h4>
                                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '2rem', paddingLeft: '1rem' }}>
                                    {/* Line */}
                                    <div style={{ position: 'absolute', top: '10px', bottom: '10px', left: '19px', width: '2px', background: '#e5e7eb', zIndex: 0 }}></div>

                                    {/* Step 1: Student */}
                                    <div style={{ display: 'flex', gap: '1rem', position: 'relative', zIndex: 1 }}>
                                        <div style={{ width: '20px', height: '20px', background: '#16a34a', borderRadius: '50%', border: '4px solid white', boxShadow: '0 0 0 2px #16a34a' }}></div>
                                        <div>
                                            <p style={{ fontWeight: '600', color: '#1f2937' }}>Application Sent</p>
                                            <p style={{ fontSize: '0.8rem', color: '#6b7280' }}>Submitted by you</p>
                                        </div>
                                    </div>

                                    {/* Step 2: Parent */}
                                    <div style={{ display: 'flex', gap: '1rem', position: 'relative', zIndex: 1 }}>
                                        <div style={{ width: '20px', height: '20px', background: '#fff', borderRadius: '50%', border: '4px solid white', boxShadow: '0 0 0 2px #d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <div style={{ width: '8px', height: '8px', background: '#d97706', borderRadius: '50%' }}></div>
                                        </div>
                                        <div>
                                            <p style={{ fontWeight: '600', color: '#1f2937' }}>Waiting for Parents Confirmation</p>
                                            <p style={{ fontSize: '0.8rem', color: '#d97706', fontWeight: '500' }}>Pending Action</p>
                                        </div>
                                    </div>

                                    {/* Step 3: Teacher */}
                                    <div style={{ display: 'flex', gap: '1rem', position: 'relative', zIndex: 1, opacity: 0.5 }}>
                                        <div style={{ width: '20px', height: '20px', background: '#e5e7eb', borderRadius: '50%', border: '4px solid white', boxShadow: '0 0 0 1px #d1d5db' }}></div>
                                        <div>
                                            <p style={{ fontWeight: '600', color: '#1f2937' }}>Teacher Approval Pending</p>
                                            <p style={{ fontSize: '0.8rem', color: '#6b7280' }}>Awaiting Parent Confirmation</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default StudentLeaveManager;
