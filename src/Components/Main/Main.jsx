import React, { useEffect, useState } from "react";
import './Main.scss';
import { Roll, Game, Pins } from '../../Components';
import { setFrames, setRoll_1, setRoll_2, setRes, setGameOver } from "../../actions";
import { isStrike, isSpare } from "../../helpers";

export default ({ roll_1, roll_2, frames, res }) => {
  const [lastRoundAndPrevWasSpare, setLastRoundAndPrevWasSpare] = useState(false)
  const checkPrevious = frames.length -1
  const checkPrePrevious = frames.length -2

  const handleClick = pins => {
    if (roll_1 + pins > 10) {
      return true;
    }
  }

  const updateScore = () => {
    let tempArr = [[roll_1, roll_2]];
    let tempRes = [roll_1 + roll_2];
    setFrames(frames.concat(tempArr));
    setRes(res.concat(tempRes));
  }

  useEffect(() => {
    // kolla ifall det är sista rundan, du får en spärr, då har du bara 1 slag kvar. 
      if (frames.length === 10 && isSpare(frames[checkPrevious][0], frames[checkPrevious][1]) && !isStrike(frames[checkPrevious][0])) {
      setLastRoundAndPrevWasSpare(true);
    }
    
    if(roll_2 !== "" || roll_2 === 0) {
      // Om det är en spärr förra slaget
      if (frames.length > 0 && frames[checkPrevious][1] > 0 && isSpare(frames[checkPrevious][0], frames[checkPrevious][1])) {
        // klona frames
        let tempNewArray = [...frames]
        // lägg till värdet av denna rundans roll i rundan tidigare
        tempNewArray[tempNewArray.length - 1].push(roll_1);
        // byt ut frames till den nya klonade arrayen
        setFrames(tempNewArray);
        // skapa ny array som skall in i frames
        let tempArr = [[roll_1, roll_2]];
        // lägg till nya rollsen på rätt plats
        setFrames(frames.concat(tempArr));

        // uppdatera res
        let tempRes = [roll_1 + roll_2];
        setRes(res.concat(tempRes));
      }

      // Om det är en strike förra slaget
      if (frames.length > 0 && isStrike(frames[checkPrevious][0])) {
        // om det var strike för 2 slag sen
        if (frames.length > 1 && isStrike(frames[checkPrePrevious][0])) {
          let tempNewArray = [...frames]
          // lägg till värdet av denna rundans roll i den tidigare
          tempNewArray[tempNewArray.length - 2].push(roll_1, roll_2);
          // byt ut frames till den nya klonade arrayn
          setFrames(tempNewArray);
        }
        // klona frames
        let tempNewArray = [...frames]
        // lägg till värdet av denna rundans roll i den tidigare
        tempNewArray[tempNewArray.length - 1].push(roll_1, roll_2);
        // byt ut frames till den nya klonade arrayn
        setFrames(tempNewArray);
        // skapa ny array som skall in i frames
        let tempArr = [[roll_1, roll_2]];
        // lägg till nya rollsen på rätt plats
        setFrames(frames.concat(tempArr));

        // uppdatera res
        let tempRes = [roll_1 + roll_2];
        setRes(res.concat(tempRes));
      }
      updateScore();

      if (frames.length === 9 && !isStrike(roll_1) && !isSpare(roll_1, roll_2)) {
        // Avsluta spel
        setGameOver(true);
      }

      // gå över i nästa frame
      setRoll_1("");
      setRoll_2("");
    }
  }, [roll_2]);

  useEffect(() =>{
    if (roll_1 !== "") {
      if(isStrike(roll_1)) {
        setRoll_2(0)
      }
      if (lastRoundAndPrevWasSpare) {
        setRoll_2(0)
        setGameOver(true);
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
    if (res.length >=11) {
      setGameOver(true)
    }
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