import React from 'react';
import { Trophy } from 'lucide-react';

const LeaderboardWidget = () => {
    return (
        <div className="glass-card" style={{ padding: '1.5rem', background: 'linear-gradient(135deg, #1E3A8A 0%, #1e40af 100%)', color: 'white' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Trophy size={24} color="#FCD34D" />
                </div>
                <div>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.25rem', textTransform: 'uppercase' }}>CLASSROOM POSITION: #2</h4>
                    <p style={{ fontSize: '1rem', opacity: 0.95, fontWeight: '500' }}>"You are just one step away from the top spot!"</p>
                </div>
            </div>
        </div>
    );
};

export default LeaderboardWidget;
