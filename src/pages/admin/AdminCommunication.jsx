import React from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import ChatInterface from '../../components/common/ChatInterface';
import { useChat } from '../../context/ChatContext';

const AdminCommunication = () => {
    const { users } = useChat();

    // Mock Current User for Admin
    const currentUser = users.find(u => u.id === 'admin1');

    const teachers = users.filter(u => u.role === 'teacher').map(t => ({ ...t, subtext: `${t.subject} Teacher` }));
    const parents = users.filter(u => u.role === 'parent').map(p => ({ ...p, subtext: `Parent of ${p.childClass} Student` }));
    const students = users.filter(u => u.role === 'student').map(s => ({ ...s, subtext: s.class }));

    const contactsMap = {
        'Teachers': teachers,
        'Parents': parents,
        'Students': students
    };

    return (
        <DashboardLayout role="admin">
            <div className="animate-fade-in" style={{ height: 'calc(100vh - 100px)' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#111827' }}>Admin Communication</h1>
                    <p style={{ color: '#6b7280' }}>Manage platform-wide communications.</p>
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

export default AdminCommunication;
