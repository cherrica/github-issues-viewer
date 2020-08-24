import { initialState } from "../initialState";
import { REPOSITORIES_ACTIONS } from "./RepositoriesActions";

const RepositoriesReducer = (state = initialState.repositories, action) => {
  const { type, payload } = action;
  switch (type) {
    case REPOSITORIES_ACTIONS.SET_REPOSITORIES:
      const mapped = payload.map((repo) => {
        return {
          id: repo.id,
          name: repo.name,
          owner: repo.owner.login,
        };
      });
      return { ...state, all: mapped };
    case REPOSITORIES_ACTIONS.SET_SELECTED_REPOSITORY:
      return { ...state, selected: payload };
    default:
      return state;
  }
};

export default RepositoriesReducer;
