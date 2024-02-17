import { BrowserRouter, Routes, Route, HashRouter} from "react-router-dom";
import EducationPage from "./pages/EducationPage/EducationPage";
import SkillsPage from "./pages/SkillsPage/SkillsPage";
import PortfoliosPage from "./pages/PortfolioPage/PortfoliosPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ExperiencesPage from "./pages/ExperiencesPage/ExperiencesPage";
import HomePage from "./pages/HomePage/HomePage";
import TestimonialsPage from "./pages/TestimonialsPage/TestimonialsPage";
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/education" element={<EducationPage/>} />
          <Route path="/skills" element={<SkillsPage/>} />
          <Route path="/portfolio" element={<PortfoliosPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
        </Routes>
      </HashRouter>
      
    </>
  );
}
export default App;
