import React from "react";
import Aux from "../../hoc/Auxilary";
import styles from "./Layout.module.css";

const LAYOUT = (props) => {
  return (
    <Aux>
      <h1 className={styles.heading}>PIZZA ORDER APP</h1>
      <main>{props.children}</main>
    </Aux>
  );
};

export default LAYOUT;
