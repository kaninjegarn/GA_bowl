import React, { useEffect } from "react";
import { setFrame, setRoll_1, setRoll_2, setRes, setRounds } from "../../actions";
import './Roll.scss';

export default ({ number, disable, roll_1, roll_2, frame, res, rounds }) => {

  const isStrike = (roll) => {
    const strike = 10
    return roll === strike
  }

  const isSpare = (roll_1, roll_2) => {
    return roll_1 + roll_2 === 10;
  }

  const handleClick = () => {
    // KOLLA OM DET ÄR FÖRSTA ROLLEN
    if (roll_1 === "") {
      setRoll_1(number)
    } else if (roll_1 != "") {
      // KOLLA OM DET ÄR ANDRA ROLLEN
      setRoll_2(number)
      // höj counter som ska hantera vilken fram du är i.
      setFrame([roll_1, roll_2])
    }
    if (isStrike(roll_1)) {
      console.log("strike")
    }
  }

  useEffect(() => {
    // console.log(frame)
    // setRoll_1("")
    // setRoll_2("")

  }, [frame]);

  return (
    <button className="roll" disabled={disable} onClick={handleClick}>
      {number}
    </button>
  );
}