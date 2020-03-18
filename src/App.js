import React, {useEffect} from "react";
import "./App.css";
import axios from 'axios';

function App() {

  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=8v7DbvMh9GBYWahe2aPCe4UZ8ghdqgKGQmw6EmEB')
    .then(response => 
      console.log(response)
      )
      .catch(error => {
        return ('not working', error)
      });
      
    }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
