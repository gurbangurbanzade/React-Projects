"use strict";

//JSX
var root = document.querySelector("#root");
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello World"), /*#__PURE__*/React.createElement("div", null, "Lorem, ipsum dolor."), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum.")), "let template2 =", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
  id: "product-name"
}, "name: Iphone"), /*#__PURE__*/React.createElement("p", {
  id: "product-price"
}, "price: 2000"), /*#__PURE__*/React.createElement("p", {
  id: "product-description"
}, "Description: Good phone")));
var product = {
  //   name: "Iphone",
  price: 3000,
  description: "Good Phone"
};

function getDesctription(description) {
  if (description) {
    return /*#__PURE__*/React.createElement("p", {
      id: "product-description"
    }, "Description: ", description);
  }
}

var template2 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
  id: "product-name"
}, "name: ", product.name ? product.name : "no name"), product.price && product.price > 0 ? /*#__PURE__*/React.createElement("p", {
  id: "product-price"
}, "price: ", product.price, " AZN") : "", getDesctription(product.description));
ReactDOM.render(template2, root); // terminala bunu yaziriq
// npx babel src/app.js --out-file=public/scripts/app.js
