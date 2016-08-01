'use strict';

//import React from 'react';
//import Http from 'http';
//import ReactDOMServer from 'react-dom/server';
//import Fs from 'fs';
var React = require('react');
var Http = require('http');
var ReactDOMServer = require('react-dom/server');
var Fs = require('fs');

var Hello = React.createFactory(require('./components/Hello'));

Fs.readFile('public/index.html', function (err, html) {

    if (err) {
        throw err;
    }

    var server = Http.createServer(function (request, response) {

        if (request.url == '/') {

            html = html.toString();
            var result = html.replace('<div id="react-container"></div>', '<div id="react-container">' + ReactDOMServer.renderToString(React.createElement(Hello, null)) + '</div>');

            response.writeHead(200, { "Content-Type": "text/html" });
            response.end(result);
        } else {

            var filePath = 'public' + request.url;
            Fs.readFile(filePath, function (error, content) {
                if (error) {
                    console.log(error);
                } else {
                    response.setHeader('Content-Type', 'text/javascript');
                    response.end(content);
                }
            });
        }
    });

    server.listen(7777);
    console.log('Server started...');
});