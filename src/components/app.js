
//"use strict";

$ = jQuery = require("jquery");
var React = require("react");
var Header = require('../components/common/header');
var Footer = require('../components/common/footer');

var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
    
  render: function() {
    return (   
      <div>
      <Header/>
      <RouteHandler/>
      <Footer/>
      </div>
    );
  }
});

module.exports = App;
