import React from "react"
import Header from "../components/Herader/Header"
import Footer from "../components/Footer/Footer"
const ContactPage = () => {
  return (
    <div>
      <Header/>
        <div>
        <h1>Contact Us</h1>
         <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
         <h1>General Enquiries</h1>
         <h2>Vivekanand College Main Campus</h2>
         <p>[Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]India</p>
         <p>Phone: **+91 12345 67890**</p>
        <p> Email: **info@vivekanandcollege.edu**</p>
        <p> Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST </p>
         <h1>Admissions Office</h1>
         <p>For all admission-related queries regarding undergraduate or postgraduate programs:</p>
          <p>Phone: +91 98765 43210</p>
         <p> Email: admissions@vivekanandcollege.edu</p>
          <h1>Student Support Services</h1>
          <p>For current student support, academic advising, or general assistance:</p>
           <p>Phone: +91 87654 32109</p>
          <p>Email: studentsupport@vivekanandcollege.edu</p> 
           <h1>Find Us on the Map</h1>
            <p>[You can embed a Google Map here later using an iframe or a React map library.]</p>
            <h1>Send Us a Message</h1>
            <a href="https://maps.app.goo.gl/84nfu1qCsVTs9ZNt6" target="_blank">View on Google Maps</a>
            <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>

    </div>
     <Footer/>
    </div>
  )
}

export default ContactPage