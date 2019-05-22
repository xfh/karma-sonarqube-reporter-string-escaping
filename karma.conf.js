'use strict';
var path = require('path');

// Karma configuration
module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'src/**-spec.js'
        ],

        reporters: ['mocha', 'sonarqube'],

        // suppress skipped tests in reporter
        mochaReporter: {
            ignoreSkipped: true
        },

        sonarqubeReporter: {
            basePath: 'src',        // test files folder
            filePattern: '**/**-spec.[tj]s', // test files glob pattern
            encoding: 'utf-8',          // test files encoding
            outputFolder: 'build',      // report destination
            legacyMode: false,          // report for Sonarqube < 6.2 (disabled)
            reportName: function (ignored) { // report name callback
                /**
                 * Report metadata array:
                 * - metadata[0] = browser name
                 * - metadata[1] = browser version
                 * - metadata[2] = plataform name
                 * - metadata[3] = plataform version
                 */
                // return metadata.concat('xml').join('.');
                return 'sonar-report.xml';
            }
        },

        // web server port
        port: 9876,

        colors: true,

        // level of logging
        // possible values:
        // - config.LOG_DISABLE
        // - config.LOG_ERROR
        // - config.LOG_WARN
        // - config.LOG_INFO
        // - config.LOG_DEBUG
        logLevel: config.LOG_WARN,

        autoWatch: false,

        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,
    });
};
