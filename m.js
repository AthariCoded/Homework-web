// انشأت لكم مصفوفه بداخلها Objects
let products = [
  { name: "Doritos small", price: 0.1 },
  { name: "Doritos large ", price: 0.15 },
  { name: "Doritos  xlarge", price: 0.3 },
];

// انشئ مصفوفه فارغه لتكون سلة المشتريات
let cart = [];
let sum = 0;
// هني راح تحطونلي الداله حق زر مسح السلة
function clearCart() {
  cart = [];
  sum = 0;
  document.getElementById("list").innerHTML = "";
  document.getElementById("total").innerHTML = "";
}

// هني راح تحطون الدالة عند الضغط  زر اضافة عنصر
function addtoCart(x) {
  cart.push(products[x]);
  document.getElementById("list").innerHTML = "";

  for (let i = 0; i < cart.length; i++) {
    document.getElementById(
      "list"
    ).innerHTML += `<li> ${cart[i].name} price ${cart[i].price} KD </li>`;
    // I changed in HTML file tag with id list from <p></p> to <ul></ul>
    // because tag <li></li> must be included in an ul tag
  }
  sum += products[x].price;
  document.getElementById("total").innerHTML = sum.toFixed(2) + " KD";
}
//   const list = document.getElementById("lest").innerHTML;
//   const ul = document.createElement("ul");
//   for (let i = 0; i < cart.length; i++) {
//     const li = document.createElement("li");
//     li.innerHTML = "hi";
//     ul.appendChild(li);
//   }
//   list.appendChild(ul);
//document.getElementById("lest").innerHTML = list;

/* // مساعدة صغيرونه راح تستخدمون loop +
// هذا اهوا كود طباعة الكلام بس وين بتحطونه 👀

// document.getElementById("lest").innerHTML +=<li>${element.name} price ${element.price} KD */
