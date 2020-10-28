import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post/Post";
import Aux from "../../hoc/Auxilary";
import SideDrawer from "../UI/SideDrawer/SideDrawer";
import styles from "./Posts.module.css";

const POSTS = () => {
  const [postsState, postsChange] = useState([]);
  const [OrgpostsState, OrgpostsChange] = useState([]);
  const [isLoading, isLoadingChange] = useState(false);
  const [showSideDrawer, sideDrawerChange] = useState(false);
  const filterPosts = (id) => {
    const updatedPosts = OrgpostsState.filter((post) => post.albumId === id);
    postsChange(updatedPosts);
  };

  const sideDrawerHandler = (value) => {
    sideDrawerChange(value);
  };
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      console.log(response);
      const posts = response.data;
      OrgpostsChange(posts);
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
            postsList={OrgpostsState}
            sideDrawerHandler={sideDrawerHandler}
            open={showSideDrawer}
            filterPosts={filterPosts}
          />
          <div className={styles.PostList}>
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
        <div className={styles.Loader}></div>
      )}
    </Aux>
  );
};

export default POSTS;
