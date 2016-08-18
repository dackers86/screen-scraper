request = require('request');
cheerio = require('cheerio');
scraper = require('./lib/scraper');

var stdin = process.openStdin();
process.stdin.setRawMode
process.stdin.resume();

console.log("press any key to conutine...");

process.stdin.on('data', function() {
    scraper.scrape();
});
