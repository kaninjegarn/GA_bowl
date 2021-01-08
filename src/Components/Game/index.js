
import Game from "./Game";
import { connect } from "react-redux";

const mapState = (state) => ({
  roll: state.app.roll,
  frame: state.app.frame,
  frames: state.app.frames
});

export default connect(mapState)(Game);