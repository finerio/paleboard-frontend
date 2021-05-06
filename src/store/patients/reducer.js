import { FETCH_MY_PATIENTS_SUCCESS } from "./actions";

const initialState = {
  myPatients: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MY_PATIENTS_SUCCESS: {
      return {
        ...state,
        myPatients: [...action.payload],
      };
    }
    default:
      return state;
  }
};
