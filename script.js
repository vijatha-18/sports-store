// PRODUCTS

const products = [

{ name:"Football", price:899, category:"football", img:"https://assets-jiocdn.ajio.com/medias/sys_master/r…9009ac5f9d7b/-473Wx593H-702374038-multi-MODEL.jpg" },
{ name:"Football Boots", price:2499, category:"football", img:"https://images.unsplash.com/photo-1521417531039-3c63cbbd3f1c" },
{ name:"Goalkeeper Gloves", price:1299, category:"football", img:"https://images.unsplash.com/photo-1604586376807-f73185cf5861" },
{ name:"Shin Guards", price:699, category:"football", img:"https://images.unsplash.com/photo-1606813909355-4c1a01eafc5b" },
{ name:"Football Net", price:1799, category:"football", img:"https://images.unsplash.com/photo-1508098682722-e99c43a406b2" },

{ name:"Cricket Bat", price:1999, category:"cricket", img:"https://assets-jiocdn.ajio.com/medias/sys_master/r…b9009ac5f8de9/-473Wx593H-702373995-blue-MODEL.jpg"},
{ name:"Cricket Ball", price:399, category:"cricket", img:"https://images.unsplash.com/photo-1584464491033-06628f3a6b7b" },
{ name:"Batting Gloves", price:999, category:"cricket", img:"https://images.unsplash.com/photo-1624880357913-a8539238245b" },
{ name:"Cricket Pads", price:1799, category:"cricket", img:"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa" },
{ name:"Cricket Helmet", price:1599, category:"cricket", img:"https://images.unsplash.com/photo-1603539444875-76e7684265f6" },

{ name:"Basketball", price:999, category:"basketball", img:"https://images.unsplash.com/photo-1519861531473-9200262188bf" },
{ name:"Basketball Shoes", price:2999, category:"basketball", img:"https://images.unsplash.com/photo-1528701800489-20be3c8e7d9c" },
{ name:"Basketball Net", price:899, category:"basketball", img:"https://images.unsplash.com/photo-1517649763962-0c623066013b" },
{ name:"Basketball Jersey", price:799, category:"basketball", img:"https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a" },
{ name:"Basketball Pump", price:299, category:"basketball", img:"https://images.unsplash.com/photo-1606813909355-4c1a01eafc5b" },

{ name:"Dumbbells", price:1899, category:"fitness", img:"https://images.unsplash.com/photo-1526676037777-05a232554f77" },
{ name:"Yoga Mat", price:799, category:"fitness", img:"https://images.unsplash.com/photo-1594737625785-c1c5c9f16b06" },
{ name:"Skipping Rope", price:499, category:"fitness", img:"https://images.unsplash.com/photo-1599058917765-a780eda07a3e" },
{ name:"Resistance Bands", price:699, category:"fitness", img:"https://images.unsplash.com/photo-1599058917212-d750089bc07e" },
{ name:"Kettlebell", price:1599, category:"fitness", img:"https://images.unsplash.com/photo-1517838277536-f5f99be501cd" },

{ name:"Badminton Racket", price:1299, category:"badminton", img:"https://images.unsplash.com/photo-1611516491426-03025e6043c3" },
{ name:"Shuttlecock Pack", price:399, category:"badminton", img:"https://images.unsplash.com/photo-1595433562696-8f7c9aee06b6" },
{ name:"Badminton Shoes", price:2299, category:"badminton", img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
{ name:"Badminton Net", price:999, category:"badminton", img:"https://images.unsplash.com/photo-1517649763962-0c623066013b" },
{ name:"Racket Grip", price:199, category:"badminton", img:"https://images.unsplash.com/photo-1606813909355-4c1a01eafc5b" }

];

// duplicate to reach 50+
while(products.length < 55){
products.push({...products[Math.floor(Math.random()*products.length)]});
}


// RENDER PRODUCTS

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

document.getElementById("sort").addEventListener("change",function(){

let sorted=[...products];

sorted.sort((a,b)=>this.value==="low"?a.price-b.price:b.price-a.price);

renderProducts(sorted);

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


