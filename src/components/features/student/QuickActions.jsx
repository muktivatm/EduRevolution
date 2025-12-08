import React from 'react';
import { Bot, FileText, BookOpen, BarChart2 } from 'lucide-react';

const actions = [
    { icon: Bot, label: 'AI Doubt', color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.1)' },
    { icon: FileText, label: 'Tests', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)' },
    { icon: BookOpen, label: 'Notes', color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' },
    { icon: BarChart2, label: 'Report', color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.1)' },
];

const QuickActions = () => {
    return (
        <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>🎯 QUICK ACTIONS</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
                {actions.map((action, index) => (
                    <button
                        key={index}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.75rem 0.25rem',
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        <div style={{
                            width: '48px', height: '48px',
                            borderRadius: '16px',
                            background: action.bg,
                            color: action.color,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            marginBottom: '0.25rem'
                        }}>
                            <action.icon size={24} />
                        </div>
                        <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--color-text-dark)' }}>{action.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuickActions;
