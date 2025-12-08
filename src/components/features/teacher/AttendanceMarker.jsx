import React, { useState } from 'react';
import { CheckCircle, XCircle, UserCheck } from 'lucide-react';

const AttendanceMarker = () => {
    const [marked, setMarked] = useState(false);

    return (
        <div className="glass-card" style={{ padding: '1.5rem', background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Mark Attendance</h3>
                    <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>Class 10-A • Physics</p>
                </div>
                <div style={{ padding: '0.5rem', background: '#dcfce7', borderRadius: '50%', color: '#16a34a' }}>
                    <UserCheck size={24} />
                </div>
            </div>

            {!marked ? (
                <>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1f2937' }}>32<span style={{ fontSize: '1rem', color: '#6b7280', fontWeight: 'normal' }}>/35 Present</span></span>
                        <button className="btn-primary" onClick={() => setMarked(true)}>Submit</button>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} style={{ minWidth: '40px', height: '40px', borderRadius: '50%', background: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: '#6b7280' }}>
                                S{i}
                            </div>
                        ))}
                        <div style={{ minWidth: '40px', height: '40px', borderRadius: '50%', background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: '#ef4444', border: '1px solid #fca5a5' }}>
                            Ab
                        </div>
                    </div>
                </>
            ) : (
                <div className="animate-fade-in" style={{ textAlign: 'center', padding: '1rem 0' }}>
                    <CheckCircle size={48} color="#16a34a" style={{ marginBottom: '0.5rem' }} />
                    <p style={{ fontWeight: '600', color: '#16a34a' }}>Attendance Submitted!</p>
                    <button onClick={() => setMarked(false)} style={{ marginTop: '1rem', background: 'none', border: 'none', color: '#6b7280', fontSize: '0.85rem', cursor: 'pointer', textDecoration: 'underline' }}>Undo</button>
                </div>
            )}
        </div>
    );
};

export default AttendanceMarker;
