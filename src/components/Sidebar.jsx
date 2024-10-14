import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar({ onSelectTab }) {
  const location = useLocation(); // ใช้ useLocation เพื่อติดตามเส้นทางปัจจุบัน
  const [activeTab, setActiveTab] = useState(location.pathname); // กำหนด activeTab ตามเส้นทางปัจจุบัน

  useEffect(() => {
    setActiveTab(location.pathname); // อัปเดต activeTab เมื่อเส้นทางเปลี่ยน
  }, [location]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (onSelectTab) onSelectTab(tab);
  };

  return (
    <div className="list-group list-group-flush">
      <div style={{
        fontFamily: 'sans-serif',
        fontSize: '24px',
        color: '#FF69B4',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '1rem',
      }}>
        Money Lecture
      </div>
      
      <Link
        to="/dashboard"
        onClick={() => handleTabClick("/dashboard")}
        className={`list-group-item list-group-item-action ${activeTab === "/dashboard" ? "active" : ""}`}
        style={{
          border: '2px solid #FF69B4', 
          padding: '10px',
          borderRadius: '10px',
          color: activeTab === "/dashboard" ? '#FFF' : '#FF69B4',
          backgroundColor: activeTab === "/dashboard" ? '#FF69B4' : 'transparent',
          textAlign: 'center',
          marginBottom: '0.2rem',
          textDecoration: 'none'
        }}
      >
        Home
      </Link>
      
      <Link
        to="/overview"
        onClick={() => handleTabClick("/overview")}
        className={`list-group-item list-group-item-action ${activeTab === "/overview" ? "active" : ""}`}
        style={{
          border: '2px solid #FF69B4',
          padding: '10px',
          borderRadius: '10px',
          color: activeTab === "/overview" ? '#FFF' : '#FF69B4',
          backgroundColor: activeTab === "/overview" ? '#FF69B4' : 'transparent',
          textAlign: 'center',
          marginBottom: '0.2rem',   
          textDecoration: 'none'
        }}
      >
        Overview
      </Link>
      
      <Link
        to="/account"
        onClick={() => handleTabClick("/account")}
        className={`list-group-item list-group-item-action ${activeTab === "/account" ? "active" : ""}`}
        style={{
          border: '2px solid #FF69B4',
          padding: '10px',
          borderRadius: '10px',
          color: activeTab === "/account" ? '#FFF' : '#FF69B4',
          backgroundColor: activeTab === "/account" ? '#FF69B4' : 'transparent',
          textAlign: 'center',
          marginBottom: '0.5rem',
          textDecoration: 'none'
        }}
      >
        Account
      </Link>
    </div>
  );
}

export default Sidebar;
