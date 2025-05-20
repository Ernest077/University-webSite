import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArtNews from './components/ArtNews/ArtNews';
import Header_History from './components/Header_History/Header_History';
import Navigation from './components/Navigation/Navigation';
import Sponsors from './components/Sponsors/Sponsors';
import StudyTogether from './components/StudyTogether/StudyTogether';
import Layout from './layout/layout';
import About from './pages/AboutPage';
import Academics from './pages/AcademicsPage';
import Contact from './pages/ContactPage';
import './styles/styles.module.scss';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header_History />
                <Sponsors />
                <Navigation />
                <ArtNews />
                <StudyTogether />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;