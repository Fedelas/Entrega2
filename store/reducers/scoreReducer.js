import { ADD_SCORE, LOAD_SCORE, ADD_SCORE_HS_DB, GET_SCORE_HS_DB } from "../actions/scoreAction";
import Score from "../../models/score";


const initialState = {
  scores: [],
  playerName: []
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
      case ADD_SCORE_HS_DB:
      return state;
      {/*case GET_SCORE_HS_DB:
      return {
        ...state,
        scores: action.payload.score,
        playerName:action.payload.playerName
            
        
      };*/}

    default:
return state;
  }
};