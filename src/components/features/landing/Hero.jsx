import { ArrowRight, Play, Users, Award, BookOpen } from 'lucide-react';
import { BRAND } from '../../../branding';
import { useState, useEffect } from 'react';

const Hero = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section style={{
            padding: isMobile ? '6rem 1rem 2rem' : '8rem 0 4rem',
            minHeight: isMobile ? 'auto' : '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Elements */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: isMobile ? '300px' : '500px',
                height: isMobile ? '300px' : '500px',
                background: 'radial-gradient(circle, rgba(255,107,53,0.1) 0%, rgba(255,255,255,0) 70%)',
                borderRadius: '50%',
                zIndex: -1
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '-10%',
                left: '-5%',
                width: isMobile ? '350px' : '600px',
                height: isMobile ? '350px' : '600px',
                background: 'radial-gradient(circle, rgba(30,58,138,0.1) 0%, rgba(255,255,255,0) 70%)',
                borderRadius: '50%',
                zIndex: -1
            }}></div>

            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: isMobile ? '2rem' : '4rem',
                alignItems: 'center'
            }}>
                <div className="hero-content animate-fade-in">
                    <div className="animate-pulse" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: 'white',
                        border: '1px solid var(--primary-theme)',
                        color: 'var(--primary-theme)',
                        padding: isMobile ? '0.4rem 0.9rem' : '0.6rem 1.25rem',
                        borderRadius: '50px',
                        marginBottom: isMobile ? '1rem' : '1.5rem',
                        fontWeight: '600',
                        fontSize: isMobile ? '0.75rem' : '0.95rem',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                    }}>
                        <span style={{
                            width: isMobile ? '8px' : '10px',
                            height: isMobile ? '8px' : '10px',
                            background: 'var(--primary-theme)',
                            borderRadius: '50%',
                            boxShadow: '0 0 0 2px rgba(255,255,255,1), 0 0 0 4px var(--primary-theme)'
                        }}></span>
                        Best Coaching Institute in Vadodara
                    </div>

                    <h1 style={{
                        fontSize: isMobile ? '2rem' : '3.5rem',
                        marginBottom: isMobile ? '1rem' : '1.5rem',
                        lineHeight: '1.2'
                    }}>
                        Transform Your <br />
                        <span className="text-gradient">Learning Journey</span> <br />
                        with Us
                    </h1>

                    <p style={{
                        fontSize: isMobile ? '0.95rem' : '1.125rem',
                        color: 'var(--color-text-light)',
                        marginBottom: isMobile ? '1.5rem' : '2.5rem',
                        maxWidth: '500px',
                        lineHeight: '1.6'
                    }}>
                        {BRAND.name} combines advanced Teaching Methods with expert mentorship to deliver a personalized learning experience that guarantees results.
                    </p>

                    <div style={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        gap: '1rem',
                        marginBottom: isMobile ? '2rem' : '3rem'
                    }}>
                        <button className="btn-primary" style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            padding: isMobile ? '0.85rem 1.5rem' : '1rem 2rem',
                            fontSize: isMobile ? '0.95rem' : '1.1rem',
                            width: isMobile ? '100%' : 'auto'
                        }}>
                            Start Your Journey <ArrowRight size={isMobile ? 18 : 20} />
                        </button>
                        {!isMobile && (
                            <button className="btn-secondary" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '1rem 2rem',
                                fontSize: '1.1rem'
                            }}>
                                <Play size={20} fill="currentColor" /> Watch Video
                            </button>
                        )}
                    </div>

                    <div className="stats-row" style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'repeat(3, auto)',
                        gap: isMobile ? '1rem' : '3rem',
                        justifyContent: isMobile ? 'space-between' : 'flex-start'
                    }}>
                        <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
                            <h3 style={{
                                fontSize: isMobile ? '1.5rem' : '2rem',
                                color: 'var(--primary-theme)',
                                margin: '0 0 0.25rem 0'
                            }}>400+</h3>
                            <p style={{
                                color: 'var(--color-text-light)',
                                fontSize: isMobile ? '0.75rem' : '0.9rem',
                                margin: 0
                            }}>Active Students</p>
                        </div>
                        <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
                            <h3 style={{
                                fontSize: isMobile ? '1.5rem' : '2rem',
                                color: 'var(--primary-theme)',
                                margin: '0 0 0.25rem 0'
                            }}>25+</h3>
                            <p style={{
                                color: 'var(--color-text-light)',
                                fontSize: isMobile ? '0.75rem' : '0.9rem',
                                margin: 0
                            }}>Expert Teachers</p>
                        </div>
                        <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
                            <h3 style={{
                                fontSize: isMobile ? '1.5rem' : '2rem',
                                color: 'var(--primary-theme)',
                                margin: '0 0 0.25rem 0'
                            }}>98%</h3>
                            <p style={{
                                color: 'var(--color-text-light)',
                                fontSize: isMobile ? '0.75rem' : '0.9rem',
                                margin: 0
                            }}>Success Rate</p>
                        </div>
                    </div>
                </div>

                {!isMobile && (
                    <div className="hero-image" style={{ position: 'relative' }}>
                        <div className="glass-card animate-float" style={{ padding: '1rem', background: 'rgba(255,255,255,0.4)' }}>
                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Students Learning"
                                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                            />

                            {/* Floating Cards */}
                            <div className="glass-card" style={{
                                position: 'absolute',
                                bottom: '-20px',
                                left: '-20px',
                                padding: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                width: '200px'
                            }}>
                                <div style={{ background: 'var(--color-secondary-green)', padding: '0.5rem', borderRadius: '8px', color: 'white' }}>
                                    <Users size={20} />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>Total Students</p>
                                    <h4 style={{ margin: 0 }}>400+</h4>
                                </div>
                            </div>

                            <div className="glass-card" style={{
                                position: 'absolute',
                                top: '40px',
                                right: '-30px',
                                padding: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                width: '180px'
                            }}>
                                <div style={{ background: 'var(--color-secondary-yellow)', padding: '0.5rem', borderRadius: '8px', color: 'white' }}>
                                    <Award size={20} />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>Best Platform</p>
                                    <h4 style={{ margin: 0 }}>2024 Award</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Hero;
