/* eslint-disable no-console */
import React, { useRef } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadGame } from '../../redux/actions/actionCreators';
import './gameMode.css';

function GameMode({ dispatch }) {
  const currentQuestion = -1;
  const myRefDifficult = useRef(null);
  const myRefType = useRef(null);
  function loadingGame(selectDiff, selectType) {
    return dispatch(loadGame(selectDiff, selectType));
  }
  return (
    <main className="mode-game">
      <h2 className="title">GAME MODE</h2>
      <select className="mode-game__difficult" ref={myRefDifficult}>
        <option value="easy">EASY</option>
        <option value="medium">MEDIUM</option>
        <option value="hard">HARD</option>
      </select>
      <select className="mode-game__type" ref={myRefType}>
        <option value="boolean">BOOLEAN</option>
        <option value="multiple">MULTIPLE</option>
      </select>
      <Link to={`./play/${currentQuestion}`}>
        <button type="button" className="mode-game__accept" onClick={() => loadingGame(myRefDifficult.current.value, myRefType.current.value)}>
          <img src="https://img.icons8.com/doodle/48/000000/ok.png" alt="OK" />
        </button>

      </Link>
    </main>
  );
}
GameMode.propTypes = {
  dispatch: PropTypes.func.isRequired
};
function mapStateToProps(store) {
  return {
    game: store.gameData
  };
}
export default connect(mapStateToProps)(GameMode);
