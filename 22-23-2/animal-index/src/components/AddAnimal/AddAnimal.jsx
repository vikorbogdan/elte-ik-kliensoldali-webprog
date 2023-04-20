import { useState } from "react";
import Input from "./Input";

const AddAnimal = ({ setAnimalList, animalList }) => {
  const initialFormValues = {
    name: "",
    avgWeight: "",
    diet: "",
    avgLifespan: "",
    img: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(formValues);
    setAnimalList([...animalList, formValues]);
    setFormValues(initialFormValues);
  };

  return (
    <div className="bg-yellow-100 h-screen w-full items-center flex flex-col font-nunito">
      <h1 className="text-3xl text-yellow-800">Add animal</h1>
      <form className="flex flex-col gap-5">
        <Input
          formValues={formValues}
          setFormValues={setFormValues}
          name="name"
          label="Name"
        />
        <Input
          formValues={formValues}
          setFormValues={setFormValues}
          name="avgWeight"
          label="Weight"
        />
        <Input
          formValues={formValues}
          setFormValues={setFormValues}
          name="diet"
          label="Diet"
        />
        <Input
          formValues={formValues}
          setFormValues={setFormValues}
          name="avgLifespan"
          label="Average Lifespan"
        />
        <Input
          formValues={formValues}
          setFormValues={setFormValues}
          name="img"
          label="Image Source URL"
        />
        <button
          onClick={handleClick}
          className="bg-yellow-500 mx-auto hover:bg-yellow-600 transition w-24 rounded-lg"
        >
          Add Animal
        </button>
      </form>
    </div>
  );
};
export default AddAnimal;
