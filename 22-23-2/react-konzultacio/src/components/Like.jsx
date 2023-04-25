import { useContext, useState } from "react";
import { TotalLikeContext } from "../context/TotalLikeContext";

const Like = () => {
  const [likeNumber, setLikeNumber] = useState(0);
  const ctx = useContext(TotalLikeContext);
  const totalLike = ctx[0];
  const setTotalLike = ctx[1];
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
