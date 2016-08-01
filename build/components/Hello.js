'use strict';

// import React from 'react';
// import Counter from './Counter';
var React = require('react');
var Counter = require('./Counter');

var Hello = React.createClass({
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'Works!'
            ),
            React.createElement(Counter, null)
        );
    }
});

module.exports = Hello;