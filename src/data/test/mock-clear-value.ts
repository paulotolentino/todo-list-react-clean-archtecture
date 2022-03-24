import { ClearValue } from "../protocols/state/clear-value";

export class ClearValueMock implements ClearValue {
  action!: string;

  async clear(action: string): Promise<void> {
    this.action = action;
  }
}
