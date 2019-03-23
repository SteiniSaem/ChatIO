import { ADD_USER, PRIVATE_MSG } from "../constants";

const initialState = {
  nickName: "",
  privateMessages: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        nickName: action.payload.nickName
      };
    case PRIVATE_MSG:
      return {
        ...state,
        privateMessages: [...state.privateMessages, action.payload]
      };
    default:
      return state;
  }
}
