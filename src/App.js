import React from "react";
import "./App.css";
import Header from './components/Header';
import Card from './components/Card';
import Example from './components/Description';


function App() {

  return (
    <div className="App">
   <Header/>
   <Example/>
    <Card/>
   
    </div>
  );
}

export default App;
