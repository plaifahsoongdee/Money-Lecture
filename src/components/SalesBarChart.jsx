import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Cell } from 'recharts';

const COLORS = {
  "รายรับ": 'green',
  "รายจ่าย": 'red',
  "เงินเก็บ": 'orange',
  "No Data": '#CCCCCC'
};

function SalesBarChart({ data }) {
  const hasData = data && data.length > 0 && data.some(item => item.sales !== 0);

  const uniqueLegend = hasData ? [
    { value: "รายรับ", type: "square", color: COLORS["รายรับ"] },
    { value: "รายจ่าย", type: "square", color: COLORS["รายจ่าย"] },
    { value: "เงินเก็บ", type: "square", color: COLORS["เงินเก็บ"] },
  ] : [{ value: "No Data", type: "square", color: COLORS["No Data"] }];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <div style={{ marginBottom: '40px' }}>
        <BarChart width={500} height={300} data={hasData ? data : [{ name: "No Data", sales: 0 }]}>
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(value) => `฿${value}`} />
          <Tooltip formatter={(value) => `฿${value}`} />
          <Legend payload={uniqueLegend} />
          <Bar dataKey="sales">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[entry.name] || COLORS["No Data"]} />
            ))}
          </Bar>
          {!hasData && (
            <text
              x={250}
              y={150}
              textAnchor="middle"
              fill="#CCCCCC"
              style={{ fontSize: '18px' }}
            >
              No Data
            </text>
          )}
        </BarChart>
      </div>
    </div>
  );
}

export default SalesBarChart;
