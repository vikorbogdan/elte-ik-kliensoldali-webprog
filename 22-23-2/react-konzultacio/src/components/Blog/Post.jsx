import Like from "../Like";

const Post = ({ title, date, paragraphs, totalLike, setTotalLike }) => {
  return (
    <div className="bg-indigo-200 rounded-xl w-1/3 p-5 shadow-md flex flex-col gap-2">
      <h2 className="text-3xl text-indigo-800">{title}</h2>
      <h3 className="text-indigo-400">{date}</h3>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <Like totalLike={totalLike} setTotalLike={setTotalLike}></Like>
    </div>
  );
};

export default Post;
