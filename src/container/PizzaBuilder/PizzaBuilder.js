import React, { useState } from "react";
import pizzaListData from "../../constant/default";
import ListComponents from "../../components/ListComponents/ListComponents";
import Aux from "../../hoc/Auxilary";
import Modal from "../../components/UI/Modal/Modal";
const PizzaBuilder = (props) => {
  const [pizzaList, setPizzaList] = useState(pizzaListData);
  const [isModalOpen, setModal] = useState(false);
  return (
    <Aux>
      <h1 style={{ textAlign: "center" }}>Pizza Builder Component</h1>
      <Modal show={true}>
        <div>CARTTTTTT</div>
      </Modal>
      <ListComponents pizzaList={pizzaList} modalopen={setModal} />
    </Aux>
  );
};

export default PizzaBuilder;
