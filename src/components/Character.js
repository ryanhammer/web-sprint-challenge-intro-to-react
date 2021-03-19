// Write your Character component here
import React from 'react';
import styled from 'styled-components';

// This section creates a line with character name and a button to expand details for each character in the data pulled from the API

// Add styling to components of Character section
const StyledCharacter = styled.section`
  color: ${prop => prop.theme.primaryColor};
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    color: ${prop => prop.theme.tertiaryColor};
  }
  
  p {
    width: 20%;
  }

  button {
    color: ${prop => prop.theme.primaryColor};
    width: 10%;
    background-color: #00008B;
    padding: 0.75rem;
    border: none;
    border-radius: 0.75rem;
  }
`

export default function Character({ info, action }) {
  return (
    <StyledCharacter >
      <p>{info.name}</p>
      <button onClick={() => action(info.url)}>
        See More
      </button>
      <div>

      </div>
    </StyledCharacter>
  )
}
