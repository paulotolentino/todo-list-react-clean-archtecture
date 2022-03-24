import { Todos } from "presentation/pages";
import { makeLocalClearTodo } from "./factories/usecases/clear-todos/local-clear-todos";
import { makeLocalLoadTodo } from "./factories/usecases/load-todos/local-load-todos";
import { makeLocalSaveTodo } from "./factories/usecases/save-todos/local-save-todos";
import { makeLocalToggleTodo } from "./factories/usecases/toggle-todos/local-toggle-todos";

const Main = () => (
  <Todos
    saveTodo={makeLocalSaveTodo()}
    loadTodo={makeLocalLoadTodo()}
    toggleTodo={makeLocalToggleTodo()}
    clearTodo={makeLocalClearTodo()}
  />
);

export default Main;
