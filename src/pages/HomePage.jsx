import React from "react"

import './HomePage.css'
import Header from "../components/Herader/Header"
import Footer from "../components/Footer/Footer"
import { Link } from "react-router-dom"
const HomePage = () => {
    return (
        <div id="g">
          <Header/><br></br><br></br><br></br>
          <div id="f">
            <div id="a">
            <h1 id="b"><strong>Welcome to Vivekanand College!</strong></h1>
            <p id="b">Your journey to excellence starts here.</p>
            <Link to='/admissions'><button id="x">Apply Now!</button> </Link>
           
          </div>
          <p>**Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.</p>
          <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
          <h1>Why Choose Vivekanand College?</h1>
          <ul>
            <li>**Legacy of Excellence:** Decades of commitment to quality education.</li>
            <li>**Experienced Faculty:** Learn from renowned experts and passionate educators.</li>
             <li>**Modern Facilities:** Well-equipped labs, expansive library, and comfortable campus.</li>
             <li>**Holistic Development:** Focus on co-curricular activities, sports, and community service.</li>
             <li>**Strong Placements:** Excellent career opportunities with leading companies.</li>
          </ul>
             <h1>Campus Life & Facilities</h1>
             <img src="/Images/1.jpeg" alt="Campus View 1"id="d"/><br></br>
          <img src="/Images/image2.jpeg" alt="Campus View 2"id="e"/>
          <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
          <p>Ready to explore our courses?</p>
          <button>explore more!</button>
          </div><br></br><br></br><br></br>
          <Footer/>
        </div>
    
    )
}
 export default HomePage