"use strict";

var fs = require('fs');
var parseCommit = require('../');
var commitData = fs.readFileSync(__dirname + '/../test/fixtures.txt', 'utf8');

var lines = commitData.split('\n');
var i = 0;
var commit = null;
var matched = null;
var line = null;

while (i < lines.length) {
  line = lines[i];

  if (matched = line.match(/^(\u0000){0,1}([0-9a-fA-F]{40})/)) {
    if (commit) {
      console.log(parseCommit(commit));
    }

    commit = line;
  } else {
    commit += '\n' + line;
  }

  i++;
}