import { connect } from "react-redux";
import { setSortOrder } from "./IssuesActions";
import Issues from "./Issues";

const mapStateToProps = (state) => ({
  selectedRepository: state.repositories.selected,
  issues: state.issues.all,
  sortOrder: state.issues.sortOrder,
});

const mapDispatchToProps = {
  setSortOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(Issues);
