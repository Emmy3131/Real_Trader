import React from 'react'
import Chart from 'react-apexcharts'

export const CandleChart = () => {
  const series = [
    {
      data: [
        [1538856000000, 6593.34, 6600, 6582.63, 6600], 
        [1538856900000, 6595.16, 6604.76, 6590.73, 6593.86]
      ]
    }
  ]

  const options = {
    candlestick: {
      colors: {
        upward: '#3C90EB',
        downward: '#DF7D46'
      }
    }
  };
  const series1 = [{
    data: [{
      x: new Date(2016,),
      y: [51.98, 56.29, 51.59, 53.85]
    },
    {
      x: new Date(2016, '002', '001'),
      y: [53.66, 54.99, 51.35, 52.95]
    },
    {
      x: new Date(2016, '008', '001'),
      y: [52.76, 57.35, 52.15, 57.03]
    }]
  }]
  return (
    <div className=''>
      <Chart type='candlestick' series={series} options={options} width={'100%'}/>
    </div>
  )
}

