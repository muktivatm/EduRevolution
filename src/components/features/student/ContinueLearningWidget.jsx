import React from 'react';
import { ArrowRight } from 'lucide-react';

const ContinueLearningWidget = () => {
    return (
        <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>📚 CONTINUE LEARNING</h3>

            <div style={{ background: '#f9fafb', borderRadius: '12px', padding: '1rem', border: '1px solid #e5e7eb' }}>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Chapter: Quadratic Equations</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', marginBottom: '1rem' }}>Mathematics • Class 10</p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ flex: 1, height: '8px', background: '#e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ width: '45%', height: '100%', background: 'var(--color-primary-blue)', borderRadius: '4px' }}></div>
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--color-primary-blue)' }}>45%</span>
                </div>

                <button style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'white',
                    border: '1px solid var(--color-primary-blue)',
                    borderRadius: '8px',
                    color: 'var(--color-primary-blue)',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                }}>
                    Continue Learning <ArrowRight size={16} />
                </button>
            </div>
        </div>
    );
};

export default ContinueLearningWidget;
