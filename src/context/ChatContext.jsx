import React, { createContext, useContext, useState, useEffect } from 'react';

const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
    // Mock Users Database
    const [users] = useState([
        { id: 'parent1', name: 'Mr. Sharma', role: 'parent', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80', childClass: '10-A', childNames: 'Rahul and Riya' },
        { id: 'student1', name: 'Rahul Sharma', role: 'student', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80', class: '10-A' },
        { id: 'teacher1', name: 'Mr. Verma', role: 'teacher', subject: 'Maths', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80', classes: ['10-A', '9-B'] },
        { id: 'teacher2', name: 'Mrs. Gupta', role: 'teacher', subject: 'Physics', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80', classes: ['10-A'] },
        { id: 'admin1', name: 'Admin User', role: 'admin', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80', tag: 'Principal Office' }
    ]);

    // Mock Conversations
    // Key: combined IDs sorted alphabetically, e.g., "parent1-teacher1"
    const [conversations, setConversations] = useState({
        'parent1-teacher1': [
            { id: 1, senderId: 'teacher1', text: 'Hello Mr. Sharma, Rahul is doing great in Maths.', timestamp: '10:30 AM' },
            { id: 2, senderId: 'parent1', text: 'Thank you Mr. Verma. I had a query about the upcoming test.', timestamp: '10:35 AM' }
        ],
        'student1-teacher1': [
            { id: 1, senderId: 'student1', text: 'Sir, I have a doubt in Algebra.', timestamp: 'Yesterday' },
            { id: 2, senderId: 'teacher1', text: 'Sure Rahul, ask away.', timestamp: 'Yesterday' }
        ],
        'parent1-admin1': [
            { id: 1, senderId: 'admin1', text: 'Fee receipt generated.', timestamp: 'Mon' }
        ],
        'class-10-A': [ // Broadcast group
            { id: 1, senderId: 'teacher1', text: 'Class, submit your assignments by Friday.', timestamp: '9:00 AM' }
        ]
    });

    // Helper to get conversation ID
    const getConversationId = (id1, id2) => {
        return [id1, id2].sort().join('-');
    };

    const sendMessage = (senderId, receiverId, text) => {
        const convId = getConversationId(senderId, receiverId);
        const newMessage = {
            id: Date.now(),
            senderId,
            text,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setConversations(prev => ({
            ...prev,
            [convId]: [...(prev[convId] || []), newMessage]
        }));
    };

    const sendBroadcast = (senderId, groupId, text) => {
        const newMessage = {
            id: Date.now(),
            senderId,
            text,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setConversations(prev => ({
            ...prev,
            [groupId]: [...(prev[groupId] || []), newMessage]
        }));
    };

    return (
        <ChatContext.Provider value={{ users, conversations, sendMessage, sendBroadcast, getConversationId }}>
            {children}
        </ChatContext.Provider>
    );
};
