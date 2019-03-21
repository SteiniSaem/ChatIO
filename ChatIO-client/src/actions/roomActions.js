import { UPDATE_ROOMS } from "../constants";

export const updateRooms = rooms => {
  console.log("getting new rooms in action");
  console.log(rooms);
  return {
    type: UPDATE_ROOMS,
    payload: rooms
  };
};
