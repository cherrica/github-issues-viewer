import { combineReducers } from "redux";

import RepositoriesReducer from "./repositories/RepositoriesReducer";
import UserReducer from "./user/UserReducer";
import IssuesReducer from "./issues/IssuesReducer";

export default combineReducers({
  user: UserReducer,
  repositories: RepositoriesReducer,
  issues: IssuesReducer,
});
