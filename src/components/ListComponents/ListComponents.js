import React from "react";
import PropTypes from "prop-types";
import ListComponent from "./ListComponent/ListComponent";
import styles from "./ListComponents.module.css";

const LISTCOMPONENTS = (props) => {
  const pizzaList = props.pizzaList.map((item) => {
    return (
      <ListComponent
        item={item}
        key={item.name}
        OrderSummaryHandler={props.OrderSummaryHandler}
      />
    );
  });

  return <div className={styles.pizzaContainer}>{pizzaList}</div>;
};

LISTCOMPONENTS.protoTypes = {
  pizzaList: PropTypes.array,
  OrderSummaryHandler: PropTypes.func,
};

export default LISTCOMPONENTS;
