/* istanbul ignore next not testing file */
import { combineReducers } from 'redux';
import welcomeMessage from './welcome';
import notification from './notification';

/* istanbul ignore next: not testing combineReducers */
const welcomeReducer = combineReducers({
  welcomeMessage, notification
});

/* istanbul ignore next: not testing export */
export default welcomeReducer;
