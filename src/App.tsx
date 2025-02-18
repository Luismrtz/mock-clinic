import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routesConfig } from "./routesConfig";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {routesConfig.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
