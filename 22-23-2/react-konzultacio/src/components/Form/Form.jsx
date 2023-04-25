import { useState } from "react";

const Form = () => {
  const [text, setText] = useState("alma");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="p-10">
      <form>
        <input
          onChange={handleChange}
          value={text}
          className="border-2 p-2 border-solid border-indigo-900 rounded-lg"
          type="text"
        />
      </form>
      <p>{text}</p>
    </div>
  );
};

export default Form;
