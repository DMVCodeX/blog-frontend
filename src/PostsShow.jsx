export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyPost(props.post);
  };

  return (
    <div>
      <h1>Post information</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={props.post.title} name="title" type="text" />
        </div>
        <p></p>
        <div>
          Body: <input defaultValue={props.post.body} name="body" type="text" />
        </div>
        <p></p>
        <div>
          Image: <input defaultValue={props.post.width} name="image" type="text" />
        </div>
        <p></p>
        <button type="submit" className="btn btn-dark">
          Update Post
        </button>
        <button className="btn btn-dark" onClick={handleClick}>
          Destroy Post
        </button>
      </form>{" "}
    </div>
  );
}
