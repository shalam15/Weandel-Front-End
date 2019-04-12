import { combineReducers } from "redux";
import contact from "./reducer";

export interface IAppState {}

export const rootReducer = combineReducers({
  contact,
})