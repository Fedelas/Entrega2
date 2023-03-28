import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";


// reducers
import CountReducer from './reducers/countReducer';
import ScoreReducer from './reducers/scoreReducer';
import HighScoreReducer from "./reducers/highScoreReducer";

const RootReducer = combineReducers({
  count: CountReducer,
  scores:ScoreReducer,
  highScoreGlobal:HighScoreReducer,
  
  
});

export default createStore(RootReducer, applyMiddleware(thunk));