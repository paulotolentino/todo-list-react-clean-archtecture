import {
  ToggleTodo,
  ToggleTodoParams,
} from "domain/usecases/toggle-todo/toggle-todo";
import { ToggleValue } from "data/protocols/state/toggle-value";

export class LocalToggleTodo implements ToggleTodo {
  constructor(private readonly toggleValue: ToggleValue) {}

  async change(params: ToggleTodoParams): Promise<void> {
    return this.toggleValue.toggle(params, "TOGGLE_TODO");
  }
}
