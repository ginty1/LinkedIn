import { SET_USER } from "../actions/actionType";
const INITIAL_STATE = {
  user: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        //adding user info to the default state
        user: action.user,
      };
    default:
      //returnig the default state
      return state;
  }
};
export default userReducer;
