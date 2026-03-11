let cart = JSON.parse(localStorage.getItem("cart")) || {}

updateCart()

function addToCart(name,price){

if(cart[name]){
if(cart[name].qty < 8) cart[name].qty++
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

li.innerHTML=item+" x"+cart[item].qty+" - ₹"+cart[item].price*cart[item].qty

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

document.querySelectorAll(".product").forEach(p=>{

let name=p.querySelector("h3").innerText.toLowerCase()

p.style.display=name.includes(filter)?"block":"none"

})

})

function filterCategory(category){

document.querySelectorAll(".product").forEach(p=>{

if(category=="all" || p.classList.contains(category)){
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

return this.value=="low"?pa-pb:pb-pa

})

products.forEach(p=>container.appendChild(p))

})