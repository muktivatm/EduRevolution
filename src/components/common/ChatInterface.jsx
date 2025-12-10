import React, { useState, useEffect, useRef } from 'react';
import { Search, Send, MoreVertical, Phone, Video } from 'lucide-react';
import { useChat } from '../../context/ChatContext';

const ChatInterface = ({ currentUser, initialTab, contactsMap, initialContactId }) => {
    const { conversations, sendMessage, sendBroadcast, getConversationId } = useChat();
    // Ensure 'All' is the default if not provided or just use initialTab
    const [activeTab, setActiveTab] = useState('All');

    useEffect(() => {
        if (initialTab) setActiveTab(initialTab);
    }, [initialTab]);

    const [selectedContact, setSelectedContact] = useState(null);

    // Auto-select contact if ID is provided
    useEffect(() => {
        if (initialContactId && contactsMap) {
            const allContacts = Object.values(contactsMap).flat();
            const contact = allContacts.find(c => c.id === initialContactId);
            if (contact) {
                // If the contact belongs to a specific tab (like Classes), we might want to switch tabs,
                // but for now keeping 'All' or specific tab logic if simple is fine.
                // Assuming we want to open the chat regardless of tab:
                setSelectedContact(contact);
                if (contact.role === 'Group' || contact.role === 'group') {
                    setActiveTab('Classes');
                }
            }
        }
    }, [initialContactId, contactsMap]);

    const [messageInput, setMessageInput] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const messagesEndRef = useRef(null);

    // Filter contacts based on active tab
    let activeContacts = [];
    if (activeTab === 'All') {
        const allContacts = Object.values(contactsMap).flat();
        // Remove duplicates
        const uniqueContacts = Array.from(new Map(allContacts.map(item => [item.id, item])).values());

        // Filter: Show ONLY if there is a conversation with them
        activeContacts = uniqueContacts.filter(contact => {
            if (activeTab === 'Classes') return false; // Skip groups in general 'All' logic if needed, but per request, show if chat exists

            // For groups (mock logic as groups have specific IDs like 'class-10-A')
            if (contact.role === 'Group' || contact.role === 'group') {
                return conversations[contact.id] && conversations[contact.id].length > 0;
            }

            // For direct messages
            const convId = getConversationId(currentUser.id, contact.id);
            return conversations[convId] && conversations[convId].length > 0;
        });
    } else {
        activeContacts = contactsMap[activeTab] || [];
    }

    // Filter contacts based on search
    const filteredContacts = activeContacts.filter(c =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [selectedContact, conversations]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!messageInput.trim() || !selectedContact) return;

        if (activeTab === 'Classes') {
            sendBroadcast(currentUser.id, selectedContact.id, messageInput);
        } else {
            sendMessage(currentUser.id, selectedContact.id, messageInput);
        }
        setMessageInput('');
    };

    const currentMessages = selectedContact
        ? (conversations[activeTab === 'Classes' ? selectedContact.id : getConversationId(currentUser.id, selectedContact.id)] || [])
        : [];

    // Mobile View Logic
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="glass-card" style={{ display: 'flex', height: '100%', padding: 0, overflow: 'hidden', flexDirection: isMobile ? 'column' : 'row' }}>
            {/* Sidebar / Contact List */}
            {(!isMobile || (isMobile && !selectedContact)) && (
                <div style={{
                    width: isMobile ? '100%' : '350px',
                    borderRight: isMobile ? 'none' : '1px solid #e5e7eb',
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#f9fafb',
                    height: '100%'
                }}>
                    {/* Tabs */}
                    <div style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb', background: 'white' }}>
                        <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                            {['All', ...Object.keys(contactsMap)].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => { setActiveTab(tab); setSelectedContact(null); }}
                                    style={{
                                        padding: '0.5rem 1rem',
                                        borderRadius: '20px',
                                        border: 'none',
                                        background: activeTab === tab ? 'var(--color-primary-blue)' : '#f3f4f6',
                                        color: activeTab === tab ? 'white' : '#4b5563',
                                        fontWeight: '500',
                                        fontSize: '0.85rem',
                                        cursor: 'pointer',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                        {/* Search */}
                        <div style={{ position: 'relative', marginTop: '1rem' }}>
                            <Search size={18} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{ width: '100%', padding: '0.6rem 1rem 0.6rem 2.5rem', borderRadius: '12px', border: '1px solid #e5e7eb', outline: 'none' }}
                            />
                        </div>
                    </div>

                    {/* Contacts List */}
                    <div style={{ flex: 1, overflowY: 'auto' }}>
                        {filteredContacts.map(contact => (
                            <div
                                key={contact.id}
                                onClick={() => setSelectedContact(contact)}
                                style={{
                                    padding: '1rem',
                                    display: 'flex', alignItems: 'center', gap: '1rem',
                                    cursor: 'pointer',
                                    background: selectedContact?.id === contact.id ? '#eff6ff' : 'transparent',
                                    borderBottom: '1px solid #f3f4f6'
                                }}
                            >
                                <img
                                    src={contact.avatar || 'https://via.placeholder.com/40'}
                                    alt={contact.name}
                                    style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
                                />
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                        <h4 style={{ fontWeight: '600', color: '#1f2937' }}>{contact.name}</h4>
                                        {/* Mock timestamp for last message if needed */}
                                    </div>
                                    <p style={{ fontSize: '0.85rem', color: '#6b7280', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '180px' }}>
                                        {contact.subtext || contact.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                        {filteredContacts.length === 0 && (
                            <div style={{ padding: '2rem', textAlign: 'center', color: '#9ca3af' }}>No contacts found.</div>
                        )}
                    </div>
                </div>
            )}

            {/* Chat Area */}
            {(!isMobile || (isMobile && selectedContact)) && (
                <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#ffffff',
                    height: '100%',
                    width: isMobile ? '100%' : 'auto'
                }}>
                    {selectedContact ? (
                        <>
                            {/* Chat Header */}
                            <div style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    {isMobile && (
                                        <button
                                            onClick={() => setSelectedContact(null)}
                                            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginRight: '0.5rem' }}
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5" /><path d="M12 19l-7-7 7-7" /></svg>
                                        </button>
                                    )}
                                    <img
                                        src={selectedContact.avatar || 'https://via.placeholder.com/40'}
                                        alt={selectedContact.name}
                                        style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                                    />
                                    <div>
                                        <h3 style={{ fontWeight: 'bold', color: '#1f2937' }}>{selectedContact.name}</h3>
                                        {selectedContact.role === 'parent' && selectedContact.childNames && selectedContact.childClass && (
                                            <p style={{ fontSize: '0.75rem', color: '#6b7280', fontStyle: 'italic', marginTop: '0.15rem' }}>
                                                Parents of {selectedContact.childNames} from Class-{selectedContact.childClass}
                                            </p>
                                        )}
                                        {selectedContact.tag && (
                                            <span style={{ fontSize: '0.75rem', padding: '0.1rem 0.5rem', background: '#dbeafe', color: '#1e40af', borderRadius: '4px' }}>
                                                {selectedContact.tag}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1rem', color: '#6b7280' }}>
                                    <Phone size={20} style={{ cursor: 'pointer' }} />
                                    <Video size={20} style={{ cursor: 'pointer' }} />
                                    <MoreVertical size={20} style={{ cursor: 'pointer' }} />
                                </div>
                            </div>

                            {/* Messages */}
                            <div style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', background: '#f0f2f5', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {currentMessages.map((msg, idx) => {
                                    const isMe = msg.senderId === currentUser.id;
                                    return (
                                        <div key={msg.id} style={{ display: 'flex', justifyContent: isMe ? 'flex-end' : 'flex-start' }}>
                                            <div style={{
                                                maxWidth: '70%',
                                                padding: '0.75rem 1rem',
                                                borderRadius: '12px',
                                                background: isMe ? '#dcf8c6' : 'white', // WhatsApp-like green for sender
                                                boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                                                borderTopRightRadius: isMe ? 0 : '12px',
                                                borderTopLeftRadius: isMe ? '12px' : 0
                                            }}>
                                                {!isMe && activeTab === 'Classes' && (
                                                    <p style={{ fontSize: '0.75rem', color: '#d97706', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                                                        {msg.senderId === 'teacher1' ? 'Mr. Verma' : msg.senderId}
                                                    </p>
                                                )}
                                                <p style={{ color: '#1f2937', lineHeight: '1.4' }}>{msg.text}</p>
                                                <p style={{ fontSize: '0.7rem', color: '#9ca3af', textAlign: 'right', marginTop: '0.25rem' }}>{msg.timestamp}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input Area */}
                            <form onSubmit={handleSend} style={{ padding: '1rem', background: '#f0f2f5', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <input
                                    type="text"
                                    placeholder="Type a message..."
                                    value={messageInput}
                                    onChange={(e) => setMessageInput(e.target.value)}
                                    style={{
                                        flex: 1,
                                        padding: '0.75rem 1rem',
                                        borderRadius: '24px',
                                        border: 'none',
                                        outline: 'none',
                                        background: 'white'
                                    }}
                                />
                                <button
                                    type="submit"
                                    disabled={!messageInput.trim()}
                                    style={{
                                        width: '40px', height: '40px', borderRadius: '50%',
                                        background: messageInput.trim() ? 'var(--color-primary-blue)' : '#cbd5e1',
                                        color: 'white', border: 'none',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        cursor: messageInput.trim() ? 'pointer' : 'default',
                                        transition: 'background 0.2s'
                                    }}
                                >
                                    <Send size={18} />
                                </button>
                            </form>
                        </>
                    ) : (
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f2f5', color: '#6b7280' }}>
                            <div style={{ padding: '2rem', background: 'white', borderRadius: '50%', marginBottom: '1rem' }}>
                                <Send size={48} color="#d1d5db" />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '500' }}>Direct Messages</h3>
                            <p>Select a contact to start chatting</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ChatInterface;
