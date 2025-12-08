import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const performanceData = [
    { name: 'Mon', score: 65 },
    { name: 'Tue', score: 75 },
    { name: 'Wed', score: 85 },
    { name: 'Thu', score: 70 },
    { name: 'Fri', score: 90 },
    { name: 'Sat', score: 80 },
];

const subjectData = [
    { subject: 'Math', A: 120, fullMark: 150 },
    { subject: 'Science', A: 98, fullMark: 150 },
    { subject: 'English', A: 86, fullMark: 150 },
    { subject: 'History', A: 99, fullMark: 150 },
    { subject: 'Physics', A: 85, fullMark: 150 },
    { subject: 'Chem', A: 65, fullMark: 150 },
];

const AnalyticsCard = () => {
    return (
        <div className="glass-card" style={{ padding: '1.5rem', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem' }}>Learning Analytics</h3>
                <select style={{ padding: '0.25rem 0.5rem', borderRadius: '6px', border: '1px solid #e5e7eb' }}>
                    <option>This Week</option>
                    <option>Last Week</option>
                </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ height: '200px' }}>
                    <h4 style={{ fontSize: '0.9rem', marginBottom: '1rem', color: 'var(--color-text-light)' }}>Weekly Progress</h4>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={performanceData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                            <YAxis hide />
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                                cursor={{ stroke: '#e5e7eb', strokeWidth: 2 }}
                            />
                            <Line type="monotone" dataKey="score" stroke="var(--color-primary-blue)" strokeWidth={3} dot={{ r: 4, fill: 'var(--color-primary-blue)', strokeWidth: 2, stroke: 'white' }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div style={{ height: '200px' }}>
                    <h4 style={{ fontSize: '0.9rem', marginBottom: '1rem', color: 'var(--color-text-light)' }}>Subject Strengths</h4>
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={subjectData}>
                            <PolarGrid stroke="#e5e7eb" />
                            <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fill: '#6b7280' }} />
                            <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                            <Radar name="Alex" dataKey="A" stroke="var(--color-primary-orange)" fill="var(--color-primary-orange)" fillOpacity={0.5} />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsCard;
