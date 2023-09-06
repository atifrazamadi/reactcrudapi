import React from "react";
import { useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import EnhancedTextForm from "./components/TextForm/TextForm";
import Alert from "./components/Alert/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes

function App() {
  const [mode, setMode] = useState("light");
  const [alter, setAlter] = useState(null);

  const showAlert = (message, type) => {
    setAlter({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlter(null);
    }, 1500);
  };

  const Orange = () => {
    setMode("danger");
    document.body.style.backgroundColor = "orange";
    showAlert(" Orange mode has been enabled", "success");
    document.title = "TextUtils - Orange Mode";
  };

  const Yellow = () => {
    setMode("danger");
    document.body.style.backgroundColor = "yellow";
    showAlert(" Orange mode has been enabled", "success");
    document.title = "TextUtils - Yellow Mode";
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#48364a";
      showAlert(" dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  const title = "TextUtils";
  const heading = "Enter the text here  analize";

  return (
    <>
      <Router>
        <Navbar title={title} mode={mode} toggleMode={toggleMode} Orange={Orange} Yellow={Yellow} />
        <Alert alert={alter} />

        <Routes>
          <Route exact path="/about" element={<About />} /> 
          <Route exact path="/" element={<EnhancedTextForm heading={heading} mode={mode} showAlert={showAlert} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
