import { ReduxSetAdapter } from "infra/state/redux-set-adapter/redux-set-adapter";

export const makeSetValue = (): ReduxSetAdapter => new ReduxSetAdapter();
