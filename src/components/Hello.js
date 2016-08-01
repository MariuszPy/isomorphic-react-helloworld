// import React from 'react';
// import Counter from './Counter';
var React = require('react');
var Counter = require('./Counter');

var Hello = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Works!</h1>
                <Counter />
            </div>
        );
    }
});

module.exports = Hello;
