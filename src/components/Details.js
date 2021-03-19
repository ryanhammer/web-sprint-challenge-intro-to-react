import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function Details(props) {
  const { charUrl, close } = props

  // State variable to condition on clicking of button to open or close details
  const [details, setDetails] = useState(null)

  // Use effect below gets specific detail data when button on page is clicked to expand
  useEffect(() => {
    axios.get(`${charUrl}`)
      .then(res => { setDetails(res.data) })
      .catch(err => console.log(err))
  }, [charUrl])

  // Create a styled component; had a little trouble finding colors to match the background image but I couldn't resist changing to a different Star Wars related photo. Probably would make an actual app look nicer but we're a little time limited with these sprint challenges after all
  const StyledDetails = styled.section`
    h3 {
      color: #00008b;
    }

    p {
      color: white;
    }
  `

  return (
    <StyledDetails>
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
