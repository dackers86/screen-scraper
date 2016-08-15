resolver = require('../lib/resolver');
var fs = require('fs');


describe("Running the resolver", function() {

 fixture = fs.readFileSync('./spec/javascripts/fixture/response.html', 'utf8');

  it("can return a list of items", function() {

    expected_result = [ 'Sainsburys Conference Pears Ripe  Ready x4 minimum',
                        'Sainsburys Golden Kiwi x4',
                        'Sainsburys Kiwi Fruit Ripe  Ready x4' ];

    html  = resolver.resolve_to_jquery(fixture);
    actual_result = resolver.extract_list(html, '.productInfo');

    expect(actual_result).toEqual(expected_result);
  });

  it("can return a single item", function() {

    expected_result = 'Sainsburys Conference Pears Ripe  Ready x4 minimum';

    html  = resolver.resolve_to_jquery(fixture);
    actual_result = resolver.extract_nth_item(html, '.productInfo', 0);

    expect(actual_result).toEqual(expected_result);
  });


  it("can return a single item by name", function() {

    expected_result = '10151';

    html  = resolver.resolve_to_jquery(fixture);
    actual_result = resolver.extract_nth_item_by_name(html, 'input','storeId', 0);

    expect(actual_result).toEqual(expected_result);
  });
});
