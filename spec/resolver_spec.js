resolver = require('./../lib/resolver.js');
fs = require('fs');


describe("Running the resolver", function() {

 fixture = fs.readFileSync('./spec/javascripts/fixture/response.html', "utf8");

  it("will return products in a jquery format", function() {
	
    expected_result = 3;

    actual_result = resolver.resolve_to_jquery(fixture, '.productLister').children().length;

    expect(actual_result).toBe(expected_result);
  });
});

