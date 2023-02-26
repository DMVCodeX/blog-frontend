import axios from "axios";
import { useState, useEffect, createContext } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { LogIn } from "./LogIn";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
    console.log("The current post is:", post);
  };

  const handleHidePost = () => {
    setIsPostsShowVisible(false);
  };

  useEffect(handleIndexPosts, []);

  return (
    <div className="container">
      <Signup />
      <LogIn />
      <PostsNew />
      <PostsIndex posts={posts} onSelectPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleHidePost}>
        <h2>{currentPost.title}</h2>
        <h2>{currentPost.body}</h2>
        <p></p>
      </Modal>
    </div>
  );
}
