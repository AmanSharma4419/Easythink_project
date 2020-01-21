import React from "react";

import "../frontend-task/Frontend.css";

import logo1 from "./media/shopping.jpg";
import logo2 from "./media/img1.jpeg";
import logo3 from "./media/img5.png";
import logo4 from "./media/easy.png";
import logo5 from "./media/vishal.png";
import logo6 from "./media/vlogo.png";

class Frontend extends React.Component {
  constructor() {
    super();
    this.state = {
      Mobileno: ""
    };
  }
  handleChange(e) {
    this.setState({ ...this, Mobileno: e.target.value });
  }
  render() {
    return (
      <React.Fragment>
        <div style={{ marginLeft: "30px", marginRight: "30px" }}>
          <header>
            <nav className="Parent-nav">
              <div>
                <button
                  style={{
                    color: "green",
                    backgroundColor: "Transparent",
                    border: "none",
                    fontSize: "25px"
                  }}
                >
                  Okk
                </button>
                <span style={{ fontSize: "25px" }}>JI</span>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "15px" }}>HOME</div>
                <div style={{ marginRight: "15px" }}>OkkJI FOR RETAILER</div>
                <div style={{ marginRight: "15px" }}>OkkJi FAST</div>
                <div style={{ marginRight: "15px" }}>Faq</div>
                <div style={{ marginRight: "15px" }}>OFFERS</div>
              </div>
            </nav>
          </header>
          <section>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: "400px" }}>
                <div>
                  <h1 style={{ fontSize: "25px", marginTop: "30px" }}>
                    Best way to Explore
                  </h1>
                  <h3 style={{ color: "grey", fontSize: "20px" }}>
                    all nearby mom-dad retail shops
                  </h3>
                </div>

                <p style={{ marginTop: "15px", color: "grey", width: "300px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </p>
                <center style={{ marginTop: "15px" }}>
                  <div>INSTALL NOW</div>
                  <div style={{ marginBottom: "10px" }}>
                    <i className="fas fa-download"></i>
                  </div>
                  <span style={{ marginRight: "20px", fontSize: "45px" }}>
                    <i className="fab fa-google-play"></i>
                  </span>
                  <span style={{ fontSize: "45px" }}>
                    <i className="fab fa-app-store"></i>
                  </span>
                  <div style={{ marginTop: "25px" }}>
                    <input
                      type="text"
                      placeholder="Mobile Number"
                      onChange={this.handleChange}
                    />
                    <button>
                      <a href="#">Get App Link</a>
                    </button>
                  </div>
                </center>
              </div>
              <div>
                <img src={logo1} height="400px" width="650px" />
              </div>
            </div>
          </section>
          <section>
            <center style={{ padding: "40px", fontSize: "35px" }}>
              <span>Why Customer</span>
              &nbsp;
              <span>Loves OkkJi</span>
            </center>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <img src={logo2} height="300px" width="500px" />
              </div>
              <div style={{ marginLeft: "60px" }}>
                <h1 style={{ fontSize: "30px", color: "blue" }}>
                  Daily useable from nearby shops
                </h1>
                <p style={{ width: "650px" }}>
                  Arrow keys to increase decrease volume. Even though Israel is
                  a small country it is always in the news. The news continues
                  to report on Jews moving to Israel.
                </p>
                <br />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "14px"
                  }}
                >
                  <span>
                    <input type="checkbox" />
                    Many Paymets Options
                  </span>
                  &nbsp;
                  <span>
                    <input type="checkbox" />
                    Street's Store On Smartphone
                  </span>
                  &nbsp;
                  <span>
                    <input type="checkbox" />
                    Digital Representation Of All Products
                  </span>
                  &nbsp;
                  <span>
                    <input type="checkbox" />
                    Digitalazation Of All UDHAAR
                  </span>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "14px",
                  marginTop: "10px"
                }}
              >
                <h1
                  style={{
                    fontSize: "25px",
                    marginBottom: "10px",
                    color: "blue"
                  }}
                >
                  Home-Delivery
                </h1>
                <p style={{ width: "500px", marginBottom: "10px" }}>
                  Arrow keys to increase decrease volume. Even though Israel is
                  a small country it is always in the news. The news continues
                  to report on Jews moving to Israel.
                </p>
                <span>
                  <input type="checkbox" />
                  Many Paymets Options
                </span>
                &nbsp;
                <span>
                  <input type="checkbox" />
                  Street's Store On Smartphone
                </span>
                &nbsp;
                <span>
                  <input type="checkbox" />
                  Digital Representation Of All Products
                </span>
                &nbsp;
                <span>
                  <input type="checkbox" />
                  Digitalazation Of All UDHAAR
                </span>
              </div>
              <div>
                <img src={logo3} height="300px" width="500px" />
              </div>
            </div>
          </section>
          <section>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "14px",
                  marginTop: "10px"
                }}
              >
                <h1
                  style={{
                    fontSize: "25px",
                    marginBottom: "10px",
                    color: "blue"
                  }}
                >
                  Khata Book
                </h1>
                <p style={{ width: "400px", marginBottom: "10px" }}>
                  Arrow keys to increase decrease volume. Even though Israel is
                  a small country it is always in the news. The news continues
                  to report on Jews moving to Israel.
                </p>
                <span>
                  <input type="checkbox" />
                  Many Paymets Options
                </span>
                &nbsp;
                <span>
                  <input type="checkbox" />
                  Street's Store On Smartphone
                </span>
                &nbsp;
                <span>
                  <input type="checkbox" />
                  Digital Representation Of All Products
                </span>
                &nbsp;
                <span>
                  <input type="checkbox" />
                  Digitalazation Of All UDHAAR
                </span>
              </div>
              <div>
                <img src={logo1} height="230px" width="500px" />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "14px",
                  marginTop: "10px"
                }}
              >
                <h1
                  style={{
                    fontSize: "25px",
                    marginBottom: "10px",
                    color: "blue"
                  }}
                >
                  Credit Pay
                </h1>
                <p style={{ width: "400px", marginBottom: "10px" }}>
                  Arrow keys to increase decrease volume. Even though Israel is
                  a small country it is always in the news. The news continues
                  to report on Jews moving to Israel.
                </p>
                <span>
                  <input type="checkbox" />
                  Many Paymets Options
                </span>
                &nbsp;
                <span>
                  <input type="checkbox" />
                  Street's Store On Smartphone
                </span>
                &nbsp;
                <span>
                  <input type="checkbox" />
                  Digital Representation Of All Products
                </span>
                &nbsp;
                <span>
                  <input type="checkbox" />
                  Digitalazation Of All UDHAAR
                </span>
              </div>
            </div>
            <section>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ marginTop: "20px" }}>
                  <h1
                    style={{
                      color: "grey",
                      fontSize: "20px",
                      marginBottom: "15px"
                    }}
                  >
                    Testimonial
                  </h1>
                  <h2
                    style={{
                      color: "grey",
                      fontSize: "15px",
                      marginBottom: "10px"
                    }}
                  >
                    What Customer Say!
                  </h2>
                  <p style={{ color: "grey", marginBottom: "10px" }}>
                    Endorsement to our services that inspires enthusisam annd
                    zeal
                  </p>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <div className="dot">
                    <i style={{ padding: "5px" }} className="fas fa-user"></i>
                  </div>
                  <span style={{ marginLeft: "15px" }}>Jyoti Singh</span>
                  <br />
                  <span style={{ marginTop: "10px" }}>Boaring road</span>
                  <p style={{ marginTop: "10px" }}>
                    <q>
                      "Endorsement to our services that inspires enthusisam annd
                      zeal"
                    </q>
                  </p>
                  <p style={{ marginTop: "10px" }}>
                    <i className="arrow right"></i>
                    <i class="arrow left"></i>
                  </p>
                </div>
              </div>
              <div>
                <center>
                  <p style={{ color: "grey", fontSize: "20px" }}>
                    Trusted By Shop
                  </p>
                </center>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    marginTop: "10px"
                  }}
                >
                  <img src={logo4} height="40px" width="60px" />
                  <img src={logo5} height="40px" width="60px" />
                  <img src={logo6} height="40px" width="60px" />
                  <img src={logo5} height="40px" width="60px" />
                  <img src={logo4} height="40px" width="60px" />
                </div>
                <div style={{ marginTop: "10px" }}>
                  <center>
                    <div className="dot1"></div>
                    &nbsp;
                    <div className="dot1"></div>
                    &nbsp;
                    <div className="dot1"></div>
                    &nbsp;
                    <div className="dot1"></div>
                  </center>
                </div>
              </div>
            </section>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Frontend;
