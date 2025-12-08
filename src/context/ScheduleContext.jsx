import React, { createContext, useContext, useState } from 'react';

const ScheduleContext = createContext();

export const useSchedule = () => useContext(ScheduleContext);

export const ScheduleProvider = ({ children }) => {
    const [scheduleData, setScheduleData] = useState({
        Monday: [
            { id: 1, time: '3:00 PM - 4:00 PM', subject: 'Mathematics', teacher: 'Mr. Sharma', color: '#eff6ff', textColor: '#1d4ed8' },
            { id: 2, time: '4:00 PM - 5:00 PM', subject: 'Physics', teacher: 'Mr. Verma', color: '#f5f3ff', textColor: '#7c3aed' },
            { id: 3, time: '5:00 PM - 6:00 PM', subject: 'Chemistry', teacher: 'Ms. Kapoor', color: '#fff7ed', textColor: '#c2410c' },
        ],
        Tuesday: [
            { id: 4, time: '3:00 PM - 4:00 PM', subject: 'Biology', teacher: 'Mrs. Singh', color: '#f0fdf4', textColor: '#15803d' },
            { id: 5, time: '4:00 PM - 5:00 PM', subject: 'English', teacher: 'Mr. Das', color: '#fdf2f8', textColor: '#be185d' },
            { id: 6, time: '5:00 PM - 6:00 PM', subject: 'Mathematics', teacher: 'Mr. Sharma', color: '#eff6ff', textColor: '#1d4ed8' },
        ],
        Wednesday: [
            { id: 7, time: '3:00 PM - 4:00 PM', subject: 'Physics', teacher: 'Mr. Verma', color: '#f5f3ff', textColor: '#7c3aed' },
            { id: 8, time: '4:00 PM - 5:00 PM', subject: 'Chemistry', teacher: 'Ms. Kapoor', color: '#fff7ed', textColor: '#c2410c' },
            { id: 9, time: '5:00 PM - 6:00 PM', subject: 'Biology', teacher: 'Mrs. Singh', color: '#f0fdf4', textColor: '#15803d' },
        ],
        Thursday: [
            { id: 10, time: '3:00 PM - 4:00 PM', subject: 'Mathematics', teacher: 'Mr. Sharma', color: '#eff6ff', textColor: '#1d4ed8' },
            { id: 11, time: '4:00 PM - 5:00 PM', subject: 'English', teacher: 'Mr. Das', color: '#fdf2f8', textColor: '#be185d' },
            { id: 12, time: '5:00 PM - 6:00 PM', subject: 'Physics', teacher: 'Mr. Verma', color: '#f5f3ff', textColor: '#7c3aed' },
        ],
        Friday: [
            { id: 13, time: '3:00 PM - 4:00 PM', subject: 'Chemistry', teacher: 'Ms. Kapoor', color: '#fff7ed', textColor: '#c2410c' },
            { id: 14, time: '4:00 PM - 5:00 PM', subject: 'Biology', teacher: 'Mrs. Singh', color: '#f0fdf4', textColor: '#15803d' },
            { id: 15, time: '5:00 PM - 6:00 PM', subject: 'Mathematics', teacher: 'Mr. Sharma', color: '#eff6ff', textColor: '#1d4ed8' },
        ],
        Saturday: [
            { id: 16, time: '3:00 PM - 6:00 PM', subject: 'Weekly Test / Revision', teacher: 'All Faculty', color: '#fef2f2', textColor: '#b91c1c' },
        ],
        Sunday: [
            { id: 17, time: 'Holiday', subject: 'No Regular Classes', teacher: '', color: '#f3f4f6', textColor: '#6b7280', note: 'Extra classes may be scheduled for exam prep.' },
        ],
    });

    const updateDaySchedule = (day, newSlots) => {
        setScheduleData(prev => ({
            ...prev,
            [day]: newSlots
        }));
    };

    return (
        <ScheduleContext.Provider value={{ scheduleData, updateDaySchedule }}>
            {children}
        </ScheduleContext.Provider>
    );
};
