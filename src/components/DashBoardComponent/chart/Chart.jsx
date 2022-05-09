import React from 'react';
import './Chart.scss';
import { LineChart, Line, XAxis,Area, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,AreaChart } from 'recharts';

const Chart = ({aspect,title}) => {
   const data = [
       {name:"January", Total:1000},
       {name:"February", Total:5024},
       {name:"March", Total:5443},
       {name:"April", Total:3451},
       {name:"May", Total:3545},
        {name:"June", Total:4533},
       {name:"July", Total:1200},
       {name:"August", Total:4565},
       {name:"September", Total:777},
       {name:"October", Total:3000},
       {name:"November", Total:1100},
       {name:"December", Total:1503}
      
    ]



  return (
    <div className='chart'>
        <div className="title">{title} </div>
        <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" stroke='gray' />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#Total)" />
</AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart