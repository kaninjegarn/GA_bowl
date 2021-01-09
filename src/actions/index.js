import store from "../store";

import {
  SET_ROLL_1,
  SET_ROLL_2,
  SET_FRAME,
  SET_FRAMES,
  SET_RES,
  SET_BONUSFRAME,
  SET_GAMEOVER

} from "../types";


export const setRoll_1 = (roll_1) => {
  store.dispatch({
    type: SET_ROLL_1,
    roll_1: roll_1
  });
}

export const setRoll_2 = (roll_2) => {
  store.dispatch({
    type: SET_ROLL_2,
    roll_2: roll_2
  });
}
export const setFrame = (frame, roll_1, roll_2) => {
  store.dispatch({
    type: SET_FRAME,
    frame: frame
  });
}

export const setFrames = (frames, roll_1, roll_2) => {
  store.dispatch({
    type: SET_FRAMES,
    frames: frames,
  });
}

export const setRes = (res, roll_1, roll_2) => {
  store.dispatch({
    type: SET_RES,
    res: res
  });
}

export const setBonusFrame = (bonusFrame) => {
  store.dispatch({
    type: SET_BONUSFRAME,
    bonusFrame: bonusFrame
  });
}

export const setGameOver = (gameOver) => {
  store.dispatch({
    type: SET_GAMEOVER,
    gameOver: gameOver
  });
}