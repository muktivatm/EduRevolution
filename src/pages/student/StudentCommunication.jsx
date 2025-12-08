import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import ChatInterface from '../../components/common/ChatInterface';
import { useChat } from '../../context/ChatContext';

const StudentCommunication = () => {
    const { users } = useChat();

    // Mock Current User for Student (Rahul Sharma)
    const currentUser = users.find(u => u.id === 'student1');

    const teachers = users.filter(u => u.role === 'teacher').map(t => ({ ...t, subtext: `${t.subject} Teacher` }));
    const admins = users.filter(u => u.role === 'admin').map(a => ({ ...a, subtext: a.tag }));

    // Mock Class Group
    const groups = [
        { id: 'class-10-A', name: 'Class 10-A', role: 'group', avatar: 'https://ui-avatars.com/api/?name=10+A&background=random', subtext: 'Official Class Group' }
    ];

    const contactsMap = {
        'Teachers': teachers,
        'Groups': groups,
        'Admin': admins
    };

    return (
        <DashboardLayout role="student">
            <div className="animate-fade-in" style={{ height: 'calc(100vh - 100px)' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#111827' }}>Communication</h1>
                    <p style={{ color: '#6b7280' }}>Ask doubts and connect with your teachers.</p>
                </div>

                <ChatInterface
                    currentUser={currentUser}
                    initialTab="Teachers"
                    contactsMap={contactsMap}
                />
            </div>
        </DashboardLayout>
    );
};

export default StudentCommunication;
