import axios from "axios";

export function PostsNew() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      console.log(response.data);
      event.target.reset();
    });
  };

  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" className="form-control" type="text" />
        </div>
        <div>
          Body: <input name="body" className="form-control" type="text" />
        </div>
        <div>
          Image: <input name="image" className="form-control" type="text" />
        </div>
        <div>
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
