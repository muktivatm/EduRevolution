import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import StudentDashboard from './pages/student/StudentDashboard';
import StudentClasses from './pages/student/StudentClasses';
import StudentMaterials from './pages/student/StudentMaterials';
import StudentTests from './pages/student/StudentTests';
import StudentCommunication from './pages/student/StudentCommunication';
import StudentProfile from './pages/student/StudentProfile';
import ParentDashboard from './pages/parent/ParentDashboard';
import ParentPerformance from './pages/parent/ParentPerformance';
import ParentFees from './pages/parent/ParentFees';
import ParentCommunity from './pages/parent/ParentCommunity';
import ParentFeedback from './pages/parent/ParentFeedback';
import ParentCommunication from './pages/parent/ParentCommunication';
import ParentProfile from './pages/parent/ParentProfile';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import TeacherAssignments from './pages/teacher/TeacherAssignments';
import TeacherSubmissionDetail from './pages/teacher/TeacherSubmissionDetail';
import TeacherCommunication from './pages/teacher/TeacherCommunication';
import TeacherProfile from './pages/teacher/TeacherProfile';
import TeacherAssessment from './pages/teacher/TeacherAssessment';
import TeacherMore from './pages/teacher/TeacherMore';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminCommunication from './pages/admin/AdminCommunication';
import AdminProfile from './pages/admin/AdminProfile';
import { ScheduleProvider } from './context/ScheduleContext';
import { HomeworkProvider } from './context/HomeworkContext';
import { ChatProvider } from './context/ChatContext';

import { BRAND } from './branding';

const App = () => {
  React.useEffect(() => {
    document.documentElement.style.setProperty('--primary-theme', BRAND.color);
  }, []);

  return (
    <Router>
      <ScheduleProvider>
        <HomeworkProvider>
          <ChatProvider>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/student/dashboard" element={<StudentDashboard />} />
              <Route path="/student/classes" element={<StudentClasses />} />
              <Route path="/student/materials" element={<StudentMaterials />} />
              <Route path="/student/tests" element={<StudentTests />} />
              <Route path="/student/communication" element={<StudentCommunication />} />
              <Route path="/student/profile" element={<StudentProfile />} />
              <Route path="/parent/dashboard" element={<ParentDashboard />} />
              <Route path="/parent/performance" element={<ParentPerformance />} />
              <Route path="/parent/fees" element={<ParentFees />} />
              <Route path="/parent/community" element={<ParentCommunity />} />
              <Route path="/parent/feedback" element={<ParentFeedback />} />
              <Route path="/parent/communication" element={<ParentCommunication />} />
              <Route path="/parent/profile" element={<ParentProfile />} />
              <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
              <Route path="/teacher/assignments" element={<TeacherAssignments />} />
              <Route path="/teacher/submission/:id" element={<TeacherSubmissionDetail />} />
              <Route path="/teacher/assessment" element={<TeacherAssessment />} />
              <Route path="/teacher/communication" element={<TeacherCommunication />} />
              <Route path="/teacher/more" element={<TeacherMore />} />
              <Route path="/teacher/profile" element={<TeacherProfile />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/communication" element={<AdminCommunication />} />
              <Route path="/admin/profile" element={<AdminProfile />} />
            </Routes>
          </ChatProvider>
        </HomeworkProvider>
      </ScheduleProvider>
    </Router>
  );
}

export default App;
