"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.DefaultRoute;

var routes = (
  <Route name="app" path="/" handler={require("./components/App")}>
    <DefaultRoute handler={require("./components/homePage")} />
    <Route
      name="authors"
      handler={require("./components/authors/authorPage")}
    />
    <Route name="about" handler={require("./components/about/aboutPage")} />
    <Route
      name="addAuthor"
      path="author"
      handler={require("./components/authors/manageAuthorPage")}
    />
    <Route
      name="manageAuthor"
      path="author/:id"
      handler={require("./components/authors/manageAuthorPage")}
    />
    <NotFoundRoute handler={require("./components/notFoundRoute")} />
    {/* <Redirect from="about-us" to="about" /> */}
    {/* <Redirect from="about/*" to="about"/> */}
  </Route>
);
module.exports = routes;