import "./StatCard.css";

function StatCard({

number,
title,
subtitle,
icon,
percentage

}){

return(

<div className="stat-card">

<div className="top-row">

<div className="stat-icon">

{icon}

</div>

<div className="percentage">

↑ {percentage}

</div>

</div>

<h1>{number}</h1>

<h3>{title}</h3>

<p>{subtitle}</p>

</div>

)

}

export default StatCard;