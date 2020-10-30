import React from "react";
import styles from "./Backdrop.module.css";

const BACKDROP = (props) =>
  props.show ? (
    <div className={styles.backDrop} onClick={() => props.clicked(false)}></div>
  ) : null;

export default BACKDROP;
