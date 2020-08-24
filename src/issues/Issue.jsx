import React from "react";
import PropTypes from "prop-types";
import { dateToTimeAgo, dateToDDMMYYY } from "../utils/dateFormatter";
import defaultAssigneeIcon from "../icons/default-assignee.png";

const Issue = (props) => {
  const { title, createdAt, updatedAt, assignee } = props;

  const hasAssignee = assignee !== null;

  const avatarLink = hasAssignee
    ? assignee.assigneeAvatarUrl
    : defaultAssigneeIcon;

  return (
    <div className="issue-container">
      <div className="assignee-icon-container">
        <img
          className="assignee-icon"
          alt="User assigned to issue"
          src={avatarLink}
        />
      </div>
      <div className="issue-details-container">
        <div>{title}</div>
        {hasAssignee ? <div>Assigned to {assignee.assigneeName}</div> : null}
        <div>Created at {dateToDDMMYYY(createdAt)}</div>
        <div>Last updated {dateToTimeAgo(updatedAt)}</div>
      </div>
    </div>
  );
};

Issue.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  assignee: PropTypes.shape({
    assigneeName: PropTypes.string,
    assigneeAvatarUrl: PropTypes.string,
  }),
};

export default Issue;
