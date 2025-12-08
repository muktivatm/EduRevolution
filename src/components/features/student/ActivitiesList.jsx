import React from 'react';
import { Video, Clock, FileText, AlertCircle } from 'lucide-react';

const ActivitiesList = () => {
    return (
        <div className="glass-card" style={{ padding: '1.5rem', height: '100%' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Today's Activities</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Live Class Card */}
                <div style={{ padding: '1rem', background: 'rgba(255, 107, 53, 0.05)', borderRadius: '12px', border: '1px solid rgba(255, 107, 53, 0.1)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ width: '8px', height: '8px', background: 'red', borderRadius: '50%', display: 'inline-block' }} className="animate-pulse"></span>
                            <span style={{ color: 'red', fontWeight: 'bold', fontSize: '0.8rem' }}>LIVE NOW</span>
                        </div>
                        <button className="btn-primary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.8rem' }}>Join</button>
                    </div>
                    <h4 style={{ marginBottom: '0.25rem' }}>Advanced Mathematics</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginBottom: '0.5rem' }}>Calculus - Integration Methods</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-light)' }}>
                        <Video size={14} />
                        <span>Mr. R.K. Verma</span>
                    </div>
                </div>

                {/* Upcoming Class */}
                <div style={{ padding: '1rem', background: 'white', borderRadius: '12px', border: '1px solid #f3f4f6' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                        <span style={{ background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '500' }}>04:00 PM</span>
                    </div>
                    <h4 style={{ marginBottom: '0.25rem' }}>Physics - Optics</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginBottom: '0.5rem' }}>Ray Optics & Optical Instruments</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-light)' }}>
                        <Clock size={14} />
                        <span>1h 30m duration</span>
                    </div>
                </div>

                {/* Assignment */}
                <div style={{ padding: '1rem', background: 'white', borderRadius: '12px', border: '1px solid #f3f4f6' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--color-primary-blue)' }}>
                        <FileText size={16} />
                        <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>Assignment Due</span>
                    </div>
                    <h4 style={{ marginBottom: '0.25rem' }}>Chemistry Lab Report</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#ef4444' }}>
                        <AlertCircle size={14} />
                        <span>Due Today, 11:59 PM</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActivitiesList;
