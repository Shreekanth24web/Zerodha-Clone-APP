import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context) {
          const value = context.raw || 0; 
          const formattedValue = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }).format(value);

          return `: ${formattedValue}`;
        }
      }
    }
  }
};



export function PieChart({ data }) {
  return (

    <div style={{ maxWidth: '100%', width: '400px', height: 'auto', margin:'auto' }}>
      <Pie data={data} options={options} />
    </div>
  )
}
