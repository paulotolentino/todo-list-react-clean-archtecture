import { LocalGetTodos } from "data/usecases/local-get-todos/local-get-todos";
import { GetTodos } from "domain/usecases/get-todos/get-todos";
import { makeGetValue } from "../../state/redux-get-value-factory";

export const makeLocalLoadTodo = (): GetTodos => {
  return new LocalGetTodos(makeGetValue());
};
