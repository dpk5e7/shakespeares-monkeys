// Remove useReducer
import { useReducer } from "react";
import {
  LOGIN, LOGOUT
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.user,
      };

    case LOGOUT:
      return {
        ...state,
        user: {
          _id: "",
          username: "",
          is_admin: false,
          is_locked: false,
        },
      };

    default:
      return state;
  }
}

export function useUserReducer(initialState) {
  return useReducer(reducer, initialState);
}
