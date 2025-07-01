import {  Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AdmissionPage from "./pages/AdmissionPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import NotFoundPage from "./pages/NotFoundPage";
import './styles/Pages.css'
import './App.css'
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";
import ChatbotComponent from "./components/Chatbot/ChatBotComponents";
import { useState } from "react";

const App = () => {
 const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };


  return (
    <> 
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Abhishek Sardar Chougule"
          studentPhotoUrl="/Images/abhi.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>


      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/admission" element={<AdmissionPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/courses" element={<CoursesPage/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </Router>
      <ChatbotComponent/>

    
    
    </>
  )
}

export default App;