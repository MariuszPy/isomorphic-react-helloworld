'use strict';

//import React from 'react';
var React = require('react');

var Counter = React.createClass({

    getInitialState: function getInitialState() {
        return {
            counter: 10
        };
    },

    handleClick: function handleClick() {
        this.setState({ counter: this.state.counter + 1 });
    },

    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'button',
                { onClick: this.handleClick },
                'Click Me!'
            ),
            React.createElement(
                'div',
                null,
                React.createElement('br', null),
                'Counter: ',
                this.state.counter
            )
        );
    }
});

module.exports = Counter;