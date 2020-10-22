import React, { useState } from "react";
import pizzaListData from "../../constant/default";
import ListComponents from "../../components/ListComponents/ListComponents";
import Aux from "../../hoc/Auxilary";
import Modal from "../../components/UI/Modal/Modal";
const PizzaBuilder = (props) => {
  const [pizzaList, setPizzaList] = useState(pizzaListData);
  const [isModalOpen, setModal] = useState(false);
  let [orderSummary, setOrderSummary] = useState([]);

  const OrderSummaryHandler = (data) => {
    let newState = orderSummary.slice();
    newState.push({
      name: data.name,
      action: "Hiii",
      price: data.price,
    });
    setOrderSummary(newState);
    setModal(true);
  };

  return (
    <Aux>
      <h1 style={{ textAlign: "center" }}>Pizza Builder Component</h1>
      <Modal show={isModalOpen} setModal={setModal} orderSummary={orderSummary}>
        <div>CARTTTTTT</div>
      </Modal>
      <ListComponents
        pizzaList={pizzaList}
        OrderSummaryHandler={OrderSummaryHandler}
      />
    </Aux>
  );
};

export default PizzaBuilder;
