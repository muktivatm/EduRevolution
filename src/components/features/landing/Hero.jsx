import { ArrowRight, Play, Users, Award, BookOpen } from 'lucide-react';
import { BRAND } from '../../../branding';

const Hero = () => {
    return (
        <section style={{
            padding: '8rem 0 4rem',
            minHeight: '100vh',
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
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(255,107,53,0.1) 0%, rgba(255,255,255,0) 70%)',
                borderRadius: '50%',
                zIndex: -1
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '-10%',
                left: '-5%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(30,58,138,0.1) 0%, rgba(255,255,255,0) 70%)',
                borderRadius: '50%',
                zIndex: -1
            }}></div>

            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                <div className="hero-content animate-fade-in">
                    <div className="animate-pulse" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        background: 'white',
                        border: '1px solid var(--primary-theme)',
                        color: 'var(--primary-theme)',
                        padding: '0.6rem 1.25rem',
                        borderRadius: '50px',
                        marginBottom: '1.5rem',
                        fontWeight: '600',
                        fontSize: '0.95rem',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                    }}>
                        <span style={{
                            width: '10px',
                            height: '10px',
                            background: 'var(--primary-theme)',
                            borderRadius: '50%',
                            boxShadow: '0 0 0 2px rgba(255,255,255,1), 0 0 0 4px var(--primary-theme)'
                        }}></span>
                        Best Coaching Institute in Vadodara
                    </div>

                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        Transform Your <br />
                        <span className="text-gradient">Learning Journey</span> <br />
                        with Us
                    </h1>

                    <p style={{ fontSize: '1.125rem', color: 'var(--color-text-light)', marginBottom: '2.5rem', maxWidth: '500px' }}>
                        {BRAND.name} combines advanced AI technology with expert mentorship to deliver a personalized learning experience that guarantees results.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
                        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', fontSize: '1.1rem' }}>
                            Book Free Demo Class <ArrowRight size={20} />
                        </button>
                        <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', fontSize: '1.1rem' }}>
                            <Play size={20} fill="currentColor" /> Watch Video
                        </button>
                    </div>

                    <div className="stats-row" style={{ display: 'flex', gap: '3rem' }}>
                        <div>
                            <h3 style={{ fontSize: '2rem', color: 'var(--color-primary-blue)' }}>400+</h3>
                            <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>Active Students</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '2rem', color: 'var(--color-primary-blue)' }}>25+</h3>
                            <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>Expert Teachers</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '2rem', color: 'var(--color-primary-blue)' }}>98%</h3>
                            <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>Success Rate</p>
                        </div>
                    </div>
                </div>

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
            </div>
        </section>
    );
};

export default Hero;
