import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Features } from './pages/Features';
import { PricingPage } from './pages/PricingPage';
import { Integrations } from './pages/Integrations';
import { Developers } from './pages/Developers';
import { Security } from './pages/Security';
import { Solutions } from './pages/Solutions';
import { Contact } from './pages/Contact';

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/security" element={<Security />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
