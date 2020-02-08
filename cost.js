var elements = document.getElementsByClassName("product-tile__active-price-value");

function parse_kg(str) {
  if (str.includes(" кг")) {
    return parseFloat(str.match(/\d+/)[0]);
  }
  if (str.includes(" г")) {
    return parseFloat(str.match(/\d+/)[0])/1000;
  }
}

for (var i = 0; i < elements.length; i++) {
    price = elements[i].innerHTML;
    weight = elements[i].parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName("product-tile__weight")[0].innerHTML
    price_float = parseFloat(price)
    weight_kg = parse_kg(weight)
    price_per_kilo = (price_float / weight_kg).toFixed(2)
    elements[i].innerHTML = price + " uah | cost: " + price_per_kilo + " "
}
