var nock = require('nock');
var request = require ('request');
var scraper = require('./../lib/scraper.js');
var fs = require('fs');

describe("Running the program", function() {

  it("will return a valid json result", function() {

    fixture = fs.readFileSync('./spec/javascripts/fixture/response.html', 'utf8');

    nock('http://hiring-tests.s3-website-eu-west-1.amazonaws.com')
                    .get('/2015_Developer_Scrape/5_products.html')
                    .reply(200, { fixture });

    expected_result = {
		"results":[
			{
				"title":"Sainsbury's Avocado, Ripe & Ready x2",
				"size": "90.6kb",
				"unit_price": 1.80,
				"description": "Great to eat now - refrigerate at home 1 of 5 a day 1 avocado counts as 1 of your 5..."
			},

			{

				"title":"Sainsbury's Avocado, Ripe & Ready x4",
				"size": "87kb",
				"unit_price": 2.00,
				"description": "Great to eat now - refrigerate at home 1 of 5 a day 1 avocado counts as 1 of your 5..."
			}
		],

		"total": 3.80
	}

    actual_result  = scraper.scrape();

    expect(actual_result).toBe(expected_result);
  });
});
