import { CREATE_USER, GET_USER } from '../actions/action';

let initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return [...state, action.payload];
    case GET_USER:
      return action.payload;
    default:
      return state;
  }
};
