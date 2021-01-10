import React from "react";
import { setRoll_1, setRoll_2 } from "../../actions";
import './Roll.scss';

export default ({ number, disable, roll_1 }) => {
  const handleClick = () => {
    if (roll_1 === "") {
        setRoll_1(number)
    } else if (roll_1 != "" || roll_1 === 0) {
      setRoll_2(number)
    }
  }

  return (
    <button className="roll" disabled={disable} onClick={handleClick}>
      {number}
    </button>
  );
}