import { UPDATE_ROOMS, SET_CURRENT_ROOM } from "../constants";

export const updateRooms = rooms => {
  console.log("getting new rooms in action");
  console.log(rooms);
  return {
    type: UPDATE_ROOMS,
    payload: rooms
  };
};

export const setCurrentRoom = room => {
  console.log("Setting current room");
  return {
    type: SET_CURRENT_ROOM,
    payload: room
  };
};
