window.addEventListener("DOMContentLoaded", getProduct);

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

function getProduct() {
  fetch(url)
    .then((response) => response.json())
    .then(showProduct);

  console.log(product);
}

function showProduct(product) {
  //   Herunder bestemmes sectionbestil indholdet
  document.querySelector(".bestilname").textContent =
    product.productdisplayname;
  document.querySelector(".type").textContent = product.articletype;
  document.querySelector(".brand").textContent = product.brandname;

  //   Herunder bestemmes indholdet under "Productinformation"
  document.querySelector(".infocolour").textContent = product.basecolour;
  document.querySelector(".infoid").textContent = product.id;
  document.querySelector(".infoname").textContent = product.productdisplayname;

  //   Herunder bestemmes billederne ud fra hver id
  document.querySelector(
    ".imgprodukt"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
  document.querySelector(
    ".imgprodukt"
  ).alt = `Image of ${json.productdisplayname}`;
}
