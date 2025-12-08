import React, { createContext, useContext, useState } from 'react';

const HomeworkContext = createContext();

export const useHomework = () => useContext(HomeworkContext);

export const HomeworkProvider = ({ children }) => {
    // Mock initial homework data
    const [assignments, setAssignments] = useState([
        {
            id: 1,
            subject: 'Mathematics',
            title: 'Calculus: Derivatives Worksheet',
            dueDate: '2025-12-06',
            status: 'pending', // pending, submitted, assessed
            file: null,
            submissionDate: null,
            teacher: 'Mr. Verma',
            teacherAttachment: 'deriv_worksheet.pdf',
            remarks: '',
            grade: ''
        },
        {
            id: 2,
            subject: 'Physics',
            title: 'Thermodynamics Lab Report',
            dueDate: '2025-12-05',
            status: 'assessed',
            file: 'lab_report.pdf',
            submissionDate: '2025-12-04',
            teacher: 'Mrs. Gupta',
            teacherAttachment: null, // No attachment from teacher
            remarks: 'Excellent analysis of the heat engine efficiency.',
            grade: 'A'
        },
        {
            id: 3,
            subject: 'English',
            title: 'Essay: The Road Not Taken',
            dueDate: '2025-12-07',
            status: 'submitted',
            file: 'essay_draft.pdf',
            submissionDate: '2025-12-05',
            teacher: 'Ms. Roy',
            teacherAttachment: 'essay_prompt.docx',
            remarks: '',
            grade: ''
        }
    ]);

    const submitHomework = (id, file) => {
        setAssignments(prev => prev.map(assignment =>
            assignment.id === id
                ? { ...assignment, status: 'submitted', file: file, submissionDate: new Date().toISOString().split('T')[0] }
                : assignment
        ));
    };

    const assessHomework = (id, remarks, grade) => {
        setAssignments(prev => prev.map(assignment =>
            assignment.id === id
                ? { ...assignment, status: 'assessed', remarks, grade }
                : assignment
        ));
    };

    const addAssignment = (newAssignment) => {
        setAssignments(prev => [...prev, { ...newAssignment, id: Date.now(), status: 'pending' }]);
    };

    return (
        <HomeworkContext.Provider value={{ assignments, submitHomework, assessHomework, addAssignment }}>
            {children}
        </HomeworkContext.Provider>
    );
};
