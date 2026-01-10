import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { BRAND } from '../../branding';

import Logo from '../common/Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            zIndex: 1000,
            padding: isMobile ? '0.5rem 1rem' : '0.75rem 2rem',
            background: 'white',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <Logo isMobile={isMobile} />
            </Link>

            {/* Desktop Menu - Hidden on Mobile */}
            {!isMobile ? (
                <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Link to="/" style={{ color: 'var(--color-text-dark)', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s' }}>Home</Link>
                    <Link to="/courses" style={{ color: 'var(--color-text-dark)', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s' }}>Courses</Link>
                    <Link to="/gallery" style={{ color: 'var(--color-text-dark)', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s' }}>Gallery</Link>
                    <Link to="/results" style={{ color: 'var(--color-text-dark)', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s' }}>Results</Link>
                    <Link to="/about" style={{ color: 'var(--color-text-dark)', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s' }}>About</Link>
                    <Link to="/contact" style={{ color: 'var(--color-text-dark)', textDecoration: 'none', fontWeight: '500', transition: 'color 0.3s' }}>Contact</Link>



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
