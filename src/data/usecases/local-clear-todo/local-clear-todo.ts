import { ClearTodo } from "domain/usecases/clear-todo/clear-todo";
import { ClearValue } from "data/protocols/state/clear-value";

export class LocalClearTodo implements ClearTodo {
  constructor(private readonly clearValue: ClearValue) {}

  async clear(): Promise<void> {
    return this.clearValue.clear("CLEAR_TODO");
  }
}
