import React, { useState, useEffect } from 'react';
import { Users, TrendingUp, CreditCard, Activity } from 'lucide-react';

const StatsOverview = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const stats = [
        { label: 'Total Students', value: '1,250', change: '+12%', icon: Users, color: '#3b82f6' },
        { label: 'Total Teachers', value: '45', change: '+2%', icon: Users, color: '#8b5cf6' },
        { label: 'Revenue (Monthly)', value: '₹4.5L', change: '+8%', icon: CreditCard, color: '#10b981' },
        { label: 'Active Sessions', value: '320', change: '+15%', icon: Activity, color: '#f59e0b' },
    ];

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: isMobile ? '0.75rem' : '1.5rem',
            marginBottom: isMobile ? '1.5rem' : '2rem'
        }}>
            {stats.map((stat, index) => (
                <div key={index} className="glass-card" style={{
                    padding: isMobile ? '0.75rem' : '1.5rem',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: isMobile ? 'flex-start' : 'center',
                    gap: isMobile ? '0.5rem' : '1rem'
                }}>
                    <div style={{
                        padding: isMobile ? '0.5rem' : '1rem',
                        background: `${stat.color}20`,
                        borderRadius: '12px',
                        color: stat.color,
                        marginBottom: isMobile ? '0.25rem' : '0'
                    }}>
                        <stat.icon size={isMobile ? 18 : 24} />
                    </div>
                    <div>
                        <p style={{ fontSize: isMobile ? '0.75rem' : '0.9rem', color: '#6b7280' }}>{stat.label}</p>
                        <h3 style={{ fontSize: isMobile ? '1.1rem' : '1.5rem', fontWeight: 'bold', margin: '0.25rem 0' }}>{stat.value}</h3>
                        <span style={{ fontSize: '0.7rem', color: '#16a34a', background: '#dcfce7', padding: '0.1rem 0.4rem', borderRadius: '10px' }}>{stat.change}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsOverview;
