import "./WeeklyChart.css";

import {

BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer

}
from "recharts";

function WeeklyChart(){

const data=[

{day:"Mon",appointments:20},
{day:"Tue",appointments:35},
{day:"Wed",appointments:28},
{day:"Thu",appointments:40},
{day:"Fri",appointments:25},
{day:"Sat",appointments:15},
{day:"Sun",appointments:10}

];

return(

<div className="chart-card">

<div className="chart-header">

<h3>

Weekly Appointments

</h3>

<p className="chart-subtitle">

Number of appointments for current week

</p>

</div>

<div className="chart-wrapper">

<div className="chart-inner">

<ResponsiveContainer
width="100%"
height="100%"
>

<BarChart
data={data}
barSize={35}
barCategoryGap="10%"
margin={{
top:10,
right:5,
left:0,
bottom:0
}}
>

<XAxis
dataKey="day"
tick={{
fontSize:14
}}
axisLine={false}
tickLine={false}
/>

<YAxis
axisLine={false}
tickLine={false}
/>

<Tooltip/>

<Bar
dataKey="appointments"
fill="#4c35e0"
radius={[8,8,0,0]}
/>

</BarChart>

</ResponsiveContainer>

</div>

</div>

</div>

)

}

export default WeeklyChart;