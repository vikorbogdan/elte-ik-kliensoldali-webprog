import { useDispatch, useSelector } from "react-redux";
// import { GraphiLogics } from "./graphilogics/Graphilogics";
import { checkSolution } from "../store/nonogramSlice/nonogramSlice";
import { useFetchAllNonogramsQuery } from "../store/api/nonogramApiSlice/nonogramApiSlice";
import Login from "./Login";
import { selectLoggedInUser } from "../store/authSlice/authSlice";
import AuthStatus from "./AuthStatus";

function App() {
  const dispatch = useDispatch();
  const { data } = useFetchAllNonogramsQuery();
  const nonogramList = data?.data;
  const user = useSelector(selectLoggedInUser);
  console.log(user);
  if (!user) {
    return (
      <>
        <AuthStatus />
        <Login />
      </>
    );
  }
  return (
    <>
      <AuthStatus />
      <h1>GraphiLogics</h1>
      <ul>{nonogramList && nonogramList.map((nonogram) => <li key={nonogram.id}>{nonogram.title}</li>)}</ul>
      {/* <GraphiLogics /> */}
      <button onClick={() => dispatch(checkSolution())}>Ellenőrzés</button>
    </>
  );
}

export default App;
