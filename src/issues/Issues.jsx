import React from "react";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import PropTypes from "prop-types";
import Issue from "./Issue";
import arrayMove from "array-move";

import "./issues.css";

const SortableIssue = sortableElement(({ issue, index }) => (
  <Issue index={index} {...issue} />
));

const SortableIssueContainer = sortableContainer(({ children }) => {
  return <div>{children}</div>;
});

const Issues = (props) => {
  const { selectedRepository, issues, setSortOrder, sortOrder } = props;

  const noRepositorySelected = selectedRepository === null;
  const noIssuesForRepository = issues.length === 0;
  const repoId = noRepositorySelected ? null : selectedRepository.id;

  const sortedIssuesForRepo = () => {
    if (sortOrder && sortOrder.hasOwnProperty(repoId)) {
      return sortOrder[repoId];
    } else {
      return issues;
    }
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    let sortedIssues = arrayMove(sortedIssuesForRepo(), oldIndex, newIndex);
    const payload = {
      repoId,
      issues: sortedIssues,
    };
    setSortOrder(payload);
  };

  const componentToRender = () => {
    if (noRepositorySelected) {
      return null;
    } else if (noIssuesForRepository) {
      return "There are no issues for this repository.";
    } else {
      return (
        <SortableIssueContainer onSortEnd={onSortEnd}>
          {sortedIssuesForRepo().map((issue, index) => {
            return <SortableIssue key={issue.id} index={index} issue={issue} />;
          })}
        </SortableIssueContainer>
      );
    }
  };

  return (
    <div className="issues-container">
      <h1>Issues</h1>
      {componentToRender()}
    </div>
  );
};

export default Issues;

Issues.propTypes = {
  selectedRepository: PropTypes.object,
  issues: PropTypes.array,
  sortOrder: PropTypes.object,
  setSortOrder: PropTypes.func,
};
