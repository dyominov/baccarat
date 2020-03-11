import { CREATE_GAME_SUCCESS, GET_RESULT } from "./actionTypes";

import { createGame, getResult } from "../../api/game-api";

export const createGameAction = game => async dispatch => {
  await createGame(game).then(body => {
    console.log("action ", body);
    dispatch({
      type: CREATE_GAME_SUCCESS,
      payload: body
    });
  });
};

export const getResultAction = game => async dispatch => {
  await getResult(game).then(body => {
    console.log("action ", body);
    dispatch({
      type: GET_RESULT,
      payload: body
    });
  });
};
