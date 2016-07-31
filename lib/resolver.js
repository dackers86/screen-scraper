request = require('request');
cheerio = require('cheerio');

exports.resolve_to_jquery = function(html){

	 var $ = cheerio.load(html);

	 $('.productLister').filter(function(){
     	result = $(this);
     });

     return result;
};

