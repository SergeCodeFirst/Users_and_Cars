import './App.css';
import React, { useEffect } from 'react';
import axios from 'axios';

import { useState } from 'react';



function App() {
  const [grettings, setGrettings] = useState({});
  
  useEffect((req, res) => {
    axios.get("http://localhost:8000/api")
      .then(res => {
        // console.log(res.data);
        setGrettings(res.data);
      })
      .catch(err => {
        console.log({error: err});
      })
  }, [])

  return (
    <div className="App">
      <h1>My App: {grettings.msg}</h1>
      <p>{grettings.results[0]}</p>
    </div>
  );
}

export default App;
