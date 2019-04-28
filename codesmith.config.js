'use strict';
const path = require('path');

module.exports = function (codesmith) {
    codesmith.setGenerator('simple-makefile', {
        description: 'create new Makefile for project',
        questions: [
        ],
        actions: [
            {
                type: 'add',
                path: 'Makefile',
                templateFile: 'generators/simple-makefile/templates/Makefile',
                abortOnFail: true
            }
        ]
    });
};
