import React from "react";
import adminLogo from "../frontend-task/media/admin.png";

class AdminDashboard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  handleLogout = () => {
    localStorage.clear();
    this.props.history.push("/admin-login");
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <button onClick={this.handleLogout}> Logout</button>
          <center>
            <h1>Admin-Dashboard</h1>
            <img src={adminLogo} width="100px" height="200px" />
          </center>
        </div>
      </React.Fragment>
    );
  }
}

export default AdminDashboard;
