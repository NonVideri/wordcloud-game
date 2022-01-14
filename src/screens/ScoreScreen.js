import styled from 'styled-components';
import Container from '../components/Container';

const Congratulations = styled.h2`
  margin: 4px;
`;

const Score = styled.div`
  font-weight: 500;
  color: deepSkyBlue;
`;

export default function ScoreScreen({ username, score }) {
  return (
    <Container>
      <Congratulations>
        Congratulations, {username}!<br />
        Your score:
      </Congratulations>
      <Score>{score} points</Score>
    </Container>
  );
}
