import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BackApp, Pai, } from './styled';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Trabalhos from './components/Trabalhos';
import { LanguageProvider } from './LanguageContext';

function App() {
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
          </Routes>
          <Footer />
        </Pai>

      </LanguageProvider>
    </Router>
  );
}

export default App;

