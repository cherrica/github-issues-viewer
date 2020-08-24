import { initialState } from "../initialState";
import { USER_ACTIONS } from "./UserActions";

const UserReducer = (state = initialState.user, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTIONS.SET_AUTH_TOKEN:
      return { ...state, authToken: payload };
    default:
      return state;
  }
};

export default UserReducer;
