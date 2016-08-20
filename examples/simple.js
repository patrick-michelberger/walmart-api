var walmart = require('../index.js')(process.env.WALMART_API_KEY, {protocol: 'http'});

walmart.stores.search(100, "cheerios").then(function(data) {
  console.log("Found " + data.count + " items");
});

walmart.getItem(10449075).then(function(item) {
  console.log(item.product.productName);
});

walmart.getItemByUPC("041100005373").then(function(item) {
  console.log(item.product.productName);
});

walmart.feeds.trending().then(function(data) {
  console.log("Trending found " + data.items.length + " items");
});

walmart.paginateByCategory("976759", function(response) {
    console.log(response.items.length + " items received from the category " + response.category);
    // check if more products are available?
    if (response.nextPage) {
      // this will recursively go to this same callback
      response.next();
    }
});

walmart.paginateByBrand("apple", function(response) {
    console.log(response.items.length + " items received from the brand " + response.brand);
    // check if more products are available?
    if (response.nextPage) {
      // this will recursively go to this same callback
      response.next();
    }
});
