import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import Overview from './components/Overview';
import LatestProducts from './components/LatestProducts';
import Login from './components/Login'; // import Login
import Register from './components/Register'; // import Register

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route path="overview" element={<Overview />} />
                    {/* เพิ่มเส้นทางอื่นๆ ได้ที่นี่ */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
