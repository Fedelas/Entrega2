import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// reducers
import CountReducer from './reducers/countReducer';
import ScoreReducer from './reducers/scoreReducer';

const RootReducer = combineReducers({
  count: CountReducer,
  scores:ScoreReducer
});

export default createStore(RootReducer, applyMiddleware(thunk));