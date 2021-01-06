
import Game from "./Game";
import { connect } from "react-redux";

const mapState = (state) => ({
  rounds: state.app.rounds,
  roll: state.app.roll,
  frame: state.app.frame
});

export default connect(mapState)(Game);