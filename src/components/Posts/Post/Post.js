import React from "react";
import styles from "./Post.module.css";

const POST = (props) => {
  return (
    <div className={styles.card}>
      <h2>TITLE HEADING</h2>
      <h5>{props.title}</h5>
      <img className={styles.images} src={props.imgUrl} alt={props.title} />
    </div>
  );
};

export default POST;
