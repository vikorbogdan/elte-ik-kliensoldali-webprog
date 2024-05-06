import { useDispatch } from "react-redux";
// import { GraphiLogics } from "./graphilogics/Graphilogics";
import { checkSolution } from "../store/nonogramSlice/nonogramSlice";
import { useFetchAllNonogramsQuery } from "../store/api/nonogramApiSlice/nonogramApiSlice";

function App() {
  const dispatch = useDispatch();
  const { data } = useFetchAllNonogramsQuery();
  const nonogramList = data?.data;
  console.log(nonogramList);
  return (
    <>
      <h1>GraphiLogics</h1>
      <ul>{nonogramList && nonogramList.map((nonogram) => <li key={nonogram.id}>{nonogram.title}</li>)}</ul>
      {/* <GraphiLogics /> */}
      <button onClick={() => dispatch(checkSolution())}>Ellenőrzés</button>
    </>
  );
}

export default App;
