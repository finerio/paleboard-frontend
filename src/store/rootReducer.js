import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import patients from "./patients/reducer";
import session from "./session/reducer";

export default combineReducers({
  appState,
  user,
  patients,
  session,
});
