import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const StyledBlock = styled.div`
  background: #e6e5e5;
  border-radius: 50px;
  padding: 10px 20px;
  border: 1px solid transparent;
  transition: all 500ms ease;
`;

export const Categories = ({ chooseCategory }) => {
  const categories = [
    {
      key: 'all',
      name: 'Все',
    },
    {
      key: 'Диван',
      name: 'Диваны',
    },
    {
      key: 'Стул',
      name: 'Стулья',
    },
    {
      key: 'Кресло',
      name: 'Кресла',
    },
    {
      key: 'Стол',
      name: 'Столы',
    },
    {
      key: 'Шкаф',
      name: 'Шкафы',
    },
    {
      key: 'Тумба',
      name: 'Тумбы',
    },
  ];

  return (
    <Wrapper>
      {categories.map((el) => (
        <StyledBlock key={el.key} onClick={() => chooseCategory(el.key)}>
          {el.name}
        </StyledBlock>
      ))}
    </Wrapper>
  );
};
