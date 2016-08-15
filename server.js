request = require('request');
cheerio = require('cheerio');
scraper = require('./lib/scraper');

var stdin = process.openStdin();
process.stdin.setRawMode
process.stdin.resume();

process.stdin.on('data', function() {
    console.log("press any key to conutine...");
    scraper.scrape();
});
