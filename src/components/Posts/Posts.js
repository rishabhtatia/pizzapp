import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../../constant/api";
import Post from "./Post/Post";
import Aux from "../../hoc/Auxilary";
import SideDrawer from "../UI/Sidedrawer/Sidedrawer";
import styles from "./Posts.module.css";

const POSTS = () => {
  const [postsState, postsChange] = useState([]);
  const [orgPostsState, orgPostsChange] = useState([]);
  const [isLoading, isLoadingChange] = useState(false);
  const [showSideDrawer, sideDrawerChange] = useState(false);

  const filterPosts = (id) => {
    const updatedPosts = orgPostsState.filter((post) => post.albumId === id);
    postsChange(updatedPosts);
  };

  const sideDrawerHandler = (value) => {
    sideDrawerChange(value);
  };

  useEffect(() => {
    (async () => {
      const response = await axios.get(API.postsAppApi);
      const posts = response.data;
      orgPostsChange(posts);
      postsChange(posts);
      isLoadingChange(true);
    })();
  }, []);

  return (
    <Aux>
      {isLoading ? (
        <div>
          <button type="button" onClick={() => sideDrawerHandler(true)}>
            FILTER
          </button>
          <SideDrawer
            postsList={orgPostsState}
            sideDrawerHandler={sideDrawerHandler}
            open={showSideDrawer}
            filterPosts={filterPosts}
          />
          <div className={styles.postList}>
            {postsState.map((post) => {
              return (
                <Post
                  title={post.title}
                  key={post.id}
                  imgUrl={post.thumbnailUrl}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div className={styles.loader}></div>
      )}
    </Aux>
  );
};

export default POSTS;
