import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { TrendingUp, Award } from 'lucide-react';

const PerformanceComparison = () => {
    const [showToppers, setShowToppers] = useState(false);

    const data = [
        { name: 'Week 1', student: 65, average: 60, topper: 85 },
        { name: 'Week 2', student: 72, average: 62, topper: 88 },
        { name: 'Week 3', student: 68, average: 65, topper: 90 },
        { name: 'Week 4', student: 85, average: 68, topper: 92 },
    ];

    return (
        <div className="glass-card" style={{ padding: '1.5rem', border: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div>
                    <h3 style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <TrendingUp size={20} color="var(--color-primary-blue)" /> Performance
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>Monthly Test Comparison</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <input
                            type="checkbox"
                            checked={showToppers}
                            onChange={() => setShowToppers(!showToppers)}
                            style={{ accentColor: '#F59E0B' }}
                        />
                        See Top Score
                    </label>
                </div>
            </div>

            <div style={{ height: '300px', width: '100%', marginBottom: '1.5rem' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                        <YAxis hide />
                        <Tooltip
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                            cursor={{ fill: 'rgba(0,0,0,0.05)' }}
                        />
                        <Legend iconType="circle" />
                        <Bar dataKey="student" name="Rahul" fill="var(--color-primary-blue)" radius={[4, 4, 0, 0]} barSize={20} />
                        <Bar dataKey="average" name="Class Avg" fill="#e5e7eb" radius={[4, 4, 0, 0]} barSize={20} />
                        {showToppers && (
                            <Bar dataKey="topper" name="Top Score" fill="#FCD34D" radius={[4, 4, 0, 0]} barSize={20} />
                        )}
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Performance Verdict Section */}
            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid #f3f4f6' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Award size={18} color="#F59E0B" /> Performance Verdict
                </h4>
                <div style={{ background: '#f9fafb', padding: '1rem', borderRadius: '12px', border: '1px solid #f3f4f6' }}>
                    <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#374151', fontStyle: 'italic' }}>
                        "Rahul has shown great improvement in <strong>Mechanics</strong> this week. He was very attentive during the lab session. However, he seems a bit confused with the new <strong>Thermodynamics</strong> concepts introduced on Tuesday. I've assigned him some extra practice problems to help with this."
                    </p>
                    <p style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: '0.5rem', textAlign: 'right' }}>
                        — Mr. Verma • Physics Teacher
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PerformanceComparison;
