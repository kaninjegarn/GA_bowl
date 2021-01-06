import React from 'react';
import './Pins.css';

export default ({ roll_1, roll_2, rounds }) => {
  let pins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // pins.splice(Math.floor(Math.random() * 10), roll_1);
  pins.splice(0, roll_1);
  pins.splice(0, roll_2);
  // console.log(rounds[5,5]);
  // console.log(Math.floor(Math.random() * 10));

  return (
    <div className="container">
      <div className="pins">
        <div className="row-4">
          {pins.includes(1) && <div className="pin-1" />}
          {pins.includes(2) && <div className="pin-2" />}
          {pins.includes(3) && <div className="pin-3" />}
          {pins.includes(4) && <div className="pin-4" />}
        </div>
        <div className="row-3">
          {pins.includes(5) && <div className="pin-5" />}
          {pins.includes(6) && <div className="pin-6" />}
          {pins.includes(7) && <div className="pin-7" />}
        </div>
        <div className="row-2">
          {pins.includes(8) && <div className="pin-8" />}
          {pins.includes(9) && <div className="pin-9" />}
        </div>
        <div className="row-1">
          {pins.includes(10) && <div className="pin-10" />}
        </div>
      </div>
    </div>
  )
}