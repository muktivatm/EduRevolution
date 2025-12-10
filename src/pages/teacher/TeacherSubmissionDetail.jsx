import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { ArrowLeft, User, Calendar, Clock, Download, FileText, CheckCircle, MessageCircle, XCircle, Sparkles, Zap } from 'lucide-react';

const TeacherSubmissionDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [showRevertModal, setShowRevertModal] = useState(false);
    const [remarks, setRemarks] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Mock Data - In a real app, fetch based on ID
    const submission = {
        id: id,
        studentId: 'student1',
        studentName: 'Rahul Kumar',
        studentClass: 'Class 10-A',
        studentImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100',
        assignmentTitle: 'Maths Exercise 1 to 10',
        subject: 'Mathematics',
        submittedDate: '10-10-2025',
        submittedDay: 'Tuesday',
        submittedTime: '10:30 AM',
        file: 'rahul_math_ex1.pdf',
        size: '2.4 MB'
    };

    const handleGrant = () => {
        alert(`Submission for ${submission.studentName} has been Granted!`);
        navigate('/teacher/assignments');
    };

    const handleRevert = () => {
        if (!remarks.trim()) return alert("Please add remarks for reversion.");
        alert(`Submission reverted with remarks: ${remarks}`);
        setShowRevertModal(false);
        navigate('/teacher/assignments');
    };

    const handleChat = () => {
        navigate(`/teacher/communication?contactId=${submission.studentId}`);
    };

    return (
        <DashboardLayout role="teacher">
            <div className="animate-fade-in" style={{ width: '100%', margin: '0 auto' }}>

                {/* Header with Back Button */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <button
                        onClick={() => navigate('/teacher/assignments')}
                        style={{
                            background: 'white', border: '1px solid #e5e7eb', borderRadius: '50%',
                            width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer'
                        }}
                    >
                        <ArrowLeft size={18} color="#374151" />
                    </button>
                    <h1 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 'bold', color: '#111827' }}>Submission Details</h1>
                </div>

                {/* Main Content Card */}
                <div className="glass-card" style={{ padding: '0', overflow: 'hidden', borderRadius: '16px' }}>

                    {/* Student Info Header */}
                    <div style={{
                        padding: '1rem',
                        background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
                        borderBottom: '1px solid #e5e7eb'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <img
                                    src={submission.studentImage}
                                    alt={submission.studentName}
                                    style={{ width: isMobile ? '50px' : '64px', height: isMobile ? '50px' : '64px', borderRadius: '50%', objectFit: 'cover', border: '3px solid white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                                />
                                <div>
                                    <h2 style={{ fontSize: isMobile ? '1.1rem' : '1.4rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.1rem' }}>{submission.studentName}</h2>
                                    <span style={{
                                        background: '#dbeafe', color: '#1e40af', padding: '0.15rem 0.5rem',
                                        borderRadius: '12px', fontSize: '0.75rem', fontWeight: '600'
                                    }}>
                                        {submission.studentClass}
                                    </span>
                                </div>
                            </div>

                            {/* Chat Button */}
                            <button
                                onClick={handleChat}
                                style={{
                                    width: '40px', height: '40px', borderRadius: '50%',
                                    background: 'white', border: '1px solid #e5e7eb',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    cursor: 'pointer', color: '#3b82f6', boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                                }}
                            >
                                <MessageCircle size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Submission Details */}
                    <div style={{ padding: '1rem' }}>

                        <div style={{ display: 'grid', gap: '1rem', marginBottom: '1.5rem' }}>

                            {/* Assignment Info */}
                            <div>
                                <label style={{ display: 'block', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: '700', color: '#6b7280', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Assignment</label>
                                <h3 style={{ fontSize: isMobile ? '1.1rem' : '1.3rem', fontWeight: 'bold', color: '#111827', lineHeight: '1.3' }}>{submission.assignmentTitle}</h3>
                                <p style={{ fontSize: isMobile ? '0.9rem' : '1rem', color: '#4b5563' }}>{submission.subject}</p>
                            </div>

                            {/* Date & Time Grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                                <div style={{ background: '#f9fafb', padding: '0.75rem', borderRadius: '12px' }}>
                                    <label style={{ display: 'block', textTransform: 'uppercase', fontSize: '0.65rem', fontWeight: '700', color: '#6b7280', marginBottom: '0.25rem' }}>Submitted On</label>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#1f2937', fontSize: '0.9rem', fontWeight: '600' }}>
                                        <Calendar size={16} color="#3b82f6" />
                                        <span>{submission.submittedDate}</span>
                                    </div>
                                </div>
                                <div style={{ background: '#f9fafb', padding: '0.75rem', borderRadius: '12px' }}>
                                    <label style={{ display: 'block', textTransform: 'uppercase', fontSize: '0.65rem', fontWeight: '700', color: '#6b7280', marginBottom: '0.25rem' }}>Time</label>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#1f2937', fontSize: '0.9rem', fontWeight: '600' }}>
                                        <Clock size={16} color="#f59e0b" />
                                        <span>{submission.submittedTime}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Attachment Actions */}
                            <div style={{ padding: '0.75rem', background: '#f0f9ff', borderRadius: '12px', border: '1px solid #bae6fd' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                    <div style={{ width: '40px', height: '40px', background: '#ffffff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7', flexShrink: 0, boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                                        <FileText size={20} />
                                    </div>
                                    <div style={{ overflow: 'hidden' }}>
                                        <p style={{ fontWeight: '600', color: '#0c4a6e', fontSize: '0.9rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{submission.file}</p>
                                        <p style={{ fontSize: '0.75rem', color: '#0284c7' }}>{submission.size} • PDF</p>
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                                    <button className="btn-secondary" style={{ background: 'white', border: '1px solid #e0f2fe', color: '#0284c7', padding: '0.5rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                                        <FileText size={16} /> View
                                    </button>
                                    <button className="btn-secondary" style={{ background: 'white', border: '1px solid #e0f2fe', color: '#0284c7', padding: '0.5rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                                        <Download size={16} /> Download
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons: Grant & Revert */}
                        <div style={{ display: 'grid', gap: '0.75rem' }}>
                            <button
                                onClick={handleGrant}
                                className="btn-primary"
                                style={{
                                    width: '100%',
                                    padding: '0.85rem',
                                    fontSize: '1rem',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                                    borderRadius: '12px',
                                    background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                                    boxShadow: '0 4px 6px -1px rgba(16, 185, 129, 0.3)'
                                }}
                            >
                                <CheckCircle size={20} /> Grant Submission
                            </button>

                            <button
                                onClick={() => setShowRevertModal(true)}
                                style={{
                                    width: '100%',
                                    padding: '0.85rem',
                                    fontSize: '1rem',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                                    borderRadius: '12px',
                                    background: 'white',
                                    border: '2px solid #fee2e2',
                                    color: '#ef4444',
                                    fontWeight: '600',
                                    cursor: 'pointer'
                                }}
                            >
                                <XCircle size={20} /> Revert / Request Changes
                            </button>
                        </div>

                        <p style={{ textAlign: 'center', marginTop: '0.75rem', color: '#6b7280', fontSize: '0.75rem' }}>
                            Granting moves to history. Reverting notifies the student.
                        </p>

                    </div>
                </div>

                {/* Coming Soon / Advertisement Card */}
                <div style={{ marginTop: '2rem', padding: '1rem', borderRadius: '20px', background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', color: 'white', position: 'relative', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.4)' }}>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <div style={{ background: 'rgba(255,255,255,0.2)', padding: '0.4rem', borderRadius: '10px' }}>
                                <Sparkles size={20} color="#fbbf24" />
                            </div>
                            <span style={{ fontWeight: '700', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#e9d5ff' }}>Coming Soon</span>
                        </div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>AI Auto-Grading & Insights</h3>
                        <p style={{ fontSize: '0.9rem', color: '#f3e8ff', lineHeight: '1.5', maxWidth: '90%' }}>
                            Imagine an AI that grades submissions instantly and provides deep performance analytics. We're building the future of assessment!
                        </p>
                    </div>
                    {/* Decorative Elements */}
                    <Zap size={100} style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.1, transform: 'rotate(-15deg)' }} />
                    <div style={{ position: 'absolute', top: -40, right: -40, width: '120px', height: '120px', background: 'white', opacity: 0.1, borderRadius: '50%' }} />
                </div>

                {/* Revert Modal */}
                {showRevertModal && (
                    <div style={{
                        position: 'fixed', inset: 0, zIndex: 1000,
                        background: 'rgba(0,0,0,0.5)',
                        backdropFilter: 'blur(4px)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        padding: '1rem'
                    }}>
                        <div className="animate-fade-in glass-card" style={{ width: '100%', maxWidth: '400px', background: 'white', padding: '1.25rem', borderRadius: '20px' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', color: '#ef4444' }}>Decline Submission</h3>

                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem', color: '#374151' }}>Reason / Remarks</label>
                            <textarea
                                rows="4"
                                placeholder="Explain why this submission is being declined..."
                                value={remarks}
                                onChange={(e) => setRemarks(e.target.value)}
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '12px', border: '1px solid #d1d5db', background: '#f9fafb', marginBottom: '1.25rem', resize: 'none', fontSize: '0.9rem' }}
                            ></textarea>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                                <button onClick={() => setShowRevertModal(false)} className="btn-secondary" style={{ justifyContent: 'center', padding: '0.75rem' }}>Cancel</button>
                                <button onClick={handleRevert} className="btn-primary" style={{ background: '#ef4444', border: 'none', justifyContent: 'center', padding: '0.75rem' }}>Decline</button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </DashboardLayout>
    );
};

export default TeacherSubmissionDetail;
