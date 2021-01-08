import React, { useEffect } from "react";
import { setFrames, setRoll_1, setRoll_2, setRes, setRounds } from "../../actions";
import './Roll.scss';

export default ({ number, disable, roll_1, roll_2, frames, res, rounds }) => {
  const handleClick = () => {
    if (roll_1 === "") {
      setRoll_1(number)
    } else if (roll_1 != "") {
      setRoll_2(number)
    }
  }

  return (
    <button className="roll" disabled={disable} onClick={handleClick}>
      {number}
    </button>
  );
}