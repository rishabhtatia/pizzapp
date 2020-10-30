import React from "react";
import Aux from "../../../hoc/Auxilary";
import styles from "./Sidedrawer.module.css";
import Backdrop from "../Backdrop/Backdrop";

const SIDEDRAWER = (props) => {
  let attachedClasses = [styles.sideDrawer, styles.close];
  let AlbumList = [];
  if (props.open) {
    attachedClasses = [styles.sideDrawer, styles.open];
    AlbumList = [...new Set(props.postsList.map((post) => post.albumId))];
    AlbumList = AlbumList.map((item) => (
      <h2 key={item} onClick={() => props.filterPosts(item)}>
        {item}
      </h2>
    ));
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.sideDrawerHandler} />
      <div className={attachedClasses.join(" ")}>
        <div>{AlbumList}</div>
      </div>
    </Aux>
  );
};

export default SIDEDRAWER;
