"use strict";
var React = require("react");

var NotFoundPage = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="jumbotron">404 Error Not found</h1>
      </div>
    );
  }
});

module.exports = NotFoundPage;
