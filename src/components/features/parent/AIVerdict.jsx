import React, { useState, useRef, useEffect } from 'react';
import { Bot, MessageCircle, ChevronRight, Sparkles, Send, X, Loader2 } from 'lucide-react';

const AIVerdict = () => {
    const [viewMode, setViewMode] = useState('teacher'); // 'teacher' or 'ai'
    const [showChat, setShowChat] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Mock response generator
    const getMockResponse = (text) => {
        const lowerText = text.toLowerCase();
        if (lowerText.includes('thermodynamics')) {
            return "For Thermodynamics, encourage Rahul to focus on the First Law and practice heat engine problems. Khan Academy and NCERT exemplars are great resources.";
        } else if (lowerText.includes('practice') || lowerText.includes('resource')) {
            return "I recommend checking out the 'Study Material' section in the app. There are specific practice sheets for Physics Chapter 4 available there.";
        } else if (lowerText.includes('teacher') || lowerText.includes('meeting')) {
            return "Yes, scheduling a meeting with Mr. Verma (Physics Teacher) would be beneficial. He has open slots this Friday between 3-4 PM.";
        } else {
            return "That's a great question. Based on Rahul's recent performance, consistent practice and reviewing class notes daily will help him improve significantly.";
        }
    };

    const handleSend = async (text = input) => {
        if (!text.trim()) return;

        const userMessage = { role: 'user', content: text };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        // Simulate network delay
        setTimeout(() => {
            const aiResponse = getMockResponse(text);
            const aiMessage = { role: 'assistant', content: aiResponse };
            setMessages(prev => [...prev, aiMessage]);
            setIsLoading(false);
        }, 1500);
    };

    const suggestedQuestions = [
        "How can I help him improve in Thermodynamics?",
        "Are there any practice resources available?",
        "Should I schedule a meeting with the teacher?"
    ];

    return (
        <div className="glass-card" style={{ padding: '1.5rem', background: viewMode === 'ai' ? 'linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)' : 'white', border: viewMode === 'ai' ? '1px solid #bfdbfe' : '1px solid #e5e7eb', display: 'flex', flexDirection: 'column', height: showChat ? '500px' : 'auto', transition: 'all 0.3s ease' }}>

            {/* Header Switcher */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ padding: '0.75rem', background: viewMode === 'ai' ? 'white' : '#f3f4f6', borderRadius: '12px', boxShadow: viewMode === 'ai' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none' }}>
                        {viewMode === 'ai' ? <Sparkles size={24} color="var(--color-primary-blue)" /> : <MessageCircle size={24} color="#4b5563" />}
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: viewMode === 'ai' ? '#1e3a8a' : '#1f2937' }}>
                            {viewMode === 'ai' ? 'AI Performance Verdict' : "Teacher's Verdict"}
                        </h3>
                        <p style={{ fontSize: '0.9rem', color: viewMode === 'ai' ? '#3b82f6' : '#6b7280' }}>
                            {viewMode === 'ai' ? 'Based on recent Physics Test' : 'Mr. Verma • Physics Teacher'}
                        </p>
                    </div>
                </div>
                {showChat && (
                    <button onClick={() => setShowChat(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280' }}>
                        <X size={20} />
                    </button>
                )}
            </div>

            {/* Content Area */}
            {viewMode === 'teacher' ? (
                <div className="animate-fade-in">
                    <div style={{ background: '#f9fafb', padding: '1rem', borderRadius: '12px', marginBottom: '1rem', border: '1px solid #f3f4f6' }}>
                        <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#374151', fontStyle: 'italic' }}>
                            "Rahul has shown great improvement in <strong>Mechanics</strong> this week. He was very attentive during the lab session. However, he seems a bit confused with the new <strong>Thermodynamics</strong> concepts introduced on Tuesday. I've assigned him some extra practice problems to help with this."
                        </p>
                    </div>
                    <button
                        onClick={() => { setViewMode('ai'); setShowChat(false); }}
                        className="btn-secondary"
                        style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', borderColor: 'var(--color-primary-blue)', color: 'var(--color-primary-blue)' }}
                    >
                        <Sparkles size={18} /> Get AI Analysis & Insights
                    </button>
                </div>
            ) : (
                // AI View
                <>
                    {!showChat ? (
                        <div className="animate-fade-in">
                            <div style={{ background: 'white', padding: '1rem', borderRadius: '12px', marginBottom: '1rem', border: '1px solid #eff6ff' }}>
                                <p style={{ fontSize: '0.95rem', lineHeight: '1.5', color: '#374151' }}>
                                    Rahul is struggling with <strong>Thermodynamics</strong> concepts. He scored 45% compared to his average of 70%.
                                    However, his <strong>Mechanics</strong> remains strong.
                                </p>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <button
                                    onClick={() => setShowChat(true)}
                                    className="btn-primary"
                                    style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
                                >
                                    <Bot size={18} /> Ask AI How to Help <ChevronRight size={18} />
                                </button>
                                <button
                                    onClick={() => setViewMode('teacher')}
                                    style={{ background: 'none', border: 'none', color: '#6b7280', fontSize: '0.85rem', cursor: 'pointer', textDecoration: 'underline' }}
                                >
                                    Back to Teacher's Verdict
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="animate-fade-in" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                            {/* Chat History */}
                            <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', background: '#f8fafc', borderRadius: '12px', marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {messages.length === 0 && (
                                    <div style={{ textAlign: 'center', marginTop: '2rem', color: '#9ca3af' }}>
                                        <Bot size={40} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                                        <p style={{ fontSize: '0.9rem' }}>Hello! I'm your AI assistant. Ask me anything about Rahul's performance.</p>
                                    </div>
                                )}

                                {messages.map((msg, index) => (
                                    <div key={index} style={{ alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start', maxWidth: '85%' }}>
                                        <div style={{
                                            padding: '0.75rem 1rem',
                                            borderRadius: msg.role === 'user' ? '12px 12px 0 12px' : '12px 12px 12px 0',
                                            background: msg.role === 'user' ? 'var(--color-primary-blue)' : 'white',
                                            color: msg.role === 'user' ? 'white' : '#374151',
                                            boxShadow: msg.role === 'assistant' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
                                            fontSize: '0.9rem',
                                            lineHeight: '1.4'
                                        }}>
                                            {msg.content}
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div style={{ alignSelf: 'flex-start', background: 'white', padding: '0.75rem', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                                        <Loader2 size={18} className="animate-spin" color="var(--color-primary-blue)" />
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Suggested Questions (only if no messages yet) */}
                            {messages.length === 0 && (
                                <div style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {suggestedQuestions.map((q, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleSend(q)}
                                            style={{
                                                textAlign: 'left', padding: '0.6rem 1rem',
                                                background: 'white', border: '1px solid #e5e7eb',
                                                borderRadius: '20px', fontSize: '0.85rem',
                                                cursor: 'pointer', color: '#4b5563',
                                                transition: 'all 0.2s',
                                                width: 'fit-content'
                                            }}
                                            onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--color-primary-blue)'}
                                            onMouseOut={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
                                        >
                                            {q}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Input Area */}
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Type your question..."
                                    style={{ flex: 1, padding: '0.75rem', borderRadius: '8px', border: '1px solid #e5e7eb', outline: 'none' }}
                                    disabled={isLoading}
                                />
                                <button
                                    onClick={() => handleSend()}
                                    disabled={isLoading || !input.trim()}
                                    style={{
                                        padding: '0.75rem',
                                        background: isLoading || !input.trim() ? '#9ca3af' : 'var(--color-primary-blue)',
                                        color: 'white',
                                        borderRadius: '8px',
                                        border: 'none',
                                        cursor: isLoading || !input.trim() ? 'not-allowed' : 'pointer',
                                        transition: 'background 0.3s'
                                    }}
                                >
                                    {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                                </button>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default AIVerdict;
