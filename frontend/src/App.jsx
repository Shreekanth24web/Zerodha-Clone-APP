
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FrontendRoutes from './landing_page/FrontendRoutes';
import Dashboard from './dashboard/Home';
function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/*" element={<FrontendRoutes />} />
    </Routes>
  );
}

export default App;