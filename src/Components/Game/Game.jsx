import React, { useEffect } from "react";
import { setRes } from "../../actions";
import { GameOver } from '../../Components'
import './Game.scss';

export default ({ frames, res, roll_1, roll_2, gameOver }) => {
  const renderScores = (frame, roll) => {
    return frames[frame] ? frames[frame][roll] : ''
  }
  const renderRes = (frame) => {
    return res[frame] ? res[frame] : ''
  }
  return (
    <div className="bowling__frames">
      {gameOver && 
        <GameOver />}
      {res[9] && res[10] &&
        <h1></h1>
      }
      <div>Frame 1<div className="bowling__frame"><div>{renderScores(0, 0)}<span>{renderScores(0, 1)}</span></div>
        <div className="bowling__frame--res">
          {res[0] ? res[0] : ''}</div></div></div>
      <div>Frame 2<div className="bowling__frame"><div>{renderScores(1, 0)}<span>{renderScores(1, 1)}</span></div>
        <div className="bowling__frame--res">{res[1] ? res[1] : ''}</div></div></div>
      <div>Frame 3<div className="bowling__frame"><div>{renderScores(2, 0)}<span>{renderScores(2, 1)}</span></div>
        <div className="bowling__frame--res">{res[2] ? res[2] : ''}</div></div></div>
      <div>Frame 4<div className="bowling__frame"><div>{renderScores(3, 0)}<span>{renderScores(3, 1)}</span></div>
        <div className="bowling__frame--res">{res[3] ? res[3] : ''}</div></div></div>
      <div>Frame 5<div className="bowling__frame"><div>{renderScores(4, 0)}<span>{renderScores(4, 1)}</span></div>
        <div className="bowling__frame--res">{res[4] ? res[4] : ''}</div></div></div>
      <div>Frame 6<div className="bowling__frame"><div>{renderScores(5, 0)}<span>{renderScores(5, 1)}</span></div>
        <div className="bowling__frame--res">{res[5] ? res[5] : ''}</div></div></div>
      <div>Frame 7<div className="bowling__frame"><div>{renderScores(6, 0)}<span>{renderScores(6, 1)}</span></div>
        <div className="bowling__frame--res">{res[6] ? res[6] : ''}</div></div></div>
      <div>Frame 8<div className="bowling__frame"><div>{renderScores(7, 0)}<span>{renderScores(7, 1)}</span></div>
        <div className="bowling__frame--res">{res[7] ? res[7] : ''}</div></div></div>
      <div>Frame 9<div className="bowling__frame"><div>{renderScores(8, 0)}<span>{renderScores(8, 1)}</span></div>
        <div className="bowling__frame--res">{res[8] ? res[8] : ''}</div></div></div>
      <div>Frame 10<div className="bowling__frame"><div>{renderScores(9, 0)}<span>{renderScores(9, 1)}</span></div>
        <div className="bowling__frame--res">{res[9] ? res[9] : ''}</div></div><span>{renderRes(9) + renderRes(10)}</span></div>
      <div><h1>{res.reduce((a, b) => a + b, 0)}</h1></div>
    </div>
  );
}