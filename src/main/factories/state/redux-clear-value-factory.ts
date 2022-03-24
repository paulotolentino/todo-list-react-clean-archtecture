import { ReduxClearAdapter } from "infra/state/redux-clear-adapter/redux-clear-adapter";

export const makeClearValue = (): ReduxClearAdapter => new ReduxClearAdapter();
