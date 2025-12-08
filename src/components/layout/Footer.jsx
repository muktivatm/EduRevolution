import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, BookOpen } from 'lucide-react';
import { BRAND } from '../../branding';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--color-primary-blue)', color: 'white', paddingTop: '4rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                            <div style={{ width: '32px', height: '32px', background: 'white', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary-blue)', fontWeight: 'bold' }}><BookOpen size={20} /></div>
                            <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{BRAND.name}</span>
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem' }}>
                            Empowering students with AI-driven personalized learning and expert mentorship.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Facebook size={20} style={{ cursor: 'pointer' }} />
                            <Twitter size={20} style={{ cursor: 'pointer' }} />
                            <Instagram size={20} style={{ cursor: 'pointer' }} />
                            <Linkedin size={20} style={{ cursor: 'pointer' }} />
                        </div>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '1.5rem' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {['About Us', 'Features', 'Teachers', 'Success Stories', 'Blog'].map(item => (
                                <li key={item} style={{ marginBottom: '0.75rem' }}>
                                    <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '1.5rem' }}>Support</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {['Help Center', 'Terms of Service', 'Privacy Policy', 'Contact Us', 'FAQs'].map(item => (
                                <li key={item} style={{ marginBottom: '0.75rem' }}>
                                    <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '1.5rem' }}>Contact Us</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', gap: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>
                                <MapPin size={20} />
                                <span>123 Education Lane, Tech City, India 400001</span>
                            </div>
                            <div style={{ display: 'flex', gap: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>
                                <Phone size={20} />
                                <span>{BRAND.phone}</span>
                            </div>
                            <div style={{ display: 'flex', gap: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>
                                <Mail size={20} />
                                <span>hello@{BRAND.name.toLowerCase().replace(/\s+/g, '')}.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '2rem 0', textAlign: 'center', color: 'rgba(255,255,255,0.5)' }}>
                    <p>&copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
