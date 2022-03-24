import { TodoModel } from "@/domain/models/todo-model";
import { GetValue } from "data/protocols/state/get-value";
import store from "../redux";

export class ReduxGetAdapter implements GetValue {
  async get(): Promise<TodoModel[]> {
    return store.getState().todos;
  }
}
