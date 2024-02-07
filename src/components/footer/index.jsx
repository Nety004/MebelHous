import styled from 'styled-components';

const BottomText = styled.span`
  text-align: center;
  margin-top: 50px;
`;

export const Footer = () => {
  return <BottomText>Все права защищены &copy;</BottomText>;
};
