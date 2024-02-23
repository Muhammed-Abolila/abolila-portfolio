import { BrowserRouter, Routes, Route, HashRouter} from "react-router-dom";
import EducationPage from "./pages/EducationPage/EducationPage";
import SkillsPage from "./pages/SkillsPage/SkillsPage";
import PortfoliosPage from "./pages/PortfolioPage/PortfoliosPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ExperiencesPage from "./pages/ExperiencesPage/ExperiencesPage";
import HomePage from "./pages/HomePage/HomePage";
import TopNavbar from "./components/utilities/TopNavbar/TopNavbar";
import BottomNavbar from "./components/utilities/BottomNavbar/BottomNavbar";
import { useState } from "react";
// import TestimonialsPage from "./pages/TestimonialsPage/TestimonialsPage";
function App() {
  let[loading,setLoading]=useState(false);  
  return (
    <>
      <HashRouter>
      <TopNavbar text="Muhammed Abo Lila" loading={loading}/>
        <Routes>
          <Route path="/" element={<HomePage loading={loading}/>}/>
          <Route path="/home" element={<HomePage loading={loading}/>}/>
          <Route path="/education" element={<EducationPage loading={loading}/>} />
          <Route path="/skills" element={<SkillsPage loading={loading}/>} />
          <Route path="/portfolio" element={<PortfoliosPage loading={loading}/>} />
          <Route path="/contact" element={<ContactPage loading={loading}/>} />
          {/* <Route path="/testimonials" element={<TestimonialsPage />} /> */}
          <Route path="/experiences" element={<ExperiencesPage loading={loading}/>} />
        </Routes>
        <BottomNavbar loading={loading} setLoading={setLoading} />
      </HashRouter>
      
    </>
  );
}
export default App;
