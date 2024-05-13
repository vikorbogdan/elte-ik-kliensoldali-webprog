import { useDispatch, useSelector } from "react-redux";
import { logout, selectLoggedInUser } from "../store/authSlice/authSlice";

const AuthStatus = () => {
  const user = useSelector(selectLoggedInUser);
  const dispatch = useDispatch();
  if (!user) {
    return "Be kell jelentkezned!";
  }
  return (
    <div>
      <h3>Üdvözöllek, {user.email}</h3>
      <button onClick={() => dispatch(logout())}>Kijelentkezés</button>
    </div>
  );
};

export default AuthStatus;
