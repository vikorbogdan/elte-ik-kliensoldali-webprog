import { useDispatch } from "react-redux";
import { checkSolution } from "../store/nonogram/nonogramSlice";
import { GraphiLogics } from "./graphilogics/Graphilogics";
import { useGetAllPuzzlesQuery } from "../store/api/nonogramApiSlice";

function App() {
  const dispatch = useDispatch();
  const getAllPuzzlesQuery = useGetAllPuzzlesQuery();
  const { data: puzzlesData } = getAllPuzzlesQuery;
  return (
    <>
      <h1>Válassz játékot!</h1>
      <ul>
        {getAllPuzzlesQuery.isLoading
          ? "LOADING"
          : puzzlesData.data.map((puzzle) => <li key={puzzle.id}>{puzzle.title}</li>)}
      </ul>
      <h1>GraphiLogics</h1>
      <GraphiLogics />
      <button onClick={() => dispatch(checkSolution())}>Ellenőrzés</button>
    </>
  );
}

export default App;
