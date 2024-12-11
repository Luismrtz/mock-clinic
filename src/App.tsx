import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routesConfig } from "./routesConfig";

const App = () => {
  return (
    <Router>
      <Routes>
        {routesConfig.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;