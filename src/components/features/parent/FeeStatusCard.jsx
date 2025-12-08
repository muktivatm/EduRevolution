import React from 'react';
import { CreditCard, AlertTriangle, Calendar, Download } from 'lucide-react';

const FeeStatusCard = () => {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <>
            <div className="glass-card" style={{ padding: '1.5rem', background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Fee Status</h3>
                        <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>Next Due: Quarter 2</p>
                    </div>
                    <div style={{ padding: '0.5rem', background: '#dcfce7', borderRadius: '50%', color: '#16a34a' }}>
                        <CreditCard size={24} />
                    </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#16a34a', marginBottom: '0.5rem' }}>₹12,500</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#dc2626', fontSize: '0.9rem', background: '#fef2f2', padding: '0.5rem', borderRadius: '8px', width: 'fit-content' }}>
                        <AlertTriangle size={16} />
                        <span>Due Date: 15th Dec 2025</span>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button
                        className="btn-primary"
                        style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
                        onClick={() => setShowModal(true)}
                    >
                        Pay Now
                    </button>
                    <button style={{
                        flex: 1,
                        display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem',
                        background: 'white', border: '1px solid #e5e7eb', borderRadius: '8px', cursor: 'pointer'
                    }}>
                        <Download size={18} /> Invoice
                    </button>
                </div>

                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Calendar size={14} /> 2 Reminders sent this week
                    </p>
                </div>
            </div>

            {showModal && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    zIndex: 1000
                }} onClick={() => setShowModal(false)}>
                    <div style={{
                        background: 'white', padding: '2rem', borderRadius: '16px',
                        width: '90%', maxWidth: '400px',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                    }} onClick={e => e.stopPropagation()}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>Payment Gateway</h3>
                        <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '2rem' }}>
                            This is a demo payment modal. In a real app, this would integrate with Razorpay or Stripe.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <button className="btn-primary" onClick={() => { alert('Payment Successful!'); setShowModal(false); }}>
                                Simulate Success
                            </button>
                            <button className="btn-secondary" onClick={() => setShowModal(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FeeStatusCard;
