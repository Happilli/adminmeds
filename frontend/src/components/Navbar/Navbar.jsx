import "./Navbar.css";

import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";

function Navbar(){

return(

<div className="navbar">

<div className="search-bar">

<SearchIcon/>

<input
type="text"
placeholder="Search anything..."
/>

</div>

<div className="profile">

<NotificationsIcon/>

<img
src="https://i.pravatar.cc/40"
alt=""
/>

<div>

<h4>Admin</h4>

<p>Administrator</p>

</div>

</div>

</div>

)

}

export default Navbar;