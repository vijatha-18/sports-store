// PRODUCTS

const products = [

{ name:"Football", price:899, category:"football", img:"https://pngfile.net/files/preview/960x1008/43817426695897olk4kbbtrn3mtx9h17qfbs0r6sglwlgbubwqmptb5hdpxjqp6mt0mqlfhik0pzrsuonqgfntfxtq1ravoy8fn1eyefw8oddai2t.png" },
{ name:"Football Boots", price:2499, category:"football", img:"https://www.pngall.com/wp-content/uploads/11/Football-Boots-PNG-Image-File.png" },
{ name:"Goalkeeper Gloves", price:1299, category:"football", img:"https://gambol.in/cdn/shop/files/2_4569ea43-d791-43bf-b089-5e1946259246.png?v=1705485273" },
{ name:"Shin Guards", price:699, category:"football", img:"https://flashhockey.in/wp-content/uploads/2025/06/Super-Nova-600x750.png" },
{ name:"Football Net", price:1799, category:"football", img:"https://img.freepik.com/premium-photo/soccer-goal-white-png-transparent-background_94628-26841.jpg" },

{ name:"Cricket Bat", price:1999, category:"cricket", img:"https://shop.teamsg.in/cdn/shop/files/7_075f44bf-c833-4cb5-8d1b-262bbbb83891.png?v=1745324324&width=1946" },
{ name:"Cricket Ball", price:399, category:"cricket", img:"https://www.transparentpng.com/download/cricket-ball/urvncf-cricket-ball-best.png" },
{ name:"Batting Gloves", price:999, category:"cricket", img:"https://wallpapers.com/images/hd/cricket-batting-gloves-m-r-f-brand-txj9h7kutuhyzo6w.jpg" },
{ name:"Cricket Pads", price:1799, category:"cricket", img:"https://5.imimg.com/data5/SELLER/Default/2023/5/307650115/XE/XU/GT/23974003/photoroom-20230506-140215-500x500.png" },
{ name:"Cricket Helmet", price:1599, category:"cricket", img:"https://scssports.in/cdn/shop/files/ssskullplaincap-2025-05-21T124752.981.png?v=1747811972&width=1200" },

{ name:"Basketball", price:999, category:"basketball", img:"https://png.pngtree.com/png-vector/20250708/ourmid/pngtree-orange-basketball-png-image_16721120.webp" },
{ name:"Basketball Shoes", price:2999, category:"basketball", img:"https://www.nicepng.com/png/detail/29-292731_nike-shoes-png-nike-basketball-shoes-png.png" },
{ name:"Basketball Net", price:899, category:"basketball", img:"https://png.pngtree.com/png-clipart/20241127/original/pngtree-vector-basketball-net-png-image_17327629.png" },
{ name:"Basketball Jersey", price:799, category:"basketball", img:"https://png.pngtree.com/png-clipart/20220111/original/pngtree-hand-painted-nba-jersey-png-image_7082759.png" },
{ name:"Basketball Pump", price:299, category:"basketball", img:"https://cdn11.bigcommerce.com/s-qhxysj/images/stencil/1280x1280/products/593/2145/WTBA4000N_0_NBA_Authentic_Aluminum_Pump_BL__47632.1655095770.png?c=2" },

{ name:"Dumbbells", price:1899, category:"fitness", img:"https://t3.ftcdn.net/jpg/06/04/58/12/360_F_604581226_x37uI5JgVGTir2BBC334UzYdqcieLG44.jpg" },
{ name:"Yoga Mat", price:799, category:"fitness", img:"https://static.vecteezy.com/system/resources/previews/049/238/570/non_2x/rolled-up-purple-yoga-mat-free-png.png" },
{ name:"Skipping Rope", price:499, category:"fitness", img:"https://cdnspecseu.bizay.com/cdn-cgi/image/format=webp,quality=80/8_1/imagens_GivingEurope_transformed/005396-017999999-3D135-FRT-PRO03-GIV.png?v=638473481363059831" },
{ name:"Resistance Bands", price:699, category:"fitness", img:"https://www.vecteezy.com/free-png/resistance-bands" },
{ name:"Kettlebell", price:1599, category:"fitness", img:"https://freepngimg.com/save/42053-kettlebell-download-hd-png/1324x993" },
  
{ name:"Badminton Racket", price:1299, category:"badminton", img:"https://pngimg.com/d/badminton_PNG10448.png" },
{ name:"Shuttlecock Pack", price:399, category:"badminton", img:"https://store.cosco.in/cdn/shop/files/J9A8038_copy_2_2_1024x1024.jpg?v=1762597338" },
{ name:"Badminton Shoes", price:2299, category:"badminton", img:"https://in.hndrd.co/cdn/shop/files/Artboard_1_66be91cb00.png?v=1749011273&width=800" },
{ name:"Badminton Net", price:999, category:"badminton", img:"https://d2ncjxd2rk2vpl.cloudfront.net/red-csport/product/5c7ea6d7cb84a5277ebad5a2/600x600/95/outside/cbd33732-0b51-4475-efc4-9f8a399e240b" },
{ name:"Racket Grip", price:199, category:"badminton", img:"https://m.media-amazon.com/images/I/516qNIwY7UL.jpg" },
  
{ name:"cricket thigh gaurd", price:499, category:"cricket", img:"https://shop.teamsg.in/cdn/shop/files/1_21fc7f06-db1d-4881-a73b-075edf45559f.png?v=1720253322" },
];

