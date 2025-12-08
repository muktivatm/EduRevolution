import React from 'react';
import { MoreVertical, Edit, Trash2 } from 'lucide-react';

const UserManagementTable = () => {
    const users = [
        { id: 1, name: 'Rahul Sharma', role: 'Student', email: 'rahul@example.com', status: 'Active' },
        { id: 2, name: 'Mr. Verma', role: 'Teacher', email: 'verma@example.com', status: 'Active' },
        { id: 3, name: 'Mrs. Gupta', role: 'Parent', email: 'gupta@example.com', status: 'Inactive' },
        { id: 4, name: 'Amit Patel', role: 'Student', email: 'amit@example.com', status: 'Active' },
        { id: 5, name: 'Ms. Iyer', role: 'Teacher', email: 'iyer@example.com', status: 'Active' },
    ];

    return (
        <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem' }}>Recent Users</h3>
                <button className="btn-secondary" style={{ fontSize: '0.9rem' }}>View All</button>
            </div>

            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid #e5e7eb', textAlign: 'left' }}>
                            <th style={{ padding: '1rem', fontSize: '0.9rem', color: '#6b7280', fontWeight: '600' }}>Name</th>
                            <th style={{ padding: '1rem', fontSize: '0.9rem', color: '#6b7280', fontWeight: '600' }}>Role</th>
                            <th style={{ padding: '1rem', fontSize: '0.9rem', color: '#6b7280', fontWeight: '600' }}>Email</th>
                            <th style={{ padding: '1rem', fontSize: '0.9rem', color: '#6b7280', fontWeight: '600' }}>Status</th>
                            <th style={{ padding: '1rem', fontSize: '0.9rem', color: '#6b7280', fontWeight: '600' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} style={{ borderBottom: '1px solid #f3f4f6' }}>
                                <td style={{ padding: '1rem', fontWeight: '500' }}>{user.name}</td>
                                <td style={{ padding: '1rem' }}>
                                    <span style={{
                                        padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '500',
                                        background: user.role === 'Student' ? '#eff6ff' : user.role === 'Teacher' ? '#f5f3ff' : '#fff7ed',
                                        color: user.role === 'Student' ? '#1d4ed8' : user.role === 'Teacher' ? '#7c3aed' : '#c2410c'
                                    }}>
                                        {user.role}
                                    </span>
                                </td>
                                <td style={{ padding: '1rem', color: '#6b7280' }}>{user.email}</td>
                                <td style={{ padding: '1rem' }}>
                                    <span style={{
                                        display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem',
                                        color: user.status === 'Active' ? '#16a34a' : '#9ca3af'
                                    }}>
                                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: user.status === 'Active' ? '#16a34a' : '#9ca3af' }}></span>
                                        {user.status}
                                    </span>
                                </td>
                                <td style={{ padding: '1rem' }}>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <button style={{ padding: '0.4rem', border: 'none', background: 'transparent', cursor: 'pointer', color: '#6b7280' }}><Edit size={16} /></button>
                                        <button style={{ padding: '0.4rem', border: 'none', background: 'transparent', cursor: 'pointer', color: '#ef4444' }}><Trash2 size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManagementTable;
