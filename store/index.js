import { createStore, combineReducers} from 'redux';
import CountReducer from './reducers/countReducer';
 
const counterReducer = combineReducers({
  count: CountReducer,
});
 
export const store = createStore(counterReducer);