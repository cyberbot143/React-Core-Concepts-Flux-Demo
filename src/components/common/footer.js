"use strict";
var React = require("react");


var Footer = React.createClass({
  render: function() {
     return <footer className="footer navbar-fixed-bottom">
         <h4>
           _Copyright @2017 Marlabs Inc. All Rights Reserved. Contact information: <a href="mailto:someone@example.com">
             someone@example.com
           </a>.
         </h4>
       </footer>;

  }});

module.exports = Footer;
