import React from 'react';
import { Award, Zap, TrendingUp } from 'lucide-react';

const Achievements = () => {
    return (
        <div className="glass-card" style={{ padding: '1.5rem', height: '100%' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Achievements</h3>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ width: '50px', height: '50px', background: 'rgba(252, 211, 77, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.5rem', color: '#d97706' }}>
                        <Award size={24} />
                    </div>
                    <p style={{ fontWeight: 'bold' }}>Rank #5</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>Batch Leaderboard</p>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <div style={{ width: '50px', height: '50px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.5rem', color: '#ef4444' }}>
                        <Zap size={24} />
                    </div>
                    <p style={{ fontWeight: 'bold' }}>12 Days</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>Learning Streak</p>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <div style={{ width: '50px', height: '50px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.5rem', color: '#10b981' }}>
                        <TrendingUp size={24} />
                    </div>
                    <p style={{ fontWeight: 'bold' }}>Top 10%</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>Performance</p>
                </div>
            </div>

            <div>
                <h4 style={{ fontSize: '0.9rem', marginBottom: '0.75rem', color: 'var(--color-text-light)' }}>Recent Badges</h4>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                    {['Math Wizard', 'Early Bird', 'Homework Hero'].map((badge, i) => (
                        <div key={i} style={{ padding: '0.5rem 0.75rem', background: '#f3f4f6', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '500', color: '#4b5563' }}>
                            {badge}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievements;
