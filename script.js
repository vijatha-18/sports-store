const products = [

{ name:"Football", price:899, category:"football", img:"https://images.unsplash.com/photo-1575361204480-aadea25e6e68" },
{ name:"Football Boots", price:2499, category:"football", img:"https://images.unsplash.com/photo-1521417531039-3c63cbbd3f1c" },
{ name:"Goalkeeper Gloves", price:1299, category:"football", img:"https://images.unsplash.com/photo-1604586376807-f73185cf5861" },
{ name:"Shin Guards", price:699, category:"football", img:"https://images.unsplash.com/photo-1606813909355-4c1a01eafc5b" },
{ name:"Football Net", price:1799, category:"football", img:"https://images.unsplash.com/photo-1508098682722-e99c43a406b2" },

{ name:"Cricket Bat", price:1999, category:"cricket", img:"https://images.unsplash.com/photo-1593341646782-e0b495cff86d" },
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
{ name:"Racket Grip", price:199, category:"badminton", img:"https://images.unsplash.com/photo-1606813909355-4c1a01eafc5b" },

{ name:"Running Shoes", price:3499, category:"running", img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
{ name:"Sports T-Shirt", price:799, category:"running", img:"https://images.unsplash.com/photo-1520975922284-8b456906c813" },
{ name:"Sports Shorts", price:699, category:"running", img:"https://images.unsplash.com/photo-1526403224905-8c64b2c5a0f4" },
{ name:"Running Cap", price:399, category:"running", img:"https://images.unsplash.com/photo-1514996937319-344454492b37" },
{ name:"Hydration Belt", price:599, category:"running", img:"https://images.unsplash.com/photo-1526403224905-8c64b2c5a0f4" },

{ name:"Sports Backpack", price:1199, category:"accessories", img:"https://images.unsplash.com/photo-1514477917009-389c76a86b68" },
{ name:"Water Bottle", price:299, category:"accessories", img:"https://images.unsplash.com/photo-1526403224905-8c64b2c5a0f4" },
{ name:"Gym Gloves", price:499, category:"accessories", img:"https://images.unsplash.com/photo-1579758629938-03607ccdbaba" },
{ name:"Wrist Bands", price:199, category:"accessories", img:"https://images.unsplash.com/photo-1606813909355-4c1a01eafc5b" },
{ name:"Sports Towel", price:249, category:"accessories", img:"https://images.unsplash.com/photo-1517836357463-d25dfeac3438" }

];

// duplicate items to reach 50+
while(products.length < 55){
products.push({...products[Math.floor(Math.random()*products.length)]});
}

const container = document.getElementById("product-list");

function renderProducts(list){
container.innerHTML="";

list.forEach(p=>{
container.innerHTML += `
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

let cart = JSON.parse(localStorage.getItem("cart")) || {}

updateCart()

function addToCart(name,price){

if(cart[name]){

if(cart[name].qty >= 10){
alert("Out of Stock ❌")
return
}

cart[name].qty++

}else{

cart[name]={price:price,qty:1}

}

localStorage.setItem("cart",JSON.stringify(cart))

updateCart()

showPopup()

}
function updateCart(){

let container=document.getElementById("cart-items")
container.innerHTML=""

let total=0
let count=0

for(let item in cart){

let div=document.createElement("div")
div.className="cart-item"

div.innerHTML=`

<div class="cart-item-name">${item}</div>

<div class="qty-controls">

<button onclick="changeQty('${item}',-1)">-</button>

<span>${cart[item].qty}</span>

<button onclick="changeQty('${item}',1)">+</button>

</div>

<div>₹${cart[item].price * cart[item].qty}</div>

<button onclick="removeItem('${item}')">❌</button>

`

container.appendChild(div)

total+=cart[item].price*cart[item].qty
count+=cart[item].qty

}

document.getElementById("cart-total").innerText=total
document.getElementById("cart-count").innerText=count

localStorage.setItem("cart",JSON.stringify(cart))

}

function toggleCart(){
document.getElementById("cart").classList.toggle("active")
}

function showPopup(){

let popup=document.getElementById("popup")

popup.style.display="block"

setTimeout(()=>{
popup.style.display="none"
},1500)

}

document.getElementById("search").addEventListener("keyup",function(){

let filter=this.value.toLowerCase()
let found=false

document.querySelectorAll(".product").forEach(p=>{

let name=p.querySelector("h3").innerText.toLowerCase()

if(name.includes(filter)){
p.style.display="block"
found=true
}else{
p.style.display="none"
}

})

document.getElementById("no-products").style.display=found?"none":"block"

})

function filterCategory(category){

document.querySelectorAll(".product").forEach(p=>{

if(category==="all" || p.classList.contains(category)){
p.style.display="block"
}else{
p.style.display="none"
}

})

}

document.getElementById("sort").addEventListener("change",function(){

let products=[...document.querySelectorAll(".product")]
let container=document.getElementById("product-list")

products.sort((a,b)=>{

let pa=a.dataset.price
let pb=b.dataset.price

return this.value==="low"?pa-pb:pb-pa

})

products.forEach(p=>container.appendChild(p))

})

const toggle=document.getElementById("themeToggle")

let theme=localStorage.getItem("theme")

if(theme==="light"){
document.body.classList.add("light")
toggle.innerText="☀️"
}

toggle.onclick=()=>{

document.body.classList.toggle("light")

if(document.body.classList.contains("light")){
localStorage.setItem("theme","light")
toggle.innerText="☀️"
}else{
localStorage.setItem("theme","dark")
toggle.innerText="🌙"
}

}
