import { useState } from "react";
import Post from "./Post";

const Blog = ({ blogTitle, posts }) => {
  //.map() : tömb elemei -> post komponensek
  const [totalLike, setTotalLike] = useState(0);
  return (
    <>
      <header className="flex items-center text-5xl bg-indigo-200 text-indigo-900 p-10">
        <h1 className="">{blogTitle}</h1>
        <span className="ml-auto">{totalLike}👍🏽</span>
      </header>
      <div className="bg-indigo-300 flex flex-col items-center gap-10 p-10">
        {posts.map((elem, index) => {
          return (
            <Post
              totalLike={totalLike}
              setTotalLike={setTotalLike}
              title={elem.title}
              date={elem.date}
              paragraphs={elem.paragraphs}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default Blog;
