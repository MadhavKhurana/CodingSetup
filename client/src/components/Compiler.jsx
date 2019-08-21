import React, { Component } from "react";
import axios from "axios";
import "./Compiler.css";
import Helmet from "react-helmet";
import { NavLink } from "react-router-dom";
// import "./compiler.js";

class Compiler extends Component {
  state = {
    code: "",
    output: "",
    input: "",
    sampleInput: "7\n2 4 5 1 7 4 3",
    sampleOutput: "1 2 3 4 4 5 7"
  };

  codeChange = e => {
    this.setState({
      code: e.target.value
    });
  };

  inputChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  Submit = e => {
    e.preventDefault();
    const obj = {
      code: this.state.code,
      input: this.state.input
    };

    if (this.props.props) {
      axios
        .post(`api/users/${this.props.props}`, obj)
        .then(data => {
          this.setState({
            output: data.data.stdout ? data.data.stdout : data.data.stderr,
            input: this.state.input
          });
          console.log(data);
        })
        .catch(err => console.log(err));
    } else {
      axios
        .post(`api/users/2`, obj)
        .then(data => {
          this.setState({
            output: data.data.stdout ? data.data.stdout : data.data.stderr,
            input: this.state.input
          });
          console.log(data);
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Helmet>
          <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js" />
        </Helmet>

        <div className="wrapper">
          <nav id="sidebar">
            <div className="sidebar-header">
              <h3>Questions</h3>
            </div>

            <ul className="list-unstyled components">
              {/* <p>Dummy Heading</p> */}
              <li>
                <NavLink to="/">Practice</NavLink>
              </li>
              <li>
                <NavLink to="/BubbleSort">Bubble Sort</NavLink>
              </li>
              {/* <li>
                <a href="#">About</a>
              </li> */}
              {/* <li>
                <a
                  href="#pageSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  class="dropdown-toggle"
                >
                  Pages
                </a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                  <li>
                    <a href="#">Page 1</a>
                  </li>
                  <li>
                    <a href="#">Page 2</a>
                  </li>
                  <li>
                    <a href="#">Page 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li> */}
            </ul>
          </nav>
        </div>
        {/* <div id="main">...</div> */}
        <h1>{this.props.props}</h1>
        <br />
        {this.props.props ? (
          <div>
            <h4>Sample Input</h4>
            <textarea cols="50" value={this.state.sampleInput} />
            <br />
            <br />
            <h4>Sample Output</h4>
            <textarea
              cols="50"
              placeholder="Enter inputs here"
              value={this.state.sampleOutput}
            />

            <br />
            <br />
            <br />
          </div>
        ) : (
          ""
        )}

        <form onSubmit={this.Submit}>
          <textarea
            cols="50"
            rows="20"
            value={this.state.code}
            onChange={this.codeChange}
            placeholder="Enter Your Code Here"
          />
          <br />
          <textarea
            cols="50"
            placeholder="Enter inputs here"
            value={this.state.input}
            onChange={this.inputChange}
          />
          <br />
          <input type="submit" className="btn btn-primary" value="submit" />
        </form>
        <br />
        <br />
        <h2>OutPut</h2>
        <textarea cols="50" value={this.state.output} />
      </div>
    );
  }
}

export default Compiler;
