import { useState } from "react";

const NewForm = ({ posts, setPosts }) => {
  const [title, setTitle] = useState("");
  const [paragraphs, setParagraphs] = useState([]);
  console.log(posts);
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTextChange = (event) => {
    setParagraphs(event.target.value.split(/\r?\n|\r|\n/g));
  };
  const handleButtonClick = (event) => {
    event.preventDefault();
    const newPost = {
      title: title,
      date: `${new Date().getFullYear()}-${new Date()
        .getMonth()
        .toString()
        .padStart(2, "0")}-${new Date().getDate().toString().padStart(2, "0")}`,
      paragraphs: paragraphs,
    };
    setPosts([...posts, newPost]);
    setTitle("");
    setParagraphs([]);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl text-emerald-900">Add a new blog post</h1>
      <form className="flex flex-col gap-5 w-1/2">
        <label htmlFor="title">Title</label>
        <input
          value={title}
          onChange={handleTitleChange}
          type="text"
          name="title"
        />
        <label htmlFor="paragraphs">Post text</label>
        <textarea
          value={paragraphs.join("\n")}
          onChange={handleTextChange}
          name="paragraphs"
          id="paragraphs"
          cols="30"
          rows="10"
        />
        <button
          onClick={handleButtonClick}
          className=" rounded-lg p-3 mx-auto bg-emerald-700 text-emerald-50 w-36"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default NewForm;
