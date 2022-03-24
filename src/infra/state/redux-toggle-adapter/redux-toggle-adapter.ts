import { ToggleValue } from "data/protocols/state/toggle-value";
import { dispatch } from "../redux";

export class ReduxToggleAdapter implements ToggleValue {
  constructor(private readonly externalDispatch?: Function) {}
  async toggle(value: any, action: string): Promise<void> {
    dispatch({ type: action, value })(this.externalDispatch);
  }
}
