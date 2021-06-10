import React from 'react';
import {
  BrowserRouter, Switch, Route // Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import store from './redux/store';
import Header from './components/Header';
import Dashboard from './components/Dashboard/index';
import GameMode from './components/GameMode';
import './App.css';
import WelcomeRules from './components/WelcomeRules';
import Game from './components/Game';
import Login from './components/Login';
import Aboutus from './components/About-us/index';
import Ranking from './components/Ranking/index';

function App() {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_DOMAIN}
      clientId={process.env.REACT_APP_CLIENTE_ID}
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Dashboard />
          <Switch>
            <div className="main-window">
              <Route path="/" exact component={WelcomeRules} />
              <Route path="/game-mode" exact component={GameMode} />
              <Route path="/play/:currentQuestion" exact component={Game} />
              <Route path="/log-in" exact component={Login} />
              <Route path="/info" exact component={Aboutus} />
              <Route path="/Ranking" exact component={Ranking} />
            </div>
          </Switch>
        </BrowserRouter>
      </Provider>
    </Auth0Provider>
  );
}

export default App;
