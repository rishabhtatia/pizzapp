import React from "react";
import ListComponent from "./ListComponent/ListComponent";
import styles from "./ListComponents.module.css";

const ListComponents = (props) => {
  let pizzaList = props.pizzaList.map((item) => {
    return (
      <ListComponent
        name={item.name}
        key={item.name}
        content={item.content}
        pricingText={item.pricingText}
        price={item.price}
        OrderSummaryHandler={props.OrderSummaryHandler}
      />
    );
  });

  return <div className={styles.pizzaContainer}>{pizzaList}</div>;
};

export default ListComponents;
