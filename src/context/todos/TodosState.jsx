import { useReducer } from "react";

import todosContext from "./todosContext";
import todosReducer from "./todosReducer";

import todos from "../../config/todos";
import { CREATE_TODO, DELETE_TODO, TOGGLE_COMPLATE_TODO } from "../type";

const TodosState = ({ children }) => {
  const initialState = {
    todos,
  };

  const [state, dispatch] = useReducer(todosReducer, initialState);

  const createTodo = (todo) => {
    dispatch({ type: CREATE_TODO, payload: todo });
  };

  const deleteTodo = (id) => {
    dispatch({ type: DELETE_TODO, payload: id });
  };

  const toggleComplateTodo = (id) => {
    dispatch({ type: TOGGLE_COMPLATE_TODO, payload: id });
  };

  return (
    <todosContext.Provider
      value={{ ...state, createTodo, deleteTodo, toggleComplateTodo }}
    >
      {children}
    </todosContext.Provider>
  );
};

export default TodosState;
