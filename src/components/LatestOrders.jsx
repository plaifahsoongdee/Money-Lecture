import React from 'react';

function LatestOrders({ selectedDate, selectedType, onOrdersUpdate }) {
    const products = [
        { date: "2024-10-15", time: "6:00", status: "แม่ให้", type: "รายรับ", amount: 50 },
        { date: "2024-10-15", time: "6:30", status: "พ่อให้", type: "รายรับ", amount: 50 },
        { date: "2024-10-17", time: "8:00", status: "ซื้อข้าวเช้า", type: "รายจ่าย", amount: -30 },
        { date: "2024-10-15", time: "9:00", status: "ซื้อขนม", type: "รายจ่าย", amount: -20 },
        { date: "2024-10-15", time: "10:00", status: "ออมเงินซื้อของเล่น", type: "เงินเก็บ", amount: 20 },
        // ข้อมูลอื่นๆ
    ];

    // คำนวณผลรวมแยกตามประเภทสำหรับวันที่เลือก
    const filteredProducts = products.filter(
        (product) => product.date === selectedDate
    );

    const totalByType = (type) => 
        filteredProducts
            .filter(product => product.type === type)
            .reduce((sum, product) => sum + product.amount, 0);

    const totalIncome = totalByType("รายรับ");
    const totalExpense = totalByType("รายจ่าย");
    const totalSaving = totalByType("เงินเก็บ");

    // ส่งค่ากลับไปยัง Overview
    React.useEffect(() => {
        onOrdersUpdate([
            { type: "รายรับ", amount: totalIncome },
            { type: "รายจ่าย", amount: totalExpense },
            { type: "เงินเก็บ", amount: totalSaving },
        ]);
    }, [selectedDate, selectedType]);

    return (
        <div style={{ background: '#f4f6f8', borderRadius: '10px', padding: '20px' }}>
            <h4 style={{ marginBottom: '20px', textAlign: 'center' }}>สรุปยอดเงินสำหรับวันที่ {selectedDate || "..."}</h4>
            {filteredProducts.length > 0 ? (
                <div>
                    {selectedType === "รวม" ? (
                        <>
                            <p>รับทั้งหมด: <span style={{ color: 'green' }}>฿{totalIncome.toLocaleString()}</span></p>
                            <p>จ่ายทั้งหมด: <span style={{ color: 'red' }}>฿{Math.abs(totalExpense).toLocaleString()}</span></p>
                            <p>เก็บทั้งหมด: <span style={{ color: 'orange' }}>฿{totalSaving.toLocaleString()}</span></p>
                        </>
                    ) : (
                        <p>
                            {selectedType === "รายรับ" && (
                                <span style={{ color: 'green' }}>รับทั้งหมด: ฿{totalIncome.toLocaleString()}</span>
                            )}
                            {selectedType === "รายจ่าย" && (
                                <span style={{ color: 'red' }}>จ่ายทั้งหมด: ฿{Math.abs(totalExpense).toLocaleString()}</span>
                            )}
                            {selectedType === "เงินเก็บ" && (
                                <span style={{ color: 'orange' }}>เก็บทั้งหมด: ฿{totalSaving.toLocaleString()}</span>
                            )}
                        </p>
                    )}
                </div>
            ) : (
                <p style={{ textAlign: 'center', color: '#888' }}>ไม่มีรายการสำหรับวันที่เลือก</p>
            )}
        </div>
    );
}

export default LatestOrders;
