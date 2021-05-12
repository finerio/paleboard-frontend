import {
  CREATE_SESSION_SUCCESS,
  DELETE_SESSION_SUCCESS,
  FETCH_SESSION_SUCCESS,
} from "./actions";

const initialState = {
  id: null,
  therapistId: null,
  patientId: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_SESSION_SUCCESS: {
      return { ...state, ...action.payload };
    }
    case FETCH_SESSION_SUCCESS: {
      return { ...state, ...action.payload };
    }
    case DELETE_SESSION_SUCCESS: {
      return initialState;
    }
    default:
      return state;
  }
}
