import { useState } from 'react';
import styled from 'styled-components';

const Question = styled.h2`
  margin: 8px;
`;

export default function GameScreen({ setScreen, setUsername }) {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Question></Question>
    </>
  );
}
