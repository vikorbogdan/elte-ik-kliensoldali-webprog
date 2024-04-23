import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./features/reducers/counter";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const { value: isLoggedIn } = useSelector((state) => state.auth);
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <button onClick={handleIncrement}>Növelés 🥺</button>
      <button onClick={handleDecrement}>Csökkentés 😿</button>
      <br />
      <p>Counter aktuális értéke: {counter.value}</p>

      {isLoggedIn && (
        <p>Bejelentkezett felhasználóra tartozó infók szuper titkosak</p>
      )}
    </div>
  );
}

export default App;
