
import Pins from "./Pins";
import { connect } from "react-redux";

const mapState = (state) => ({
  roll_1: state.app.roll_1,
  roll_2: state.app.roll_2,
});

export default connect(mapState)(Pins);