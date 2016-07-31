request  = require('request');
cheerio = require('cheerio');


var stdin = process.openStdin(); 
process.stdin.setRawMode
process.stdin.resume();

process.stdin.on('data', function(){
	console.log("press any key to conutine...");



	url = 'http://hiring-tests.s3-website-eu-west-1.amazonaws.com/2015_Developer_Scrape/5_products.html';

    request(url, function(error, response, html){
		 // console.log(cheerio.load(html));

		 var $ = cheerio.load(html);

		 $('.productInfo h3 a').filter(function(){

                var data = $(this);

               console.log(data.first());
            })
     });

});