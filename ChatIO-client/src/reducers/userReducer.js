import { UPDATE_USER } from "../constants";

const initialState = {
  fullName: "",
  img: ""
};

export default function(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case UPDATE_USER:
      return action.payload;
    default:
      return state;
  }
}
