import { useState } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 40px;
`;

const PlayButton = styled.button`
  border-radius: 3px;
`;

export default function LoginScreen({ setScreen, setUsername }) {
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    setUsername(input);
    setInput('');
    setScreen(1);
  };

  return (
    <>
      <Title>Wordcloud game</Title>
      <br />
      <input value={input} onInput={handleInput} placeholder="Enter your nickname here..." />
      <br />
      <PlayButton onClick={handleClick}>play</PlayButton>
    </>
  );
}
