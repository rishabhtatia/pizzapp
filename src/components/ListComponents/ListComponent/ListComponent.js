import React from "react";
import styles from "./ListComponent.module.css";
const images = require.context("../../../assests/images", true);

const ListComponent = ({ name, content, pricingText, modalopen }) => {
  return (
    <div className={styles.ListComponent}>
      <img src={images(`./${name.replaceAll(" ", "_")}.jpg`)} alt={name} />
      <h2 className={styles.Name}>{name}</h2>
      <p className={styles.Content}>{content}</p>
      <p className={styles.PricingText}>Price:: {pricingText}</p>
      <button
        type="button"
        className={styles.AddToCartButton}
        onClick={modalopen}
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default ListComponent;
