import GameOver from './GameOver';
import { connect } from 'react-redux';

const mapState = (state) => ({
  res: state.app.res
});

export default connect(mapState)(GameOver);