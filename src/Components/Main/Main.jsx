import React, { useEffect } from "react";
import './Main.scss';
import { Roll, Game, Pins } from '../../Components';
import { setFrame, setFrames, setRoll_1, setRoll_2 } from "../../actions";

export default ({ roll_1, roll_2, frames, frame  }) => {

  const handleClick = pins => {
    // console.log(pins, roll_1)
    if (roll_1 + pins > 10) {
      return true;
    }
  }
  // const isStrike = (roll_1) => {
  //   const strike = 10
  //   return roll === strike
  // }

  // const isSpare = (roll_1, roll_2) => {
  //   return roll_1 + roll_2 === 10;
  // }

  function isStrike(frame) {
    return frame[0] == 10;
  }
  function isSpare(round) {
    return !isStrike(round) && getScore(round) == 10;
  }
  function getScore(round) {
    return round[0] + round[1];
  }

  useEffect(() => {
    if(roll_2 != "") {
      console.log("roll1", roll_1)
      console.log("roll2", roll_2)
      let tempArr = [[roll_1, roll_2]];
      console.log(tempArr)
      setFrames(frames.concat(tempArr));
      console.log(frames);
      setRoll_1("");
      setRoll_2("");
    }
  }, [roll_2]);


  return (
    <div>
      <Game />
      <div className="rolls">
        <Roll number={0} disable={handleClick(0)} onClick={() => handleClick(0)} />
        <Roll number={1} disable={handleClick(1)} onClick={() => handleClick(1)} />
        <Roll number={2} disable={handleClick(2)} onClick={() => handleClick(2)} />
        <Roll number={3} disable={handleClick(3)} onClick={() => handleClick(3)} />
        <Roll number={4} disable={handleClick(4)} onClick={() => handleClick(4)} />
        <Roll number={5} disable={handleClick(5)} onClick={() => handleClick(5)} />
        <Roll number={6} disable={handleClick(6)} onClick={() => handleClick(6)} />
        <Roll number={7} disable={handleClick(7)} onClick={() => handleClick(7)} />
        <Roll number={8} disable={handleClick(8)} onClick={() => handleClick(8)} />
        <Roll number={9} disable={handleClick(9)} onClick={() => handleClick(9)} />
        <Roll number={10} disable={handleClick(10)} onClick={() => handleClick(10)} />
      </div>
      <Pins />
    </div>
  );
}