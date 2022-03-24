import { ClearValue } from "data/protocols/state/clear-value";
import { dispatch } from "../redux";

export class ReduxClearAdapter implements ClearValue {
  constructor(private readonly externalDispatch?: Function) {}
  async clear(action: string): Promise<void> {
    dispatch({ type: action })(this.externalDispatch);
  }
}
