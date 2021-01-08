import {
  SET_ROLL_1,
  SET_ROLL_2,
  SET_FRAME,
  SET_FRAMES,
  SET_RES
} from "../types";

const initialState = {
  roll_1: "",
  roll_2: "",
  frame: [],
  frames: [],
  res: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
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
      case SET_FRAMES:
        return {
          ...state,
          frames: action.frames
        };
    case SET_RES:
      return {
        ...state,
        res: action.res
      };
  }
  return state;
}