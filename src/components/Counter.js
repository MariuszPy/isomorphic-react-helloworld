//import React from 'react';
var React = require('react');

var Counter = React.createClass({

    getInitialState: function(){
        return {
            counter: 10
        };
    },

    handleClick:  function(){
        this.setState({counter: this.state.counter + 1});
        },

    render: function() {
        return (
            <div>
                <button onClick={this.handleClick}>Click Me!</button>
                <div><br />Counter: {this.state.counter}</div>
            </div>
        );
    }
});

module.exports = Counter;
