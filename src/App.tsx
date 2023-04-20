import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Latest from "./pages/Latest";
import Business from "./pages/Business";
import Sports from "./pages/Sports";
import Politics from "./pages/Politics";
import Tech from "./pages/Tech";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="Latest News" element={<Latest />} />
        <Route path="Business" element={<Business />} />
        <Route path="Sports" element={<Sports />} />
        <Route path="Politics" element={<Politics />} />
        <Route path="Tech" element={<Tech />} />
      </Routes>
    </div>
  );
}

export default App;
