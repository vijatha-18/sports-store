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

let cartItems=document.getElementById("cart-items")
let total=0
let count=0

cartItems.innerHTML=""

for(let item in cart){

let li=document.createElement("li")

li.innerText=item+" x"+cart[item].qty+" - ₹"+cart[item].price*cart[item].qty

cartItems.appendChild(li)

total+=cart[item].price*cart[item].qty
count+=cart[item].qty

}

document.getElementById("cart-total").innerText=total
document.getElementById("cart-count").innerText=count

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
