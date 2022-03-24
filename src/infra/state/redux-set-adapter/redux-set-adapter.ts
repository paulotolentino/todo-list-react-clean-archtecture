import { SetValue } from "data/protocols/state/set-value";
import { dispatch } from "../redux";

export class ReduxSetAdapter implements SetValue {
  constructor(private readonly externalDispatch?: Function) {}
  async set(value: any, action: string): Promise<void> {
    dispatch({ type: action, value })(this.externalDispatch);
  }
}
