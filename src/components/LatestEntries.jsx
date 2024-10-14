import React from 'react';
import { Card, Button } from 'react-bootstrap';

function LatestEntries({ entries, title, onEditEntry, onDeleteEntry }) {
  const latestEntries = entries.slice(-5).reverse();

  return (
    <Card 
      style={{ 
        marginBottom: '1rem', 
        border: '2px solid #FFA9B4', 
        borderRadius: '10px',
      }}
    >
      <Card.Header style={{ backgroundColor: '#FFA9B4', fontWeight: 'bold' }}>{title}</Card.Header>
      <Card.Body>
        {latestEntries.length > 0 ? (
          latestEntries.map((entry, index) => (
            <div 
              key={index} 
              style={{ 
                marginBottom: '0.5rem', 
                paddingBottom: '0.5rem', 
                borderBottom: index !== latestEntries.length - 1 ? '1px solid #ADD8E6' : 'none'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>{entry.source || "ไม่ระบุ"}</span>
                <span 
                  style={{ 
                    color: entry.type === "รายจ่าย" ? 'red' : entry.type === "รายรับ" ? 'green' : 'orange'
                  }}
                >
                  {entry.type === "ยอดเงินเก็บ" 
                    ? `฿${Math.abs(entry.amount).toLocaleString()}` // ไม่มีเครื่องหมาย
                    : `${entry.type === "รายจ่าย" ? '-' : '+'}฿${Math.abs(entry.amount).toLocaleString()}`}  
                </span>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'gray', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <span>{entry.date ? entry.date.replace(/-/g, "/") : "ไม่ระบุ"}</span>
                  <span> - {entry.time || "ไม่ระบุ"}</span>
                </div>
                <div>
                  <Button 
                    variant="link" 
                    size="sm" 
                    onClick={() => onEditEntry(entry)} 
                    style={{ fontSize: '0.8rem', color: '#007bff', textDecoration: 'underline' }}
                  >
                    แก้ไข
                  </Button>
                  <Button 
                    variant="link" 
                    size="sm" 
                    onClick={() => onDeleteEntry(entry)} 
                    style={{ fontSize: '0.8rem', color: 'red', textDecoration: 'underline' }}
                  >
                    ลบ
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>ไม่มีข้อมูล</p>
        )}
      </Card.Body>
    </Card>
  );
}

export default LatestEntries;
