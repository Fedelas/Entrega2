import { URL_API } from "../../constants/database";

export const GET_SCORE_HS_DB="GET_SCORE_HS_DB"

export const getHighscore = () => {
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
      console.log(result)
      const highScoreGlobal=Object.keys(result).map(key => ({
        ...result[key],
        id: key,
      }))
      console.log(highScoreGlobal)

      dispatch(
        {type: GET_SCORE_HS_DB,
        payload:highScoreGlobal}
      )}
       catch(err){
        console.log(err.message)
      }
    }
};

