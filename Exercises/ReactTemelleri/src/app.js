//JSX
let root = document.querySelector("#root");

let template = (
  <div>
    <h1>Hello World</h1>
    <div>Lorem, ipsum dolor.</div>
    <ul>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
      <li>Lorem, ipsum.</li>
    </ul>
    let template2 =
    <div>
      <h2 id="product-name">name: Iphone</h2>
      <p id="product-price">price: 2000</p>
      <p id="product-description">Description: Good phone</p>
    </div>
  </div>
);
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

ReactDOM.render(template2, root);

// terminala bunu yaziriq
// npx babel src/app.js --out-file=public/scripts/app.js
