import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';
import Details from './components/Details';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  const [currentCharUrl, setCurrentCharUrl] = useState(null);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(res => {
        setCharacters(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const openDetails = url => {
    setCurrentCharUrl(url);
  }

  const closeDetails = () => {
    setCurrentCharUrl(null);
  }
  

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
