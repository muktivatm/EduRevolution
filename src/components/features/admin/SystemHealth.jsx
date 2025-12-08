import React from 'react';
import { Server, ShieldCheck, AlertTriangle } from 'lucide-react';

const SystemHealth = () => {
    return (
        <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>System Health</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: '#f0fdf4', borderRadius: '12px', border: '1px solid #bbf7d0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ padding: '0.5rem', background: 'white', borderRadius: '8px', color: '#16a34a' }}>
                            <Server size={20} />
                        </div>
                        <div>
                            <h4 style={{ fontSize: '0.95rem', fontWeight: '600', color: '#166534' }}>Server Status</h4>
                            <p style={{ fontSize: '0.85rem', color: '#15803d' }}>All systems operational</p>
                        </div>
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: '600', color: '#16a34a', background: 'white', padding: '0.25rem 0.75rem', borderRadius: '20px' }}>99.9% Uptime</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: '#eff6ff', borderRadius: '12px', border: '1px solid #bfdbfe' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ padding: '0.5rem', background: 'white', borderRadius: '8px', color: '#2563eb' }}>
                            <ShieldCheck size={20} />
                        </div>
                        <div>
                            <h4 style={{ fontSize: '0.95rem', fontWeight: '600', color: '#1e40af' }}>Security</h4>
                            <p style={{ fontSize: '0.85rem', color: '#1e3a8a' }}>No recent threats detected</p>
                        </div>
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: '600', color: '#2563eb', background: 'white', padding: '0.25rem 0.75rem', borderRadius: '20px' }}>Secure</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: '#fff7ed', borderRadius: '12px', border: '1px solid #fed7aa' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ padding: '0.5rem', background: 'white', borderRadius: '8px', color: '#ea580c' }}>
                            <AlertTriangle size={20} />
                        </div>
                        <div>
                            <h4 style={{ fontSize: '0.95rem', fontWeight: '600', color: '#9a3412' }}>Pending Reports</h4>
                            <p style={{ fontSize: '0.85rem', color: '#c2410c' }}>5 user reports require review</p>
                        </div>
                    </div>
                    <button style={{ fontSize: '0.8rem', fontWeight: '600', color: '#ea580c', background: 'white', padding: '0.25rem 0.75rem', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>Review</button>
                </div>
            </div>
        </div>
    );
};

export default SystemHealth;
