
import Main from "./Main";
import { connect } from "react-redux";

const mapState = (state) => ({
  roll_1: state.app.roll_1,
  roll_2: state.app.roll_2,
  frame: state.app.frame,
  frames: state.app.frames
});

export default connect(mapState)(Main);