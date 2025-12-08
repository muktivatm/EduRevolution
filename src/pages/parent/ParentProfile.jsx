import React, { useState, useEffect, useRef } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { User, Mail, Phone, MapPin, Edit2, Plus, LogOut, CheckCircle, XCircle, CreditCard, HelpCircle, Clock, ChevronRight, History } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const ParentProfile = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const leavesRef = useRef(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (location.state?.scrollTo === 'leaves' && leavesRef.current) {
            leavesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location.state]);

    // Mock Pending Leaves
    const [pendingLeaves, setPendingLeaves] = useState([
        {
            id: 1,
            student: "Rahul Sharma",
            type: "Sick Leave",
            date: "8th Jan 2025",
            reason: "High fever and fatigue.",
            status: "pending"
        }
    ]);

    const handleLeaveAction = (id, action) => {
        setPendingLeaves(leaves => leaves.map(leave =>
            leave.id === id ? { ...leave, status: action === 'approve' ? 'approved' : 'rejected' } : leave
        ));
    };

    const parentDetails = {
        name: "Mr. Raj Sharma",
        email: "raj.sharma@example.com",
        phone: "+91 98765 43210",
        address: "123, Green Park, New Delhi",
    };

    const linkedStudents = [
        { id: 1, name: "Rahul Sharma", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" },
        { id: 2, name: "Riya Sharma", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150" }
    ];

    return (
        <DashboardLayout role="parent">
            <div style={{ maxWidth: '600px', margin: '0 auto', paddingBottom: isMobile ? '5rem' : '4rem' }}>

                {/* 1. Profile Header Card */}
                <div className="glass-card" style={{ padding: isMobile ? '1rem' : '1.5rem', marginBottom: isMobile ? '1rem' : '1.5rem', position: 'relative', borderRadius: isMobile ? '20px' : '24px', border: '1px solid rgba(255,255,255,0.5)' }}>
                    <button
                        onClick={() => setIsEditing(!isEditing)}
                        style={{ position: 'absolute', top: isMobile ? '1rem' : '1.5rem', right: isMobile ? '1rem' : '1.5rem', background: '#f3f4f6', border: 'none', borderRadius: '50%', padding: '0.4rem', cursor: 'pointer' }}
                    >
                        <Edit2 size={isMobile ? 16 : 18} color="#4b5563" />
                    </button>

                    <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '1rem' : '1.5rem' }}>
                        <div style={{ padding: '4px', background: 'white', borderRadius: '50%', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <div style={{ width: isMobile ? '64px' : '80px', height: isMobile ? '64px' : '80px', borderRadius: '50%', background: '#e0e7ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 'bold', color: '#4338ca' }}>
                                {parentDetails.name.charAt(0)}
                            </div>
                        </div>
                        <div style={{ flex: 1 }}>
                            <h2 style={{ fontSize: isMobile ? '1.2rem' : '1.4rem', fontWeight: '800', color: '#111827', marginBottom: '0.2rem' }}>{parentDetails.name}</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', fontSize: isMobile ? '0.8rem' : '0.85rem', color: '#6b7280' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Phone size={14} /> {parentDetails.phone}</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Mail size={14} /> {parentDetails.email}</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={14} /> {parentDetails.address}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Associated with (Children) Section */}
                <div className="glass-card" style={{ padding: isMobile ? '1rem' : '1.25rem 1.5rem', marginBottom: isMobile ? '1rem' : '1.5rem', borderRadius: isMobile ? '20px' : '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: '600', color: '#4b5563', fontSize: isMobile ? '0.85rem' : '0.9rem' }}>Associated with </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.75rem' : '1rem' }}>
                        {linkedStudents.map(student => (
                            <div key={student.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
                                <img src={student.avatar} alt={student.name} style={{ width: isMobile ? '40px' : '48px', height: isMobile ? '40px' : '48px', borderRadius: '50%', border: '2px solid white', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }} />
                            </div>
                        ))}
                        <button style={{ width: isMobile ? '40px' : '48px', height: isMobile ? '40px' : '48px', borderRadius: '50%', border: '2px dashed #d1d5db', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#6b7280' }}>
                            <Plus size={isMobile ? 18 : 20} />
                        </button>
                    </div>
                </div>

                {/* 3. Fees & Dues Dashboard Button */}
                <button
                    onClick={() => navigate('/parent/fees')}
                    className="glass-card"
                    style={{
                        width: '100%', padding: isMobile ? '1rem' : '1.25rem 1.5rem', marginBottom: isMobile ? '1rem' : '1.5rem', borderRadius: '20px',
                        display: 'flex', alignItems: 'center', gap: isMobile ? '0.75rem' : '1rem', cursor: 'pointer', border: '1px solid #e5e7eb',
                        transition: 'transform 0.1s', textAlign: 'left'
                    }}
                >
                    <div style={{ padding: isMobile ? '0.6rem' : '0.75rem', background: '#ecfdf5', borderRadius: '12px', color: '#059669' }}>
                        <CreditCard size={isMobile ? 20 : 24} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: 'bold', color: '#1f2937' }}>Fees and Dues Dashboard</h3>
                        <p style={{ fontSize: isMobile ? '0.8rem' : '0.85rem', color: '#6b7280' }}>Check pending dues and payment history</p>
                    </div>
                    <ChevronRight size={20} color="#9ca3af" />
                </button>

                {/* 4. Leave Management Card */}
                <div ref={leavesRef} className="glass-card" style={{ padding: isMobile ? '1rem' : '1.5rem', marginBottom: isMobile ? '1rem' : '1.5rem', borderRadius: '24px', border: '1px solid #e5e7eb' }}>
                    <h3 style={{ fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: 'bold', color: '#1f2937', marginBottom: isMobile ? '0.75rem' : '1rem' }}>Leave Management</h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {pendingLeaves.length > 0 ? pendingLeaves.map(leave => (
                            <div key={leave.id} style={{ padding: isMobile ? '0.75rem' : '1rem', background: leave.status === 'pending' ? '#fff7ed' : (leave.status === 'approved' ? '#f0fdf4' : '#fef2f2'), borderRadius: '16px', border: `1px solid ${leave.status === 'pending' ? '#ffedd5' : (leave.status === 'approved' ? '#dcfce7' : '#fee2e2')}` }}>
                                <div style={{ marginBottom: '0.75rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                                        <span style={{ fontWeight: '700', color: '#1f2937', fontSize: isMobile ? '0.9rem' : '1rem' }}>{leave.student}</span>
                                        <span style={{ fontSize: '0.75rem', padding: '2px 8px', background: 'white', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.05)', color: '#6b7280' }}>{leave.date}</span>
                                    </div>
                                    <p style={{ fontSize: isMobile ? '0.85rem' : '0.9rem', color: '#4b5563' }}>{leave.type} - <span style={{ fontStyle: 'italic' }}>{leave.reason}</span></p>
                                </div>

                                {leave.status === 'pending' ? (
                                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                                        <button
                                            onClick={() => handleLeaveAction(leave.id, 'reject')}
                                            style={{ flex: 1, padding: isMobile ? '0.5rem' : '0.6rem', background: 'white', color: '#dc2626', border: '1px solid #fca5a5', borderRadius: '10px', cursor: 'pointer', fontSize: isMobile ? '0.85rem' : '0.9rem', fontWeight: '600' }}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={() => handleLeaveAction(leave.id, 'approve')}
                                            style={{ flex: 1, padding: isMobile ? '0.5rem' : '0.6rem', background: '#111827', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: isMobile ? '0.85rem' : '0.9rem', fontWeight: '600' }}
                                        >
                                            Confirm
                                        </button>
                                    </div>
                                ) : (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: leave.status === 'approved' ? '#16a34a' : '#dc2626', fontWeight: '600', fontSize: '0.9rem' }}>
                                        {leave.status === 'approved' ? <CheckCircle size={18} /> : <XCircle size={18} />}
                                        {leave.status === 'approved' ? 'Confirmed' : 'Declined'}
                                    </div>
                                )}
                            </div>
                        )) : (
                            <p style={{ color: '#9ca3af', textAlign: 'center', fontStyle: 'italic' }}>No pending requests</p>
                        )}
                    </div>

                    <button style={{ marginTop: '1rem', background: 'none', border: 'none', color: '#4b5563', fontSize: isMobile ? '0.85rem' : '0.9rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', padding: '0.5rem 0' }}>
                        <History size={16} /> View History
                    </button>
                </div>

                {/* 5. Help & Support Button */}
                <button
                    className="glass-card"
                    style={{
                        width: '100%', padding: isMobile ? '1rem' : '1.25rem 1.5rem', borderRadius: '20px',
                        display: 'flex', alignItems: 'center', gap: isMobile ? '0.75rem' : '1rem', cursor: 'pointer', border: '1px solid #e5e7eb',
                        transition: 'transform 0.1s', textAlign: 'left'
                    }}
                >
                    <div style={{ padding: isMobile ? '0.6rem' : '0.75rem', background: '#eff6ff', borderRadius: '12px', color: '#2563eb' }}>
                        <HelpCircle size={isMobile ? 20 : 24} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: 'bold', color: '#1f2937' }}>Help & Support</h3>
                        <p style={{ fontSize: isMobile ? '0.8rem' : '0.85rem', color: '#6b7280' }}>FAQs and Customer Care</p>
                    </div>
                    <ChevronRight size={20} color="#9ca3af" />
                </button>

                {/* 6. Logout Button */}
                <button
                    onClick={() => navigate('/login')}
                    className="glass-card"
                    style={{
                        width: '100%', padding: isMobile ? '1rem' : '1.25rem 1.5rem', borderRadius: '20px',
                        display: 'flex', alignItems: 'center', gap: isMobile ? '0.75rem' : '1rem', cursor: 'pointer', border: '1px solid #fee2e2',
                        marginTop: isMobile ? '1rem' : '1.5rem',
                        transition: 'transform 0.1s', textAlign: 'left'
                    }}
                >
                    <div style={{ padding: isMobile ? '0.6rem' : '0.75rem', background: '#fef2f2', borderRadius: '12px', color: '#dc2626' }}>
                        <LogOut size={isMobile ? 20 : 24} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: 'bold', color: '#1f2937' }}>Logout</h3>
                        <p style={{ fontSize: isMobile ? '0.8rem' : '0.85rem', color: '#6b7280' }}>Sign out of your account</p>
                    </div>
                    <ChevronRight size={20} color="#9ca3af" />
                </button>

            </div>
        </DashboardLayout>
    );
};

export default ParentProfile;
