import { LocalSaveTodo } from "data/usecases/local-save-todo/local-save-todo";
import { SaveTodo } from "domain/usecases/save-todo/save-todo";
import { makeGetValue } from "../../state/redux-get-value-factory";
import { makeSetValue } from "../../state/redux-set-value-factory";

export const makeLocalSaveTodo = (): SaveTodo => {
  return new LocalSaveTodo(makeSetValue(), makeGetValue());
};
