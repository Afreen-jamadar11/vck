import React from "react" 
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import CoursesPage from "./pages/CoursesPage"
import  ContactPage from "./pages/ContactPage"
import Admissions from "./pages/Admissions"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ChatbotComponet from "./components/Chatbot/ChatbotComponent"
const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/aboutpage" element={<AboutPage/>}/>
                    <Route path="/coursespage" element={<CoursesPage/>}/>
                    <Route path="/contactpage" element={<ContactPage/>}/>
                    <Route path="/admissions" element={<Admissions/>}/> 
                </Routes>
                <ChatbotComponet />
                </div>
            </Router>
        
    )
}

export default App
