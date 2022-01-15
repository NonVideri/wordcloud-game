import { useContext } from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import { ScoreContext } from '../contexts/ScoreContext';

const Congratulations = styled.div`
  font-weight: 600;
  font-size: 40px;
  margin: 8px;
`;

const Score = styled(Congratulations)`
  margin: 16px;
  color: deepSkyBlue;
`;

export default function ScoreScreen({ username }) {
  const { score } = useContext(ScoreContext);

  return (
    <Container>
      <Congratulations>Congratulations, {username}!</Congratulations>
      <Congratulations>Your score:</Congratulations>
      <Score>{score} points</Score>
    </Container>
  );
}
