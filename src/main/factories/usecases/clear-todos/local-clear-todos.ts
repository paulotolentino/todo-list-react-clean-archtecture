import { LocalClearTodo } from "data/usecases/local-clear-todo/local-clear-todo";
import { ClearTodo } from "domain/usecases/clear-todo/clear-todo";
import { makeClearValue } from "../../state/redux-clear-value-factory";

export const makeLocalClearTodo = (): ClearTodo => {
  return new LocalClearTodo(makeClearValue());
};
