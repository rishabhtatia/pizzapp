import React, { useState } from "react";
import pizzaListData from "../../constant/default";
import ListComponents from "../../components/ListComponents/ListComponents";
import Aux from "../../hoc/Auxilary";
import Modal from "../../components/UI/Modal/Modal";

const PIZZABUILDER = (props) => {
  const [pizzaList] = useState(pizzaListData);
  const [isModalOpen, setModal] = useState(false);
  const [orderSummary, setOrderSummary] = useState([]);

  const RemoveOrderSummaryHandler = (item) => {
    const newState = orderSummary.filter((data) => data.key !== item.key);
    setOrderSummary(newState);
  };

  const OrderSummaryHandler = (data) => {
    const newState = orderSummary.slice();
    newState.push({
      name: data.name,
      key:
        "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0"),
      action: RemoveOrderSummaryHandler,
      price: data.price,
    });
    setOrderSummary(newState);
    setModal(true);
  };

  return (
    <Aux>
      <Modal
        show={isModalOpen}
        setModal={setModal}
        orderSummary={orderSummary}
      ></Modal>
      <ListComponents
        pizzaList={pizzaList}
        OrderSummaryHandler={OrderSummaryHandler}
      />
    </Aux>
  );
};

export default PIZZABUILDER;
