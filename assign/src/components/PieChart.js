// src/components/PieChart.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChartComponent = ({ selectedMonth }) => {
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    fetchPieChartData();
  }, [selectedMonth]);

  const fetchPieChartData = async () => {
    try {
      const response = await axios.get('/api/pie-chart', {
        params: { month: selectedMonth }
      });
      setPieChartData(response.data);
    } catch (error) {
      console.error('Error fetching pie chart data', error);
    }
  };

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={pieChartData}
        dataKey="count"
        nameKey="_id"
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
        label
      >
        {pieChartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default PieChartComponent;
