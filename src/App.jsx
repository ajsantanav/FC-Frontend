import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import CharacterCreation from "./pages/CharacterCreation";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/creation" element={<CharacterCreation />} />
      </Routes>
    </Router>
  );
}

export default App;