formatter = require('./../lib/formatter.js');
resolver = require('./../lib/resolver.js');
fs = require('fs');


describe("Running the resolver", function() {

  fixture = fs.readFileSync('./spec/javascripts/fixture/response.html', "utf8");
  jquery_result = resolver.resolve_to_jquery(fixture);

  it("will return products in a json format", function() {

    expected_result = fs.readFileSync('./spec/javascripts/fixture/result.json', "utf8");

    actual_result = formatter.convert_to_json(jquery_result.children());

    expect(actual_result).toBe(expected_result);
  });
});

