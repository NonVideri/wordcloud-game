import { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import mockData from '../mockData';
import Button from '../components/Button';
import Container from '../components/Container';
import Item from '../components/Item';
import { ScoreContext } from '../contexts/ScoreContext';

const Question = styled.h2`
  margin: 16px;
`;

const WordsBox = styled.div`
  display: block;
  position: relative;
  margin: auto;
  width: 600px;
  height: 250px;
  border-style: solid;
  border-width: 1px;
  border-color: black;
  border-radius: 5px;
  padding: 2em;
  text-align: center;
  font-size: 1.25em;
  font-weight: 600;
  white-space: pre-wrap;
`;

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * array.length);
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const picked = [];

export default function GameScreen({ setScreen }) {
  const [data, setData] = useState(null);
  const { scoring, setScoring, score, setScore } = useContext(ScoreContext);

  useEffect(() => {
    const dataSet = { ...mockData[Math.floor(Math.random() * mockData.length)] };
    dataSet.question = dataSet.question.slice(0, 1).toUpperCase() + dataSet.question.slice(1);
    shuffleArray(dataSet.all_words);
    setData(dataSet);
  }, []);

  const handleClick = () => {
    if (scoring) setScreen(2);
    else setScoring(true);
  };

  return (
    <Container>
      <Question>{data?.question}</Question>
      <WordsBox id="wordbox">
        {data?.all_words.map((word, index) => (
          <Item key={index} text={word} good={data.good_words.includes(word)} picked={picked} />
        ))}
      </WordsBox>
      <Button onClick={handleClick}>{!scoring ? 'check answers' : 'finish game'}</Button>
    </Container>
  );
}
