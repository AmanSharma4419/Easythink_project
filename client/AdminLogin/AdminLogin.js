import React from "react";

class AdminLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    var adminData = {
      email: this.state.email,
      password: this.state.password
    };
    //   Method To Handle The Login of Admin Which Is Seeded Into Db
    fetch("http://localhost:3000/api/v1/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(adminData)
    })
      .then(res => res.json())
      .then(adminData => {
        adminData.token
          ? localStorage.setItem("token", adminData.token)
          : alert("Check Admin Credentials");
        localStorage.token
          ? this.props.history.push("/admin-dashboard")
          : alert("Check Admin Credentilas");
      });
  };
  render() {
    return (
      <React.Fragment>
        <center>
          <h1>AdminLogin</h1>

          <div
            style={{
              display: "flex",
              width: "200px",
              marginTop: "10rem"
            }}
          >
            <form onSubmit={this.handleSubmit}>
              <input
                type="email"
                placeholder="Type Email"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
              />
              <input
                type="password"
                placeholder="Type Password"
                value={this.state.password}
                onChange={this.handleChange}
                name="password"
              />
              <button type="submit">submit</button>
            </form>
          </div>
        </center>
      </React.Fragment>
    );
  }
}

export default AdminLogin;
