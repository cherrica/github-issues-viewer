import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = (state) => ({
  authToken: state.user.authToken,
  selectedRepository: state.repositories.selected,
});

export default connect(mapStateToProps)(App);
