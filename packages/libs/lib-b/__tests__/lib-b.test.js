'use strict';

const libB = require('..');
const assert = require('assert').strict;

assert.strictEqual(libB(), 'Hello from libB');
console.info('libB tests passed');
