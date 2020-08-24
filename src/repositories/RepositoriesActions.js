import createAction from "../utils/createAction";

const namespace = "REPOSITORIES_ACTIONS";

export const REPOSITORIES_ACTIONS = {
  SET_REPOSITORIES: `${namespace}:SET_REPOSITORIES`,
  SET_SELECTED_REPOSITORY: `${namespace}:SET_SELECTED_REPOSITORY`,
};

export const setRepositories = (payload) =>
  createAction(REPOSITORIES_ACTIONS.SET_REPOSITORIES, payload);

export const setSelectedRepository = (payload) =>
  createAction(REPOSITORIES_ACTIONS.SET_SELECTED_REPOSITORY, payload);
