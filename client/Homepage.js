import React from "react";

import { Link } from "react-router-dom";
class Homepage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <center>
          <Link to="/template">
            <button>Template</button>
          </Link>
          <Link to="/admin-login">
            <button>Admin</button>
          </Link>
        </center>
      </React.Fragment>
    );
  }
}

export default Homepage;
