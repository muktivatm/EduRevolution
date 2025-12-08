import React, { useState } from 'react';
import { X, MessageCircle, Calendar, Users, Check, ArrowRight, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotificationPanel = ({ isOpen, onClose, role = 'student' }) => {
    const navigate = useNavigate();

    // Mock data generator based on role
    const getInitialNotifications = (userRole) => {
        if (userRole === 'student') {
            return [
                {
                    id: 1,
                    type: 'message',
                    title: 'Mr. Verma (Math)',
                    message: 'Don\'t forget to submit the calculus worksheet.',
                    time: '10:00 AM',
                    isRead: false
                },
                {
                    id: 2,
                    type: 'community',
                    title: 'Science Fair',
                    message: 'Registration for the annual science fair closes tomorrow.',
                    time: 'Yesterday',
                    isRead: true
                },
                {
                    id: 3,
                    type: 'message',
                    title: 'Mrs. Gupta (Physics)',
                    message: 'Great job on the thermodynamics lab report!',
                    time: '2 days ago',
                    isRead: true
                }
            ];
        } else if (userRole === 'parent') {
            return [
                {
                    id: 1,
                    type: 'community',
                    title: 'Annual Sports Day',
                    message: 'Join us for the annual sports day event this Friday!',
                    time: '2 hours ago',
                    isRead: false
                },
                {
                    id: 2,
                    type: 'message',
                    senderId: 'teacher2',
                    title: 'Mr. Verma (Physics)',
                    message: 'Rahul needs to improve his lab attendance.',
                    time: '10:30 AM',
                    isRead: false
                },
                {
                    id: 3,
                    type: 'leave',
                    title: 'Leave Request: Rahul',
                    message: 'Sick Leave applied for 8th Jan.',
                    time: 'Yesterday',
                    status: 'pending',
                    isRead: false
                }
            ];
        } else if (userRole === 'teacher') {
            return [
                {
                    id: 1,
                    type: 'message',
                    title: 'System Admin',
                    message: 'Grade submission deadline is approaching.',
                    time: '1 hour ago',
                    isRead: false
                },
                {
                    id: 2,
                    type: 'community',
                    title: 'Staff Meeting',
                    message: 'Monthly staff meeting at 4 PM in the conference room.',
                    time: '9:00 AM',
                    isRead: false
                }
            ];
        }
        return [];
    };

    const [notifications, setNotifications] = useState(getInitialNotifications(role));

    if (!isOpen) return null;

    const handleMarkAsRead = (id) => {
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
    };

    const handleReply = (notification) => {
        handleMarkAsRead(notification.id);
        onClose();
        // Navigate to communication with state to open specific chat
        navigate('/parent/communication', {
            state: { contactId: notification.senderId }
        });
    };

    const handleViewLeaveDetails = (notification) => {
        handleMarkAsRead(notification.id);
        onClose();
        // Navigate to profile with state to scroll to leaves
        navigate('/parent/profile', {
            state: { scrollTo: 'leaves' }
        });
    };

    const handleConfirmLeave = (id) => {
        setNotifications(prev => prev.map(n =>
            n.id === id ? { ...n, status: 'approved', isRead: true } : n
        ));
        // In a real app, this would also update the backend/context
    };

    // Filter unread count for badge logic if needed, but here we just show list
    const unreadCount = notifications.filter(n => !n.isRead).length;

    return (
        <>
            {/* Backdrop */}
            <div
                onClick={onClose}
                style={{
                    position: 'fixed', inset: 0, zIndex: 45,
                    background: 'transparent'
                }}
            />

            {/* Panel */}
            <div className="animate-fade-in" style={{
                position: 'absolute',
                top: '70px', right: '2rem', // Desktop positioning
                width: '360px',
                maxHeight: '80vh',
                background: 'white',
                borderRadius: '16px',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                border: '1px solid #f3f4f6',
                zIndex: 50,
                display: 'flex', flexDirection: 'column',
                overflow: 'hidden'
            }}>
                {/* Header */}
                <div style={{ padding: '1rem', borderBottom: '1px solid #f3f4f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f9fafb' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#1f2937' }}>Notifications</h3>
                    {unreadCount > 0 && (
                        <span style={{ fontSize: '0.75rem', background: '#fee2e2', color: '#dc2626', padding: '0.1rem 0.5rem', borderRadius: '10px', fontWeight: '600' }}>
                            {unreadCount} new
                        </span>
                    )}
                </div>

                {/* List */}
                <div style={{ overflowY: 'auto', padding: '0.5rem' }}>
                    {notifications.length === 0 ? (
                        <div style={{ padding: '2rem', textAlign: 'center', color: '#9ca3af' }}>No notifications</div>
                    ) : (
                        notifications.map(n => (
                            <div key={n.id} style={{
                                padding: '1rem',
                                marginBottom: '0.5rem',
                                borderRadius: '12px',
                                background: n.isRead ? 'white' : '#f0f9ff',
                                border: '1px solid',
                                borderColor: n.isRead ? 'transparent' : '#bae6fd',
                                transition: 'all 0.2s'
                            }}>
                                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                    {/* Icon based on type */}
                                    <div style={{
                                        padding: '0.5rem', borderRadius: '50%',
                                        background: n.type === 'community' ? '#f3e8ff' : (n.type === 'message' ? '#dcfce7' : '#ffedd5'),
                                        color: n.type === 'community' ? '#7deb8a' : (n.type === 'message' ? '#16a34a' : '#ea580c'),
                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        {n.type === 'community' && <Users size={16} color="#9333ea" />}
                                        {n.type === 'message' && <MessageCircle size={16} color="#16a34a" />}
                                        {n.type === 'leave' && <Calendar size={16} color="#ea580c" />}
                                    </div>

                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                            <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: '#374151' }}>{n.title}</h4>
                                            <span style={{ fontSize: '0.7rem', color: '#9ca3af' }}>{n.time}</span>
                                        </div>
                                        <p style={{ fontSize: '0.85rem', color: '#6b7280', margin: '0.25rem 0 0.75rem' }}>{n.message}</p>

                                        {/* Actions */}
                                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>

                                            {/* Common: Mark as Read (Hidden for Leave requests as they have specific actions) */}
                                            {!n.isRead && n.type !== 'leave' && (
                                                <button
                                                    onClick={() => handleMarkAsRead(n.id)}
                                                    style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', padding: '0.25rem 0.5rem', border: '1px solid #e5e7eb', borderRadius: '6px', cursor: 'pointer', background: 'white', color: '#6b7280' }}
                                                >
                                                    <Check size={12} /> Mark read
                                                </button>
                                            )}

                                            {/* Message Specific */}
                                            {n.type === 'message' && (
                                                <button
                                                    onClick={() => handleReply(n)}
                                                    style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', padding: '0.25rem 0.75rem', border: 'none', borderRadius: '6px', cursor: 'pointer', background: '#111827', color: 'white', fontWeight: '500' }}
                                                >
                                                    Reply <ArrowRight size={12} />
                                                </button>
                                            )}

                                            {/* Leave Specific */}
                                            {n.type === 'leave' && n.status === 'pending' && (
                                                <>
                                                    <button
                                                        onClick={() => handleConfirmLeave(n.id)}
                                                        style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', padding: '0.25rem 0.75rem', border: 'none', borderRadius: '6px', cursor: 'pointer', background: '#16a34a', color: 'white', fontWeight: '500' }}
                                                    >
                                                        Confirm
                                                    </button>
                                                    <button
                                                        onClick={() => handleViewLeaveDetails(n)}
                                                        style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', padding: '0.25rem 0.75rem', border: '1px solid #e5e7eb', borderRadius: '6px', cursor: 'pointer', background: 'white', color: '#374151' }}
                                                    >
                                                        Details
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default NotificationPanel;
