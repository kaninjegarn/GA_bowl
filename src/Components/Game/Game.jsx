import React from "react";
import './Game.scss';

export default ({ frame, roll, frames }) => {
  const renderScores = (frame, roll) => {
    return frames[frame] ? frames[frame][roll] : ''
  }
  return (
    <div className="bowling__frames">
      <div>Frame 1<div className="bowling__frame"><div>{renderScores(0, 0)}<span>{renderScores(0, 1)}</span></div>
        <div className="bowling__frame--res">{renderScores(0, 0) + renderScores(0, 1)}</div></div></div>
      <div>Frame 2<div className="bowling__frame"><div>{renderScores(1, 0)}<span>{renderScores(1, 1)}</span></div>
        <div className="bowling__frame--res">{renderScores(1, 0) + renderScores(1, 1)}</div></div></div>
      <div>Frame 3<div className="bowling__frame"><div>{renderScores(2, 0)}<span>{renderScores(2, 1)}</span></div>
        <div className="bowling__frame--res">{renderScores(2, 0) + renderScores(2, 1)}</div></div></div>
      <div>Frame 4<div className="bowling__frame"><div>{renderScores(3, 0)}<span>{renderScores(3, 1)}</span></div>
        <div className="bowling__frame--res">{renderScores(3, 0) + renderScores(3, 1)}</div></div></div>
      <div>Frame 5<div className="bowling__frame"><div>{renderScores(4, 0)}<span>{renderScores(4, 1)}</span></div>
        <div className="bowling__frame--res">{renderScores(4, 0) + renderScores(4, 1)}</div></div></div>
      <div>Frame 6<div className="bowling__frame"><div>{renderScores(5, 0)}<span>{renderScores(5, 1)}</span></div>
        <div className="bowling__frame--res">{renderScores(5, 0) + renderScores(5, 1)}</div></div></div>
      <div>Frame 7<div className="bowling__frame"><div>{renderScores(6, 0)}<span>{renderScores(6, 1)}</span></div>
        <div className="bowling__frame--res">{renderScores(6, 0) + renderScores(6, 1)}</div></div></div>
      <div>Frame 8<div className="bowling__frame"><div>{renderScores(7, 0)}<span>{renderScores(7, 1)}</span></div>
        <div className="bowling__frame--res">{renderScores(7, 0) + renderScores(7, 1)}</div></div></div>
      <div>Frame 9<div className="bowling__frame"><div>{renderScores(8, 0)}<span>{renderScores(8, 1)}</span></div>
        <div className="bowling__frame--res">{renderScores(8, 0) + renderScores(8, 1)}</div></div></div>
      <div>Frame 10<div className="bowling__frame"><div>{renderScores(9, 0)}<span>{renderScores(9, 1)}</span></div>
        <div className="bowling__frame--res">{renderScores(9, 0) + renderScores(9, 1)}</div></div></div>
    </div>
  );
}