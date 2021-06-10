/* eslint-disable no-debugger */
/* eslint-disable no-console */
import React from 'react';
import { PropTypes } from 'prop-types';
import {
  useParams,
  useHistory // Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import { loadRanking } from '../../redux/actions/actionCreators';
import './game.css';

let correctAnswers = 0;
let incorrectAnswers = 0;

function Game({ game, dispatch }) {
  const history = useHistory();
  let { currentQuestion } = (useParams());
  currentQuestion = parseInt(currentQuestion, 10) + 1;
  function decodeHtml(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }
  function resetButtons() {
    Array.from(document.getElementsByClassName('answer-box__answer')).forEach((element) => {
      // eslint-disable-next-line no-param-reassign
      element.className = 'answer-box__answer';
      // eslint-disable-next-line no-param-reassign
      element.disabled = false;
    });
  }

  function disableButtons() {
    Array.from(document.getElementsByClassName('answer-box__answer')).forEach((element) => {
      // eslint-disable-next-line no-param-reassign
      element.disabled = true;
    });
  }

  function isCorrectAnswer(givenAnswer, index) {
    if (givenAnswer === game[0][currentQuestion].correct_answer) {
      disableButtons();
      const correctAnswer = document.getElementById(index);
      correctAnswer.className = 'answer-box__answer correct';
      correctAnswers += 1;
    } else {
      disableButtons();
      const incorrectAnswer = document.getElementById(index);
      incorrectAnswer.className = 'answer-box__answer incorrect';
      incorrectAnswers += 1;
    }
    setTimeout(() => {
      resetButtons();
      if (currentQuestion < 9) {
        history.push(`${currentQuestion}`);
      } else {
        dispatch(loadRanking(correctAnswers, incorrectAnswers));
        correctAnswers = 0;
        incorrectAnswers = 0;
        history.replace('/Ranking');
      }
    }, 500);
  }
  let shuffledAnswers = [];
  if (game.length) {
    const answers = [...game[0][currentQuestion].incorrect_answers,
      game[0][currentQuestion].correct_answer];
    // eslint-disable-next-line no-unused-vars
    shuffledAnswers = answers.sort((a, b) => 0.5 - Math.random());
  }
  return (
    <main className="game-window">
      <div className="game-window__question">
        {game.length ? <p>{decodeHtml(game[0][currentQuestion].question)}</p> : <p>Cargando</p>}
      </div>
      <div className="answer-box">
        {
          shuffledAnswers.map((answer, index) => (
            <button id={index} type="button" className="answer-box__answer" onClick={() => isCorrectAnswer(answer, index)}>
              {game.length ? <p>{decodeHtml(answer)}</p> : <p>Cargando</p>}
            </button>
          ))
        }
      </div>
      <div className="game-window__info">
        <span>
          {' '}
          Correct:
          {' '}
          {`${correctAnswers}`}
        </span>
        <span>
          {' '}
          Incorrect:
          {' '}
          {`${incorrectAnswers}`}
        </span>
        <span>
          {' '}
          Current Question:
          {' '}
          {`${currentQuestion}/10`}
        </span>
      </div>
    </main>
  );
}
Game.propTypes = {
  dispatch: PropTypes.func.isRequired,
  game: PropTypes.shape([]).isRequired
};

function mapStateToProps(store) {
  return {
    game: store.gameData
  };
}
export default connect(mapStateToProps)(Game);
