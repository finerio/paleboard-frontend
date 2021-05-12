import { FETCH_THERAPISTS_SUCCESS } from "./actions";

const initialState = {
  allTherapists: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_THERAPISTS_SUCCESS: {
      return {
        ...state,
        allTherapists: [...action.payload],
      };
    }
    default:
      return state;
  }
}
