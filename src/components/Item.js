import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ScoreContext } from '../contexts/ScoreContext';

const min = 15;
const max = 25;

const Word = styled.span`
  color: ${(props) => {
    if (!props.clicked) return 'black';
    else if (!props.scoring) return 'gray';
    else return props.good ? 'green' : 'red';
  }};
  line-height: 2.5em;
`;

const random = parseInt(Math.random() * (max - min) + min);

export default function Item({ text, good, picked }) {
  const [clicked, setClicked] = useState(false);
  const { scoring } = useContext(ScoreContext);

  const handleClick = () => {
    if (picked.includes(text)) picked = picked.filter((word) => word !== text);
    else picked.push(text);
    setClicked(!clicked);
  };

  return (
    <Word onClick={handleClick} clicked={clicked} good={good} scoring={scoring}>
      {' '.repeat(random) + text + ' '.repeat(random)}
    </Word>
  );
}
