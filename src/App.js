import React from "react";
import { BrowserRouter as Router , Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import Grid from "./Components/Grid";
import NavigationBar from "./Components/NavigationBar";

function App() {
  return (
    <Router>
        <NavigationBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Grid />} />

      </Routes>
    </Router>
  );
}

export default App;
