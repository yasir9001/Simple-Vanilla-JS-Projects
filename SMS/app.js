var config = {
    apiKey: "AIzaSyBgVf_IU7sAPpA6OutO5LJcsxDuUre70A4",
    authDomain: "firefly-34c7a.firebaseapp.com",
    databaseURL: "https://firefly-34c7a.firebaseio.com",
    projectId: "firefly-34c7a",
    storageBucket: "firefly-34c7a.appspot.com",
    messagingSenderId: "949652004647"
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user){
    if(user){
    //         document.getElementById('welcome').innerHTML = `Welcome user<br> <br>you are logged in as ${firebase.auth().currentUser.email} <br> Email verified: ${user.emailVerified}<br> User ID: ${user.uid} <br>`
    //         console.log(firebase.auth().currentUser.email);
    //         var bt = document.createElement('input');
    //         bt.setAttribute('type','button');
    //         bt.setAttribute('value','logout');
    //         bt.setAttribute('onclick','logout()');
    //         document.getElementById('welcome').appendChild(bt);
    //         document.getElementById('welcome').classList.toggle('hidden');
    //         document.getElementById('wraper').classList.toggle('hidden');
    }else{
    
    }
});


const db = firebase.database();

function register(theForm){
    var inputUsername= document.querySelector("#username").value;
    var inputPassword= document.querySelector("#password").value;
    var confirmPassword= document.querySelector("#cnf-password").value;
    // console.log(inputUsername,inputPassword);
    // console.log(inputUsername.value,inputPassword.value)
    if(inputPassword==confirmPassword){
    firebase.auth().createUserWithEmailAndPassword(inputUsername, inputPassword)
    .then(e =>{
        var cube = document.querySelector('.mydiv');
        cube.classList.toggle('styler');

        document.querySelector('.login input[type=email]').value="";
        document.querySelector('.login input[type=password]').value="";
        document.querySelector('#cnf-password').value="";
        
    })
    .catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage,errorCode);
      });
    }else{
        var x = document.querySelector("#cnf-password").value = '';
        x.placeholder = 'Password Mismatched'
        x.style.placeholder.color='red';
        }

}
   


function login(theForm){
    var inputUsername= document.querySelector("#username1").value;
    var inputPassword= document.querySelector("#password1").value;
    // console.log(inputUsername,inputPassword);
    // console.log(inputUsername.value,inputPassword.value)

        firebase.auth().signInWithEmailAndPassword(inputUsername, inputPassword).then(e =>{
            location='home.html';
        }).catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage,errorCode);
          });
    
      
    return false;
    }