"use strict";

var React = require("react");
var Router = require("react-router");
var AuthorApi = require('../../Api/authorApi');
var AuthorList = require('./authorList');
var Link = Router.Link;

var Authors = React.createClass({
    getInitialState: function () {
        return {authors: []};
    },
    componentDidMount: function () {
        if(this.isMounted()){
        this.setState({
            authors: AuthorApi.getAllAuthors()
        });
    }
    },
    render: function () {
        return (<div>
            <h1>Authors List </h1>
            <Link to="addAuthor" className="btn btn-default">
              Add Author
            </Link>
            <AuthorList authors={this.state.authors} />
          </div>);
    }
});

module.exports = Authors;