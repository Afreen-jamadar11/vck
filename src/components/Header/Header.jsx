import React, { useState } from "react"
import {Link} from "react-router-dom";
import './Header.css'
const Header = () => {
const [isDrawerOpen, setIsDrawerOpen] = useState(false);
const toggleDrawer =() => {
    setIsDrawerOpen(!isDrawerOpen);
};
const closeDrawer = () => {
    setIsDrawerOpen(false);
};

    return (
        <header className="main-header">
            {" "}
            <div className="college-name">
                <Link to="/">Vivekanand College</Link>{"   "}
            </div>
                
                <nav className="navbar desktop-nav">
                <Link to='/' className="nav-item">HomePage  </Link>
                <Link to='/aboutpage' className="nav-item">AboutPage </Link>
                <Link to='/coursespage' className="nav-item">CoursesPage </Link>
                <Link to='/contactpage' className="nav-item">ContactPage </Link>
                <Link to='/admissions' className="nav-item btn primary-btn">Apply Now! </Link>
                </nav>
                
                <button className="hamburger-menu" onClick={toggleDrawer}>
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
      </button>
                <nav className={`drawer-nav ${isDrawerOpen ? "open" : ""}`} >
                 <button className="close-drawer-btn" onClick={toggleDrawer}>
                    ❌
                   </button> 
                <Link to='/' className="nav-item" onClick={closeDrawer}>HomePage  </Link>
                <Link to='/aboutpage'className="nav-item" >AboutPage </Link>
                <Link to='/coursespage' className="nav-item">CoursesPage </Link>
                <Link to='/contactpage' className="nav-item">ContactPage </Link>
                <Link to='/admissions'className="nav-item btn primary-btn" onClick={closeDrawer}>Apply Now! </Link>
                
                
             
               </nav>
               {isDrawerOpen && (
                <div className="drawer-overlay" onClick={toggleDrawer}></div>
               )}
            </header>
    );
}

export default Header