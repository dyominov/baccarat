import { GET_RESULT } from "../actions/actionTypes";

const initialState = {
  percentHome: 0,
  percentAway: 0,
  averageTotal: 0,
  handicape: 0
};

export const gameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RESULT: {
      return {
        percentHome: payload.percentHome,
        percentAway: payload.percentAway,
        averageTotal: payload.averageTotal,
        handicape: payload.handicape
      };
    }
    default:
      return state;
  }
};
