import React, { Fragment } from "react";
import PropTypes from "prop-types";
import RepositoriesContainer from "./repositories/RepositoriesContainer";
import IssuesContainer from "./issues/IssuesContainer";
import AuthInputContainer from "./user/AuthInputContainer";
import "./app.css";

const App = (props) => {
  const { authToken } = props;

  const authorized = authToken !== "";

  return (
    <div className="main-container">
      {authorized ? (
        <Fragment>
          <RepositoriesContainer />
          <IssuesContainer />
        </Fragment>
      ) : (
        <AuthInputContainer />
      )}
    </div>
  );
};

export default App;

App.propTypes = {
  authToken: PropTypes.string,
  selectedRepository: PropTypes.object,
};
