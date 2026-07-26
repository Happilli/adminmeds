import "./Navbar.css";
import { MagnifyingGlassIcon, BellIcon } from "@phosphor-icons/react";

function Navbar() {
    return (
        <div className="navbar">
            <div className="search-bar">
                <MagnifyingGlassIcon size={20} />
                <input type="text" placeholder="Search anything..." />
            </div>
            <div className="profile">
                <BellIcon size={22} />
                <img src="https://i.pravatar.cc/40" alt="" />
                <div>
                    <h4>Admin</h4>
                    <p>Administrator</p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;