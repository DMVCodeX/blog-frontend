export function PostsShow(props) {
  return (
    <div>
      <h1>Posts information</h1>
      <p>Title {props.photo.title}</p>
      <p>Body: {props.photo.body}</p>
      <p>Image: {props.photo.image}</p>
    </div>
  );
}
