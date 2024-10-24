import React from "react";
import Dhiraj from "../assets/img/dhiraj.jpg"
import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="sideBar">
            <div className="img-container">
                <img src={Dhiraj} alt="" />
            </div>

            <h2>Dhiraj verma</h2>
            <h3>Web Developer</h3>
            <ul>
                <NavLink to='/'><li>Home</li></NavLink>
                <NavLink to='/about'><li>About</li></NavLink>
                <NavLink to='/service'><li>Service</li></NavLink>
                <NavLink to='/portfolio'><li>Portfolio</li></NavLink>
                <NavLink to='/contact'><li>Contact</li></NavLink>
            </ul>

            {/* <div className="social-box">
                <a href="https://www.facebook.com/profile.php?id=61552556764029&mibextid=ZbWKwL" className="social bx bxl-facebook"></a>
                <a href="https://www.linkedin.com/in/dhiraj-verma-52874424b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social bx bxl-linkedin"></a>
                <a className="social bx bxl-github"></a>
            </div> */}
        </div>
    )
}

export default SideBar