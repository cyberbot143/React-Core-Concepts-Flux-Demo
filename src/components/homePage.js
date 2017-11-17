"use strict";

var React = require("react");
var Router = require("react-router");
var Link = Router.Link;

var Home = React.createClass({
    render: function() { 
        return <div>
            <div className="jumbotron">
              <h1> *React Core Concepts & flux</h1>
              <p>
                React, Flux, and React Router combined with Browserify, Gulp, and Bootstrap. Build a React and Flux app from scratch using this starter kit on
                <a href="http://www.pluralsight.com/courses/react-flux-building-applications">
                  Build Applications with React and Flux ..
                </a>
              </p>
              <Link to="about" className="btn btn-primary btn-md">Learn more</Link>
            </div>
          </div>;
     }

});

module.exports = Home;