import { useContext, useState } from 'react';
import styled from 'styled-components';
import { ScoreContext } from '../contexts/ScoreContext';

const Word = styled.span`
  position: relative;
  color: ${(props) => {
    if (!props.clicked || !props.scoring) return 'black';
    else return props.good ? 'green' : 'red';
  }};
  line-height: 3em;
  opacity: ${(props) => (!props.clicked ? '1' : '0.7')};
  &:after {
    position: absolute;
    top: -40px;
    bottom: 0;
    left: 0;
    right: 0;
    white-space: nowrap;
    display: ${(props) => (props.clicked && props.scoring ? 'inline' : 'none')};
    color: ${(props) => (props.good ? 'green' : 'red')};
    content: ${(props) => (props.good ? '"Good"' : '"Bad"')};
  }
`;

const minWhitespace = 10;
const maxWhitespace = 20;
const random = parseInt(Math.random() * (maxWhitespace - minWhitespace) + minWhitespace);

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
