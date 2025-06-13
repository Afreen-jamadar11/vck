import React, { useState } from "react" 
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import CoursesPage from "./pages/CoursesPage"
import  ContactPage from "./pages/ContactPage"
import Admissions from "./pages/Admissions"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ChatbotComponet from "./components/Chatbot/ChatbotComponent"
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup"
const App = () => {
    const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
    return (
        <div>
            <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Afreen jamadar"
          studentPhotoUrl="/Images/Afreen.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/aboutpage" element={<AboutPage/>}/>
                    <Route path="/coursespage" element={<CoursesPage/>}/>
                    <Route path="/contactpage" element={<ContactPage/>}/>
                    <Route path="/admissions" element={<Admissions/>} />
                </Routes>
                <ChatbotComponet />
                </div>
            </Router>
        </div>
    )
}

export default App
