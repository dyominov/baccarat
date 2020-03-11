import { GET_RESULT } from "./actionTypes";

import { getResult } from "../../api/game-api";

export const getResultAction = game => async dispatch => {
  await getResult(game).then(body => {
    console.log("action ", body);
    dispatch({
      type: GET_RESULT,
      payload: body
    });
  });
};
