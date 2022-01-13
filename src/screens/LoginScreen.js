import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const Title = styled.h1`
  font-size: 40px;
  margin: 0px;
`;

const NameInput = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 3px;
  padding: 8px;
  margin: 16px 0px;

  ::placeholder {
    color: black;
    opacity: 1;
  }
`;

const PlayButton = styled.button`
  font-size: 14px;
  color: deepSkyBlue;
  padding: 8px 25px;
  background-color: white;
  border-radius: 3px;
  border-color: deepSkyBlue;
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
    <Container>
      <Title>Wordcloud game</Title>
      <br />
      <NameInput value={input} onInput={handleInput} placeholder="Enter your nickname here..." />
      <br />
      <PlayButton onClick={handleClick}>play</PlayButton>
    </Container>
  );
}
