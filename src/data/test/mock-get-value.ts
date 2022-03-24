import { TodoModel } from "@/domain/models/todo-model";
import { GetValue } from "../protocols/state/get-value";

export class GetValueStumb implements GetValue {
  async get(): Promise<TodoModel[]> {
    return [];
  }
}
