import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectUser } from "../user/selectors";
import { appLoading, appDoneLoading, setMessage } from "../appState/actions";

// import { io } from "socket.io-client";

export const CREATE_SESSION_SUCCESS = "CREATE_SESSION_SUCCESS";
export const FETCH_SESSION_SUCCESS = "FETCH_SESSION_SUCCESS";
export const DELETE_SESSION_SUCCESS = "DELETE_SESSION_SUCCESS";

export const createSessionSuccess = (session) => ({
  type: CREATE_SESSION_SUCCESS,
  payload: session,
});

export const fetchSessionSuccess = (session) => ({
  type: FETCH_SESSION_SUCCESS,
  payload: session,
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
      dispatch(createSessionSuccess(response.data.session));

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

export const endSession = () => {
  return async (dispatch, getState) => {
    console.log("endSession thunk begins");

    dispatch(deleteSessionSuccess());

    dispatch(appLoading());

    const { token } = selectUser(getState());

    try {
      const response = await axios.delete(`${apiUrl}/session`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("response.data", response.data);
      dispatch(deleteSessionSuccess());

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

    console.log("endSession thunk ends");
  };
};

export const fetchSession = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());

    const { token } = selectUser(getState());

    try {
      const response = await axios.get(`${apiUrl}/session`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("response.data", response.data);
      dispatch(fetchSessionSuccess(response.data.session));

      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        //   dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};
