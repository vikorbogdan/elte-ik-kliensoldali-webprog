import Post from "./Post";

const Blog = ({ postsData }) => {
  return (
    <div>
      <div className="flex flex-col items-center gap-10">
        {postsData.map((elem, index) => (
          <Post
            title={elem.title}
            date={elem.date}
            paragraphs={elem.paragraphs}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
