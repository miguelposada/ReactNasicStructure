import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home"; // Import the Home component
import About from "./pages/About";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          {/* Other common components can be placed here (e.g., Header) */}
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* Add more routes for other pages if needed */}
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
