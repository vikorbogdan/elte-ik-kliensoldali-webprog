import { useState } from "react";

const Like = ({ totalLike, setTotalLike }) => {
  const [likeNumber, setLikeNumber] = useState(0);
  const handleClick = () => {
    setTotalLike(totalLike + 1);
    setLikeNumber(likeNumber + 1);
  };
  return (
    <div className="text-md p-2">
      <button onClick={handleClick} className="active:scale-75 transition">
        👍🏽
      </button>
      <span>{likeNumber}</span>
    </div>
  );
};

export default Like;
