import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { photosReducer } from "./photosReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  repos: photosReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
