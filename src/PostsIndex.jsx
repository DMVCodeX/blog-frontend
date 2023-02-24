export function PostsIndex(props) {
  console.groupCollapsed(props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <h3>{post.body}</h3>
          <img src={post.image} alt="" />
          <p></p>
          <button onClick={props.onSelectPost}>More Info</button>
        </div>
      ))}
    </div>
  );
}
