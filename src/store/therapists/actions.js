import { apiUrl } from "../../config/constants";
import axios from "axios";
// import { selectUser } from "../user/selectors";
import { appLoading, appDoneLoading, setMessage } from "../appState/actions";

export const FETCH_THERAPISTS_SUCCESS = "FETCH_THERAPISTS_SUCCESS";

export const fetchTherapistsSuccess = (therapists) => ({
  type: FETCH_THERAPISTS_SUCCESS,
  payload: therapists,
});

export const fetchAllTherapists = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading());

    //  const { token } = selectUser(getState());

    try {
      const response = await axios.get(`${apiUrl}/therapists`);

      console.log("response.data", response.data);
      dispatch(fetchTherapistsSuccess(response.data));

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
