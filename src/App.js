
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
import React from "react";
// import { Link } from "react-router-dom";
  


// import { BrowserRouter, Route, Routes , } from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert  ("The dark mode has been Enabled" , "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert ("The Light  mode has been Enabled" ,"success");

    }
  };



  return (
    <>
    
    
      {/* <BrowserRouter> */}
        <Navbar
          title="TextUtils"
          aboutText="TextAbouts"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About/>}></Route> */}
            {/* <Route */}
              {/* exact path="/" */}
              {/* element={ */}
                <Textform
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              {/* } */}
             {/* ></Route> */}
          {/* </Routes> */}
        </div>
       {/* </BrowserRouter> */}
    </>

  );
}

export default App;