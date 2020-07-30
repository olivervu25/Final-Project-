const init = () => {
    console.log('Window loaded')
    view.setActiveScreen('registerScreen')
}
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBLAxZNkk361mYaX4KN3S4-SX3alcSxO9A",
    authDomain: "chat-app-953be.firebaseapp.com",
    databaseURL: "https://chat-app-953be.firebaseio.com",
    projectId: "chat-app-953be",
    storageBucket: "chat-app-953be.appspot.com",
    messagingSenderId: "998116278111",
    appId: "1:998116278111:web:e08dc5710b1f15e48180ea"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

window.onload = init
console.log(firebase.app().name);
// document.addEventListener('click',function goToRegister () {
//     view.setActiveScreen('registerScreen');
// },
//     document.addEventListener('click',function goToLogin() {
//         view.setActiveScreen('loginScreen');
//     })
//)

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    view.setActiveScreen('chatScreen')         
  }
});

function goToRegister() {
    document.getElementById('redirect-to-register').style.color = "red";
    view.setActiveScreen('registerScreen')
}
function goToLogin() {
    document.getElementById('redirect-to-login').style.color = "red";
    view.setActiveScreen('loginScreen')
}