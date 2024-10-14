import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import Overview from './components/Overview';
import Login from './components/Login';
import Register from './components/Register';
import Account from './components/Account'; // นำเข้า Account
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/dashboard" element={<DashboardLayout />} /> {/* หน้าแดชบอร์ด */}
                <Route path="/overview" element={<Overview />} /> {/* เส้นทางหลักสำหรับ Overview */}
                <Route path="/account" element={<Account />} /> {/* เส้นทางหลักสำหรับ Account */}
            </Routes>
        </Router>
    );
}

export default App;
