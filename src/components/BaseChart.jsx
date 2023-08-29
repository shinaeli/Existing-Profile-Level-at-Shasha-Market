import React, { useState } from 'react'
import Chart from "react-apexcharts";


const BaseChart = () => {
  const [options, setOptions] = useState({
    chart: {
      background: '#db7053',
      foreColor: 'indigo'
    },
    xaxis: {
       type: 'numeric'
    },
    tooltip: {
      x: {
        formatter: function(val) {
          return val.toFixed(1);
        }
      }
    },
    dataLabels: {
              enabled: false
          },
          title: {
              text: "Existing Proflie Level Taken At Shasha Market Area(One Unit Per Point)",
              align: "center",
              margin: 20,
              offsetY: 20,
              style: {
                fontSize: "25px"
              }
            }
  })
  const [series, setSeries] = useState([{
    name: "Chainage",
    data: [[0, 50.630], [10, 50.435], [20, 50.247], [30, 50.035], [40, 49.740], [50, 49.475], [60, 49.485], [70, 49.831], 
  [73, 49.200], [76, 49.805], [80, 49.755], [90, 49.825], [100, 50.065], [110, 50.065], [120, 50.245],
  [130, 50.555], [140, 50.775], [150, 50.099], [160, 50.674]]
  }])


  return (
    <div>
      <Chart options={options} series={series} type='line' width='100%' height='450' />       
    </div>
  )
}

export default BaseChart