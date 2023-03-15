  import { insertScore, fetchScore } from "../../db";
  
  export const ADD_SCORE = "ADD_SCORE";
  export const LOAD_SCORE = "LOAD_SCORE";
  
  export const updateScore = (score) => {
    return async (dispatch) => {
        
      try {
        const result = await insertScore(
          score,
        );
        console.log(result);
      } catch (err) {
        console.log(err.message);
        throw err;
      }
      dispatch({
        type: ADD_SCORE,
        payload: {
          score,
          
        },
      });
    };
  };
  
  export const loadScore = () => {
    return async (dispatch) => {
      try {
        const result = await fetchScore();
        console.log(result);
        dispatch({ type: LOAD_SCORE, scores: result.rows._array });
      } catch (error) {
        throw error;
      }
    };
  };