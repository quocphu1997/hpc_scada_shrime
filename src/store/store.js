import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { quanlyUserReducer } from "./reducer/user.reducer";
import { quanlyWeConReducer } from "./reducer/wecon.reducer";

const rootReducer = combineReducers({
  quanlyWeConReducer,
  quanlyUserReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
