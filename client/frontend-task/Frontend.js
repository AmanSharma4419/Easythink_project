import React from "react";
import "../frontend-task/Frontend.css";
class Frontend extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div style={{ marginLeft: "30px" }}>
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
                  OKK
                </button>
                <span style={{ fontSize: "25px" }}>JI</span>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "15px" }}>HOME</div>
                <div style={{ marginRight: "15px" }}>OKKJI FOR RETAILER</div>
                <div style={{ marginRight: "15px" }}>OKKJi FAST</div>
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

                <p style={{ marginTop: "15px", color: "grey" }}>
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
                  <span style={{ marginRight: "20px" }}>
                    <i class="fab fa-google-play"></i>
                  </span>
                  <span>
                    <i class="fab fa-app-store"></i>
                  </span>
                  <div>
                    <input type="text" placeholder="Mobile Number" />
                    <button>
                      <a href="#">Get App Link</a>
                    </button>
                  </div>
                </center>
              </div>
              <div>
                <img src="./media/shopping.jpg" height="200px" width="200px" />
              </div>
            </div>
          </section>
          <section>
            <center>
              <span>Why Customer</span>
              <span>Loves OKKji</span>
            </center>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <img src="./media/shopping.jpg" height="300px" width="500px" />
              </div>
              <div style={{ marginLeft: "60px" }}>
                <h1>Daily useable from nearby shops</h1>
                <p>
                  Arrow keys to increase decrease volume. Even though Israel is
                  a small country it is always in the news. The news continues
                  to report on Jews moving to Israel.
                </p>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <input type="checkbox" value="Bike" /> I have a bikess
                  <input type="checkbox" value="Bike" /> I have a bike
                  <input type="checkbox" value="Bike" /> I have a bike
                  <input type="checkbox" value="Bike" /> I have a bike
                  <br />
                </div>
              </div>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Frontend;
