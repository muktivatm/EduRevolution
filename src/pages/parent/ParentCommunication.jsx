import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { useChat } from '../../context/ChatContext';
import { Search, Send, Phone, Video, MoreVertical, ArrowLeft, User, Paperclip } from 'lucide-react';

const ParentCommunication = () => {
    const { users, currentUser, conversations, sendMessage, getConversationId } = useChat();
    const location = useLocation();

    // State
    const [activeTab, setActiveTab] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedContact, setSelectedContact] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const messagesEndRef = useRef(null);

    // Mock Parent User (Mr. Sharma from previous context)
    const parentUser = currentUser || { id: 'parent1', name: 'Mr. Raj Sharma', role: 'parent' };

    useEffect(() => {
        if (location.state?.contactId) {
            const contact = users.find(u => u.id === location.state.contactId);
            if (contact) {
                setSelectedContact(contact);
                // Also switch tab if needed
                if (contact.role === 'teacher') setActiveTab('Teacher');
                else if (contact.role === 'admin') setActiveTab('Admin');
            }
        }
    }, [location.state, users]);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (selectedContact) {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [selectedContact, conversations]);

    // Data Filtering
    const getContacts = () => {
        let contacts = users.filter(u => u.id !== parentUser.id);

        if (activeTab === 'Teacher') {
            contacts = contacts.filter(u => u.role === 'teacher');
        } else if (activeTab === 'Admin') {
            contacts = contacts.filter(u => u.role === 'admin');
        }

        if (searchQuery) {
            contacts = contacts.filter(u => u.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }
        return contacts;
    };

    const contacts = getContacts();

    // Helper to get last message
    const getLastMessage = (contactId) => {
        const convId = getConversationId(parentUser.id, contactId);
        const msgs = conversations[convId] || [];
        return msgs.length > 0 ? msgs[msgs.length - 1] : null;
    };

    const handleSend = (e, text) => {
        e.preventDefault();
        if (!text.trim() || !selectedContact) return;
        sendMessage(parentUser.id, selectedContact.id, text);
        // Clear input handled by form
    };

    // --- Sub-components (Inline for simplicity) ---

    // 1. Chat List Item
    const ContactItem = ({ contact }) => {
        const lastMsg = getLastMessage(contact.id);
        const isSelected = selectedContact?.id === contact.id;

        return (
            <div
                onClick={() => setSelectedContact(contact)}
                style={{
                    display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem 1rem',
                    cursor: 'pointer', background: isSelected ? '#f0f4f8' : 'white',
                    borderBottom: '1px solid #f3f4f6'
                }}
            >
                <img
                    src={contact.avatar || 'https://via.placeholder.com/40'}
                    alt={contact.name}
                    style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', border: '1px solid #e5e7eb' }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                        <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#111827', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {contact.name}
                        </h4>
                        <span style={{ fontSize: '0.75rem', color: lastMsg ? '#6b7280' : '#9ca3af' }}>
                            {lastMsg ? lastMsg.timestamp : ''}
                        </span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p style={{ fontSize: '0.9rem', color: '#6b7280', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '85%' }}>
                            {lastMsg ? lastMsg.text : <span style={{ fontStyle: 'italic', color: '#9ca3af' }}>Start a conversation</span>}
                        </p>
                        {/* Mock Unread Badge */}
                        {lastMsg && lastMsg.senderId !== parentUser.id && (
                            <div style={{ width: '20px', height: '20px', background: '#10b981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', color: 'white', fontWeight: 'bold' }}>
                                1
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <DashboardLayout role="parent">
            <div className={isMobile ? "" : "glass-card"} style={{
                position: isMobile ? 'fixed' : 'relative',
                top: isMobile ? 0 : 'auto',
                left: isMobile ? 0 : 'auto',
                right: isMobile ? 0 : 'auto',
                bottom: isMobile ? '64px' : 'auto', // Leave space for BottomNav on mobile
                height: isMobile ? 'auto' : 'calc(100vh - 100px)',
                width: isMobile ? '100%' : '100%',
                padding: 0,
                borderRadius: isMobile ? '0' : '20px',
                overflow: 'hidden',
                display: 'flex',
                background: 'white',
                border: isMobile ? 'none' : '1px solid #e5e7eb',
                boxShadow: isMobile ? 'none' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                zIndex: isMobile ? 50 : 1
            }}>

                {/* Left Side: Contact List */}
                <div style={{
                    width: isMobile ? '100%' : '380px',
                    display: (isMobile && selectedContact) ? 'none' : 'flex',
                    flexDirection: 'column',
                    borderRight: isMobile ? 'none' : '1px solid #e5e7eb',
                    height: '100%'
                }}>

                    {/* Header */}
                    <div style={{ padding: '1.25rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f9fafb', borderBottom: '1px solid #f3f4f6' }}>
                        <h1 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#111827' }}>Communication</h1>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#e0e7ff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                            <User size={20} color="#4338ca" />
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div style={{ padding: '0.75rem 1rem' }}>
                        <div style={{ position: 'relative' }}>
                            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{
                                    width: '100%', padding: '0.75rem 1rem 0.75rem 2.75rem',
                                    borderRadius: '9999px', border: '1px solid #e5e7eb',
                                    background: '#f9fafb', outline: 'none', fontSize: '0.95rem'
                                }}
                            />
                        </div>
                    </div>

                    {/* Tabs */}
                    <div style={{ padding: '0 1rem 0.75rem', display: 'flex', gap: '0.75rem' }}>
                        {['All', 'Teacher', 'Admin'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                style={{
                                    padding: '0.5rem 1.25rem', borderRadius: '9999px',
                                    border: '1px solid',
                                    borderColor: activeTab === tab ? 'black' : '#e5e7eb',
                                    background: activeTab === tab ? 'black' : 'white',
                                    color: activeTab === tab ? 'white' : '#4b5563',
                                    fontWeight: '600', fontSize: '0.85rem', cursor: 'pointer',
                                    transition: 'all 0.2s'
                                }}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Contacts List */}
                    <div style={{ flex: 1, overflowY: 'auto' }}>
                        {contacts.map(contact => (
                            <ContactItem key={contact.id} contact={contact} />
                        ))}
                        {contacts.length === 0 && (
                            <div style={{ padding: '2rem', textAlign: 'center', color: '#9ca3af', fontStyle: 'italic' }}>
                                No contacts found.
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Side: Chat Window */}
                <div style={{
                    flex: 1,
                    display: (isMobile && !selectedContact) ? 'none' : 'flex',
                    flexDirection: 'column',
                    background: '#f0f2f5', // WhatsApp-like bg
                    backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', // Subtle pattern hint
                    backgroundBlendMode: 'soft-light',
                    height: '100%'
                }}>
                    {selectedContact ? (
                        <>
                            {/* Chat Header */}
                            <div style={{ padding: '0.75rem 1rem', background: 'white', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', zIndex: 10 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <button onClick={() => setSelectedContact(null)} style={{ background: 'none', border: 'none', padding: '0.25rem', cursor: 'pointer', display: isMobile ? 'block' : 'none' }}>
                                        <ArrowLeft size={24} color="#374151" />
                                    </button>
                                    <img src={selectedContact.avatar || 'https://via.placeholder.com/40'} alt={selectedContact.name} style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                                    <div>
                                        <h3 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#111827' }}>{selectedContact.name}</h3>
                                        <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>Online</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1.25rem', color: '#54656f' }}>
                                    <Video size={20} style={{ cursor: 'pointer' }} />
                                    <Phone size={20} style={{ cursor: 'pointer' }} />
                                    <MoreVertical size={20} style={{ cursor: 'pointer' }} />
                                </div>
                            </div>

                            {/* Messages Area */}
                            <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {(conversations[getConversationId(parentUser.id, selectedContact.id)] || []).map((msg, idx) => {
                                    const isMe = msg.senderId === parentUser.id;
                                    return (
                                        <div key={msg.id} style={{ alignSelf: isMe ? 'flex-end' : 'flex-start', maxWidth: '75%' }}>
                                            <div style={{
                                                padding: '0.5rem 0.75rem',
                                                borderRadius: '8px',
                                                background: isMe ? '#d9fdd3' : 'white', // WhatsApp Colors
                                                boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
                                                position: 'relative'
                                            }}>
                                                <p style={{ fontSize: '0.95rem', color: '#111827', lineHeight: '1.4', paddingRight: '4rem', marginBottom: '-0.4rem' }}>{msg.text}</p>
                                                <span style={{ fontSize: '0.7rem', color: '#667781', float: 'right', marginLeft: '0.5rem', marginTop: '0.4rem' }}>{msg.timestamp}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input Area */}
                            <div style={{ padding: '0.75rem', background: '#f0f2f5', display: 'flex', alignItems: 'center', gap: '0.5rem', borderTop: '1px solid #e5e7eb' }}>
                                <button style={{ padding: '0.5rem', background: 'transparent', border: 'none', cursor: 'pointer', color: '#54656f' }}>
                                    <Paperclip size={22} />
                                </button>
                                <form
                                    onSubmit={(e) => {
                                        const input = e.target.elements.msgInput;
                                        handleSend(e, input.value);
                                        input.value = '';
                                    }}
                                    style={{ flex: 1, display: 'flex', gap: '0.75rem' }}
                                >
                                    <input
                                        name="msgInput"
                                        type="text"
                                        placeholder="Type a message"
                                        style={{ flex: 1, padding: '0.75rem 1rem', borderRadius: '8px', border: 'none', outline: 'none', background: 'white' }}
                                    />
                                    <button type="submit" style={{ padding: '0.75rem', borderRadius: '50%', background: '#00a884', color: 'white', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Send size={20} />
                                    </button>
                                </form>
                            </div>
                        </>
                    ) : (
                        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#41525d', borderBottom: '6px solid #25d366' }}>
                            <div style={{ marginBottom: '1rem', padding: '2rem', background: '#e9edef', borderRadius: '50%' }}>
                                <Send size={48} color="#8696a0" />
                            </div>
                            <h2 style={{ fontSize: '2rem', fontWeight: '300', marginBottom: '1rem' }}>WhatsApp Web</h2>
                            <p style={{ fontSize: '0.9rem', color: '#667781' }}>Send and receive messages without keeping your phone online.</p>
                            <p style={{ fontSize: '0.9rem', color: '#667781', marginTop: '0.5rem' }}>Select a chat to start messaging.</p>
                        </div>
                    )}
                </div>

            </div>
        </DashboardLayout>
    );
};

export default ParentCommunication;
