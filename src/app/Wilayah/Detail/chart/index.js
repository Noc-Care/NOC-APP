import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { useState } from 'react';

const data = [
  { name: 'Group A', value: 40 },
  { name: 'Group B', value: 30 },
  { name: 'Group C', value: 30 },
  { name: 'Group D', value: 20 },
];
const COLORS = ['#0088FE', '#00C49F', '#f70808', '#FF8042' , '#FFE599', '#F938F5','#006B76','#452209' ];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
      {/* {index} */}
    </text>
  );
};

export default function  Example (props){
  const Data = props.props
  console.log(Data)
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={Data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {Data != null ?(
              Data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))
            ): null }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
}
