import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { User, Mail, Phone, MapPin, Edit2, Calendar, CheckCircle, XCircle } from 'lucide-react';

const TeacherProfile = () => {
    const [isEditing, setIsEditing] = useState(false);

    const teacherDetails = {
        name: "Mr. Verma",
        subject: "Mathematics",
        email: "verma.math@school.edu",
        phone: "+91 99887 76655",
        address: "456, Teachers Colony, New Delhi",
        joinedDate: "June 2020"
    };

    // Mock Pending Leaves for Teacher Approval
    // Assuming workflow: Student Apply -> Parent Confirm -> Teacher Confirm
    const [leaveRequests, setLeaveRequests] = useState([
        {
            id: 1,
            student: "Rahul Sharma",
            class: "10-A",
            type: "Sick Leave",
            date: "8th Jan 2025",
            reason: "High fever and fatigue.",
            parentStatus: "approved", // Parent has confirmed
            teacherStatus: "pending"
        },
        {
            id: 2,
            student: "Amit Patel",
            class: "10-A",
            type: "Family Function",
            date: "12th Jan 2025",
            reason: "Sister's wedding.",
            parentStatus: "pending", // Parent hasn't confirmed yet
            teacherStatus: "pending"
        }
    ]);

    const handleLeaveAction = (id, action) => {
        setLeaveRequests(requests => requests.map(req =>
            req.id === id ? { ...req, teacherStatus: action === 'approve' ? 'approved' : 'rejected' } : req
        ));
    };

    return (
        <DashboardLayout role="teacher">
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.5rem' }}>My Profile</h1>
                    <p style={{ color: '#6b7280' }}>Manage profile and student requests</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                    {/* Teacher Details */}
                    <div className="glass-card" style={{ padding: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#ffedd5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', color: '#c2410c' }}>
                                    {teacherDetails.name.charAt(0)}
                                </div>
                                <div>
                                    <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>{teacherDetails.name}</h2>
                                    <p style={{ color: '#6b7280' }}>Sen. Math Teacher</p>
                                </div>
                            </div>
                            <button onClick={() => setIsEditing(!isEditing)} style={{ padding: '0.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', background: 'white', cursor: 'pointer', color: '#4b5563' }}>
                                <Edit2 size={18} />
                            </button>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#4b5563' }}>
                                <Mail size={18} /> <span>{teacherDetails.email}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#4b5563' }}>
                                <Phone size={18} /> <span>{teacherDetails.phone}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#4b5563' }}>
                                <MapPin size={18} /> <span>{teacherDetails.address}</span>
                            </div>
                        </div>
                    </div>

                    {/* Leave Requests Management */}
                    <div className="glass-card" style={{ padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>Student Leave Requests</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {leaveRequests.map(req => (
                                <div key={req.id} style={{ padding: '1rem', background: req.teacherStatus === 'pending' ? '#fff' : '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px' }}>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <span style={{ fontWeight: '600', color: '#1f2937' }}>{req.student}</span>
                                            <span style={{ fontSize: '0.8rem', color: '#6b7280', background: '#f3f4f6', padding: '2px 6px', borderRadius: '4px' }}>{req.class}</span>
                                        </div>
                                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>{req.date}</span>
                                    </div>

                                    <div style={{ marginBottom: '1rem' }}>
                                        <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#4b5563', textTransform: 'uppercase' }}>{req.type}</span>
                                        <p style={{ fontSize: '0.9rem', color: '#4b5563', fontStyle: 'italic', marginTop: '0.25rem' }}>"{req.reason}"</p>
                                    </div>

                                    {/* Parent Status Indicator */}
                                    <div style={{ marginBottom: '1rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <span style={{ color: '#6b7280' }}>Parent Status:</span>
                                        {req.parentStatus === 'approved' ? (
                                            <span style={{ color: '#16a34a', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '2px' }}><CheckCircle size={14} /> Confirmed</span>
                                        ) : (
                                            <span style={{ color: '#d97706', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '2px' }}><Clock size={14} /> Pending Confirmation</span>
                                        )}
                                    </div>

                                    {/* Actions */}
                                    {req.teacherStatus === 'pending' ? (
                                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                                            <button
                                                onClick={() => handleLeaveAction(req.id, 'approve')}
                                                disabled={req.parentStatus !== 'approved'}
                                                style={{
                                                    flex: 1, padding: '0.5rem',
                                                    background: req.parentStatus === 'approved' ? '#16a34a' : '#9ca3af',
                                                    color: 'white', border: 'none', borderRadius: '6px',
                                                    cursor: req.parentStatus === 'approved' ? 'pointer' : 'not-allowed',
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: '500'
                                                }}
                                            >
                                                <CheckCircle size={16} /> Confirm
                                            </button>
                                            <button
                                                onClick={() => handleLeaveAction(req.id, 'reject')}
                                                style={{ flex: 1, padding: '0.5rem', background: 'white', color: '#dc2626', border: '1px solid #fca5a5', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}
                                            >
                                                <XCircle size={16} /> Decline
                                            </button>
                                        </div>
                                    ) : (
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: req.teacherStatus === 'approved' ? '#16a34a' : '#dc2626', fontWeight: '600', fontSize: '0.9rem', padding: '0.5rem', background: req.teacherStatus === 'approved' ? '#f0fdf4' : '#fef2f2', borderRadius: '6px', justifyContent: 'center' }}>
                                            {req.teacherStatus === 'approved' ? <CheckCircle size={18} /> : <XCircle size={18} />}
                                            {req.teacherStatus === 'approved' ? 'Approved by You' : 'Declined'}
                                        </div>
                                    )}

                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </DashboardLayout>
    );
};

export default TeacherProfile;
