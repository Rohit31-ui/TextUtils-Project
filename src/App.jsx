import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [mode, setMode] = useState('light');
  const [text, setText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setText('Enable Light Mode');
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setText('Enable Dark Mode');
      showAlert('Light mode has been enabled', 'success');
    }
  };

  return (
    <Router>
      <div>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} text={text} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div style={{ minHeight: '100vh' }}>

        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Hero showAlert={showAlert} mode={mode} />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
