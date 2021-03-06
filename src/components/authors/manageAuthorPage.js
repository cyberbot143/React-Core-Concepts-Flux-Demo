"use strict";
var React = require("react");
var Router = require("react-router");
var toastr = require("toastr");
var AuthorForm = require('./authorForm');
var AuthorActions = require("../../actions/authorActions");
var AuthorStore = require("../../stores/authorStore");

var ManageAuthorPage = React.createClass({
    mixins: [Router.Navigation],
    getInitialState: function () {
        return {
            author: {
                id: '',
                firstName: '',
                lastName: ''
            },
            errors: {}
        };
    },

    componentWillMount: function () {
        var authorId = this.props.params.id;
        if (authorId) {
            this.setState({
                author: AuthorStore.getAuthorById(authorId)
            });
        }

    },
    setAuthorState: function (event) {
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author: this.state.author});

    },
    authorFormIsValid: function () {
        var formIsValid = true;
        this.state.errors = {}; //clear any previous errors

        if (this.state.author.firstName.length < 3) {
            this.state.errors.firstName = "Firstname must be atleast 3 characters";
            formIsValid = false;
        }
        if (this.state.author.lastName.length < 3) {
            this.state.errors.lastName = "lastname must be atleast 3 characters";
            formIsValid = false;
        }

        this.setState({errors: this.state.errors});
        return formIsValid;

    },
    saveAuthor: function () {
        event.preventDefault();
        if (!this.authorFormIsValid()) {
            return;
        }
        if(this.state.author.id){
             AuthorActions.updateAuthor(this.state.author);
        }
        else{
            AuthorActions.createAuthor(this.state.author);
        }
        
        toastr.success("Author Saved.");
        this.transitionTo('authors');

    },
    render: function () {
        return ( 
        <div>
                <AuthorForm
                    author={this.state.author}
                    onChange={this.setAuthorState}
                    onSave={this.saveAuthor}
                    errors={this.state.errors}/>
            </div>);
    }
});

module.exports = ManageAuthorPage;
