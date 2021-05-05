import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectUser } from "../user/selectors";
//import { appLoading, appDoneLoading } from "../appState/actions";
import {
  appLoading,
  appDoneLoading,
  // showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const CREATE_SESSION_SUCCESS = "CREATE_SESSION_SUCCESS";
export const DELETE_SESSION_SUCCESS = "DELETE_SESSION_SUCCESS";

export const createSessionSuccess = (sessionId) => ({
  type: CREATE_SESSION_SUCCESS,
  payload: sessionId,
});

export const deleteSessionSuccess = () => ({
  type: DELETE_SESSION_SUCCESS,
});

export const createSession = (patientId) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());

    const { token } = selectUser(getState());

    try {
      const response = await axios.post(
        `${apiUrl}/session`,
        {
          patientId: patientId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("response.data", response.data);
      dispatch(createSessionSuccess(response.data));

      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};
