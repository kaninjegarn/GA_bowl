import React, { useEffect } from "react";
import './Main.scss';
import { Roll, Game, Pins } from '../../Components';
import { setFrame, setFrames, setRoll_1, setRoll_2, setRes, setBonusFrame, setGameOver } from "../../actions";
import { isStrike, isSpare } from "../../helpers";

export default ({ roll_1, roll_2, frames, res }) => {

  const handleClick = pins => {
    if (roll_1 + pins > 10) {
      return true;
    }
  }

  useEffect(() => {
    if(roll_2 != "" || roll_2 === 0) {
      // Om det är sista rudan, ingen strike, ingen spare
      
      // Om det är en spärr förra slaget
      if (frames.length > 0 && isSpare(frames[frames.length - 1][0], frames[frames.length - 1][1])) {
        // lägg till extra poäng för spärren på förra framens kast(roll_1)
        let tempNewArray = [...frames]
        tempNewArray[tempNewArray.length - 1].push(roll_1);
        setFrames(tempNewArray);
        let tempArr = [[roll_1, roll_2]];
        setFrames(frames.concat(tempArr));

        // uppdatera res
        let tempRes = [roll_1 + roll_2];
        setRes(res.concat(tempRes));
      }

      let tempArr = [[roll_1, roll_2]];
      let tempRes = [roll_1 + roll_2];
      setFrames(frames.concat(tempArr));
      setRes(res.concat(tempRes));

      if (frames.length >= 9 && !isStrike(roll_1) && !isSpare(roll_1, roll_2)) {
        // Avsluta spel
        setGameOver(true);

        // OM DET BLIR BONUSRUNDA
      } else if (frames.length === 9 && isStrike(roll_1)) {
        console.log("strike")
        // ELLER AVSLUTA SPEL
        // setGameOver(true)
      }

      // gå över i nästa frame
      setRoll_1("");
      setRoll_2("");
    }
  }, [roll_2]);

  useEffect(() =>{
    if (roll_1 != "") {
      if(isStrike(roll_1)) {
        setRoll_2(0)
      }
    }
  }, [roll_1])

  useEffect(() => {
    // UPPDATERA RES
    let tempNewRes = [];
    for (let i = 0; i < frames.length; i++) {
      let frame = frames[i].reduce((a, b) => a + b, 0);
      tempNewRes.push(frame);
    }
    setRes(tempNewRes)
  }, [frames])

  useEffect(() => {
    console.log(frames.length)
   
  }, [res]);

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