import store from "../store";

import {
  SET_ROLL_1,
  SET_ROLL_2,
  SET_FRAMES,
  SET_RES,
  SET_GAMEOVER,
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

export const setFrames = (frames) => {
  store.dispatch({
    type: SET_FRAMES,
    frames: frames,
  });
}

export const setRes = (res) => {
  store.dispatch({
    type: SET_RES,
    res: res
  });
}

export const setGameOver = (gameOver) => {
  store.dispatch({
    type: SET_GAMEOVER,
    gameOver: gameOver
  });
}