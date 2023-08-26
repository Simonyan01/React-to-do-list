import { useReducer } from "react";
import { data, reducer } from "./reducer/reducer";
import TodoForm from "./components/Form/TodoForm";
import TodoList from "./components/Items/TodoList";
import TodoFooter from "./components/Footer/TodoFooter";
import "./App.css";

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(reducer, data);

  const addContext = (text) => {
    dispatch({
      type: "add",
      payload: {
        text: text,
      },
    });
  };

  const deleteContext = (todo) => {
    dispatch({
      type: "delete",
      payload: {
        id: todo.id,
      },
    });
  };

  const changeContext = (newTodo) => {
    dispatch({
      type: "update",
      payload: {
        updatedTodo: newTodo,
      },
    });
  };

  const clearCompleted = () => {
    dispatch({
      type: "clear-completed",
    });
  };

  return (
    <div className="App">
      <h1 className="todoTitle">Todos</h1>
      <TodoForm onAdd={addContext} />
      <TodoList todos={todos} onDelete={deleteContext} onChange={changeContext} />
      <TodoFooter todos={todos} onClearCompleted={clearCompleted} />
    </div>
  );
};
