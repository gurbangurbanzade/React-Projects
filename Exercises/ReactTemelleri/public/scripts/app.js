"use strict";

// terminala bunu yaziriq
// npx babel src/app.js --out-file=public/scripts/app.js
//JSX
var root = document.querySelector("#root"); // Template 1

var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello World"), /*#__PURE__*/React.createElement("div", null, "Lorem, ipsum dolor."), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."))); // Template 2

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
}, "price: ", product.price, " AZN") : "", getDesctription(product.description)); // Template 3

var number = 0;

var up = function up() {
  number++;
  renderApp();
  return console.log("salam");
};

var down = function down() {
  number--;
  renderApp();
  return console.log("salam");
};

function renderApp() {
  var template3 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Number ", number), /*#__PURE__*/React.createElement("button", {
    id: "btnUp",
    className: "btnBlue",
    onClick: up
  }, "+1"), /*#__PURE__*/React.createElement("button", {
    id: "btnDown",
    className: "btnRed",
    onClick: down
  }, "-1"));
  ReactDOM.render(template3, root);
} // renderApp();
// Template 4


function saat() {
  var template4 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Time"), /*#__PURE__*/React.createElement("h2", null, Date())); //   ReactDOM.render(template4, root);
}

saat();
setInterval(function () {
  saat();
}, 1000); // Template 5

function render() {
  var arr = [1, 2, 3, 4];
  var item = arr.map(function (arr) {
    return /*#__PURE__*/React.createElement("li", {
      key: arr.toString()
    }, arr);
  });
  var template5 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, item));
  ReactDOM.render(template5, root);
}

render();
