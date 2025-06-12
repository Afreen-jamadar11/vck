import React from 'react';
import './Admissions.css'

import Footer from "../components/Footer/Footer";
import { Links } from "react-router-dom";
import Header from "../components/Herader/Header";

const Admissions = () => {
    return (
        <div>
            <Header/>
            <div ClassName="w" style={{overflow: "auto"}}>
        <h1>Admissions at Vivekanand College</h1>
        <p>Welcome to the Admissions page of Vivekanand College! We are delighted you're considering joining our vibrant academic community. Our admission process is designed to be straightforward and accessible.</p>
        <p>Please review the eligibility criteria and key dates below for the upcoming academic year. For any queries, feel free to contact our admissions office.</p>
        <div>
        <h1>Eligibility Criteria for Undergraduate Programs</h1>
        <table ClassName="q">
             <thead>
                <tr>
                    <th>Program</th>
                    <th>Minimum Qualification</th>
                    <th>Required Subjects</th>
                    <th>Minimum Marks (%)</th>
                </tr>
             </thead>
             <tbody>
                <tr>
                    <td>B.Sc. Computer Science	</td>
                    <td>10+2 (or equivalent)</td>
                    <td>Physics, Chemistry, Maths</td>
                    <td>50%</td>
                </tr>
                <tr>
                    <td>B.Com. Accounting & Finance</td>
                    <td>10+2 (or equivalent)</td>
                    <td>Commerce Stream</td>
                    <tb>45%</tb>
                </tr>
                <tr>
                    <td>B.A. English Literature	</td>
                    <td>10+2 (or equivalent)</td>
                    <td>Any Stream</td>
                    <td>40%</td>
                </tr>
             </tbody>
              </table>
       </div>
       <h5>Application Process</h5>
       <ol>
        <li><strong>Online Application:</strong>Online Application: Fill out the application form available on our portal.</li>
        <li><strong>Document Submission:</strong> Upload scanned copies of required documents (mark sheets, ID proof, etc.).</li>
        <li><strong>Entrance Exam (if applicable):</strong>Appear for the college's entrance examination.</li>
        <li><strong>Merit List & Interview:</strong> Check the merit list and attend the interview if shortlisted.</li>
        <li><strong>Fee Payment:</strong> Complete the admission by paying the required fees.</li>
       </ol>
       <p>For detailed information on postgraduate program admissions, specific program syllabi, and fee structures, please visit our 
       <Links to="/coursepage">CoursePage</Links> or
       <Links to="/contactpage">ContactPage</Links> directly
       </p>
        </div>
         <Footer/>
        </div>
    )

}
export default Admissions