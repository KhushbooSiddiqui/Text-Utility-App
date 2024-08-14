import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = ()=>{
    if(mode ==='dark'){
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled","success")
    }
    else{
      setMode ('dark');
      document.body.style.backgroundColor = '#31344C';
      showAlert("Dark mode has been enabled","success")
    }
  }

  return (
    <>
    <BrowserRouter>
      <Navbar title="mytextutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route path="/" element={ <TextForm heading="Enter the text of your choice" mode={mode}/>}/> 
          <Route path="/About" element={ <About/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}




export default App;
