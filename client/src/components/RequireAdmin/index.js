import Auth from "../../utils/auth";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../../utils/UserContext";

export default function RequireAuth({ children }) {
  const [state] = useUserContext();

  return Auth.loggedIn() && state.user.is_admin ? (
    children
  ) : (
    <Navigate to="/" replace />
  );
}
