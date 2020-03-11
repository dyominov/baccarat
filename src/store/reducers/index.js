import { combineReducers } from "redux";
import { gameReducer } from "./games";

export default combineReducers({
  games: gameReducer
});
