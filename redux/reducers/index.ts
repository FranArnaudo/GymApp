import { combineReducers } from "redux";
import { workoutList } from "./workoutReducers";
import { AppState } from "../types";

const appReducer = combineReducers<AppState>({
  workoutList
})

export default appReducer