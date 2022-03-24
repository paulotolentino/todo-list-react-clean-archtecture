import { GetValue } from "@/data/protocols/state/get-value";
import { TodoModel } from "domain/models/todo-model";
import { GetTodos } from "domain/usecases/get-todos/get-todos";

export class LocalGetTodos implements GetTodos {
  constructor(private readonly getValue: GetValue) {}

  async get(): Promise<TodoModel[]> {
    return this.getValue.get();
  }
}
