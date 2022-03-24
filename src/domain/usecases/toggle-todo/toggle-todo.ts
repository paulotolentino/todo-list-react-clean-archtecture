import { TodoModel } from "domain/models/todo-model";

export type ToggleTodoParams = Omit<TodoModel, "done" | "task">;

export interface ToggleTodo {
  change: (params: ToggleTodoParams) => Promise<void>;
}
