import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./pages";
import { Dashboard } from "./pages/dashboard";
import Particles from "./utils/Particles";

function App() {
  return (
    <>
      <Particles className="Particles" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
