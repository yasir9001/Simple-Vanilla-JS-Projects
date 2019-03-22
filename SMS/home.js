var config = {
    apiKey: "AIzaSyBgVf_IU7sAPpA6OutO5LJcsxDuUre70A4",
    authDomain: "firefly-34c7a.firebaseapp.com",
    databaseURL: "https://firefly-34c7a.firebaseio.com",
    projectId: "firefly-34c7a",
    storageBucket: "firefly-34c7a.appspot.com",
    messagingSenderId: "949652004647"
};

firebase.initializeApp(config);

let buttons = document.querySelectorAll('input[value=Buy]');
let cart = [];
buttons.forEach(button => {
    button.addEventListener('click',function(){
        let item = this.parentNode.parentNode;
        
        let name = item.querySelector('.name').childNodes[0].nodeValue;
        let price = item.querySelector('.price').childNodes[0].nodeValue;
        let imgURL = item.querySelector('.image').src;
        // console.log(name, price, imgURL, item);
        cart.push(new Item(name, price, imgURL, item));
        store(cart);
        this.disabled = 'true';
        this.style.opacity = '0.5'
        // console.log((item));
    }
)});

function store(data){
    localStorage.setItem('items',JSON.stringify(data));
}

function Item(name, price, imgURL, item){
    this.name = name;
    this.price = price;
    this.imgURL = imgURL;
    this.item = item;
}
document.getElementById('logout').addEventListener('click',logout)

function logout(){

    firebase.auth().signOut().then(function() {
        location = 'index.html';
      }).catch(function(error){
        alert(error.errorMessage);
})};