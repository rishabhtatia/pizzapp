import React from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

const MODAL = (props) => {
  const orderList = props.orderSummary.slice();
  const TotalPrice = orderList.reduce((sum, curr) => curr.price + sum, 0);
  return (
    <div
      className={styles.modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((item) => (
            <tr key={item.key}>
              <td>{item.name}</td>
              <td>
                <button
                  type="button"
                  className={styles.cancelButton}
                  onClick={() => item.action(item)}
                >
                  X
                </button>
              </td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>TOTAL:: {TotalPrice}</h3>
      <button className={styles.button} type="submit">
        PLACE YOUR ORDER
      </button>
      <button
        type="button"
        className={styles.button}
        onClick={() => props.setModal(false)}
      >
        CLOSE CART
      </button>
    </div>
  );
};

MODAL.propTypes = {
  orderSummary: PropTypes.array,
  show: PropTypes.bool,
  setModal: PropTypes.func,
};

export default MODAL;
