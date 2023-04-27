import React from 'react'
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend} from 'chart.js'
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
  )

  const BarChart = () => {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Books',
            backgroundColor: '#4e73df',
            hoverBackgroundColor: '#2e59d9',
            borderColor: '#4e73df',
            data: [215, 312, 251, 841, 821, 984],
          },
        ]
    }
  
  return (
    <div className="bg">
    <Bar data={data}/>
    </div>
  )
  }
  
  export default BarChart

