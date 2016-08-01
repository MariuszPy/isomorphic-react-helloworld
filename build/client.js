'use strict';

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Hello from './components/Hello';
var React = require('react');
var ReactDOM = require('react-dom');
var Hello = require('./components/Hello');

ReactDOM.render(React.createElement(Hello, null), document.getElementById('react-container'));