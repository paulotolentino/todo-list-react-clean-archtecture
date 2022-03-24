import { TodoModel } from "@/domain/models/todo-model";

export interface IAction<T = TodoModel> {
  type: string;
  value?: T;
}

type StateProps = Array<TodoModel>;

const initialState: StateProps = [];

const todos = (state = initialState, action: IAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.value!.id,
          task: action.value!.task,
          done: action.value!.done,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.value!.id ? { ...todo, done: !todo.done } : todo
      );
    case "CLEAR_TODO":
      return state.filter((todo) => !todo.done);
    default:
      return state;
  }
};

export default todos;
