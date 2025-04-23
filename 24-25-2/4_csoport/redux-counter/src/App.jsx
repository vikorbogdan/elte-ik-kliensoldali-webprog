import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./features/reducers/counterReducer";

function App() {
  const dispatch = useDispatch();
  const { counter, login } = useSelector((state) => state);
  return (
    <>
      <p>{counter.value}</p>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(increment())}>increment</button>
      {login && <p>Bejelentkezve!</p>}
    </>
  );
}

export default App;
