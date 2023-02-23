function App() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>

      <div id="posts-new">
        <h1>New post</h1>
        <form>
          <div>
            Title: <input type="text" />
          </div>
          <div>
            Body: <input type="text" />
          </div>
          <div>
            Image: <input type="text" />
          </div>
          <div>
            <button type="submit">Create Post</button>
          </div>
        </form>
      </div>

      <div id="posts-index">
        <h1>All posts</h1>
        <div className="posts">
          <h2>Hello, I am new here!</h2>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwHsHmxoQ_Lb7t5Ifie3ono7-UKJdRz9oV_Q&usqp=CAU"
            alt=""
          />
          <p>User: Diane V.</p>
          <button>More Info</button>
        </div>
      </div>

      <footer>
        <p>Copyright 20XX</p>
      </footer>
    </div>
  );
}

export default App;
