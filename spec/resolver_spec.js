resolver = require('./../lib/resolver.js');


describe("Running the resolver", function() {

  it("will return products in a jquery format", function() {

	var fs = require('fs');

	var fixture = fs.readFileSync('./spec/javascripts/fixture/response.html', "utf8");
	
    expected_result = 3;

    actual_result = resolver.resolve_to_jquery(fixture).children().length;

    expect(actual_result).toBe(expected_result);
  });
});

