import React from "react";
import PropTypes from "prop-types";
import { fetchIssues } from "../calls";
import "./repositories.css";

const Repository = (props) => {
  const {
    id,
    name,
    owner,
    authToken,
    setSelectedRepository,
    setIssues,
  } = props;

  const handleClick = async () => {
    const selectedRepo = { id, name, owner };
    setSelectedRepository(selectedRepo);

    const resp = await fetchIssues(authToken, owner, name);
    setIssues(resp.data);
  };

  return (
    <div className="repository-container" onClick={handleClick}>
      <div className="repository-name">{name}</div>
    </div>
  );
};

Repository.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  owner: PropTypes.string,
  authToken: PropTypes.string,
  setSelectedRepository: PropTypes.func,
  setIssues: PropTypes.func,
};

export default Repository;
