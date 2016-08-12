request = require('request');
cheerio = require('cheerio');
resolver = require('./lib/resolver');
fs = require('fs');

fixture = fs.readFileSync('./spec/javascripts/fixture/response.html', "utf8");

var $ = cheerio.load(fixture);


var result  = resolver.extract_list($, '.productInfo');

console.log(result);
