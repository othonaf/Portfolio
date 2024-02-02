import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BackApp, Pai, BackFooter } from './styled';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Trabalhos from './Trabalhos';
import { LanguageProvider } from './LanguageContext';

function App() {
  return (
    <Router>
      <LanguageProvider>
      <BackApp />
        <Pai>
          <div>
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/Trabalhos" element={<Trabalhos />} />
          </Routes>
          <BackFooter>
            <Footer />
          </BackFooter>
        </Pai>
      </LanguageProvider>
    </Router>
  );
}

export default App;

