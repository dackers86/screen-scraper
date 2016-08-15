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

exports.extract_nth_item = function($, className, number) {
  var items = [];

  $(className).each(function(i, element){
    var current  = $(this);
    items.push(current.text().trim().replace(/[^\w\s]/gi, ''));
  });

  return items[number];
};

exports.extract_nth_item_by_name = function($, element, name, number) {
  var items = [];
  $(element + '[name =' + name + ']' ).each(function(i, element){
    var current  = $(this);
    items.push(current.attr('value'));
  });

  return items[number];
};
