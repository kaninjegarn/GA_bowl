import {
  SET_ROUNDS,
  SET_ROLL_1,
  SET_ROLL_2,
  SET_FRAME,
  SET_RES
} from "../types";

const initialState = {
  rounds: [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10]],
  roll_1: "",
  roll_2: "",
  frame: [],
  res: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ROUNDS:
      return {
        ...state,
        rounds: action.rounds
      };
    case SET_ROLL_1:
      return {
        ...state,
        roll_1: action.roll_1
      };
    case SET_ROLL_2:
      return {
        ...state,
        roll_2: action.roll_2
      };
    case SET_FRAME:
      return {
        ...state,
        frame: action.frame
      };
    case SET_RES:
      return {
        ...state,
        res: action.res
      };
  }
  return state;
}