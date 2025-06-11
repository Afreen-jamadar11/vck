import React from "react";
import Header from "../components/Herader/Header";
import Footer from "../components/Footer/Footer";
import './Admissions.css'
const Admissions = () => {
    return (
        <div>
            <Header/>
             <div>
        <h1>Admissions at Vivekanand College</h1>
        <p>Welcome to the Admissions page of Vivekanand College! We are delighted you're considering joining our vibrant academic community. Our admission process is designed to be straightforward and accessible.</p>
        <p>Please review the eligibility criteria and key dates below for the upcoming academic year. For any queries, feel free to contact our admissions office.</p>
        <h1>Eligibility Criteria for Undergraduate Programs</h1>
        <table id="p">
             <thead>
                <tr id="p">
                    <th id="p">Program</th>
                    <th id="p">Minimum Qualification</th>
                    <th id="p">Required Subjects</th>
                    <th id="p">Minimum Marks (%)</th>
                </tr>
             </thead>
             <tbody>
                <tr id="p">
                    <tb id="p">B.Sc. Computer Science	</tb>
                    <tb id="p">10+2 (or equivalent)</tb>
                    <tb id="p">Physics, Chemistry, Maths</tb>
                    <tb id="p">50%</tb>
                </tr>
                <tr id="p">
                    <tb id="p">B.Com. Accounting & Finance</tb>
                    <tb id="p">10+2 (or equivalent)</tb>
                    <tb id="p">Commerce Stream</tb>
                    <tb id="p">45%</tb>
                </tr>
                <tr id="p">
                    <tb id="p">B.A. English Literature	</tb>
                    <tb id="p">10+2 (or equivalent)</tb>
                    <tb id="p">Any Stream</tb>
                    <tb id="p">40%</tb>
                </tr>
             </tbody>

        </table>
       
       <h1>Application Process</h1>
       <ol>
        <li><strong>Online Application:</strong>Online Application: Fill out the application form available on our portal.</li>
        <li><strong>Document Submission:</strong> Upload scanned copies of required documents (mark sheets, ID proof, etc.).</li>
        <li><strong>Entrance Exam (if applicable):</strong>Appear for the college's entrance examination.</li>
        <li><strong>Merit List & Interview:</strong> Check the merit list and attend the interview if shortlisted.</li>
        <li><strong>Fee Payment:</strong> Complete the admission by paying the required fees.</li>
       </ol>
       <p>For detailed information on postgraduate program admissions, specific program syllabi, and fee structures, please visit our <a href="CoursesPage.jsx">Courses Page</a> or <a href="ContactPage.jsx">Contact Pages</a> directly.</p>
       
        </div>
         <Footer/>
        </div>
    )

}
export default Admissions