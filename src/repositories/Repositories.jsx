import React from "react";
import PropTypes from "prop-types";
import Repository from "./Repository";
import { fetchRepositories } from "../calls";
import "./repositories.css";

class Repositories extends React.Component {
  async componentDidMount() {
    const resp = await fetchRepositories(this.props.authToken);
    this.props.setRepositories(resp.data);
  }

  render() {
    return (
      <div className="repositories-container">
        <h1>Repositories</h1>
        <div className="repositories-list">
          {this.props.repositories.map((repo) => {
            return (
              <Repository
                key={repo.id}
                {...repo}
                setSelectedRepository={this.props.setSelectedRepository}
                setIssues={this.props.setIssues}
                authToken={this.props.authToken}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

Repositories.propTypes = {
  repositories: PropTypes.array,
  selected: PropTypes.object,
  authToken: PropTypes.string,
  setRepositories: PropTypes.func,
  setSelectedRepository: PropTypes.func,
  setIssues: PropTypes.func,
};

export default Repositories;
