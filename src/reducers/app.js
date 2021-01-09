import {
  SET_ROLL_1,
  SET_ROLL_2,
  SET_FRAME,
  SET_FRAMES,
  SET_RES,
  SET_BONUSFRAME,
  SET_GAMEOVER
} from "../types";

const initialState = {
  roll_1: "",
  roll_2: "",
  frame: [],
  frames: [],
  res: [],
  bonusFrame: [],
  gameOver: false,
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
    case SET_BONUSFRAME:
      return {
        ...state,
        bonusFrame: action.bonusFrame
      };
    case SET_GAMEOVER:
      return {
        ...state,
        gameOver: action.gameOver
      };
  }
  return state;
}