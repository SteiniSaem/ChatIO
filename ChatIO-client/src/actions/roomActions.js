import {
  UPDATE_ROOMS,
  SET_CURRENT_ROOM,
  SEND,
  UPDATE_CHAT,
  UPDATE_USERS,
  UPDATE_TOPIC
} from "../constants";

export const updateRooms = rooms => {
  return {
    type: UPDATE_ROOMS,
    payload: rooms
  };
};

export const setCurrentRoom = room => {
  return {
    type: SET_CURRENT_ROOM,
    payload: room
  };
};

export const updateChat = messageObj => {
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

export const updateTopic = topicObj => {
  return {
    type: UPDATE_TOPIC,
    payload: topicObj
  };
};
