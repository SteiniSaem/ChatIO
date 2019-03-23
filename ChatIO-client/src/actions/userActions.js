import { ADD_USER, PRIVATE_MSG } from "../constants";

export const addUser = user => {
  return {
    type: ADD_USER,
    payload: user
  };
};

export const privateMsg = msgObj => {
  return {
    type: PRIVATE_MSG,
    payload: msgObj
  };
};
