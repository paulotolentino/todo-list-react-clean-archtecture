import { SetValue } from "data/protocols/state/set-value";
import { SaveTodo, TodoParams } from "@/domain/usecases/save-todo/save-todo";
import { GetValue } from "@/data/protocols/state/get-value";

export class LocalSaveTodo implements SaveTodo {
  constructor(
    private readonly setValue: SetValue,
    private readonly getValue: GetValue
  ) {}

  async todoAlreadyInList(params: TodoParams): Promise<boolean> {
    const todos = await this.getValue.get();
    const todoAlreadyInlist =
      todos.findIndex((todo) => todo.id === params.id) >= 0;
    return todoAlreadyInlist;
  }

  async save(params: TodoParams): Promise<void> {
    const todoAlreadyInlist = await this.todoAlreadyInList(params);
    if (todoAlreadyInlist) {
      throw new Error("duplicated todo");
    }
    return this.setValue.set({ ...params, done: false }, "ADD_TODO");
  }
}
