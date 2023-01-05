import React from "react";
import "../style/main.css";

const Navbar = () => {
return (
    <header>
        <h3>Logo</h3>
        <nav>
           <a href="/"> Home</a>
            <a href="/addUser"> addUser</a>
            <a href="/editUser"> Edit User</a>
            <a href="/alldata"> All User</a>

        </nav>
    </header>
);
}

export default Navbar;