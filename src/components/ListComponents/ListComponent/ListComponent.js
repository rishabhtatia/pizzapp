import React from "react";
import PropTypes from "prop-types";
import styles from "./ListComponent.module.css";

const images = require.context("../../../assests/images", true);

const LISTCOMPONENT = ({ item, OrderSummaryHandler }) => {
  const data = { name: item.name, price: item.price };
  return (
    <div className={styles.listComponent}>
      <img
        src={images(`./${item.name.replaceAll(" ", "_")}.jpg`)}
        alt={item.name}
      />
      <h2 className={styles.name}>{item.name}</h2>
      <p className={styles.content}>{item.content}</p>
      <p className={styles.pricingText}>Price:: {item.pricingText}</p>
      <button
        type="button"
        className={styles.addToCartButton}
        onClick={() => OrderSummaryHandler(data)}
      >
        ADD TO CART
      </button>
    </div>
  );
};

LISTCOMPONENT.propTypes = {
  item: PropTypes.object,
  key: PropTypes.string,
  OrderSummaryHandler: PropTypes.func,
};

export default LISTCOMPONENT;
