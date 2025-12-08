import React from 'react';
import { Home, BookOpen, Bot, TrendingUp, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const BottomNav = ({ navItems }) => {
    const location = useLocation();

    // Fallback if no items provided (though DashboardLayout should always provide them)
    if (!navItems || navItems.length === 0) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(0,0,0,0.05)',
            padding: '0.75rem 0.5rem',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            zIndex: 100,
            boxShadow: '0 -4px 20px rgba(0,0,0,0.05)',
            paddingBottom: 'safe-area-inset-bottom' // For iPhone X+
        }}>
            {navItems.slice(0, 5).map((item, index) => { // Limit to 5 items for mobile
                const isActive = location.pathname === item.path || location.pathname === item.to;
                const Icon = item.icon;
                return (
                    <Link
                        key={index}
                        to={item.to || item.path}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.25rem',
                            textDecoration: 'none',
                            color: isActive ? 'var(--color-primary-blue)' : '#9ca3af',
                            flex: 1,
                            position: 'relative'
                        }}
                    >
                        {isActive && (
                            <div style={{
                                position: 'absolute',
                                top: '-12px',
                                width: '40%',
                                height: '3px',
                                background: 'var(--color-primary-blue)',
                                borderRadius: '0 0 4px 4px'
                            }} />
                        )}
                        <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                        <span style={{ fontSize: '0.65rem', fontWeight: isActive ? '600' : '500', marginTop: '2px' }}>{item.label}</span>
                    </Link>
                );
            })}
        </div>
    );
};

export default BottomNav;
