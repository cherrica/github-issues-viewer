import createAction from "../utils/createAction";

const namespace = "USER_ACTIONS";

export const USER_ACTIONS = {
  SET_AUTH_TOKEN: `${namespace}:SET_AUTH_TOKEN`,
};

export const setAuthToken = (payload) =>
  createAction(USER_ACTIONS.SET_AUTH_TOKEN, payload);
