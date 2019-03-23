import {
  UPDATE_ROOMS,
  SET_CURRENT_ROOM,
  UPDATE_USERS,
  UPDATE_CHAT,
  UPDATE_TOPIC
} from "../constants";

const initialState = {
  currentRoom: "",
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
      console.log("Updating users in reducer");

      return {
        ...state,
        rooms: {
          ...state.rooms,
          [action.payload.roomName]: {
            ...state.rooms[action.payload.roomName],
            users: action.payload.userList,
            ops: action.payload.opList
          }
        }
      };

    case UPDATE_CHAT:
      console.log("Updating chat in reducer");
      console.log(action.payload);

      // MAYBE ONLY HAVE CURRENT ROOM AS THE NAME OF LOBBY
      // THEN USE rooms[NAME] WHEN YOU NEED INFO
      return {
        ...state,
        rooms: {
          ...state.rooms,
          [action.payload.roomName]: {
            ...state.rooms[action.payload.roomName],
            messageHistory: action.payload.messageHistory
          }
        }
      };
    case UPDATE_TOPIC:
      return {
        ...state,
        rooms: {
          ...state.rooms,
          [action.payload.roomName]: {
            ...state.rooms[action.payload.roomName],
            topic: action.payload.topic
          }
        }
      };
    default:
      return state;
  }
}
