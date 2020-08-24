import { initialState } from "../initialState";
import { ISSUES_ACTIONS } from "./IssuesActions";

const mapAssignee = (issue) => {
  if (issue.assignee !== null) {
    return {
      assigneeName: issue.assignee.login,
      assigneeAvatarUrl: issue.assignee.avatar_url,
    };
  } else {
    return null;
  }
};

const mapIssues = (issues) => {
  return issues.map((issue) => {
    return {
      id: issue.id,
      title: issue.title,
      createdAt: issue.created_at,
      updatedAt: issue.updated_at,
      assignee: mapAssignee(issue),
    };
  });
};

const IssuesReducer = (state = initialState.issues, action) => {
  const { type, payload } = action;
  switch (type) {
    case ISSUES_ACTIONS.SET_ISSUES:
      return {
        ...state,
        all: mapIssues(payload),
      };
    case ISSUES_ACTIONS.SET_SORT_ORDER:
      return {
        ...state,
        sortOrder: {
          ...state.sortOrder,
          [payload.repoId]: payload.issues,
        },
      };
    default:
      return state;
  }
};

export default IssuesReducer;
