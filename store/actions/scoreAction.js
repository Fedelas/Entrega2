  import { insertScore, fetchScore } from "../../db";
  import { URL_API } from "../../constants/database";
  
  export const ADD_SCORE = "ADD_SCORE";
  export const LOAD_SCORE = "LOAD_SCORE";

  export const ADD_SCORE_HS_DB="ADD_SCORE_HS_DB"
  export const GET_SCORE_HS_DB="GET_SCORE_HS_DB"
  
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


  export const addScoreToWorldDB = (payload) => {
    console.log("adding started")
    return async dispatch => {
      try {
        const response = await fetch(`${URL_API}HS.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            date: Date.now(),
            item: payload
          })

        })
        const result = await response.json();
        console.log(result)

        dispatch(
          {type: ADD_SCORE_HS_DB,
          confirm:true}
        )}
         catch(err){
          console.log(err.message)
        }
      }
  };


  {/*
  export const getScoreFromWorldDB = (payload) => {
    console.log("getting data")
    return async dispatch => {
      try {
        const response = await fetch(`${URL_API}HS.json`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        })
        const result = await response.json();
        const highscoreGlobal= Object.keys(result).map(key=>({
          ...result(key),
          id:key
        }))

        console.log(highscoreGlobal)

        dispatch(
          {type: GET_SCORE_HS_DB,
          payload:highscoreGlobal}
        )}
         catch(err){
          console.log(err.message)
        }
      }
  };

  */}



  
      


         