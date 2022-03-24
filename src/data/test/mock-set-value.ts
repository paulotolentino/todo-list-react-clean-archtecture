import { SetValue } from "data/protocols/state/set-value";

export class SetValueMock implements SetValue {
  value: any;
  action!: string;

  async set(value: any, action: string): Promise<void> {
    this.value = {
      id: value.id,
      task: value.task,
      done: false,
    };
    this.action = action;
  }
}
