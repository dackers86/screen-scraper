resolver = require('./../lib/resolver.js'); 

var $ = require('jquery')(require("jsdom").jsdom().defaultView );

// usage
$("body").append("<div>TEST</div>");
console.log($("body").html());

// require("jasmine-jquery");


describe("Running the resolver", function() {

  it("will return products in a jquery format", function() {

	loadFixtures('response.html');

    expected_result = 1;

    actual_result = resolver.resolve_to_jquery(fixture).children().count;

    expect(actual_result).toBe(expected_result);
  });
});

