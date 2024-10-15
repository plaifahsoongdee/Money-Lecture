import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = {
  "รายรับ": 'green',
  "รายจ่าย": 'red',
  "เงินเก็บ": 'orange',
  "No Data": '#CCCCCC'
};

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    const { name, type, status, time, value } = payload[0].payload;
    return (
      <div style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc' }}>
        <p>ยอดเงิน: ฿{value}</p>
      </div>
    );
  }
  return null;
}

function TrafficSourceChart({ data }) {
  const hasData = data && data.some(item => item.amount !== 0);
  const chartData = hasData 
    ? data.map(item => ({
        name: item.type,
        value: Math.abs(item.amount),
      })) 
    : [{ name: "No Data", value: 1 }];

  const uniqueLegend = hasData ? [
    { value: "รายรับ", type: "square", color: COLORS["รายรับ"] },
    { value: "รายจ่าย", type: "square", color: COLORS["รายจ่าย"] },
    { value: "เงินเก็บ", type: "square", color: COLORS["เงินเก็บ"] },
  ] : [{ value: "No Data", type: "square", color: COLORS["No Data"] }];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <PieChart width={400} height={400}>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          label={!hasData ? { position: 'center', value: "No Data" } : undefined}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend payload={uniqueLegend} />
      </PieChart>
    </div>
  );
}

export default TrafficSourceChart;
