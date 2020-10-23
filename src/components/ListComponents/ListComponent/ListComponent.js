import React from "react";
import PropTypes from "prop-types";
import styles from "./ListComponent.module.css";

const images = require.context("../../../assests/images", true);

const LISTCOMPONENT = ({ item, OrderSummaryHandler }) => {
  const data = { name: item.name, price: item.price };
  return (
    <div className={styles.ListComponent}>
      <img
        src={images(`./${item.name.replaceAll(" ", "_")}.jpg`)}
        alt={item.name}
      />
      <h2 className={styles.Name}>{item.name}</h2>
      <p className={styles.Content}>{item.content}</p>
      <p className={styles.PricingText}>Price:: {item.pricingText}</p>
      <button
        type="button"
        className={styles.AddToCartButton}
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
