import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { AppProvider } from "./components/AppContext";
import Login from "./components/Login";
import People from "./components/People";
import Starships from "./components/Starships";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/People" element={<People />} />
            <Route path="/Starships" element={<Starships />} />
          </Routes>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
