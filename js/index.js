const init = () => {
    console.log('Window loaded')
    view.setActiveScreen('registerScreen')
}
window.onload = init

// document.addEventListener('click',function goToRegister () {
//     view.setActiveScreen('registerScreen');
// },
//     document.addEventListener('click',function goToLogin() {
//         view.setActiveScreen('loginScreen');
//     })
//)
function goToRegister() {
    document.getElementById('redirect-to-register').style.color = "red";
    view.setActiveScreen('registerScreen')
}
function goToLogin() {
    document.getElementById('redirect-to-login').style.color = "red";
    view.setActiveScreen('loginScreen')
}