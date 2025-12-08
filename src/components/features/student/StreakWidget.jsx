import React from 'react';
import { Flame } from 'lucide-react';

const StreakWidget = () => {
    return (
        <div className="glass-card" style={{ padding: '1.5rem', background: 'linear-gradient(to right, #fff, #fff5f5)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--color-text-light)' }}>DAILY STREAK:</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#ef4444', fontWeight: 'bold', fontSize: '1.2rem' }}>
                    <Flame size={24} fill="#ef4444" /> 15 Days
                </div>
            </div>

            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                    <span style={{ fontWeight: '600' }}>Weekly Goal</span>
                    <span style={{ color: 'var(--color-secondary-green)' }}>75%</span>
                </div>
                <div style={{ width: '100%', height: '12px', background: '#f3f4f6', borderRadius: '6px', overflow: 'hidden' }}>
                    <div style={{ width: '75%', height: '100%', background: 'linear-gradient(90deg, #10B981 0%, #34D399 100%)', borderRadius: '6px' }}></div>
                </div>
            </div>
        </div>
    );
};

export default StreakWidget;
