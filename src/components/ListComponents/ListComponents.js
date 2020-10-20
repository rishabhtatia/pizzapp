import React from "react";
import ListComponent from "./ListComponent/ListComponent";
import styles from "./ListComponents.module.css";

const ListComponents = (props) => {
  let pizzaList = props.pizzaList.map((item) => {
    return (
      <ListComponent
        name={item.name}
        content={item.content}
        pricingText={item.pricingText}
        modalopen={props.modalopen}
      />
    );
  });

  return <div className={styles.pizzaContainer}>{pizzaList}</div>;
};

export default ListComponents;
