var request = require('request');
var resolver = require('resolver');

exports.scrape = function() {

    url = 'http://hiring-tests.s3-website-eu-west-1.amazonaws.com/2015_Developer_Scrape/5_products.html';

    request(url, function(error, response, html) {
        products = resolver.resolve_to_jquery(html, '.productLister');
    });
}
