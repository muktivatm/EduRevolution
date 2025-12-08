import React from 'react';
import { Bell, Calendar, MessageSquare } from 'lucide-react';

const CommunityBoard = () => {
    const messages = [
        { title: 'Parent Teacher Meeting', date: '10th Dec, 10:00 AM', type: 'event', content: 'Annual PTM to discuss mid-term results.' },
        { title: 'Winter Vacation', date: '25th Dec - 1st Jan', type: 'notice', content: 'School will remain closed for winter break.' },
    ];

    return (
        <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MessageSquare size={20} color="var(--color-primary-orange)" /> Community Board
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {messages.map((msg, index) => (
                    <div key={index} style={{ padding: '1rem', background: '#fff7ed', borderRadius: '12px', borderLeft: '4px solid var(--color-primary-orange)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                            <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#9a3412' }}>{msg.title}</h4>
                            <span style={{ fontSize: '0.8rem', color: '#c2410c', background: 'rgba(255,255,255,0.5)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>{msg.type}</span>
                        </div>
                        <p style={{ fontSize: '0.9rem', color: '#9a3412', marginBottom: '0.5rem' }}>{msg.content}</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#c2410c' }}>
                            <Calendar size={14} /> {msg.date}
                        </div>
                    </div>
                ))}
            </div>

            <button style={{ width: '100%', marginTop: '1rem', padding: '0.75rem', border: '1px dashed #e5e7eb', borderRadius: '8px', color: 'var(--color-text-light)', background: 'transparent', cursor: 'pointer' }}>
                View All Announcements
            </button>
        </div>
    );
};

export default CommunityBoard;
