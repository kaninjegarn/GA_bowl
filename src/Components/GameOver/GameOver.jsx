import React from 'react';
import './GameOver.scss';

export default ({ res }) => {
  return(
    <div className="gameOver">
        <div className="gameOver__content">
          Great work!
          You scored a total of:
        <h4> {res.reduce((a, b) => a + b, 0)} points</h4>
        </div>
    </div>
  )
}