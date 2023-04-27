import React from 'react'
import { Doughnut } from 'react-chartjs-2';
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

// // Set new default font family and font color to mimic Bootstrap's default styling
// Chart.defaults.global.defaultFontFamily = 'Nunito'
// Chart.defaults.global.defaultFontColor = '#858796'

const DonutChart = () => {
  const data = {
    labels: ['New', 'Issued', 'Lost',"Returned"],
    datasets: [
                {
                  data: [44, 34, 11, 12],
                  backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc','#ffcc89'],
                  hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf','#f0bf71'],
                  hoverBorderColor: 'rgba(234, 236, 244, 1)',
                  hoverOffset: 5,
                  
                },
              ],
   
  }

return (
  <>
  <Doughnut data={data}/>
  </>
)
}

export default DonutChart