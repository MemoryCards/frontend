import React from "react";
import './App.css';
import 'bulma/css/bulma.min.css';
import Navigation from "./components/navigation";
import { Routes, Route } from "react-router-dom"
import About from "./components/about";


function App() {
  return (
      <>

        <Navigation/>
          <div className="App">
              <Routes>
                  <Route path="abouttt" element={ <About/> } />
              </Routes>
          </div>
      </>
  );
}

export default App;
