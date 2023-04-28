import { useContext, useState } from "react";
import { TotalLikeContext } from "../../contexts/TotalLikeContext";

const Like = () => {
  const [likeNumber, setLikeNumber] = useState(0);
  const [totalLikeNumber, setTotalLikeNumber] = useContext(TotalLikeContext);
  const handleClick = () => {
    setLikeNumber(likeNumber + 1);
    setTotalLikeNumber(totalLikeNumber + 1);
  };
  return (
    <div className="text-lg p-2">
      <button
        onClick={handleClick}
        className="hover:scale-105 active:scale-95 transition "
      >
        👍🏽
      </button>
      <span>{likeNumber}</span>
    </div>
  );
};

export default Like;
