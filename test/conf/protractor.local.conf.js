'use strict';

let config = require('./protractor.shared.conf.js').config;

config.directConnect = true;

config.specs = ['../jasmine.spec.js'];

config.devicePixelRatio = { 'chrome': 2, 'firefox': 1 };

config.multiCapabilities = [
    {
        browserName: 'chrome',
        logName: 'Chrome',
        maxInstances: 2,
        shardTestFiles: true,
        chromeOptions: {
            args: [
                '--disable-cache',
                '--disable-application-cache',
                '--disable-offline-load-stale-cache',
                '--disk-cache-size=0',
                '--v8-cache-options=off'
            ]
        }
    }
];

exports.config = config;