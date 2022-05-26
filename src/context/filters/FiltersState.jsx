import { useReducer } from "react";

import filtersContext from "./filtersContext";
import filtersReducer from "./filtersReducer";

import { SORT_TODOS, TYPE_TODOS, SEARCH_TODOS, STATUS_TODO } from "../type";

const FiltersState = ({ children }) => {
  const initialState = {
    search: "",
    sort: "",
    type: "",
    status: "All",
  };

  const [state, dispatch] = useReducer(filtersReducer, initialState);

  const sortTodos = (value) => {
    dispatch({ type: SORT_TODOS, payload: value });
  };

  const typeTodos = (value) => {
    dispatch({ type: TYPE_TODOS, payload: value });
  };

  const searchTodos = (value) => {
    dispatch({ type: SEARCH_TODOS, payload: value });
  };

  const statusTodos = (value) => {
    dispatch({ type: STATUS_TODO, payload: value });
  };

  return (
    <filtersContext.Provider
      value={{ ...state, sortTodos, typeTodos, searchTodos, statusTodos }}
    >
      {children}
    </filtersContext.Provider>
  );
};

export default FiltersState;
