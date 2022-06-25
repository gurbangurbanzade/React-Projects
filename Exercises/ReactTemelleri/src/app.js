// terminala bunu yaziriq
// npx babel src/app.js --out-file=public/scripts/app.js

//JSX
let root = document.querySelector("#root");
// Template 1
let template = (
  <div>
    <h1>Hello World</h1>
    <div>Lorem, ipsum dolor.</div>
    <ul>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
    </ul>
  </div>
);
// Template 2
let product = {
  //   name: "Iphone",
  price: 3000,
  description: "Good Phone",
};

function getDesctription(description) {
  if (description) {
    return <p id="product-description">Description: {description}</p>;
  }
}

let template2 = (
  <div>
    <h2 id="product-name">name: {product.name ? product.name : "no name"}</h2>
    {product.price && product.price > 0 ? (
      <p id="product-price">price: {product.price} AZN</p>
    ) : (
      ""
    )}
    {getDesctription(product.description)}
  </div>
);

// Template 3
let number = 0;
let up = () => {
  number++;
  renderApp();
  return console.log("salam");
};
let down = () => {
  number--;
  renderApp();
  return console.log("salam");
};

function renderApp() {
  let template3 = (
    <div>
      <h1>Number {number}</h1>
      <button id="btnUp" className="btnBlue" onClick={up}>
        +1
      </button>
      <button id="btnDown" className="btnRed" onClick={down}>
        -1
      </button>
    </div>
  );
  ReactDOM.render(template3, root);
}

// renderApp();

// Template 4
function saat() {
  let template4 = (
    <div>
      <h1>Time</h1>
      <h2>{Date()}</h2>
    </div>
  );
  //   ReactDOM.render(template4, root);
}

saat();
setInterval(() => {
  saat();
}, 1000);

// Template 5

function render() {
  let arr = [1, 2, 3, 4];
  let item = arr.map((arr) => {
    return <li key={arr.toString()}>{arr}</li>;
  });
  let template5 = (
    <div>
      <ul>{item}</ul>
    </div>
  );
  ReactDOM.render(template5, root);
}

render();
