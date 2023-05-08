// import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js';

// const ChartComponent = () => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const ctx = chartRef.current.getContext('2d');
//     const visitorData = [247, 312, 291, 344, 222];

//     const data = {
//       labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
//       datasets: [
//         {
//           label: 'Number of Visitors',
//           data: visitorData,
//           backgroundColor: 'rgba(54, 162, 235, 0.5)',
//           borderColor: 'rgba(54, 162, 235, 1)',
//           borderWidth: 1,
//         },
//       ],
//     };

//     const options = {
//       scales: {
//         y: {
//           beginAtZero: true,
//         },
//       },
//     };

//     new Chart(ctx, {
//       type: 'bar',
//       data: data,
//       options: options,
//     });
//   }, []);

//   return <canvas ref={chartRef} />;
// };

// export default Chart;
