import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { Plus, FileText, CheckCircle, Search, Filter, Eye, X, Upload } from 'lucide-react';

const TeacherAssignments = () => {
    const [activeTab, setActiveTab] = useState('created');
    const [showCreateModal, setShowCreateModal] = useState(false);
    const navigate = useNavigate();

    // Mock Data
    const createdAssignments = [
        {
            id: 1,
            class: 'Class 10-A',
            subject: 'Mathematics',
            title: 'Maths Exercise 1 to 10',
            fileAttached: true,
            submissionCount: '10/30',
            date: '10-10-2025',
            day: 'Tuesday',
            status: 'active'
        },
        {
            id: 2,
            class: 'Class 9-B',
            subject: 'Science',
            title: 'Thermodynamics Lab Report',
            fileAttached: true,
            submissionCount: '25/32',
            date: '12-10-2025',
            day: 'Thursday',
            status: 'active'
        },
    ];

    const grantSubmissions = [
        {
            id: 101,
            student: 'Rahul Kumar',
            class: 'Class 10-A',
            subject: 'Mathematics',
            title: 'Maths Exercise 1 to 10',
            submittedOn: '10-10-2025',
            status: 'pending'
        },
        {
            id: 102,
            student: 'Priya Singh',
            class: 'Class 10-A',
            subject: 'Mathematics',
            title: 'Maths Exercise 1 to 10',
            submittedOn: '11-10-2025',
            status: 'pending'
        },
    ];

    const historySubmissions = [
        {
            id: 201,
            student: 'Ankit Verma',
            class: 'Class 10-A',
            subject: 'Mathematics',
            title: 'Algebra Quiz 1',
            date: '01-10-2025',
            status: 'granted',
            grade: 'A'
        },
        {
            id: 202,
            student: 'Sneha Gupta',
            class: 'Class 9-B',
            subject: 'Physics',
            title: 'Newton Laws',
            date: '28-09-2025',
            status: 'granted',
            grade: 'B+'
        }
    ];

    const handleCreateSubmit = (e) => {
        e.preventDefault();
        setShowCreateModal(false);
        alert("Homework Assigned Successfully!");
    };

    return (
        <DashboardLayout role="teacher">
            <div className="animate-fade-in" style={{ paddingBottom: '80px', maxWidth: '800px', margin: '0 auto' }}>

                {/* Header Section */}
                <div style={{ marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.5rem' }}>Homework</h1>
                    <p style={{ color: '#6b7280' }}>Manage assignments and review student submissions.</p>
                </div>

                {/* Create Assignment Button (Hero) */}
                <button
                    onClick={() => setShowCreateModal(true)}
                    className="glass-card"
                    style={{
                        width: '100%',
                        padding: '1.5rem',
                        background: 'var(--gradient-primary)',
                        border: 'none',
                        color: 'white',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem',
                        cursor: 'pointer',
                        marginBottom: '2rem',
                        transition: 'transform 0.2s',
                        borderRadius: '16px'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    <div style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem', borderRadius: '12px' }}>
                        <Plus size={32} />
                    </div>
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Assign Homework</span>
                </button>

                {/* Creation Modal */}
                {showCreateModal && (
                    <div style={{
                        position: 'fixed', inset: 0, zIndex: 1000,
                        background: 'rgba(0,0,0,0.5)',
                        backdropFilter: 'blur(4px)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        padding: '1rem'
                    }}>
                        <div className="animate-fade-in glass-card" style={{ width: '100%', maxWidth: '600px', background: 'white', padding: '2rem', borderRadius: '24px', maxHeight: '90vh', overflowY: 'auto' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Assign Homework</h2>
                                <button onClick={() => setShowCreateModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X size={24} /></button>
                            </div>

                            <form onSubmit={handleCreateSubmit} style={{ display: 'grid', gap: '1.25rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>Select Class</label>
                                    <select style={{ width: '100%', padding: '0.75rem', borderRadius: '12px', border: '1px solid #d1d5db', background: '#f9fafb' }}>
                                        <option>Class 10-A (Mathematics)</option>
                                        <option>Class 9-B (Science)</option>
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>Title</label>
                                    <input type="text" placeholder="e.g. Algebra Chapter 1" style={{ width: '100%', padding: '0.75rem', borderRadius: '12px', border: '1px solid #d1d5db', background: '#f9fafb' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>Description</label>
                                    <textarea rows="4" placeholder="Instructions..." style={{ width: '100%', padding: '0.75rem', borderRadius: '12px', border: '1px solid #d1d5db', background: '#f9fafb' }}></textarea>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>Due Date</label>
                                        <input type="date" style={{ width: '100%', padding: '0.75rem', borderRadius: '12px', border: '1px solid #d1d5db', background: '#f9fafb' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>Attachments</label>
                                        <button type="button" style={{ width: '100%', padding: '0.75rem', borderRadius: '12px', border: '1px dashed #d1d5db', background: '#f9fafb', color: '#6b7280', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                            <Upload size={18} /> Upload File
                                        </button>
                                    </div>
                                </div>
                                <button type="submit" className="btn-primary" style={{ marginTop: '1rem', padding: '1rem', fontSize: '1rem' }}>Assign Homework</button>
                            </form>
                        </div>
                    </div>
                )}

                {/* Tabs */}
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', background: 'white', padding: '0.5rem', borderRadius: '16px', overflowX: 'auto' }}>
                    {['created', 'grant', 'history'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                flex: 1,
                                padding: '0.75rem 1rem',
                                borderRadius: '12px',
                                border: 'none',
                                background: activeTab === tab ? '#eff6ff' : 'transparent',
                                color: activeTab === tab ? 'var(--primary-theme)' : '#6b7280',
                                fontWeight: activeTab === tab ? '700' : '500',
                                cursor: 'pointer',
                                whiteSpace: 'nowrap',
                                transition: 'all 0.2s',
                                borderBottom: activeTab === tab ? '2px solid var(--primary-theme)' : '2px solid transparent'
                            }}
                        >
                            {tab === 'created' && 'Created by you'}
                            {tab === 'grant' && 'Grant Submission'}
                            {tab === 'history' && 'View History'}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div style={{ display: 'grid', gap: '1rem' }}>

                    {activeTab === 'created' && createdAssignments.map((item) => (
                        <div key={item.id} className="glass-card" style={{ padding: '1.25rem', borderLeft: '4px solid var(--primary-theme)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span style={{ fontSize: '0.9rem', fontWeight: 'bold', textDecoration: 'underline' }}>{item.class}</span>
                                <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{item.subject}</span>
                            </div>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>title - {item.title}</h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#6b7280', marginBottom: '0.5rem' }}>
                                <FileText size={14} />
                                <span>{item.fileAttached ? 'file attached' : 'No file'}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                <div>
                                    <p style={{ fontSize: '0.9rem', fontWeight: '500', color: '#374151' }}>submission pending - {item.submissionCount} student</p>
                                    <div style={{ width: '150px', height: '6px', background: '#e5e7eb', borderRadius: '3px', marginTop: '0.25rem' }}>
                                        <div style={{ width: '33%', height: '100%', background: 'var(--primary-theme)', borderRadius: '3px' }}></div>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <p style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{item.date}</p>
                                    <p style={{ fontSize: '0.8rem', color: '#6b7280' }}>{item.day}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* GRANT SUBMISSION TAB */}
                    {activeTab === 'grant' && grantSubmissions.map((item) => (
                        <div key={item.id} className="glass-card" style={{ padding: '1.25rem', borderLeft: '4px solid #d97706' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937' }}>{item.student}</h3>
                                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                    <span style={{ fontSize: '0.8rem', background: '#f3f4f6', padding: '0.2rem 0.5rem', borderRadius: '8px', color: '#374151', fontWeight: '600' }}>{item.class}</span>
                                    <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>{item.submittedOn}</span>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#374151', marginBottom: '1rem' }}>
                                <span style={{ fontSize: '0.95rem', fontWeight: '500' }}>{item.subject}</span>
                                <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>Submission Received</span>
                            </div>

                            <button
                                onClick={() => navigate(`/teacher/submission/${item.id}`)}
                                className="btn-secondary"
                                style={{ width: '100%', padding: '0.6rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                            >
                                <Eye size={16} /> View Submission
                            </button>
                        </div>
                    ))}

                    {/* VIEW HISTORY TAB */}
                    {activeTab === 'history' && historySubmissions.map((item) => (
                        <div key={item.id} className="glass-card" style={{ padding: '1.25rem', borderLeft: '4px solid #10b981', background: '#f9fafb', opacity: 0.9 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937' }}>{item.student}</h3>
                                <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>{item.date}</span>
                            </div>
                            <div style={{ marginBottom: '0.5rem' }}>
                                <p style={{ fontSize: '0.95rem', color: '#374151' }}>{item.title}</p>
                                <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>{item.subject} • {item.class}</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#059669', background: '#ecfdf5', padding: '0.25rem 0.75rem', borderRadius: '12px' }}>
                                    Granted
                                </span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </DashboardLayout>
    );
};

export default TeacherAssignments;
