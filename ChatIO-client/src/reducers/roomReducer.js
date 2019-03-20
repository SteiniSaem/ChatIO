import { REPLACE_ROOMS } from "../constants";

const initialState = {
  creator: "",
  rooms: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REPLACE_ROOMS:
      return {
        ...state,
        rooms: action.payload
      };
    default:
      return state;
  }
}
