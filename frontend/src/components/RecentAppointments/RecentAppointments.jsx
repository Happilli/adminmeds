import "./RecentAppointments.css";
import { useState } from "react";

function RecentAppointments(){

const [appointments]=useState([

{
id:1,
patient:"John Smith",
doctor:"Dr. Robert",
date:"2026-07-05",
time:"10:00 AM",
status:"Completed"
},

{
id:2,
patient:"Sarah Johnson",
doctor:"Dr. Emily",
date:"2026-07-05",
time:"11:30 AM",
status:"Pending"
},

{
id:3,
patient:"Michael Lee",
doctor:"Dr. James",
date:"2026-07-06",
time:"02:00 PM",
status:"Cancelled"
},

{
id:4,
patient:"Emma Wilson",
doctor:"Dr. David",
date:"2026-07-06",
time:"03:15 PM",
status:"Completed"
}

]);

return(

<div className="recent-card">

<div className="recent-header">

<h3>

Recent Appointments

</h3>

<button>

View All

</button>

</div>

<table>

<thead>

<tr>

<th>Patient</th>

<th>Doctor</th>

<th>Date</th>

<th>Time</th>

<th>Status</th>

</tr>

</thead>

<tbody>

{
appointments.map((appointment)=>(

<tr key={appointment.id}>

<td>

{appointment.patient}

</td>

<td>

{appointment.doctor}

</td>

<td>

{appointment.date}

</td>

<td>

{appointment.time}

</td>

<td>

<span
className={`status ${appointment.status.toLowerCase()}`}
>

{appointment.status}

</span>

</td>

</tr>

))
}

</tbody>

</table>

</div>

)

}

export default RecentAppointments;