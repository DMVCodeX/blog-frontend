import { useState } from "react";

export function PostsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div id="posts-index">
      <h1>All posts</h1>
      Search Posts:{" "}
      <input
        className="form-control"
        type="text"
        value={searchFilter}
        onChange={(event) => setSearchFilter(event.target.value)}
      />
      <p></p>
      <datalist id="titles">
        {props.posts.map((post) => (
          <option key={post.id} value={post.title}></option>
        ))}
      </datalist>
      {props.posts
        .filter((post) => post.title.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((post) => (
          <div style={{ textAlign: "center" }} key={post.id} className="posts">
            <h2>{post.title}</h2>
            <h3>{post.body}</h3>
            <img src={post.image} alt="" />
            <p></p>
            <button type="button" className="btn btn-dark" onClick={() => props.onSelectPost(post)}>
              More Info
            </button>
            <p></p>
          </div>
        ))}
    </div>
  );
}

//TODO Update the datalist dropdown
