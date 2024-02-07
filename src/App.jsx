import { useState } from "react";
import styled from "styled-components";

import { GlobalStyles } from "./global-styles";

import { Categories } from "./components/categories";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Items } from "./components/items";
import { items } from "./data-base";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
 
`;


const App = () => {
  const [orders, setOrders] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);

  const chooseCategory = (category) => {
    if (category === "all") {
      setCurrentItems(items);
      return;
    }
    setCurrentItems(items.filter((el) => el.category === category));
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter((el) => el.id !== id));
  };

  const addToOrder = (item) => {
    let isInArray = false;
    orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) setOrders([...orders, item]);
  };

  return (
    <Wrapper>
      <GlobalStyles />
      <Header orders={orders} onDelete={deleteOrder} />
      <Categories chooseCategory={chooseCategory} />
      <Items items={currentItems} onAdd={addToOrder} />
      <Footer />
    </Wrapper>
  );
};

export default App;
