let cart = JSON.parse(localStorage.getItem('items'));
// cart = cart;
console.log(cart);
let total=0, subtotal=0, shipping=0;
let credit =document.querySelector('.credit span:last-of-type').innerText;
credit = Number(credit.substring(0,credit.length-1));
console.log(credit)



cart.forEach(e => {
var cart_items = document.querySelector('.cart-items');

var item = document.createElement('div');
item.setAttribute('class', 'item');

cart_items.appendChild(item);

let imgBox = document.createElement('div');
imgBox.setAttribute('class', 'img');

let image = document.createElement('img');
image.setAttribute('src','carousel2.jpg');
imgBox.appendChild(image);
item.appendChild(imgBox);

let des = document.createElement('div');
des.setAttribute('class', 'description');

let p1 = document.createElement('p');
p1.setAttribute('class', 'name');
p1.innerText = e.name;
let p2 = document.createElement('p');
p2.setAttribute('class', 'price');
p2.innerText = e.price;
let btn = document.createElement('input');
btn.setAttribute('type', 'button');
btn.setAttribute('value', 'remove');
let btnBox = document.createElement('div');
btnBox.appendChild(btn);
des.appendChild(p1);
des.appendChild(p2);
des.appendChild(btnBox);
item.appendChild(des);
cart_items.appendChild(item);

let p = Number(e.price.substring(6,e.price.length-1));
subtotal += p;
shipping+=10;
});
updateValues();

// document.querySelector('.subtotal span:last-of-type').innerText = `${subtotal}$`;

// document.querySelector('.shipping span:last-of-type').innerText = `${shipping}$`;

// document.querySelector('.total span:last-of-type').innerText = `${subtotal+shipping}$`;


let buttons = document.querySelectorAll('.item input[type=button]');
console.log(buttons);
buttons.forEach(x => {
    x.addEventListener('click', remove);
});

function remove(){
    let parent = this.parentNode.parentNode.parentNode.parentNode;
    parent.removeChild( this.parentNode.parentNode.parentNode)
}
if((total+subtotal)>1500){
    document.querySelector('.total span:last-of-type').parentNode.style.color='red';

}

function updateValues(){
    document.querySelector('.subtotal span:last-of-type').innerText = `${subtotal}$`;

    document.querySelector('.shipping span:last-of-type').innerText = `${shipping}$`;

    document.querySelector('.total span:last-of-type').innerText = `${subtotal+shipping}$`;
}

document.querySelector('.info input[type=button]').addEventListener('click', function(){
    credit = credit - (subtotal+shipping);
    document.querySelector('.credit span:last-of-type').innerText = `${credit}$`;
    // localStorage.clear();
    subtotal = 0;
    shipping = 0;
    updateValues();
    localStorage.clear();
    let node = document.querySelectorAll('.item');
    // console.log(node)
    node.forEach(x =>{
        x.parentNode.remove(x);
    })
    // document.querySelector('.cart-items').innerText = `No items in cart`;
})

