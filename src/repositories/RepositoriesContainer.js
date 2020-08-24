import { connect } from "react-redux";
import { setRepositories, setSelectedRepository } from "./RepositoriesActions";
import { setIssues } from "../issues/IssuesActions";

import Repositories from "./Repositories";

const mapStateToProps = (state) => ({
  repositories: state.repositories.all,
  selected: state.repositories.selected,
  authToken: state.user.authToken,
});

const mapDispatchToProps = {
  setRepositories,
  setSelectedRepository,
  setIssues,
};

export default connect(mapStateToProps, mapDispatchToProps)(Repositories);
