import React from "react";
import './Game.css';

export default ({ rounds, roll, frame }) => {
  // console.log(frame[9,9])
  // {rounds.map((item, key) => (
  //     <div className="bowling__frame" key={key}>
  //       <div className="bowling__frame--upper">
  //         {/* <div>{frame[0]}</div> */}
  //         <div>{item[0]}</div>
  //         {/* <div className="bowling__res--second">{frame[1]}</div> */}
  //         <div className="bowling__res--second">{item[1]}</div>
  //       </div>
  //       {
  //         frame[0] && frame[1] &&
  //         <div>{frame[0] + frame[1]}</div>
  //       }
  //     </div>
  //   ))}
  return (
    <div className="bowling__frames">
      <div>{frame[0]}/{frame[1]}=res</div>{console.log(frame)}
      <div>{frame[3]}/{frame[4]}=res</div>

      {/* <div className="bowling__frame">
        <div className="bowling__frame--upper">
          <div>{frame[0]}</div>
          <div className="bowling__res--second">{frame[1]}</div>
        </div>
        {
          frame[0] && frame[1] &&
          <div>{frame[0] + frame[1]}</div>
        }
      </div> */}
    </div>
  );
}