import React, { useState } from "react"
import {Link} from "react-router-dom";
import './Header.css'
const Header = () => {
    const [isOpen,setIsOpen]=useState()
    return (
        <header id="w">
            <nav id="z">
                <><strong>Vivekanand College</strong></>
                <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <div className="bar"/>
                <div ClassName="bar"/>
                <div className="bar"/>
                <div className="bar"/>
                </div>
                
                    {isOpen && (
                        <div className="menu">
                <Link to='/' id="y">HomePage  </Link>
                <Link to='/aboutpage' id="y">AboutPage </Link>
                <Link to='/coursespage' id="y">CoursesPage </Link>
                <Link to='/contactpage' id="y">ContactPage </Link>
                <Link to='/admissions'><button id="x">Apply Now!</button> </Link>
                </div>
                    )
                }
                 <div>
                    <Link to='/' id="y">HomePage  </Link>
                <Link to='/aboutpage' id="y">AboutPage </Link>
                <Link to='/coursespage' id="y">CoursesPage </Link>
                <Link to='/contactpage' id="y">ContactPage </Link>
                <Link to='/admissions'><button id="x">Apply Now!</button> </Link>
                </div>

            </nav>
            </header>
    )
}

export default Header