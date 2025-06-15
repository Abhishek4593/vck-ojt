import {  Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AdmissionPage from "./pages/AdmissionPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/admission" element={<AdmissionPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/courses" element={<CoursesPage/>} />
          <Route path="/notfound" element={<NotFoundPage/>} />
        </Routes>
      </Router>

    </>
  )
}

export default App;