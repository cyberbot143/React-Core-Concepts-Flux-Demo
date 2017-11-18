"use strict";
var React = require("react");

var About = React.createClass({
  statics: {
    willTransitionTo: function name(transition, params, query, callback) {
       if(!confirm("Are you sure want to go to About Page")){
            transition.abort();
       }else{
            callback();
       }
  },
  willTransitionFrom: function name(transition, component) {
        if (!confirm("Are you sure want to go to leave this page")) {
          transition.abort();
        }
  }},
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
