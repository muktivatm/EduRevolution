import React, { useState } from 'react';
import { Send, Mic, Camera, Bot } from 'lucide-react';

const AIAssistantWidget = () => {
    const [input, setInput] = useState('');

    return (
        <div className="glass-card" style={{ padding: '1.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ width: '36px', height: '36px', background: 'var(--gradient-accent)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                    <Bot size={20} />
                </div>
                <div>
                    <h3 style={{ fontSize: '1.1rem' }}>AI Study Buddy</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>Online</p>
                </div>
            </div>

            <div style={{ flex: 1, background: '#f9fafb', borderRadius: '12px', padding: '1rem', marginBottom: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ alignSelf: 'flex-start', background: 'white', padding: '0.75rem', borderRadius: '12px 12px 12px 0', maxWidth: '85%', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                    <p style={{ fontSize: '0.9rem' }}>Hi Alex! I noticed you have a Physics test coming up. Want to review some key concepts in Optics?</p>
                </div>
                <div style={{ alignSelf: 'flex-end', background: 'var(--color-primary-blue)', color: 'white', padding: '0.75rem', borderRadius: '12px 12px 0 12px', maxWidth: '85%' }}>
                    <p style={{ fontSize: '0.9rem' }}>Yes, please! I'm confused about total internal reflection.</p>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <button style={{ padding: '0.5rem', borderRadius: '8px', border: 'none', background: '#f3f4f6', color: '#6b7280' }}>
                    <Camera size={20} />
                </button>
                <div style={{ flex: 1, position: 'relative' }}>
                    <input
                        type="text"
                        placeholder="Ask a doubt..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        style={{ width: '100%', padding: '0.75rem 2.5rem 0.75rem 1rem', borderRadius: '20px', border: '1px solid #e5e7eb', outline: 'none' }}
                    />
                    <Mic size={18} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                </div>
                <button style={{ padding: '0.75rem', borderRadius: '50%', border: 'none', background: 'var(--color-primary-blue)', color: 'white' }}>
                    <Send size={18} />
                </button>
            </div>
        </div>
    );
};

export default AIAssistantWidget;
