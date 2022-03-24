import { ToggleValue } from "../protocols/state/toggle-value";

export class ToggleValueMock implements ToggleValue {
  value: any;
  action!: string;

  async toggle(value: any, action: string): Promise<void> {
    this.value = {
      id: value.id,
      task: value.task,
      done: false,
    };
    this.action = action;
  }
}
