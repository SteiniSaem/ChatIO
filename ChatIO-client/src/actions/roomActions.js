import {
  UPDATE_ROOMS,
  SET_CURRENT_ROOM,
  SEND,
  UPDATE_CHAT,
  UPDATE_USERS
} from "../constants";

export const updateRooms = rooms => {
  console.log("getting new rooms in action");
  console.log(rooms);
  return {
    type: UPDATE_ROOMS,
    payload: rooms
  };
};

export const setCurrentRoom = room => {
  console.log("Setting current room in action");
  return {
    type: SET_CURRENT_ROOM,
    payload: room
  };
};

export const updateChat = messageObj => {
  console.log("");
  return {
    type: UPDATE_CHAT,
    payload: messageObj
  };
};

export const updateUsers = userObj => {
  return {
    type: UPDATE_USERS,
    payload: userObj
  };
};
