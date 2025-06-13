import React from "react"

import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"



const CoursesPage = () => {
    return (
        <div>
            <Header/>
              <div>
            <h1>Our Academic Programs</h1>
            <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
            <h2>Discover Campus Life</h2>
            <video src="/public/videos/video1.mp4" controls></video>
            <h2>Undergraduate Programs (UG)</h2>
      <ul>
        <li>**Bachelor of science(B.Sc)
        <ul>
            <li>Computer Science (3 years)</li>
            <li>Information Technology (3 years)</li>
            <li>Biotechnology (3 years)</li>
        </ul>
        </li>
        <li>**Bachelor of Commerce
        <ul>
            <li>Accounting & Finance (3 years)</li>
            <li>Banking & Insurance (3 years)</li>
        </ul>
        </li>
        <li>**Bachelor of Arts(B.A.)
        <ul>
            <li>English Literature (3 years)</li>
            <li>Psychology (3 years)</li>
        </ul>
        </li>
      </ul>
      <h3>Postgraduate Programs (PG)</h3>
      <ul>
        <li>**Master of Science (M.Sc.)**
        <ul>
          <li>Computer Science (2 years)</li>
          <li>Information Technology (2 years)</li>
        </ul>
        </li>
        <li>**Master of Commerce (M.Com)** (2 years)</li>
        <li>**Master of Arts (M.A.)** (2 years)</li>
      </ul>
      <h5>Program Details & Fee Structure (Annual)</h5>
      <table>
        <thead>
          <tr>
            <th>Program Type</th>
            <th> Course Name</th>
            <th>Duration</th>
            <th>Annual Fee ()</th>
            <th>Eligibility</th>
          </tr>
         </thead>
         <tbody>
          <tr>
            <tb>U G</tb>
            <tb> B.Sc. Computer Science</tb>
            <tb>3 Years</tb>
            <tb>70000</tb>
            <tb>10+2 Commerce</tb>
          </tr>
          <tr>
            <tb>PG</tb>
           <tb>MSc. Information Technology</tb>
           <tb>2 Years</tb>
           <tb>95000</tb>
           <tb>BSc. IT/CS</tb>
          </tr>
         </tbody>
      </table>
      
      <h4>Specialized & Vocational Courses</h4>
      <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p>
      <h5>Explore detailed syllabi and admission criteria on our Admissions page.</h5>
      <button>Inquire About Courses</button>
        </div>
          <Footer/>
        </div>
    ) 
    
}

export default CoursesPage