import { UPDATE_ROOMS, SET_CURRENT_ROOM } from "../constants";

const initialState = {
  currentRoom: null,
  rooms: []
};

export default function(state = initialState, action) {
  console.log(action.type + " in reducer rooms");
  switch (action.type) {
    case UPDATE_ROOMS:
      return {
        ...state,
        rooms: action.payload.rooms
      };
    case SET_CURRENT_ROOM:
      console.log("Setting current room");
      return {
        ...state,
        currentRoom: action.payload
      };
    default:
      return state;
  }
}
