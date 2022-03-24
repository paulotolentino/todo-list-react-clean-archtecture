import { ReduxGetAdapter } from "infra/state/redux-get-adapter/redux-get-adapter";

export const makeGetValue = (): ReduxGetAdapter => new ReduxGetAdapter();
