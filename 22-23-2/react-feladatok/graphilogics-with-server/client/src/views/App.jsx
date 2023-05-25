import { useDispatch } from "react-redux";
import { finishSolutionCheck, startSolutionCheck } from "../state/graphilogics/graphilogicsSlice";
import { GraphiLogics } from "./graphilogics/Graphilogics";

function App() {
  const checkSolution = () => {
    return (dispatch) => {
      dispatch(startSolutionCheck());
      setTimeout(() => dispatch(finishSolutionCheck()), 3000);
    };
  };
  const dispatch = useDispatch();
  return (
    <>
      <h1>Graphilogics</h1>
      <GraphiLogics />
      <button onClick={() => dispatch(checkSolution())}>Check</button>
    </>
  );
}

export default App;
