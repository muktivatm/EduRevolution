import React from 'react';
import { Brain, Activity, MessageCircle, Trophy } from 'lucide-react';

const features = [
    {
        icon: <Brain size={32} />,
        title: "AI-Powered Learning",
        description: "Personalized study paths adapted to your learning style and pace using advanced AI algorithms.",
        color: "var(--color-primary-blue)",
        bg: "rgba(30, 58, 138, 0.1)"
    },
    {
        icon: <Activity size={32} />,
        title: "Real-time Tracking",
        description: "Parents can track attendance, performance, and behavior in real-time through our dedicated portal.",
        color: "var(--color-secondary-green)",
        bg: "rgba(16, 185, 129, 0.1)"
    },
    {
        icon: <MessageCircle size={32} />,
        title: "24x7 Doubt Support",
        description: "Get instant answers to your questions anytime, anywhere with our AI tutor and expert teachers.",
        color: "var(--color-primary-orange)",
        bg: "rgba(255, 107, 53, 0.1)"
    },
    {
        icon: <Trophy size={32} />,
        title: "Result Guarantee",
        description: "We are so confident in our methods that we offer a result improvement guarantee program.",
        color: "var(--color-secondary-purple)",
        bg: "rgba(139, 92, 246, 0.1)"
    }
];

const Features = () => {
    return (
        <section className="section-padding" style={{ background: 'white' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Why Choose <span className="text-gradient">EduRevolution</span>?</h2>
                    <p style={{ color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto' }}>
                        We combine technology and pedagogy to create an ecosystem where every student thrives.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {features.map((feature, index) => (
                        <div key={index} className="glass-card" style={{ padding: '2rem', transition: 'transform 0.3s', cursor: 'pointer' }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '16px',
                                background: feature.bg,
                                color: feature.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem'
                            }}>
                                {feature.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{feature.title}</h3>
                            <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
