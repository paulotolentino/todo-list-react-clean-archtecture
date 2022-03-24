import { TodoModel } from "@/domain/models/todo-model";

export interface GetTodos {
  get: () => Promise<Array<TodoModel>>;
}
