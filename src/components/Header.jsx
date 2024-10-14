import React from 'react';
import { Navbar, Form, FormControl, Nav } from 'react-bootstrap';
import { FaSearch, FaUserCircle } from 'react-icons/fa';

function Header() {
    const headerStyle = {
        display: "flex",
        justifyContent: "space-between", // ใช้เพื่อให้ส่วนของข้อความและโปรไฟล์อยู่ที่ปลายสุดของแต่ละด้าน
        alignItems: "center", // จัดแนวแนวตั้งให้ตรงกลาง
        padding: "0.5rem 1rem", // เพิ่ม padding ให้กับ header
    };

    const leftSectionStyle = {
        display: "flex",
        alignItems: "center",
    };

    const rightSectionStyle = {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
    };

    const searchStyle = {
        padding: "0.5rem",
        borderRadius: "20px",
        border: "1px solid #ddd",
        marginLeft: "1rem",
    };

    return (
        <div style={headerStyle}>
            <div style={leftSectionStyle}>
                <span style={{ fontFamily: 'sans-serif', fontSize: "1.67rem", color: "#FF69B4", fontWeight: 'bold' }}>Money Lecture</span>
            </div>

            <div style={rightSectionStyle}>
                <i className="fas fa-users" />
                <i className="fas fa-bell" />
                <h5 style={{ margin: '0' }}>Mongyungbin</h5>
                <img
                    src="https://cdn.readawrite.com/articles/4970/4969273/thumbnail/large.gif?2" // แทนที่ด้วย URL รูปโปรไฟล์
                    alt="Profile"
                    style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                />
            </div>
        </div>
    );
}

export default Header;
