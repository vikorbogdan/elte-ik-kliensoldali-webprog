import Like from "./Like";

const Post = ({ title, date, paragraphs }) => {
  return (
    <div className="shadow-lg bg-emerald-200 rounded-xl w-1/3 p-10 flex flex-col gap-3">
      <h2 className="text-3xl text-emerald-900">{title}</h2>
      <h3 className="text-xl text-emerald-500">{date}</h3>
      {paragraphs.map((paragraph, index) => (
        <p className="text-emerald-950" key={index}>
          {paragraph}
        </p>
      ))}
      <Like />
    </div>
  );
};

export default Post;
