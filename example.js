request = require('request');
cheerio = require('cheerio');
resolver = require('./lib/resolver');
fs = require('fs');

fixture = fs.readFileSync('./spec/javascripts/fixture/response.html', "utf8");

result  = resolver.resolve_to_jquery(fixture, '.productLister li');


result.nextAll().each(function(index, element){
  console.log(element);
});
