"use strict";
var React = require("react");
var Router = require("react-router");
var Link = Router.Link;

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
                <Link to="app"> Home </Link>
            </li>
            <li>
              <Link to="about"> About </Link>
            </li>
            <li>
              <Link to="authors"> Authors </Link>
            </li>
          
          </ul>
        </div>
      </nav>
      </div>);
  }
});

module.exports = Header;
