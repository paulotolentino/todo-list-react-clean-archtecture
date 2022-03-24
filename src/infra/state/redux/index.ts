import { createStore, compose } from "redux";
import rootReducer from "./reducers";
import { IAction } from "./reducers/todos";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

export const dispatch = (data: IAction) => {
  const internalDispatch = store.dispatch;
  return (externalDispatch?: Function) => {
    if (externalDispatch) {
      externalDispatch(data);
    } else {
      internalDispatch(data);
    }
  };
};

export default store;
