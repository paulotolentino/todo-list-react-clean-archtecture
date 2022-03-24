import { TodoModel } from "domain/models/todo-model";

export interface GetValue {
  get: () => Promise<TodoModel[]>;
}
