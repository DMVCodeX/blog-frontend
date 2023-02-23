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

function PostsIndex(props) {
  console.groupCollapsed(props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <h3>{post.body}</h3>
          <img src={post.image} alt="" />
          <p>{post.user}</p>
          <button>More Info</button>
        </div>
      ))}
    </div>
  );
}

function Content() {
  let posts = [
    {
      id: 1,
      title: "Ruby",
      body: "Ruby Basics",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfqN8TibosvoL-zcoD5gIJbbvIwQRsPXGd4w&usqp=CAU",
      user: "Diane",
    },
    {
      id: 2,
      title: "JavaScript",
      body: "JavaScript Basics",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3-rxVqlnVUWa1-XJrUKxDXSzrG4mKyufcXA&usqp=CAU",
      user: "Diane",
    },
    {
      id: 3,
      title: "HTML",
      body: "HTML Basics",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ghZhvvXNDgKC2Gqh3npLdNuXyBvGyqxkxg&usqp=CAU",
      user: "Diane",
    },
    {
      id: 3,
      title: "CSS",
      body: "CSS Basics",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJhHRH4bHHcHjk9FzDeF22aLq5NPJ5foOlQ&usqp=CAU",
      user: "Diane",
    },
  ];

  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
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
