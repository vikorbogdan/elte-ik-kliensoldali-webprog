const AnimalCard = (props) => {
  const { name, avgWeight, diet, avgLifespan, img: imgSrc } = props;
  return (
    <div className="shadow-xl bg-yellow-50 flex flex-col justify-between items-center w-80 h-96 rounded-xl hover:scale-105 transition p-5">
      <h2 id="name" className="text-2xl text-yellow-700 font-semibold">
        {name}
      </h2>
      <img
        className="shadow-lg rounded-full w-40 h-40 object-cover"
        src={imgSrc}
        alt={name}
      />
      <div
        id="animal-infos"
        className="flex flex-col items-center text-xl text-yellow-600 gap-3"
      >
        <span id="weight">{avgWeight}</span>
        <span id="diet">{diet}</span>
        <span id="lifespan">{avgLifespan}</span>
      </div>
    </div>
  );
};

export default AnimalCard;
