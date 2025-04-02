import { useState } from "react";

export function AddAnimalForm({ setAnimals, animals }) {
  const [formData, setFormData] = useState({
    name: "",
    avgWeight: "",
    diet: "",
    avgLifespan: 0,
    img: "",
  });
  // https://dtrbunny.hu/wp-content/uploads/2020/10/dtr-bunny-nyuszi-fajtak-1.jpg

  function handleSubmit(e) {
    e.preventDefault();
    setAnimals([...animals, formData]);
  }

  return (
    <form className="flex flex-col items-center p-6">
      <h1 className="font-bold text-2xl">Állat hozzáadása</h1>
      <div className="flex flex-col gap-4 w-1/2">
        <label htmlFor="name">Név</label>
        <input
          onChange={(e) => {
            setFormData({
              ...formData,
              name: e.target.value,
            });
          }}
          value={formData.name}
          className="border-2 border-red-400 rounded-md"
          type="text"
          id="name"
        />
        <label htmlFor="avgWeight">Súly</label>
        <input
          onChange={(e) => {
            setFormData({
              ...formData,
              avgWeight: e.target.value,
            });
          }}
          value={formData.avgWeight}
          className="border-2 border-red-400 rounded-md"
          type="text"
          id="avgWeight"
        />
        <label htmlFor="diet">Étrend</label>
        <input
          onChange={(e) => {
            setFormData({
              ...formData,
              diet: e.target.value,
            });
          }}
          value={formData.diet}
          className="border-2 border-red-400 rounded-md"
          type="text"
          id="diet"
        />
        <label htmlFor="avgLifespan">Átlag életkor</label>
        <input
          onChange={(e) => {
            setFormData({
              ...formData,
              avgLifespan: e.target.value,
            });
          }}
          value={formData.avgLifespan}
          className="border-2 border-red-400 rounded-md"
          type="number"
          id="avgLifespan"
        />
        <label htmlFor="img">Kép URL</label>
        <input
          className="border-2 border-red-400 rounded-md"
          type="text"
          id="img"
          onChange={(e) => {
            setFormData({
              ...formData,
              img: e.target.value,
            });
          }}
          value={formData.img}
        />
        <button
          onClick={handleSubmit}
          className="bg-red-400 rounded-lg text-white p-3 m-auto hover:bg-red-500 hover:cursor-pointer"
        >
          Hozzáadás
        </button>
      </div>
    </form>
  );
}
