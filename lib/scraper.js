var request = require('request');
var resolver = require('../lib/resolver');

exports.scrape = function() {
    return scrape_main_page();
};

var scrape_main_page = function() {

    url = 'http://hiring-tests.s3-website-eu-west-1.amazonaws.com/2015_Developer_Scrape/5_products.html';

    request(url, function(error, response, html) {

        var result = [];

        var data = resolver.resolve_to_jquery(html);

        products = resolver.extract_list(data, '.productInfo');

        products.forEach(function(element, count) {

            var price = resolver.extract_nth_item(data, '.pricePerUnit', count);
            var product_data = find_product_data;

            result.push({
                "title": element,
                "size": product_data[0],
                "unit_price": price,
                "description": product_data[1]
            });
        });

        console.log(JSON.stringify({
            results: result
        }));
    });
};

var scrape_product_page = function(url) {

    request(url, function(error, response, html) {
        var result = [];
        data = resolver.resolve_to_jquery(result);

        result.push(resolver.extract_nth_item(data, '.productText', 0));
        result.push(resolver.extract_nth_item(data, '.productText', 1));

        return result;
    });
};

var find_product_data = function(html) {
    link = resolver.extract_nth_item_by_name(data, 'input', 'URL', 0);
    return scrape_product_page(link);
};