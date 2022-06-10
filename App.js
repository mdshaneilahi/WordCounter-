import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from 'react';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setalert(null);
    }, 1000)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1b1c1b';
      showAlert("Dark Mode Enabled", " Success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#e7bff354';
      showAlert("Light Mode Enabled", "Success");

    }
  }
  return (
    <>
      <Navbar title="Word Counter" about="About us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3 ">
        <TextForm showAlert={showAlert} heading="Enter and Copy/Paste Your Text Here..." mode={mode} />
      </div>

    </>
  );
}

export default App;
