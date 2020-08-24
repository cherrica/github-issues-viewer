import { connect } from "react-redux";
import { setAuthToken } from "./UserActions";

import AuthInput from "./AuthInput";

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  setAuthToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthInput);
