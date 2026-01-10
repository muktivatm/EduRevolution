import React from 'react';
import { BRAND } from '../../branding';
import logoIcon from '../../assets/logo-icon.png';

const Logo = ({ className = "", isMobile = false }) => {
    return (
        <div className={`flex items-center gap-3 ${className}`} style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.5rem' : '0.75rem' }}>
            {/* Icon Image */}
            <img
                src={logoIcon}
                alt="Logo Icon"
                style={{
                    height: isMobile ? '36px' : '48px',
                    width: 'auto',
                    objectFit: 'contain',
                    flexShrink: 0
                }}
            />

            {/* Text Container */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.1 }}>
                {/* Top Prefix */}
                <span style={{
                    fontSize: isMobile ? '0.65rem' : '0.85rem',
                    color: '#1E3A8A',
                    fontWeight: '600',
                    marginBottom: '2px',
                    fontFamily: 'var(--font-header)'
                }}>
                    {BRAND.prefix}
                </span>

                {/* Main Brand Name */}
                <div style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'nowrap', gap: isMobile ? '3px' : '6px' }}>
                    <span style={{
                        fontSize: isMobile ? '1.2rem' : '1.75rem',
                        fontWeight: '900',
                        color: '#DC2626',
                        fontFamily: 'var(--font-header)',
                        letterSpacing: '-0.5px'
                    }}>
                        SAMARTH
                    </span>
                    <span style={{
                        fontSize: isMobile ? '1.2rem' : '1.75rem',
                        fontWeight: '900',
                        color: '#1E3A8A',
                        fontFamily: 'var(--font-header)',
                        letterSpacing: '-0.5px'
                    }}>
                        INSTITUTE
                    </span>
                </div>

                {/* Tagline - Hidden on Mobile */}
                {!isMobile && (
                    <span style={{
                        fontSize: '0.65rem',
                        color: '#2563EB',
                        fontWeight: '600',
                        marginTop: '2px',
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase'
                    }}>
                        JEE | NEET | GUJCET | FOUNDATION
                    </span>
                )}
            </div>
        </div>
    );
};

export default Logo;
