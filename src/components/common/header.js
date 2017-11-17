"use strict";
var React = require("react");

var Header = React.createClass({
  render: function() {
    return (
    <div>
        <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              React-Core & Flux
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#authors">Authors</a>
            </li>
          
          </ul>
        </div>
      </nav>
      </div>);
  }
});

module.exports = Header;
