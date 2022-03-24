import { TodoModel } from "@/domain/models/todo-model";

export type TodoParams = Omit<TodoModel, "done">;

export interface SaveTodo {
  save: (params: TodoParams) => Promise<void>;
}
