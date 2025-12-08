import React from 'react';
import { FileText, Download, Check } from 'lucide-react';

const RecentSubmissions = () => {
    const submissions = [
        { name: 'Rahul Sharma', assignment: 'Thermodynamics Ex 4.2', status: 'pending', time: '10 mins ago' },
        { name: 'Priya Singh', assignment: 'Thermodynamics Ex 4.2', status: 'graded', time: '1 hour ago' },
        { name: 'Amit Patel', assignment: 'Thermodynamics Ex 4.2', status: 'pending', time: '2 hours ago' },
    ];

    return (
        <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Recent Submissions</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {submissions.map((sub, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: index !== submissions.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ padding: '0.5rem', background: '#eff6ff', borderRadius: '8px', color: 'var(--color-primary-blue)' }}>
                                <FileText size={20} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '0.95rem', fontWeight: '600' }}>{sub.name}</h4>
                                <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>{sub.assignment}</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            {sub.status === 'pending' ? (
                                <button style={{ padding: '0.4rem 0.8rem', background: 'var(--color-primary-blue)', color: 'white', borderRadius: '6px', border: 'none', fontSize: '0.8rem', cursor: 'pointer' }}>
                                    Grade
                                </button>
                            ) : (
                                <span style={{ fontSize: '0.8rem', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                    <Check size={14} /> Graded
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <button style={{ width: '100%', marginTop: '0.5rem', padding: '0.75rem', border: '1px dashed #e5e7eb', borderRadius: '8px', color: 'var(--color-text-light)', background: 'transparent', cursor: 'pointer' }}>
                View All Submissions
            </button>
        </div>
    );
};

export default RecentSubmissions;
