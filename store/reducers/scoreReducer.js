import { ADD_SCORE, LOAD_SCORE } from "../actions/scoreAction";
import Score from "../../models/score";

const initialState = {
  scores: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_SCORE:
      const newScore = new Score(
        Date.now(),
        action.payload.score,
        
      );
      return {
        ...state,
        scores: state.scores.concat(newScore),
      };
    case LOAD_SCORE:
      return {
        ...state,
        scores: action.scores.map(
          (item) =>
            new Score(
              item.id.toString(),
              item.score,
             )
        ),
      };
    default:
      return state;
  }
};