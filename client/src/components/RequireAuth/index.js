import Auth from "../../utils/auth";
import { Navigate } from "react-router-dom";


export default function RequireAuth({ children }) {
  return Auth.loggedIn() === true ? children : <Navigate to="/login" replace />;
}
