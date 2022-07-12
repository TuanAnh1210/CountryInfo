import React, { useContext } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeContext } from "./components/ThemeContext/ThemeContext";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import CountryDetail from "./components/MainContent/CountriesDetail";
import Footer from "./components/Footer";

function App() {
  const themeContext = useContext(ThemeContext);
  return (
    <AppContainer className={themeContext.theme}>
      <Router>
        <Header />
        <CotentContainer>
          <Routes>
            <Route exact path="/" element={<MainContent />} />
            <Route path="/region/:regionName" element={<MainContent />} />
            <Route path="/country/:countryName" element={<CountryDetail />} />
            <Route path="/search/:name" element={<MainContent />} />
          </Routes>
        </CotentContainer>
        <Footer />
      </Router>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const CotentContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: block;
  margin: 0 auto;
  padding: 0 12px;
`;
