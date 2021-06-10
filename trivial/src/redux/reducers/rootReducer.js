import { combineReducers } from 'redux';
import trivialReducer from './trivialReducer';
import rankingReducer from './rankingReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  gameData: trivialReducer,
  auth: authReducer,
  ranking: rankingReducer
});

export default rootReducer;
