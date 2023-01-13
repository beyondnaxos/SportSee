import React, { useEffect, useState } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'

export default function AverageSession(props) {
    
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

  const averageMap = props.average.map((item, index) => {
    return {
      name: days[index],
      uv: item.sessionLength,
      amt: 2400,
    }
  })

  console.log(averageMap);

  const renderLineChart = (
    <LineChart width={250} height={250} data={averageMap}>
      <CartesianGrid horizontal={false} vertical={false} stroke="#ccc" fill='#FF0101'/>
      <Line type="monotone" dataKey="uv" strokeWidth="2" stroke="#fff" />
      <XAxis dataKey="name" />
     
      {/* <Line type="monotone" dataKey="pv" strokeWidth="2" stroke="#8884d8" /> */}
    </LineChart>
  )

  return <div>
    {renderLineChart}
  </div>
}
