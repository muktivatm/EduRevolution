import React, { useState } from 'react';
import { useSchedule } from '../../../context/ScheduleContext';
import { Calendar, Clock, Edit2, Plus, Save, Trash2, X } from 'lucide-react';

const AdminScheduleEditor = () => {
    const { scheduleData, updateDaySchedule } = useSchedule();
    const days = Object.keys(scheduleData);
    const [selectedDay, setSelectedDay] = useState('Monday');
    const [isEditing, setIsEditing] = useState(false);
    const [editedSlots, setEditedSlots] = useState([]);

    const handleEditClick = () => {
        setEditedSlots([...scheduleData[selectedDay]]);
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        updateDaySchedule(selectedDay, editedSlots);
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
    };

    const handleSlotChange = (index, field, value) => {
        const newSlots = [...editedSlots];
        newSlots[index] = { ...newSlots[index], [field]: value };
        setEditedSlots(newSlots);
    };

    const handleDeleteSlot = (index) => {
        const newSlots = editedSlots.filter((_, i) => i !== index);
        setEditedSlots(newSlots);
    };

    const handleAddSlot = () => {
        setEditedSlots([
            ...editedSlots,
            {
                time: '00:00 PM - 00:00 PM',
                subject: 'New Subject',
                teacher: 'Teacher Name',
                color: '#f3f4f6',
                textColor: '#374151'
            }
        ]);
    };

    return (
        <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ padding: '0.5rem', background: '#eff6ff', borderRadius: '8px', color: 'var(--color-primary-blue)' }}>
                        <Calendar size={20} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', color: '#1e3a8a' }}>Manage Weekly Schedule</h3>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <select
                        value={selectedDay}
                        onChange={(e) => { setSelectedDay(e.target.value); setIsEditing(false); }}
                        style={{ padding: '0.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', outline: 'none' }}
                    >
                        {days.map(day => <option key={day} value={day}>{day}</option>)}
                    </select>

                    {!isEditing ? (
                        <button className="btn-secondary" onClick={handleEditClick} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Edit2 size={16} /> Edit
                        </button>
                    ) : (
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button className="btn-secondary" onClick={handleCancelClick} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ef4444', borderColor: '#ef4444' }}>
                                <X size={16} /> Cancel
                            </button>
                            <button className="btn-primary" onClick={handleSaveClick} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Save size={16} /> Save
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {(isEditing ? editedSlots : scheduleData[selectedDay]).map((slot, index) => (
                    <div key={index} style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '1rem',
                        background: slot.color,
                        borderRadius: '12px',
                        borderLeft: `4px solid ${slot.textColor}`,
                        gap: '1rem'
                    }}>
                        {isEditing ? (
                            <>
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <input
                                        type="text"
                                        value={slot.time}
                                        onChange={(e) => handleSlotChange(index, 'time', e.target.value)}
                                        placeholder="Time (e.g. 3:00 PM - 4:00 PM)"
                                        style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #d1d5db' }}
                                    />
                                    <input
                                        type="text"
                                        value={slot.subject}
                                        onChange={(e) => handleSlotChange(index, 'subject', e.target.value)}
                                        placeholder="Subject"
                                        style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #d1d5db' }}
                                    />
                                    <input
                                        type="text"
                                        value={slot.teacher}
                                        onChange={(e) => handleSlotChange(index, 'teacher', e.target.value)}
                                        placeholder="Teacher"
                                        style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #d1d5db' }}
                                    />
                                </div>
                                <button onClick={() => handleDeleteSlot(index)} style={{ color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer' }}>
                                    <Trash2 size={20} />
                                </button>
                            </>
                        ) : (
                            <>
                                <div style={{ marginRight: '1rem', minWidth: '120px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: slot.textColor, fontWeight: '600', fontSize: '0.9rem' }}>
                                        <Clock size={16} />
                                        {slot.time}
                                    </div>
                                </div>

                                <div style={{ flex: 1 }}>
                                    <h4 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.2rem' }}>{slot.subject}</h4>
                                    {slot.teacher && <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>{slot.teacher}</p>}
                                    {slot.note && <p style={{ fontSize: '0.8rem', color: '#ef4444', fontStyle: 'italic', marginTop: '0.2rem' }}>* {slot.note}</p>}
                                </div>
                            </>
                        )}
                    </div>
                ))}

                {isEditing && (
                    <button
                        onClick={handleAddSlot}
                        style={{
                            padding: '1rem',
                            border: '2px dashed #e5e7eb',
                            borderRadius: '12px',
                            background: 'transparent',
                            color: '#6b7280',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            fontWeight: '600'
                        }}
                    >
                        <Plus size={20} /> Add Class Slot
                    </button>
                )}
            </div>
        </div>
    );
};

export default AdminScheduleEditor;
