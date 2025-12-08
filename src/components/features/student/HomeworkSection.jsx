import React, { useState } from 'react';
import { FileText, Upload, CheckCircle, Clock, AlertCircle, Download, FileX } from 'lucide-react';
import { useHomework } from '../../../context/HomeworkContext';

const HomeworkSection = () => {
    const { assignments, submitHomework } = useHomework();
    const [uploadingId, setUploadingId] = useState(null);

    const handleFileUpload = (e, id) => {
        const file = e.target.files[0];
        if (file) {
            setUploadingId(id);
            // Simulate upload delay
            setTimeout(() => {
                submitHomework(id, file.name);
                setUploadingId(null);
            }, 1500);
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'pending': return '#f59e0b'; // Amber
            case 'submitted': return '#3b82f6'; // Blue
            case 'assessed': return '#10b981'; // Green
            default: return '#9ca3af';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'pending': return <Clock size={16} />;
            case 'submitted': return <CheckCircle size={16} />;
            case 'assessed': return <CheckCircle size={16} />;
            default: return <AlertCircle size={16} />;
        }
    };

    return (
        <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>Assignments & Homework</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {assignments.map((assignment) => (
                    <div key={assignment.id} style={{
                        padding: '1.25rem',
                        borderRadius: '12px',
                        background: 'white',
                        border: '1px solid #e5e7eb',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <span style={{
                                fontSize: '0.75rem', fontWeight: '600',
                                padding: '0.25rem 0.75rem', borderRadius: '20px',
                                background: '#f3f4f6', color: '#4b5563'
                            }}>
                                {assignment.subject}
                            </span>
                            <span style={{
                                fontSize: '0.75rem', fontWeight: '600',
                                display: 'flex', alignItems: 'center', gap: '0.25rem',
                                color: getStatusColor(assignment.status)
                            }}>
                                {getStatusIcon(assignment.status)}
                                {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                            </span>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.25rem' }}>{assignment.title}</h3>
                            <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '0.5rem' }}>Due: {assignment.dueDate}</p>

                            {/* Teacher Attachment Section */}
                            {assignment.teacherAttachment ? (
                                <a
                                    href="#"
                                    onClick={(e) => { e.preventDefault(); alert(`Downloading ${assignment.teacherAttachment}`); }}
                                    style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                                        fontSize: '0.8rem', color: '#2563eb', fontWeight: '500',
                                        textDecoration: 'none', padding: '0.25rem 0.5rem',
                                        background: '#eff6ff', borderRadius: '6px'
                                    }}
                                >
                                    <Download size={14} /> Download Attachment
                                </a>
                            ) : (
                                <div style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                                    fontSize: '0.8rem', color: '#9ca3af', fontStyle: 'italic',
                                    padding: '0.25rem 0'
                                }}>
                                    <FileX size={14} /> No attachment
                                </div>
                            )}
                        </div>

                        {assignment.status === 'pending' && (
                            <div style={{ marginTop: 'auto' }}>
                                <label style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                                    width: '100%', padding: '0.75rem',
                                    background: uploadingId === assignment.id ? '#e5e7eb' : 'var(--color-primary-blue)',
                                    color: uploadingId === assignment.id ? '#4b5563' : 'white',
                                    borderRadius: '8px', cursor: uploadingId === assignment.id ? 'wait' : 'pointer',
                                    fontSize: '0.9rem', fontWeight: '500',
                                    transition: 'background 0.3s'
                                }}>
                                    {uploadingId === assignment.id ? 'Uploading...' : <><Upload size={18} /> Upload PDF</>}
                                    <input
                                        type="file"
                                        accept=".pdf"
                                        style={{ display: 'none' }}
                                        onChange={(e) => handleFileUpload(e, assignment.id)}
                                        disabled={uploadingId === assignment.id}
                                    />
                                </label>
                            </div>
                        )}

                        {assignment.status === 'submitted' && (
                            <div style={{ marginTop: 'auto', padding: '0.75rem', background: '#eff6ff', borderRadius: '8px', border: '1px solid #bfdbfe' }}>
                                <p style={{ fontSize: '0.85rem', color: '#1e40af', textAlign: 'center' }}>
                                    Submitted on {assignment.submissionDate}
                                </p>
                                <p style={{ fontSize: '0.75rem', color: '#60a5fa', textAlign: 'center', marginTop: '0.25rem' }}>
                                    Waiting for assessment
                                </p>
                            </div>
                        )}

                        {assignment.status === 'assessed' && (
                            <div style={{ marginTop: 'auto', padding: '0.75rem', background: '#ecfdf5', borderRadius: '8px', border: '1px solid #a7f3d0' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#047857' }}>Assessed</span>
                                    <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#059669' }}>Grade: {assignment.grade}</span>
                                </div>
                                <p style={{ fontSize: '0.85rem', color: '#065f46', fontStyle: 'italic' }}>
                                    "{assignment.remarks}"
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeworkSection;
