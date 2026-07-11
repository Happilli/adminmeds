import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

function Login(){

const navigate=useNavigate();

const [showPassword,setShowPassword]=useState(false);

const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const handleLogin=(e)=>{

e.preventDefault();

const adminEmail="";

const adminPassword="";

if(
email===adminEmail &&
password===adminPassword
){

navigate("/dashboard");

}
else{

alert("Invalid credentials");

}

};

return(

<div className="login-container">

<div className="left-panel">

<div className="brand-container">

<div className="logo">

<LocalHospitalIcon
sx={{fontSize:50}}
/>

</div>

<h1>MediSync</h1>

<p className="tagline">

Smart Hospital Administration System

</p>

</div>

<div className="feature-list">

<div className="feature-item">

<div className="feature-icon">
🏥
</div>

<div>

<h3>Hospital Management</h3>

<p>
Manage departments and operations efficiently
</p>

</div>

</div>

<div className="feature-item">

<div className="feature-icon">
👨‍⚕️
</div>

<div>

<h3>Doctors & Patients</h3>

<p>
Monitor healthcare activities easily
</p>

</div>

</div>

<div className="feature-item">

<div className="feature-icon">
📅
</div>

<div>

<h3>Appointment Scheduling</h3>

<p>
Track appointments and workflows
</p>

</div>

</div>

</div>

</div>

<div className="right-panel">

<div className="login-card">

<h2>Hospital Admin Portal</h2>

<p className="welcome">

Sign in to continue

</p>

<form onSubmit={handleLogin} autoComplete="off">

<div className="input-group">

<MailIcon className="input-icon"/>

<input
type="email"
placeholder="Email"
value={email}
autoComplete="username"
onChange={(e)=>setEmail(e.target.value)}
/>

</div>

<div className="input-group">

<LockIcon className="input-icon"/>

<input
type={
showPassword
?
"text"
:
"password"
}
placeholder="Password"
value={password}
autoComplete="current-password"
onChange={(e)=>setPassword(e.target.value)}
/>

<div
className="eye-icon"
onClick={()=>
setShowPassword(
!showPassword
)
}
>

{
showPassword
?
<VisibilityOffIcon/>
:
<VisibilityIcon/>
}

</div>

</div>

<button className="login-btn">

Login

</button>

</form>

</div>

</div>

</div>

)

}

export default Login;