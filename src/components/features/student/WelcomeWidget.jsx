import React from 'react';
import { Sun } from 'lucide-react';

const WelcomeWidget = () => {
    return (
        <div style={{ marginBottom: '0.5rem', paddingTop: '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#111827', letterSpacing: '-0.025em' }}>Namaste, Rahul! 👋</h2>
                <div style={{ padding: '0.5rem', background: '#fff7ed', borderRadius: '50%' }}>
                    <Sun size={20} color="#f97316" />
                </div>
            </div>
            <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>"Aaj ka Goal: 2 Chapters Complete Karo"</p>
        </div>
    );
};

export default WelcomeWidget;
