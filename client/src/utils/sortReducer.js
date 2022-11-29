import { useReducer } from "react";
import _ from "lodash";
import {
  CHANGE_SORT,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_SORT: {
      if (state.column === action.column) {
        return {
          ...state,
          tableData: state.tableData.slice().reverse(),
          direction:
            state.direction === "ascending" ? "descending" : "ascending",
        };
      }

      return {
        column: action.column,
        tableData: _.sortBy(state.tableData, [action.column]),
        direction: "ascending",
      };
    }

    default:
      return state;
  }
};

export function useSortReducer(initialState) {
  return useReducer(reducer, initialState);
}
