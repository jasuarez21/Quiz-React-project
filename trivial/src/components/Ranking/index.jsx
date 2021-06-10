/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './ranking.css';
import Confeti from './confeti';
import rankingDefault from '../../services/rankingDefault';

function Ranking({ auth, ranking }) {
  const arrayToPush = {
    name: auth.user.name,
    correctAnswers: ranking[0].correctAnswers,
    incorrectAnswers: ranking[0].incorrectAnswers
  };
  const newArray = [...rankingDefault, arrayToPush];
  newArray.sort((a, b) => {
    if (a.correctAnswers > b.correctAnswers) {
      return -1;
    }
    if (a.correctAnswers > b.correctAnswers) {
      return 1;
    }
    return 0;
  });
  return (
    <main className="ranking-game">
      <Confeti />
      <div className="ranking-game__avatar">
        <img src={`${auth.user.picture}`} alt="avatar" className="ranking-game__avatar--photoUser" />
        {console.log(ranking[0])}
        <p className="ranking-game__text">{`Enhorabuena ${auth.user.name}, has acertado ${ranking[0].correctAnswers} y fallado ${ranking[0].incorrectAnswers}`}</p>
      </div>
      <div className="ranking-game__container-gif">
        <Link to="/">
          <img src="https://i.pinimg.com/originals/15/32/04/1532041b7388db634ff593b7d6d7e8bc.gif" alt="brujaGif" />
        </Link>
        <p className="backButton">BACK</p>
      </div>
      <div className="ranking-game__podium">
        <div className="ranking-game__podium--second">
          <img src="https://img.icons8.com/doodle/48/000000/second-place-ribbon.png" alt="second" />
          <p>{`${newArray[1].name}`}</p>
          <p>
            {' '}
            {`${newArray[1].correctAnswers} aciertos`}
          </p>
        </div>
        <div className="ranking-game__podium--first">
          <img src="https://img.icons8.com/doodle/48/000000/first-place-ribbon--v1.png" alt="first" />
          <p>{`${newArray[0].name}`}</p>
          <p>
            {' '}
            {`${newArray[0].correctAnswers} aciertos`}
          </p>
        </div>
        <div className="ranking-game__podium--third">
          <img src="https://img.icons8.com/doodle/48/000000/third-place-ribbon.png" alt="third" />
          <p>{`${newArray[2].name}`}</p>
          <p>
            {' '}
            {`${newArray[2].correctAnswers} aciertos`}
          </p>
        </div>

      </div>

    </main>
  );
}
Ranking.propTypes = {
  auth: PropTypes.shape({
    isLoggedIn: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired
    })
  }).isRequired
};

function mapStateToProps({ ranking, auth }) {
  return {
    auth,
    ranking
  };
}
export default connect(mapStateToProps)(Ranking);
