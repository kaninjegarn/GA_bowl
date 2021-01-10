
import Roll from "./Roll";
import { connect } from "react-redux";

const mapState = (state) => ({
  roll_1: state.app.roll_1,
});

export default connect(mapState)(Roll);