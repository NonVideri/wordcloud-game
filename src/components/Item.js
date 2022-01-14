import styled from 'styled-components';

const Word = styled.span`
  color: ${(props) => (props.clicked ? 'gray' : 'black')};
`;

export default function Item({ text }) {
  return <Word>{text}</Word>;
}
