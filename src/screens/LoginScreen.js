import { useState } from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import Button from '../components/Button';

const Title = styled.h1`
  font-size: 40px;
  margin: 0px;
`;

const NameInput = styled.input`
  width: 30%;
  height: 30px;
  border-radius: 3px;
  border-color: gray;
  padding: 8px;
  margin: 16px 0px;

  ::placeholder {
    color: black;
    opacity: 1;
  }
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
      <Button onClick={handleClick}>play</Button>
    </Container>
  );
}
