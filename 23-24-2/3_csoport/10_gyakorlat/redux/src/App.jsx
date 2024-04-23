import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./features/reducers/counter";

function App() {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const counter = useSelector((state) => state.counter);
  const isLoggedIn = useSelector((state) => state.login);

  return (
    <div>
      <button onClick={handleIncrement}>inkrementálás</button>
      <button onClick={handleDecrement}>dekrementálás</button>
      <br />
      <p>counter: {counter.value}</p>
      {isLoggedIn.value && <p>Be vagy jelentkezve</p>}
    </div>
  );
}

export default App;
