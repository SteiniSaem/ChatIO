import { ADD_USER } from "../constants";

export const addUser = user => {
  console.log(user);
  return {
    type: ADD_USER,
    payload: user
  };
};
