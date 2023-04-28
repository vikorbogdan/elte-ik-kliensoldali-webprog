import { useState } from "react";

const NewPost = ({ posts, setPosts }) => {
  const [title, setTitle] = useState("");
  const [paragraphs, setParagraphs] = useState([]);
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleParagraphsChange = (event) => {
    setParagraphs(event.target.value.split(/\r?\n|\r|\n/g));
  };

  const handleClick = (event) => {
    event.preventDefault();
    const newPost = {
      title: title,
      paragraphs: paragraphs,
      date: `${new Date().getFullYear()}-${new Date()
        .getMonth()
        .toString()
        .padStart(2, "0")}-${new Date().getDate().toString().padStart(2, "0")}`,
    };
    setPosts([...posts, newPost]);
  };
  return (
    <>
      <h1 className="text-4xl text-indigo-900">Új poszt hozzáadása</h1>
      <form className="gap-8 flex flex-col h-full">
        <div className="flex-col flex">
          <label htmlFor="title">Cím</label>
          <input
            onChange={handleTitleChange}
            className="rounded-md p-3"
            type="text"
            name="title"
          />
        </div>
        <div className="flex-col flex">
          <label htmlFor="title">Poszt szöveg</label>
          <textarea
            onChange={handleParagraphsChange}
            className="rounded-md p-3 w-96"
            name="paragraphs"
          />
        </div>
        <button
          onClick={handleClick}
          className="rounded-md p-3 mx-auto active:scale-95 hover:scale-105 transition bg-indigo-500 w-44"
        >
          Poszt hozzáadása
        </button>
      </form>
    </>
  );
};

export default NewPost;
