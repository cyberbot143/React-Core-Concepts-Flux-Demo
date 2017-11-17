"use strict";
var React = require("react");


var Footer = React.createClass({
  render: function() {
    return (
      <div>
          <!--Footer-->
<footer className="page-footer indigo center-on-small-only pt-0">

    <!--Footer Links-->
    <div className="container">

        <!--First row-->
        <div className="row">

            <!--First column-->
            <div className="col-md-12">

                <div className="footer-socials mb-5 flex-center">

                    <!--Facebook-->
                    <a className="icons-sm fb-ic"><i class="fa fa-facebook fa-lg white-text mr-md-4"> </i></a>
                    <!--Twitter-->
                    <a className="icons-sm tw-ic"><i class="fa fa-twitter fa-lg white-text mr-md-4"> </i></a>
                    <!--Google +-->
                    <a className="icons-sm gplus-ic"><i class="fa fa-google-plus fa-lg white-text mr-md-4"> </i></a>
                    <!--Linkedin-->
                    <a className="icons-sm li-ic"><i class="fa fa-linkedin fa-lg white-text mr-md-4"> </i></a>
                    <!--Instagram-->
                    <a className="icons-sm ins-ic"><i class="fa fa-instagram fa-lg white-text mr-md-4"> </i></a>
                    <!--Pinterest-->
                    <a className="icons-sm pin-ic"><i class="fa fa-pinterest fa-lg white-text"> </i></a>
                </div>
            </div>
            <!--/First column-->
        </div>
        <!--/First row-->
    </div>
    <!--/Footer Links-->

    <!--Copyright-->
    <div className="footer-copyright">
        <div className="container-fluid">
            © 2016 Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </div>
    </div>
    <!--/Copyright-->

</footer>
<!--/Footer-->
        
      </div>
    );
  }
});

module.exports = Footer;
