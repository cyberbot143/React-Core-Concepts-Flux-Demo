"use strict";
var React = require("react");

var About = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className = "jumbotron">About Page</h1>
        <p>This is a sample About Page</p>
      </div>
    );
  }
});

module.exports = About;
