import store from "../store";

import {
  SET_ROUNDS,
  SET_ROLL_1,
  SET_ROLL_2,
  SET_FRAME,
  SET_RES
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
    frame: [...frame, roll_1, roll_2],
  });
}

export const setRounds = (rounds) => {
  store.dispatch({
    type: SET_ROUNDS,
    rounds: rounds
  });
}

export const setRes = (roll_1, roll_2) => {
  store.dispatch({
    type: SET_RES,
    res: roll_1 + roll_2
  });
}