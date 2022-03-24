import { ReduxToggleAdapter } from "infra/state/redux-toggle-adapter/redux-toggle-adapter";

export const makeToggleValue = (): ReduxToggleAdapter =>
  new ReduxToggleAdapter();
