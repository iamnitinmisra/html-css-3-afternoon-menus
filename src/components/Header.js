import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
        toggleTopBar: false
    };
    this.toggleTopBarFunc = this.toggleTopBarFunc.bind(this)
  }

  toggleTopBarFunc() {
    this.setState(prevState => {
        console.log("hit")
      return {
        toggleTopBar: !prevState.toggleTopBar
      };
    });
  }

  render() {
      console.log(this.state.toggleTopBar)
    return (
      <header>
        <div>
          <div>
            <a href="#" className="logo">Start Bootstrap</a>
          </div>
          <button onClick={this.toggleTopBarFunc}>Menu</button>

          <nav className={this.state.toggleTopBar ? "show" : ""}>
            <ul>
            
                {/* <a href="#" className="logo">Start Bootstrap</a> */}
            
              <li>
                <a href="#">SERVICES</a>
              </li>
              <li>
                <a href="#">PORTFOLIO</a>
              </li>
              <li>
                <a href="#">ABOUT</a>
              </li>
              <li>
                <a href="#">TEAM</a>
              </li>
              <li>
                <a href="#">CONTACT</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
