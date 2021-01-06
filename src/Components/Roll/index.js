
import Roll from "./Roll";
import { connect } from "react-redux";

const mapState = (state) => ({
  rounds: state.app.rounds,
  roll_1: state.app.roll_1,
  roll_2: state.app.roll_2,
  frame: state.app.frame,
  res: state.app.res
});

export default connect(mapState)(Roll);