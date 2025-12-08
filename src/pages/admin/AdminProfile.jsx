import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { User, Mail, Shield, CheckCircle, XCircle, Filter } from 'lucide-react';

const AdminProfile = () => {

    // Mock All Leaves
    const [allLeaves, setAllLeaves] = useState([
        {
            id: 1,
            student: "Rahul Sharma",
            class: "10-A",
            type: "Sick Leave",
            date: "8th Jan 2025",
            status: "approved", // Fully approved
            parentStatus: "approved",
            teacherStatus: "approved"
        },
        {
            id: 2,
            student: "Amit Patel",
            class: "10-A",
            type: "Family Function",
            date: "12th Jan 2025",
            status: "pending",
            parentStatus: "pending",
            teacherStatus: "pending"
        },
        {
            id: 3,
            student: "Sneha Gupta",
            class: "9-C",
            type: "Emergency",
            date: "15th Jan 2025",
            status: "rejected",
            parentStatus: "approved",
            teacherStatus: "rejected"
        }
    ]);

    const adminDetails = {
        name: "Principal Anderson",
        role: "School Administrator",
        email: "admin@school.edu"
    };

    return (
        <DashboardLayout role="admin">
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.5rem' }}>Admin Profile</h1>
                    <p style={{ color: '#6b7280' }}>System administration and oversight</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                    {/* Admin Details */}
                    <div className="glass-card" style={{ padding: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', color: '#991b1b' }}>
                                A
                            </div>
                            <div>
                                <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>{adminDetails.name}</h2>
                                <p style={{ color: '#6b7280' }}>{adminDetails.role}</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#4b5563' }}>
                            <Mail size={18} /> <span>{adminDetails.email}</span>
                        </div>
                    </div>

                    {/* Leave Management (Oversight) */}
                    <div className="glass-card" style={{ padding: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937' }}>Leave Management (Global)</h3>
                            <button style={{ padding: '0.5rem', border: '1px solid #e5e7eb', borderRadius: '8px', background: 'white', cursor: 'pointer' }}>
                                <Filter size={18} color="#6b7280" />
                            </button>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '400px', overflowY: 'auto' }}>
                            {allLeaves.map(leave => (
                                <div key={leave.id} style={{ padding: '1rem', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px' }}>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <div>
                                            <span style={{ fontWeight: '600', color: '#1f2937' }}>{leave.student}</span>
                                            <span style={{ fontSize: '0.8rem', color: '#6b7280', marginLeft: '0.5rem' }}>{leave.class}</span>
                                        </div>
                                        <div style={{
                                            fontSize: '0.75rem', padding: '2px 8px', borderRadius: '10px',
                                            background: leave.status === 'approved' ? '#dcfce7' : (leave.status === 'rejected' ? '#fee2e2' : '#fef3c7'),
                                            color: leave.status === 'approved' ? '#166534' : (leave.status === 'rejected' ? '#991b1b' : '#92400e'),
                                            fontWeight: '600'
                                        }}>
                                            {leave.status.toUpperCase()}
                                        </div>
                                    </div>

                                    <div style={{ fontSize: '0.85rem', color: '#4b5563', marginBottom: '0.5rem' }}>
                                        {leave.type} • {leave.date}
                                    </div>

                                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem' }}>
                                        <span style={{ color: leave.parentStatus === 'approved' ? '#16a34a' : '#d97706' }}>
                                            Parent: {leave.parentStatus}
                                        </span>
                                        <span style={{ color: leave.teacherStatus === 'approved' ? '#16a34a' : (leave.teacherStatus === 'rejected' ? '#dc2626' : '#d97706') }}>
                                            Teacher: {leave.teacherStatus}
                                        </span>
                                    </div>

                                    {/* Admin Action (Optional Override) */}
                                    {leave.status === 'pending' && (
                                        <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                                            <button style={{ flex: 1, padding: '0.25rem', fontSize: '0.8rem', background: 'white', border: '1px solid #e5e7eb', borderRadius: '4px', cursor: 'pointer' }}>Override Approve</button>
                                            <button style={{ flex: 1, padding: '0.25rem', fontSize: '0.8rem', background: 'white', border: '1px solid #e5e7eb', borderRadius: '4px', cursor: 'pointer' }}>Override Reject</button>
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

export default AdminProfile;
