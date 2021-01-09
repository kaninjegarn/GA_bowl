import GameOver from './GameOver';
import { connect } from 'react-redux';

const mapState = (state) => ({
  GameOver: state.app.GameOver,
  res: state.app.res
});

export default connect(mapState)(GameOver);