import React from "react";
import styles from "./BackDrop.module.css";

const BACKDROP = (props) =>
  props.show ? (
    <div className={styles.BackDrop} onClick={() => props.clicked(false)}></div>
  ) : null;

export default BACKDROP;
