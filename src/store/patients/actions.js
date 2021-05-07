import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectUser } from "../user/selectors";
import { appLoading, appDoneLoading, setMessage } from "../appState/actions";

export const FETCH_MY_PATIENTS_SUCCESS = "FETCH_MY_PATIENTS_SUCCESS";

export const fetchMyPatientsSuccess = (patients) => ({
  type: FETCH_MY_PATIENTS_SUCCESS,
  payload: patients,
});

export const fetchMyPatients = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());

    const { token } = selectUser(getState());

    try {
      const response = await axios.get(`${apiUrl}/patients/all-my`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("response.data", response.data);
      dispatch(fetchMyPatientsSuccess(response.data));

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
