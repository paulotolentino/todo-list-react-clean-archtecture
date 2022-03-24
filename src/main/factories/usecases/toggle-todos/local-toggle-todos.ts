import { LocalToggleTodo } from "data/usecases/local-toggle-todo/local-toggle-todo";
import { ToggleTodo } from "domain/usecases/toggle-todo/toggle-todo";
import { makeToggleValue } from "../../state/redux-toggle-value-factory";

export const makeLocalToggleTodo = (): ToggleTodo => {
  return new LocalToggleTodo(makeToggleValue());
};
