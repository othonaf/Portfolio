import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { BackApp, Pai, } from './styled';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Trabalhos from './components/Trabalhos';
import JobMatcher from './components/JobMatcher';
import { LanguageProvider } from './LanguageContext';
import ReactGA from "react-ga4";

function App() {

  const GOOGLE_ID = "G-G3WHKS8N5L";
  ReactGA.initialize(GOOGLE_ID);
  ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });

   return (
    <Router>
      <LanguageProvider>
        <Pai>
          <BackApp />
          <div>
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/Trabalhos" element={<Trabalhos />} />
            <Route path="/JobMatcher" element={<JobMatcher />} />
          </Routes>
          <Footer />
        </Pai>

      </LanguageProvider>
    </Router>
  );
}

export default App;

