export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <div>
          Title: <input className="form-control" type="text" />
        </div>
        <div>
          Body: <input className="form-control" type="text" />
        </div>
        <div>
          Image: <input className="form-control" type="text" />
        </div>
        <p></p>
        <div>
          <button type="button" class="btn btn-dark">
            Submit
          </button>
          <p></p>
        </div>
      </form>
    </div>
  );
}
