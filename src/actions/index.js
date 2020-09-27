import { GET_USER } from "./action";
import { userRef } from '../firebase';

export const createUser = (params) => async (dispatch) => {
  userRef.push().set(params);
};
export const getUsers = () => async (dispatch) => {
  userRef.on("value", (snapshot) => {
    if (snapshot.val() !== null) {
      dispatch({
        type: GET_USER,
        payload: Object.values(snapshot.val()),
      });
    }
  });
};
