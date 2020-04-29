import { combineReducers } from "redux";
import song from "./songReducer";

const rootReducer = combineReducers({
  song: song
});

export default rootReducer;
