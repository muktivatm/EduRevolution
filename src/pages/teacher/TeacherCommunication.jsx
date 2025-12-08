import React from 'react';
import { useSearchParams } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import ChatInterface from '../../components/common/ChatInterface';
import { useChat } from '../../context/ChatContext';

const TeacherCommunication = () => {
    const { users } = useChat();
    const [searchParams] = useSearchParams();
    const contactId = searchParams.get('contactId');
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Mock Current User for Teacher (Mr. Verma)
    const currentUser = users.find(u => u.id === 'teacher1');

    // Mocks
    const classes = [
        { id: 'class-10-A', name: 'Class 10-A', role: 'Group', avatar: 'https://ui-avatars.com/api/?name=10+A&background=random', subtext: 'Broadcast Group' }
    ];

    const students = users.filter(u => u.role === 'student').map(s => ({ ...s, subtext: s.class }));
    const admins = users.filter(u => u.role === 'admin').map(a => ({ ...a, subtext: a.tag }));
    const parents = users.filter(u => u.role === 'parent').map(p => ({ ...p, subtext: `Parent of ${p.childClass} Student` }));

    const contactsMap = {
        'Classes': classes,
        'Students': students,
        'Admin': admins,
        'Parents': parents
    };

    return (
        <DashboardLayout role="teacher">
            <div className="animate-fade-in" style={{ height: isMobile ? 'calc(100vh - 90px)' : 'calc(100vh - 100px)', display: 'flex', flexDirection: 'column' }}>
                {!isMobile && (
                    <div style={{ marginBottom: '1.5rem' }}>
                        <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#111827' }}>Communication</h1>
                        <p style={{ color: '#6b7280' }}>Connect with students, parents, and colleagues.</p>
                    </div>
                )}

                <div style={{ flex: 1, minHeight: 0 }}>
                    <ChatInterface
                        currentUser={currentUser}
                        initialTab="Classes"
                        contactsMap={contactsMap}
                        initialContactId={contactId}
                    />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default TeacherCommunication;
