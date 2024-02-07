import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-wrap: wrap;
  width: 400px;
`;

const Image = styled.img`
  border-radius: 10px 10px 0 0;
  width: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 500ms ease;
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Item = ({ item, onAdd }) => {
  return (
    <Wrapper>
      <Image src={'./images/' + item.img} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <Price>
        <b>{item.price}₽</b>
        <button onClick={() => onAdd(item)}>+</button>
      </Price>
    </Wrapper>
  );
};
