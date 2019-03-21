import { UPDATE_ROOMS, SET_CURRENT_ROOM, UPDATE_USERS } from "../constants";

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
    case UPDATE_USERS:
      console.log("updating users in reducer");
      return state;

    default:
      return state;
  }
}
