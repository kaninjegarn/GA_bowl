import React from "react";
import './Game.scss';

export default ({ frame, roll, frames }) => {

  const renderScores = (frame, roll) => {
    return frames[frame] ? frames[frame][roll] : ''
  }
  return (
    <div className="bowling__frames">
      <div>{renderScores(0,0)}///{renderScores(0,1)}</div>
      <div>{renderScores(1,0)}///{renderScores(1,1)}</div>
      <div>{renderScores(2,0)}///{renderScores(2,1)}</div>
      <div>{renderScores(3,0)}///{renderScores(3,1)}</div>
      <div>{renderScores(4,0)}///{renderScores(4,1)}</div>
      <div>{renderScores(5,0)}///{renderScores(5,1)}</div>
      <div>{renderScores(6,0)}///{renderScores(6,1)}</div>
      <div>{renderScores(7,0)}///{renderScores(7,1)}</div>
      <div>{renderScores(8,0)}///{renderScores(8,1)}</div>
      <div>{renderScores(9,0)}///{renderScores(9,1)}</div>
    </div>
  );
}