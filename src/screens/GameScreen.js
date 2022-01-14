import { useEffect, useState } from 'react';
import styled from 'styled-components';
import mockData from '../mockData';
import Button from '../components/Button';
import Container from '../components/Container';

const Question = styled.h2`
  margin: 8px;
`;

const WordsBox = styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: black;
  padding: 2em;
  width: 100%;
  height: 60%;
  font-size: 1.5em;
  text-align: center;
  margin: 8px;
  white-space: pre-wrap;
`;

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * array.length);
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export default function GameScreen({ setScreen }) {
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const dataSet = { ...mockData[Math.floor(Math.random() * mockData.length)] };
    dataSet.question = dataSet.question.slice(0, 1).toUpperCase() + dataSet.question.slice(1);
    shuffleArray(dataSet.all_words);
    setData(dataSet);
  }, []);

  const handleClick = () => {
    if (checked) setScreen(2);
    else {
      setChecked(true);
    }
  };

  return (
    <Container>
      <Question>{data?.question}</Question>
      <WordsBox></WordsBox>
      <Button onClick={handleClick}>{!checked ? 'check answers' : 'finish game'}</Button>
    </Container>
  );
}
