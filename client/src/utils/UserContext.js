import React, { createContext, useContext } from "react";
import { useUserReducer } from "./reducers";

const UserContext = createContext();
const { Provider } = UserContext;

const UserProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useUserReducer({
    user: {
      id: "",
      username: "",
      is_admin: false,
      is_locked: false,
    },
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
