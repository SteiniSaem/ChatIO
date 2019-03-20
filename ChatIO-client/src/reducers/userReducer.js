import { ADD_USER } from "../constants";

const initialState = {
  nickName: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return action.payload;
    default:
      return state;
  }
}
