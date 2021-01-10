
import Game from "./Game";
import { connect } from "react-redux";

const mapState = (state) => ({
  frames: state.app.frames,
  res: state.app.res,
  gameOver: state.app.gameOver
});

export default connect(mapState)(Game);