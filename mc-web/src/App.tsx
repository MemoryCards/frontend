import React from 'react';
import './App.css';
import Navigation from "./components/nav";
import {createBrowserRouter} from "react-router-dom";
import ApiTest from "./components/api-test";
function App() {
  return (
    <>
        <a href={'/cards'}>cards</a>
    </>
  );
}
export default App;
