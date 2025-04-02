import { useState } from "react";

export function AddAnimalForm({ animals, setAnimals }) {
  const [formData, setFormData] = useState({
    name: "",
    avgWeight: "",
    diet: "",
    avgLifespan: 0,
    img: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setAnimals([...animals, formData]);
  }

  return (
    <form className="flex flex-col gap-6 p-6 bg-blue-100 rounded-xl">
      <h1 className="text-2xl font-bold">Állat hozzáadása</h1>
      <div className="flex flex-col">
        <label htmlFor="name">Név</label>
        <input
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
          value={formData.name}
          className="border-2 border-blue-400 rounded-md"
          type="text"
          id="name"
        />
        <label htmlFor="avgWeight">Súly</label>
        <input
          onChange={(e) =>
            setFormData({
              ...formData,
              avgWeight: e.target.value,
            })
          }
          value={formData.avgWeight}
          className="border-2 border-blue-400 rounded-md"
          type="text"
          id="avgWeight"
        />
        <label htmlFor="diet">Étrend</label>
        <input
          onChange={(e) =>
            setFormData({
              ...formData,
              diet: e.target.value,
            })
          }
          value={formData.diet}
          className="border-2 border-blue-400 rounded-md"
          type="text"
          id="diet"
        />
        <label htmlFor="avgLifespan">Átlag élethossz</label>
        <input
          onChange={(e) =>
            setFormData({
              ...formData,
              avgLifespan: e.target.value,
            })
          }
          value={formData.avgLifespan}
          className="border-2 border-blue-400 rounded-md"
          type="number"
          id="avgLifespan"
        />
        <label htmlFor="img">Kép URL</label>
        <input
          onChange={(e) =>
            setFormData({
              ...formData,
              img: e.target.value,
            })
          }
          value={formData.img}
          className="border-2 border-blue-400 rounded-md"
          type="text"
          id="img"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-400 text-white p-3 rounded-lg hover:cursor-pointer hover:bg-blue-500"
      >
        Hozzáadás
      </button>
    </form>
  );
}
