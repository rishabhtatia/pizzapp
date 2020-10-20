import React from "react";
import styles from "./Modal.module.css";
import Aux from "../../../hoc/Auxilary";

const Modal = (props) => {
  return (
    <div
      className={styles.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      <table>
        <tr>
          <th>Name</th>
          <th>Action</th>
          <th>Price</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
      </table>
      <button className={styles.PlaceOrderButton} type="submit">
        PLACE YOUR ORDER
      </button>
      {/* {props.children} */}
    </div>
  );
};

export default Modal;
