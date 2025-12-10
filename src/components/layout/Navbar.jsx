import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, BookOpen } from 'lucide-react';
import { BRAND } from '../../branding';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [lang, setLang] = useState('EN');
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="glass-card" style={{
            position: 'fixed',
            top: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '95%',
            maxWidth: '1280px',
            zIndex: 1000,
            padding: '0.75rem 1rem',
            borderRadius: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'var(--gradient-primary)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.25rem',
                    boxShadow: '0 4px 10px rgba(30, 58, 138, 0.3)'
                }}><BookOpen size={24} /></div>
                <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--color-primary-blue)', fontFamily: 'var(--font-header)' }}>{BRAND.name}</span>
            </Link>

            {/* Desktop Menu - Hidden on Mobile */}
            {!isMobile ? (
                <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Link to="/" style={{ color: 'var(--color-text-dark)', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s' }}>Home</Link>
                    <span style={{ color: 'var(--color-text-dark)', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s', cursor: 'pointer' }}>About Us</span>
                    <span style={{ color: 'var(--color-text-dark)', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s', cursor: 'pointer' }}>Features</span>
                    <span style={{ color: 'var(--color-text-dark)', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s', cursor: 'pointer' }}>Pricing</span>

                    <button onClick={() => setLang(lang === 'EN' ? 'HI' : 'EN')} style={{
                        background: 'rgba(255,255,255,0.5)',
                        border: '1px solid rgba(0,0,0,0.1)',
                        borderRadius: '20px',
                        padding: '0.25rem 0.75rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        color: 'var(--color-text-dark)',
                        fontSize: '0.9rem'
                    }}>
                        <Globe size={16} />
                        {lang}
                    </button>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <Link to="/login" className="btn-secondary" style={{ textDecoration: 'none', padding: '0.5rem 1.5rem' }}>Login</Link>
                        <Link to="/register" className="btn-primary" style={{ textDecoration: 'none', padding: '0.5rem 1.5rem' }}>Join Us</Link>
                    </div>
                </div>
            ) : (
                /* Mobile Login Option */
                <Link to="/login" style={{
                    textDecoration: 'none',
                    color: 'white',
                    background: 'var(--color-primary-blue)',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    boxShadow: '0 4px 10px rgba(37, 99, 235, 0.2)'
                }}>
                    Login
                </Link>
            )}

            {/* Mobile Menu Toggle would go here */}
        </nav>
    );
};

export default Navbar;
