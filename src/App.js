import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';
import Details from './components/Details';

const App = () => {
  // Define state for getting character info and for expanding character info on button click. Each character in the data set has a unique url attached, so the second state variable will be on that piece of information
  const [characters, setCharacters] = useState([]);
  const [currentCharUrl, setCurrentCharUrl] = useState(null);

  // Get data from API with useEffect and axios.get

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(res => {
        setCharacters(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  // Functions for opening and closing extra character info 
  const openDetails = url => {
    setCurrentCharUrl(url);
  }

  const closeDetails = () => {
    setCurrentCharUrl(null);
  }
  
  // Return actual Dom component to be rendered in index.js. I've updated names from 'div' throughout document because in Unit 1 we were told Semantic HTML is always preferable
  return (
    <body className="App">
      <header>
        <h1>Star Wars Characters</h1>
      </header>
      <section className="main-section">
        <h2>Character</h2>
        {
          characters.map(char => {
            return <Character key={char.url} info={char} action={openDetails} />
          })
        }
        {
          currentCharUrl && <Details charUrl={currentCharUrl} close={closeDetails} />
        }
        <br></br>
      </section>
    </body>
  );
}

export default App;
