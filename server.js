request = require('request');
cheerio = require('cheerio');
resolver = require('resolver');

var stdin = process.openStdin();
process.stdin.setRawMode
process.stdin.resume();

process.stdin.on('data', function() {
    console.log("press any key to conutine...");
});