const container = document.getElementById("product-list");

function renderProducts(list){

container.innerHTML="";

list.forEach(p=>{

container.innerHTML+=`

<div class="product ${p.category}" data-price="${p.price}">

<img src="${p.img}">

<h3>${p.name}</h3>

<p>₹${p.price}</p>

<button onclick="addToCart('${p.name}',${p.price})">Add to Cart</button>

</div>

`;

});

}

renderProducts(products);


// CART SYSTEM

let cart = JSON.parse(localStorage.getItem("cart")) || {};


function addToCart(name,price){

if(cart[name]){

if(cart[name].qty >= 10){
alert("Out of stock");
return;
}

cart[name].qty++;

}else{

cart[name] = {price:price, qty:1};

}

updateCart();
showPopup();

}


function updateCart(){

let cartContainer = document.getElementById("cart-items");

cartContainer.innerHTML="";

let total=0;
let count=0;

for(let item in cart){

cartContainer.innerHTML+=`

<div class="cart-item">

<span>${item}</span>

<div class="qty-controls">

<button onclick="changeQty('${item}',-1)">-</button>
<span>${cart[item].qty}</span>
<button onclick="changeQty('${item}',1)">+</button>

</div>

<button onclick="removeItem('${item}')">✖</button>

</div>

`;

total += cart[item].price * cart[item].qty;
count += cart[item].qty;

}

document.getElementById("cart-total").innerText = total;
document.getElementById("cart-count").innerText = count;

localStorage.setItem("cart",JSON.stringify(cart));

}


function changeQty(name,amount){

cart[name].qty += amount;

if(cart[name].qty <= 0){
delete cart[name];
}

if(cart[name] && cart[name].qty > 10){
cart[name].qty = 10;
alert("Max 10 allowed");
}

updateCart();

}


function removeItem(name){

delete cart[name];

updateCart();

}


function toggleCart(){

document.getElementById("cart").classList.toggle("active");
document.getElementById("cart-overlay").classList.toggle("active");

}


function showPopup(){

let popup = document.getElementById("popup");

popup.style.display="block";

setTimeout(()=>popup.style.display="none",1500);

}


// SEARCH

document.getElementById("search").addEventListener("keyup",function(){

let value = this.value.toLowerCase();

let filtered = products.filter(p => p.name.toLowerCase().includes(value));

renderProducts(filtered);

document.getElementById("no-products").style.display = filtered.length ? "none" : "block";

});


// SORT

document.getElementById("search").addEventListener("keyup",function(){
  
searchValue = this.value.toLowerCase();
  
applyFilters();
  
});


// CATEGORY FILTER

function filterCategory(cat){

if(cat==="all") return renderProducts(products);

renderProducts(products.filter(p=>p.category===cat));

}


// THEME TOGGLE

const toggle=document.getElementById("themeToggle");

let theme=localStorage.getItem("theme");

if(theme==="light"){
document.body.classList.add("light");
toggle.innerText="☀️";
}

toggle.onclick=()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){
localStorage.setItem("theme","light");
toggle.innerText="☀️";
}else{
localStorage.setItem("theme","dark");
toggle.innerText="🌙";
}

};

updateCart();


