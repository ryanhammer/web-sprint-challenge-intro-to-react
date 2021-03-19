// Write your Character component here
import React from 'react';
import styled, {keyframes} from 'styled-components';

const StyledCharacter = styled.section`
  color: ${prop => prop.theme.primaryColor};
  width: 60%;
  display: flex;
  justify-content: space-between;

  &:hover {
    color: ${prop => prop.theme.tertiaryColor};
  }

  button {
    color: ${prop => prop.theme.secondaryColor};
  }
`

export default function Character({ info, action }) {
  return (
    <StyledCharacter danger={info.name === 'Devin'}>
      {info.name}
      <button onClick={() => action(info.id)}>
        See More
      </button>
    </StyledCharacter>
  )
}
