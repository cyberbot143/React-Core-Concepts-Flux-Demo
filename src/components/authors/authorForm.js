"use strict";
var React = require("react");
var Input = require('../common/textinput');
var AuthorForm = React.createClass({
  render: function() {
    return (<div>
        <h1>Manage Author</h1>
        <form>
          <Input name="firstName" label="First-Name" 
          value={this.props.author.firstName} onChange={this.props.onChange}
          error = {this.props.errors.firstName} />

          <Input name="lastName" label="Last-Name"
           value={this.props.author.lastName} onChange={this.props.onChange}
           error = {this.props.errors.lastName} />

          <input type="submit" value="Save" className="btn btn-default" onClick = {this.props.onSave}/>

        </form>
      </div>);
  }
});

module.exports = AuthorForm;
