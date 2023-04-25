import Blog from "./components/Blog/Blog";
import postData from "./data/posts.json";
function App() {
  return (
    <>
      <Blog posts={postData.posts} blogTitle={"Az én blogom"} />
    </>
  );
}

export default App;
