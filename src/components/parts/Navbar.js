import React from "react";
import { Link, useLocation } from "react-router-dom";

import Button from "@mui/material/Button";

function Navbar() {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    console.log(splitLocation);
    return (
    <div>
        <Link to='/'><Button variant={splitLocation[1] === "" ? 'contained':'outlined'}>Home</Button></Link>
        <Link to='/about'><Button variant={splitLocation[1] === "about" ? 'contained':'outlined'}>About</Button></Link>
        <Link to='/blog'><Button variant={splitLocation[1] === "blog" ? 'contained':'outlined'}>Blog</Button></Link>
        <Link to='/contact'><Button variant={splitLocation[1] === "contact" ? 'contained':'outlined'}>Contact</Button></Link>
    </div>
    );
}

export default Navbar;