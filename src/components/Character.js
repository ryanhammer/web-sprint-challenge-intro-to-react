// Write your Character component here
import React from 'react';
import styled from 'styled-components';

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
    color: ${prop => prop.theme.secondaryColor};
    width: 10%;
    height: 20%;
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
