import { GET_SCORE_HS_DB } from "../actions/highScoreAction";
import HighScore from '../../models/highScore'


const initialState = {
    list: [],
};

const HighScoreReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SCORE_HS_DB:
            return {
                ...state,
                list: action.payload,
            };

        default:
            return state;
    }
};

export default HighScoreReducer