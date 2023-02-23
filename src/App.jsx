function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  );
}

function PostsNew() {
  return (
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
  );
}

function PostsIndex() {
  return (
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
  );
}

function Content() {
  return (
    <div>
      <PostsNew />
      <PostsIndex />
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2023</p>
    </footer>
  );
}
function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
