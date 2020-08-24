import createAction from "../utils/createAction";

const namespace = "ISSUES_ACTIONS";

export const ISSUES_ACTIONS = {
  SET_ISSUES: `${namespace}:SET_ISSUES`,
  SET_SORT_ORDER: `${namespace}:SET_SORT_ORDER`,
};

export const setIssues = (payload) =>
  createAction(ISSUES_ACTIONS.SET_ISSUES, payload);

export const setSortOrder = (payload) =>
  createAction(ISSUES_ACTIONS.SET_SORT_ORDER, payload);
