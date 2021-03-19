import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function Details(props) {
  const { charUrl, close } = props
  const [details, setDetails] = useState(null)


  useEffect(() => {
    axios.get(`${charUrl}`)
      .then(res => { setDetails(res.data) })
      .catch(err => console.log(err))
  }, [charUrl])

  const StyledDetails = styled.section`
    h3 {
      color: #00008b;
    }

    p {
      color: white;
    }
  `

  return (
    <StyledDetails className='container'>
      <h3>Character Details:</h3>
      {
        details &&
        <>
          <p>Name: {details.name}</p>
          <p>Gender: {details.gender}</p>
          <p>Height: {details.height}</p>
          <p>Mass: {details.mass}</p>
          <p>Birth Year: {details.birth_year}</p>
          <p>Eye Color: {details.eye_color}</p>
          <p>Hair Color: {details.hair_color}</p>
          <p>Skin Color: {details.skin_color}</p>
        </>
      }
      <button onClick={close}>Close</button>
    </StyledDetails>
  )
}
