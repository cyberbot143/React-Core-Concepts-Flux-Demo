"use strict";
var React = require("react");

var TextInput = React.createClass({
  
  render: function() {
        var wrapperClass = "form-group";
        if (this.props.error && this.props.error.length > 0) {
          wrapperClass += " " + "has-error";
        }
    return (<div className={wrapperClass}>
        <label htmlFor={this.props.name}> {this.props.label}</label>
        <input type="text" name={this.props.name}
                    placeholder={this.props.placeholder}
                     ref={this.props.name} className="form-control" 
                     onChange={this.props.onChange} value={this.props.value} />
        <div className = "input">{this.props.error}</div>
      </div>);
  }
});

module.exports = TextInput;
