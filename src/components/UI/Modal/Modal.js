import React, { useEffect, useState } from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {
  let orderList = props.orderSummary.slice();
  const [orderSummary, setOrderSummary] = useState([...orderList]);
  let TotalPrice = orderList.reduce((sum, curr) => (sum = curr.price + sum), 0);
  return (
    <div
      className={styles.Modal}
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
          {orderList.map((item, index) => (
            <tr key={item.name + index}>
              <td>{item.name}</td>
              <td>
                <button className={styles.CancelButton}>X</button>
              </td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>TOTAL:: {TotalPrice}</h3>
      <button className={styles.Button} type="submit">
        PLACE YOUR ORDER
      </button>
      <button className={styles.Button} onClick={() => props.setModal(false)}>
        CLOSE CART
      </button>
    </div>
  );
};

export default Modal;
