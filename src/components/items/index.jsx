import styled from "styled-components";
import { Item } from "./item";

const Wrapper = styled.main`
margin-top: 20;
  display: flex;
  gap: 20px;
flex-wrap: wrap;
justify-content: space-between;
margin-bottom: 50px;



`;

const StyledItem = styled(Item)``;

export const Items = ({ items, onAdd }) => {
  return (
    <Wrapper>
      {items.map((el) => (
        <Item key={el.id} item={el} onAdd={onAdd} />
      ))}
    </Wrapper>
  );
};
