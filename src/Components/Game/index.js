
import Game from "./Game";
import { connect } from "react-redux";

const mapState = (state) => ({
  roll: state.app.roll,
  frame: state.app.frame,
  frames: state.app.frames,
  res: state.app.res,
  bonusFrame: state.app.bonusFrame,
  gameOver: state.app.gameOver
});

export default connect(mapState)(Game);