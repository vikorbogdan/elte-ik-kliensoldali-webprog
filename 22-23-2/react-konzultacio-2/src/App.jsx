import { useState } from "react";
import Blog from "./components/Blog/Blog";
import postData from "./data/posts.json";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import NewForm from "./components/NewForm/NewForm";
import { TotalLikeContext } from "./contexts/TotalLikeContext";
function App() {
  const [totalLikeNumber, setTotalLikeNumber] = useState(0);
  const [posts, setPosts] = useState(postData.posts);
  const blogTitle = "Blogom";
  return (
    <TotalLikeContext.Provider value={[totalLikeNumber, setTotalLikeNumber]}>
      <Layout totalLikeNumber={totalLikeNumber} title={blogTitle}>
        <Routes>
          <Route path="/blog" element={<Blog postsData={posts} />} />
          <Route path="/" element={<MainPage />} />
          <Route
            path="/new"
            element={<NewForm posts={posts} setPosts={setPosts} />}
          />
        </Routes>
      </Layout>
    </TotalLikeContext.Provider>
  );
}

export default App;
