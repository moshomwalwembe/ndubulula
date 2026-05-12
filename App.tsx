import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import WebDevelopment from './pages/services/WebDevelopment';
import GraphicDesign from './pages/services/GraphicDesign';
import ITConsultation from './pages/services/ITConsultation';
import CostEstimator from './pages/CostEstimator';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/web-development" element={<WebDevelopment />} />
          <Route path="services/graphic-design" element={<GraphicDesign />} />
          <Route path="services/it-consultation" element={<ITConsultation />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cost-estimator" element={<CostEstimator />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;