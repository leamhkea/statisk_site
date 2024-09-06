const container = document.querySelector("#sectionproduktliste");

fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  // Looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  // Fang template
  const template = document.querySelector("#smallProductTemplate").content;

  // Lav en kopi (får børnene med?)
  const copy = template.cloneNode(true);

  // Ændrer indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".type").textContent = product.articletype;
  copy.querySelector(".brand").textContent = product.brandname;
  copy.querySelector(".pris").textContent = product.price;
  copy.querySelector("a").href = `produkt.html?id=${product.id}`;

  // Herunder bestemmes billederne ud fra hver id
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("img").alt = product.productdisplayname;

  // Bestemmer udsolgte produkter
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldout");
  }

  // Bestemmer onsale produkter
  if (product.discount) {
    copy.querySelector(".discounted").style = "display: block";
    copy.querySelector("article").classList.add("onSale");
    copy.querySelector(".discounted p span").textContent = Math.round(
      product.price - (product.price * product.discount) / 100
    );
    copy.querySelector(".discounted p+p span").textContent = product.discount;
  }

  // Appende
  container.appendChild(copy);
}
