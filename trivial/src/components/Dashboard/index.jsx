import React from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';

function dashboard() {
  return (
    <aside className="sidebar">
      <ul className="sidebar__dashboard-icons">
        <li className="dashboard-icons__play-icon">
          <Link to="/game-mode">
            <img alt="play-icon" className="imageTest" src="https://img.icons8.com/plasticine/100/000000/circled-play.png" />
          </Link>
        </li>
        <li className="dashboard-icons__play-icon">
          <Link to="/">
            <img alt="rules-icon" src="https://img.icons8.com/plasticine/100/000000/rules.png" />
          </Link>
        </li>
        <li className="dashboard-icons__play-icon">
          <Link to="/ranking">
            <img alt="ranking-icon" src="https://img.icons8.com/color/96/000000/prize.png" />
          </Link>
        </li>
        <li className="dashboard-icons__play-icon">
          <Link to="/info">
            <img alt="info-icon" src="https://img.icons8.com/plasticine/100/000000/info.png" />
          </Link>
        </li>

      </ul>
    </aside>
  );
}
export default dashboard;
