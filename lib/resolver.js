request = require('request');
cheerio = require('cheerio');

exports.resolve_to_jquery = function(html, element){

	 var $ = cheerio.load(html);

	 $(element).filter(function(){
     	result = $(this);
     });

     return result;t
};



