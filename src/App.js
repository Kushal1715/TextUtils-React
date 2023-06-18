
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert'
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  const [mode,setMode] = useState("light");

  const [alert,setAlert] = useState(null);

  const showAlert = (msg,typeOf)=>{
    setAlert({
      message: msg,
      type: typeOf
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "rgb(55, 67, 105)";
      showAlert("Dark mode is enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled","success");
    }
  }

  const toggleMode2 = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "green";
      showAlert("Green mode is enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled","success");
    }
  }

  const toggleMode3 = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "red";
      showAlert("Red mode is enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled","success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} toggleMode2={toggleMode2} toggleMode3={toggleMode3}/>
      <Alert alert={alert}/>
      <Routes>
          <Route exact path="/" element={<TextForm heading="Enter the text below to analyze:" mode={mode} showAlert={showAlert}/>} />
          <Route exact path="/about" element={<About heading="About Us"/>} />
      </Routes>
      
    </Router>
    </>
  );
}

export default App;
