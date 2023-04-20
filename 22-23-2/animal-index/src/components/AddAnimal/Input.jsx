import { useContext } from "react";
import AnimalContext from "../../context/AnimalContext";

const Input = ({ name, label, setFormValues, formValues }) => {
  const handleChange = (event) => {
    setFormValues({ ...formValues, [name]: event.target.value });
  };
  const animalList = useContext(AnimalContext);
  const randomValue = animalList[Math.floor(Math.random() * animalList.length)];
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        onChange={handleChange}
        value={formValues[name]}
        placeholder={randomValue[name]}
        type="text"
        name={name}
        id={name}
      />
    </div>
  );
};
export default Input;
