request = require('request');
cheerio = require('cheerio');

exports.resolve_to_jquery = function(html) {
    return cheerio.load(html);
};

exports.extract_list = function($, className) {

  var items = [];

  $(className).each(function(i, element){
    var current  = $(this);
    items.push(current.text().trim().replace(/[^\w\s]/gi, ''));
  });

  return items;
};
