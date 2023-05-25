import { useDispatch, useSelector } from "react-redux";
import { checkSolution } from "../state/graphilogics/graphilogicsSlice";
import { GraphiLogics } from "./graphilogics/Graphilogics";
import { useFetchGraphilogicsListQuery } from "../api/graphilogicsApiSlice";
import { selectLoggedInUser } from "../state/auth/authSlice";
import Login from "./login/Login";

function App() {
  const dispatch = useDispatch();
  const result = useFetchGraphilogicsListQuery();
  console.log(result);
  const user = useSelector(selectLoggedInUser);
  if (!user) {
    return <Login />;
  }
  return (
    <>
      <h1>Graphilogics</h1>
      <GraphiLogics />
      <button onClick={() => dispatch(checkSolution())}>Check</button>
    </>
  );
}

export default App;
